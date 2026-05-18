import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.set('trust proxy', 1);
app.use(express.json({ limit: '32kb' }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(',') || '*',
    methods: ['GET', 'POST'],
  })
);

// Rate limit: 5 contact submissions per IP per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many requests. Please try again later.' },
});

// Send email via Resend HTTP API (avoids blocked SMTP ports)
async function sendEmail({ to, toName, subject, text, html }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || 'Mare Digitale <office@maredigitale.com>',
      to: toName ? [`${toName} <${to}>`] : [to],
      subject,
      text,
      html,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API ${res.status}: ${body}`);
  }
}

// Log on boot whether API key is present
if (process.env.RESEND_API_KEY) {
  console.log('[Resend] API key loaded — ready to send.');
} else {
  console.warn('[Resend] RESEND_API_KEY is not set — /api/contact will return 500.');
}

// Validation helpers
const isEmail = (v) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'mare-digitale-api' });
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const name = clean(req.body?.name, 120);
    const email = clean(req.body?.email, 200);
    const company = clean(req.body?.company, 160);
    const phone = clean(req.body?.phone, 60);
    const message = clean(req.body?.message, 2000);
    const consent = req.body?.consent === true;
    const honeypot = clean(req.body?.website, 200);

    if (honeypot) return res.json({ ok: true });
    if (!name || !isEmail(email) || !message) {
      return res.status(400).json({ ok: false, error: 'Missing or invalid fields.' });
    }
    if (!consent) {
      return res.status(400).json({ ok: false, error: 'Consent is required.' });
    }

    const subject = `New inquiry from ${name}${company ? ` (${company})` : ''}`;
    const text = [
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Company: ${company || '-'}`,
      `Phone:   ${phone || '-'}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0f2c3f;">
        <h2 style="color:#163322;border-bottom:1px solid #d4ead8;padding-bottom:8px;">New inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Company:</strong> ${escapeHtml(company) || '—'}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone) || '—'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;background:#f4faf6;padding:12px;border-left:3px solid #2fb39a;">${escapeHtml(message)}</p>
      </div>
    `;

    // Notification to the team
    await sendEmail({
      to: process.env.MAIL_TO || 'office@maredigitale.com',
      subject,
      text,
      html,
    });

    // Auto-reply to the sender
    const replyText = [
      `Hi ${name},`,
      '',
      'Thank you for reaching out to Mare Digitale.',
      'We have received your message and our team is already looking into it.',
      'We will get back to you within 1 business day.',
      '',
      'Best regards,',
      'Mare Digitale Team',
      'office@maredigitale.com',
      '+48 792 487 265',
    ].join('\n');

    const replyHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0d2018;max-width:560px;">
        <div style="background:#163322;padding:28px 32px;border-radius:12px 12px 0 0;">
          <span style="color:#ffffff;font-size:1.15rem;font-weight:600;letter-spacing:-0.01em;">Mare Digitale</span>
        </div>
        <div style="padding:32px;border:1px solid #d4ead8;border-top:none;border-radius:0 0 12px 12px;">
          <p style="margin:0 0 16px;">Hi <strong>${escapeHtml(name)}</strong>,</p>
          <p style="margin:0 0 16px;">Thank you for reaching out to Mare Digitale.</p>
          <p style="margin:0 0 16px;">We have received your message and our team is already looking into it. We will get back to you within <strong>1 business day</strong>.</p>
          <p style="margin:0 0 32px;">In the meantime, feel free to reply to this email if you have any additional details to share.</p>
          <p style="margin:0;color:#3a5a48;font-size:0.9rem;">
            Best regards,<br/>
            <strong style="color:#0d2018;">Mare Digitale Team</strong><br/>
            <a href="mailto:office@maredigitale.com" style="color:#1e5438;">office@maredigitale.com</a> · +48 792 487 265
          </p>
        </div>
      </div>
    `;

    await sendEmail({
      to: email,
      toName: name,
      subject: 'We received your message — Mare Digitale',
      text: replyText,
      html: replyHtml,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('[contact] error:', err);
    res.status(500).json({ ok: false, error: 'Failed to send. Please try again later.' });
  }
});

function escapeHtml(s = '') {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Serve the built React frontend in production
const distPath = join(__dirname, '../client/dist');
if (existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (_req, res) => res.sendFile(join(distPath, 'index.html')));
}

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
});
