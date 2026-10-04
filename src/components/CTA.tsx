import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="cta-s" aria-labelledby="cta-h">
      <div className="wrap">
        <Reveal>
          <h2 id="cta-h">Everything Starts Here.</h2>
          <p>Jelajahi ekosistem Xean Digital dan temukan platform yang cocok dengan kebutuhanmu.</p>
          <a className="btn" href="#ecosystem">Explore Ecosystem <span className="ar" aria-hidden="true">→</span></a>
        </Reveal>
      </div>
    </section>
  );
}
