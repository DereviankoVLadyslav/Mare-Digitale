import Reveal from '../components/Reveal.jsx';

export default function Process({ t }) {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="kicker">{t.process.kicker}</span>
            <h2>{t.process.title}</h2>
          </Reveal>
        </div>

        <div className="steps">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="step">
              <span className="num">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
