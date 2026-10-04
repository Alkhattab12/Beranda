import Parallax from "./Parallax";
import { ecosystem } from "@/config/links";

const words = "AI ✦ DOWNLOADER ✦ CHAT ✦ GAMING ✦ EDUCATION ✦ TOOLS ✦ ";

export default function Hero() {
  return (
    <>
      <Parallax id="home" className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow"><span className="dot" aria-hidden="true" />Digital Ecosystem</span>
            <h1>Satu <mark>Ekosistem</mark> Digital. Banyak Kemungkinan.</h1>
            <p className="lead">Xean Digital adalah ekosistem digital yang menghubungkan berbagai tools, layanan, komunitas, dan platform dalam satu tempat.</p>
            <div className="row">
              <a className="btn" href="#ecosystem">Explore Ecosystem <span className="ar" aria-hidden="true">→</span></a>
              <a className="btn alt" href="#community">Join Community</a>
            </div>
          </div>
          <div className="art" aria-hidden="true">
            <div className="s1" style={{ "--k": 14 } as React.CSSProperties} />
            <div className="s2" style={{ "--k": -10 } as React.CSSProperties} />
            <div className="s3" style={{ "--k": 8 } as React.CSSProperties} />
            <div className="win" style={{ "--k": 6 } as React.CSSProperties}>
              <div className="win-bar"><i /><i /><i /><span>xean.sys</span></div>
              <pre>{`> status\n● ONLINE • 24/7\n> platforms: ${ecosystem.length}\n> explore_`}</pre>
            </div>
            <span className="tag t1" style={{ "--k": 12 } as React.CSSProperties}>Xean System</span>
            <span className="tag t2" style={{ "--k": 5 } as React.CSSProperties}>Explore</span>
            <span className="cross" style={{ "--k": 18 } as React.CSSProperties}>+</span>
          </div>
        </div>
      </Parallax>
      <div className="marquee" aria-hidden="true">
        <div className="track"><span>{words.repeat(3)}</span><span>{words.repeat(3)}</span></div>
      </div>
    </>
  );
}
