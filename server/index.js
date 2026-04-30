import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

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

// Build the transporter once at startup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP on boot — log a warning if it fails but don't crash
transporter.verify((err) => {
  if (err) {
    console.warn('[SMTP] Verification failed:', err.message);
    console.warn('[SMTP] The /api/contact endpoint will return 500 until SMTP is configured.');
  } else {
    console.log('[SMTP] Ready to send messages.');
  }
});

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
    // Honeypot — bots fill this; humans don't see it
    const honeypot = clean(req.body?.website, 200);

    if (honeypot) {
      // Pretend success so bots don't retry
      return res.json({ ok: true });
    }
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
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color:#0f2c3f;">
        <h2 style="color:#0a7a8a; border-bottom:1px solid #d8eef0; padding-bottom:8px;">New inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Company:</strong> ${escapeHtml(company) || '—'}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone) || '—'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap; background:#f3fbfb; padding:12px; border-left:3px solid #2fb39a;">${escapeHtml(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject,
      text,
      html,
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
