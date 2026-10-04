import Reveal from "./Reveal";
import { ecosystem } from "@/config/links";

const areas = ["AI", "Downloader", "Communication", "Gaming", "Education", "Digital tools"];

export default function About() {
  const stats = [
    { n: String(ecosystem.length).padStart(2, "0"), l: "Platform digital" },
    { n: "24/7", l: "Akses online" },
    { n: "∞", l: "Kemungkinan" },
  ];
  return (
    <section id="about" aria-labelledby="about-h">
      <div className="wrap">
        <div className="about-g">
          <Reveal><h2 id="about-h">Apa itu Xean Digital?</h2></Reveal>
          <Reveal delay={100}>
            <p className="lead">Xean Digital adalah ekosistem digital yang dibangun untuk menghubungkan berbagai kebutuhan digital dalam satu lingkungan yang sederhana, cepat, dan mudah diakses.</p>
            <ul className="chips" aria-label="Bidang layanan">{areas.map((a) => <li key={a}>{a}</li>)}</ul>
          </Reveal>
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 80}><div className="stat"><b>{s.n}</b>{s.l}</div></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
