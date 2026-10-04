import { ecosystem, isReady, socials } from "@/config/links";

const pages = [["Home", "#home"], ["About", "#about"], ["Ecosystem", "#ecosystem"], ["Community", "#community"], ["Socials", "#socials"]];

export default function Footer() {
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="big" aria-label="Xean Digital">XEAN<br />DIGITAL</div>
        <p className="tagline">One Digital Ecosystem. Infinite Possibilities.</p>
        <div className="foot-g">
          <nav aria-label="Halaman"><h4>Links</h4><ul>{pages.map(([l, h]) => <li key={h}><a href={h}>{l}</a></li>)}</ul></nav>
          <nav aria-label="Platform"><h4>Platforms</h4><ul>{ecosystem.map((p) => <li key={p.key}><a href={p.url} {...ext}>{p.name} ↗</a></li>)}</ul></nav>
          <nav aria-label="Sosial media"><h4>Social</h4><ul>{socials.map((p) => <li key={p.key}>{isReady(p.url) ? <a href={p.url} {...ext}>{p.name} ↗</a> : <span className="muted">{p.name}</span>}</li>)}</ul></nav>
        </div>
        <div className="foot-b"><span>© 2026 Xean Digital. All rights reserved.</span><span>Made with ♥ by Xean Digital</span></div>
      </div>
    </footer>
  );
}
