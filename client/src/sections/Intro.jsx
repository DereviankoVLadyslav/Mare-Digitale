import Reveal from '../components/Reveal.jsx';

export default function Intro({ t }) {
  return (
    <section className="intro">
      <div className="container intro-grid">
        <Reveal>
          <h2>{t.intro.title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p>{t.intro.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
