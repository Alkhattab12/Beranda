import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { ecosystem } from "@/config/links";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="dark-grid" aria-labelledby="eco-h">
      <div className="wrap">
        <Reveal>
          <h2 id="eco-h">Explore The <mark>Xean</mark> Ecosystem</h2>
          <p className="lead">Pilih platform yang kamu butuhkan. Masing-masing berjalan mandiri, semuanya tetap satu ekosistem.</p>
        </Reveal>
        <div className="grid">
          {ecosystem.map((p, i) => <Reveal key={p.key} delay={i * 70} className="full"><ProductCard p={p} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
