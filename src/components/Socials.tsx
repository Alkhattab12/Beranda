import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { socials } from "@/config/links";

export default function Socials() {
  return (
    <section id="socials" aria-labelledby="soc-h">
      <div className="wrap">
        <Reveal><h2 id="soc-h">Follow Xean Digital</h2></Reveal>
        <div className="grid">
          {socials.map((p, i) => <Reveal key={p.key} delay={i * 70} className="full"><ProductCard p={p} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
