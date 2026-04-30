import { useEffect, useState } from 'react';

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={close}>
          <span className="logo-mark" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M2 16 Q 7 10, 12 16 T 22 16" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M2 11 Q 7 5, 12 11 T 22 11" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity=".55" />
            </svg>
          </span>
          Mare Digitale
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#top" onClick={close}>{t.nav.home}</a></li>
            <li><a href="#services" onClick={close}>{t.nav.services}</a></li>
            <li><a href="#process" onClick={close}>{t.nav.process}</a></li>
            <li><a href="#about" onClick={close}>{t.nav.about}</a></li>
            <li><a href="#contact" onClick={close}>{t.nav.contact}</a></li>
          </ul>
        </nav>

        <div className="nav-right">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >EN</button>
            <button
              className={lang === 'pl' ? 'active' : ''}
              onClick={() => setLang('pl')}
              aria-pressed={lang === 'pl'}
            >PL</button>
          </div>
          <a href="#contact" className="btn btn-primary btn-arrow" onClick={close}>
            {t.nav.cta}
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M5 5l14 14" />
                  <path d="M19 5L5 19" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
