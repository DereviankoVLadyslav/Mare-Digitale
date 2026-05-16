import Reveal from '../components/Reveal.jsx';

export default function Faq({ t }) {
  return (
    <section className="faq">
      <div className="container">
        <Reveal>
          <div className="faq-head">
            <span className="kicker">{t.faq.kicker}</span>
            <h2>{t.faq.title}</h2>
          </div>
        </Reveal>

        <div className="faq-grid">
          {t.faq.items.map((item, i) => (
            <Reveal key={i} delay={i * 80} className="faq-item">
              <h4 className="faq-q">{item.q}</h4>
              <p className="faq-a">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
