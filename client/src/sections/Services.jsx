import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const SLUGS = ['analytics-strategy', 'social-media-ads', 'seo-content'];

const ICONS = [
  (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-7" /><path d="M22 20H2" />
    </svg>
  ),
  (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1Z" />
      <path d="M17 8a4 4 0 0 1 0 8" /><path d="M20 5a8 8 0 0 1 0 14" />
    </svg>
  ),
  (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" />
      <path d="M9 11h4" /><path d="M11 9v4" />
    </svg>
  ),
];

export default function Services({ t }) {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <div>
              <span className="kicker">{t.services.kicker}</span>
              <h2>{t.services.title}</h2>
            </div>
          </Reveal>
        </div>

        <div className="service-grid">
          {t.services.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="service-card">
              <div className="service-icon">{ICONS[i]}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to={`/services/${SLUGS[i]}`} className="service-link">{s.link}</Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
