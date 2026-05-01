import { useParams, Link, Navigate } from 'react-router-dom';
import { servicePages, serviceMeta } from '../data/services.js';

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
  </svg>
);

export default function ServicePage({ lang, t }) {
  const { slug } = useParams();
  const page = servicePages[lang]?.[slug];
  const meta = serviceMeta[lang] ?? serviceMeta.en;

  if (!page) return <Navigate to="/" replace />;

  const others = meta.filter(m => m.slug !== slug);
  const ctaHref = lang === 'pl' ? '/#kontakt' : '/#contact';

  return (
    <div className="sp-wrap">

      {/* ── Hero ── */}
      <section className="sp-hero" style={{ '--sp-color': page.color }}>
        <div className="container">
          <Link to="/" className="sp-back">
            <ArrowLeft />
            {lang === 'pl' ? 'Usługi' : 'Services'}
          </Link>
          <h1 className="sp-hero-title">{page.hero.title}</h1>
          <p className="sp-hero-sub">{page.hero.subtitle}</p>
          <a href={ctaHref} className="btn sp-hero-btn">
            {t.nav.cta} →
          </a>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="sp-overview">
        <div className="container sp-overview-grid">
          <div className="sp-overview-body">
            {page.overview.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="sp-stats">
            {page.overview.stats.map((s, i) => (
              <div key={i} className="sp-stat">
                <span className="sp-stat-num">{s.num}</span>
                <span className="sp-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="sp-features">
        <div className="container">
          <h2 className="sp-section-title">{page.features.title}</h2>
          <div className="sp-features-grid">
            {page.features.items.map((f, i) => (
              <div key={i} className="sp-feature">
                <span className="sp-feature-icon"><CheckIcon /></span>
                <div>
                  <h4 className="sp-feature-title">{f.title}</h4>
                  <p className="sp-feature-body">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="sp-approach">
        <div className="container">
          <h2 className="sp-section-title">{page.approach.title}</h2>
          <div className="sp-steps">
            {page.approach.steps.map((s, i) => (
              <div key={i} className="sp-step">
                <span className="sp-step-num">{s.num}</span>
                <h3 className="sp-step-title">{s.title}</h3>
                <p className="sp-step-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other services ── */}
      <section className="sp-others">
        <div className="container">
          <h2 className="sp-section-title">
            {lang === 'pl' ? 'Inne usługi' : 'Other services'}
          </h2>
          <div className="sp-others-grid">
            {others.map(o => (
              <Link key={o.slug} to={`/services/${o.slug}`} className="sp-other-card">
                <span className="sp-other-title">{o.title}</span>
                <span className="sp-other-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta-section">
        <div className="container">
          <div className="about-cta">
            <h3>{t.about.ctaTitle}</h3>
            <a href={ctaHref} className="btn btn-accent btn-arrow">{t.about.ctaButton}</a>
          </div>
        </div>
      </section>

    </div>
  );
}
