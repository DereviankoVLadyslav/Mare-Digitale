import Reveal from '../components/Reveal.jsx';

export default function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <Reveal>
            <div className="hero-eyebrow">
              <span className="dot" /> {t.hero.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1>
              {t.hero.title.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="accent">{t.hero.title.split(' ').slice(-2).join(' ')}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-sub">{t.hero.subtitle}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary btn-arrow">{t.hero.ctaPrimary}</a>
              <a href="#about" className="btn btn-ghost">{t.hero.ctaSecondary}</a>
            </div>
          </Reveal>
        </div>

        <div className="hero-right">
          <Reveal delay={120} className="hero-art">
            <HeroArt />
          </Reveal>
          <Reveal delay={220} className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">+148%</span>
              <span className="hero-stat-label">avg. ROAS lift</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">3.4×</span>
              <span className="hero-stat-label">organic traffic</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">28</span>
              <span className="hero-stat-label">active retainers</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroArt() {
  return (
    <svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mare Digitale">
      <defs>
        <linearGradient id="seaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3fb6c9" />
          <stop offset="100%" stopColor="#2fb39a" />
        </linearGradient>
        <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d6f0f4" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* main disc */}
      <circle cx="260" cy="260" r="220" fill="url(#seaGrad)" />
      <circle cx="260" cy="260" r="220" fill="url(#glow)" />

      {/* concentric rings */}
      <circle cx="260" cy="260" r="180" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="2 6" />
      <circle cx="260" cy="260" r="140" fill="none" stroke="white" strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="2 6" />

      {/* sun / moon */}
      <circle cx="260" cy="195" r="58" fill="url(#sunGrad)" />

      {/* waves */}
      <g stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.95">
        <path d="M70 320 Q 130 290, 195 320 T 320 320 T 450 320">
          <animate attributeName="d"
            dur="6s" repeatCount="indefinite"
            values="
              M70 320 Q 130 290, 195 320 T 320 320 T 450 320;
              M70 320 Q 130 350, 195 320 T 320 320 T 450 320;
              M70 320 Q 130 290, 195 320 T 320 320 T 450 320" />
        </path>
        <path d="M70 360 Q 140 335, 210 360 T 350 360 T 470 360" opacity="0.65">
          <animate attributeName="d"
            dur="7s" repeatCount="indefinite"
            values="
              M70 360 Q 140 335, 210 360 T 350 360 T 470 360;
              M70 360 Q 140 385, 210 360 T 350 360 T 470 360;
              M70 360 Q 140 335, 210 360 T 350 360 T 470 360" />
        </path>
        <path d="M60 400 Q 140 380, 220 400 T 360 400 T 480 400" opacity="0.4">
          <animate attributeName="d"
            dur="8s" repeatCount="indefinite"
            values="
              M60 400 Q 140 380, 220 400 T 360 400 T 480 400;
              M60 400 Q 140 420, 220 400 T 360 400 T 480 400;
              M60 400 Q 140 380, 220 400 T 360 400 T 480 400" />
        </path>
      </g>

      {/* upward trend line — the marketing nod */}
      <g>
        <polyline
          points="120,440 180,400 230,415 280,365 340,380 400,310"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
        {[ [120,440],[180,400],[230,415],[280,365],[340,380],[400,310] ].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="white" />
        ))}
      </g>
    </svg>
  );
}
