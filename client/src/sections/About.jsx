import Reveal from '../components/Reveal.jsx';

export default function About({ t }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-head">
          <Reveal>
            <div>
              <span className="kicker">{t.about.kicker}</span>
              <h2>{t.about.title}</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p>{t.about.body}</p>
          </Reveal>
        </div>

        <div className="about-blocks">
          {t.about.blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="about-block">
              <h4>{b.title}</h4>
              <p>{b.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="about-cta">
          <h3>{t.about.ctaTitle}</h3>
          <a href="#contact" className="btn btn-accent btn-arrow">{t.about.ctaButton}</a>
        </Reveal>
      </div>
    </section>
  );
}
