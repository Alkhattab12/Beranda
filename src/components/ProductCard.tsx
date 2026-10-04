import { isReady, type Item } from "@/config/links";

/** Kartu link. URL belum valid → kartu nonaktif (bukan link rusak). */
export default function ProductCard({ p }: { p: Item }) {
  const ok = isReady(p.url);
  const style = { "--c": p.color } as React.CSSProperties;
  const body = (
    <>
      <span className="card-top"><span>{p.cat}</span><span className="ext" aria-hidden="true">↗</span></span>
      <span className="ico" aria-hidden="true">{p.glyph}</span>
      <h3>{p.name}</h3>
      {p.handle && <p className="handle">{p.handle}</p>}
      <p>{p.desc}</p>
      <span className="cta">{ok ? p.cta : "Link belum diatur"} <span className="ar" aria-hidden="true">→</span></span>
    </>
  );
  return ok ? (
    <a className="card" style={style} href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.name}: ${p.cta} (tab baru)`}>{body}</a>
  ) : (
    <div className="card off" style={style} aria-disabled="true">{body}</div>
  );
}
