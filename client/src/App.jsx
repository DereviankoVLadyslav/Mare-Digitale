import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import StatsTicker from './components/StatsTicker.jsx';
import Intro from './sections/Intro.jsx';
import Services from './sections/Services.jsx';
import Process from './sections/Process.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { translations } from './i18n/translations.js';

const ServicePage = lazy(() => import('./pages/ServicePage.jsx'));

const STORAGE_KEY = 'md-lang';

function AppShell() {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'pl') return stored;
    const browser = (navigator.language || '').toLowerCase();
    return browser.startsWith('pl') ? 'pl' : 'en';
  });
  const [fading, setFading] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const switchLang = useCallback((next) => {
    if (next === lang) return;
    setFading(true);
    setTimeout(() => {
      setLang(next);
      setFading(false);
    }, 180);
  }, [lang]);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <>
      <Navbar t={t} lang={lang} setLang={switchLang} />
      <main className={fading ? 'lang-fading' : ''}>
        <Routes>
          <Route path="/" element={
            <>
              <SEO
                description="Mare Digitale — marketing agency specialising in analytics & strategy, social media & ads, and SEO & content. Based in Kraków, serving EU clients."
              />
              <Hero t={t} />
              <StatsTicker />
              <Intro t={t} />
              <Services t={t} />
              <Process t={t} />
              <About t={t} />
              <Contact t={t} />
            </>
          } />
          <Route path="/services/:slug" element={
            <ErrorBoundary>
              <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
                <ServicePage lang={lang} t={t} />
              </Suspense>
            </ErrorBoundary>
          } />
        </Routes>
      </main>
      <Footer t={t} />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </HelmetProvider>
  );
}
