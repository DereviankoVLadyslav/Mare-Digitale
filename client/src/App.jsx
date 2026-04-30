import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Intro from './sections/Intro.jsx';
import Services from './sections/Services.jsx';
import Process from './sections/Process.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import { translations } from './i18n/translations.js';

const STORAGE_KEY = 'md-lang';

export default function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'pl') return stored;
    const browser = (navigator.language || '').toLowerCase();
    return browser.startsWith('pl') ? 'pl' : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Intro t={t} />
        <Services t={t} />
        <Process t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
