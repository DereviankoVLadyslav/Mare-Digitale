import { Link } from 'react-router-dom';

export default function Footer({ t }) {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Link to="/" className="logo">
            <span className="logo-mark" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M2 16 Q 7 10, 12 16 T 22 16" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M2 11 Q 7 5, 12 11 T 22 11" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity=".55" />
              </svg>
            </span>
            Mare Digitale
          </Link>
          <p style={{ marginTop: 18 }}>{t.footer.tagline}</p>
        </div>

        <div>
          <h4>{t.footer.navTitle}</h4>
          <ul>
            <li><Link to="/#about">{t.nav.about}</Link></li>
            <li><Link to="/#services">{t.nav.services}</Link></li>
            <li><Link to="/#process">{t.nav.process}</Link></li>
            <li><Link to="/#contact">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4>{t.footer.contactTitle}</h4>
          <ul>
            <li><a href="mailto:office@maredigitale.com">office@maredigitale.com</a></li>
            <li><a href="tel:+48792487265">+48 792 487 265</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Mare Digitale sp. z o. o. — {t.footer.rights}</span>
        <a href="#top" className="back-top" aria-label={t.footer.backToTop}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
