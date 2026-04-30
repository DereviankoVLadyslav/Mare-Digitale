import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';

const initial = { name: '', email: '', company: '', phone: '', message: '', consent: false, website: '' };

export default function Contact({ t }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ kind: 'idle', text: '' });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    if (!form.name.trim()) return false;
    if (!form.message.trim()) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return false;
    if (!form.consent) return false;
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({ kind: 'err', text: t.contact.form.errorValidation });
      return;
    }
    setStatus({ kind: 'loading', text: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Request failed');
      setStatus({ kind: 'ok', text: t.contact.form.success });
      setForm(initial);
    } catch {
      setStatus({ kind: 'err', text: t.contact.form.errorGeneric });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <Reveal className="contact-info">
          <span className="kicker">{t.contact.kicker}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.body}</p>

          <div className="info-list">
            <div className="info-item">
              <h4>{t.contact.addressLabel}</h4>
              <p>{t.contact.address}</p>
            </div>
            <div className="info-item">
              <h4>{t.contact.phoneLabel}</h4>
              <p><a href="tel:+48000000000">+48 000 000 000</a></p>
            </div>
            <div className="info-item">
              <h4>{t.contact.emailLabel}</h4>
              <p><a href="mailto:office@maredigitale.com">office@maredigitale.com</a></p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">{t.contact.form.name} *</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={onChange} />
              </div>
              <div className="field">
                <label htmlFor="email">{t.contact.form.email} *</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={onChange} />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="company">{t.contact.form.company}</label>
                <input id="company" name="company" type="text" value={form.company} onChange={onChange} />
              </div>
              <div className="field">
                <label htmlFor="phone">{t.contact.form.phone}</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">{t.contact.form.message} *</label>
              <textarea id="message" name="message" required value={form.message} onChange={onChange} maxLength={2000} />
            </div>

            {/* Honeypot — hidden from users */}
            <div className="hp" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off"
                value={form.website} onChange={onChange} />
            </div>

            <label className="consent">
              <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} required />
              <span>{t.contact.form.consent}</span>
            </label>

            {status.kind === 'ok' && <div className="form-status ok">{status.text}</div>}
            {status.kind === 'err' && <div className="form-status err">{status.text}</div>}

            <button
              type="submit"
              className="btn btn-primary btn-arrow"
              disabled={status.kind === 'loading'}
            >
              {status.kind === 'loading' ? t.contact.form.sending : t.contact.form.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
