import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { community, isReady, links } from "@/config/links";

export default function Community() {
  const ok = isReady(links.community.admin);
  return (
    <section id="community" aria-labelledby="com-h">
      <div className="wrap">
        <Reveal>
          <h2 id="com-h">Join The Xean Community</h2>
          <p className="lead">Dapatkan update, ngobrol, dan terhubung dengan pengguna Xean lainnya.</p>
        </Reveal>
        <div className="grid">
          {community.map((p, i) => <Reveal key={p.key} delay={i * 70} className="full"><ProductCard p={p} /></Reveal>)}
        </div>
        <Reveal>
          <div className="help">
            <div>
              <h3>Need Help?</h3>
              <p>Ada pertanyaan, ide kerja sama, atau butuh bantuan? Hubungi admin lewat WhatsApp.</p>
            </div>
            {ok ? (
              <a className="btn go" href={links.community.admin} target="_blank" rel="noopener noreferrer" aria-label="Contact Admin via WhatsApp (tab baru)">Contact Admin <span className="ar" aria-hidden="true">→</span></a>
            ) : (
              <span className="btn go off" aria-disabled="true">Kontak admin belum diatur</span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
