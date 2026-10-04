"use client";
import { useEffect, useState } from "react";

const nav = [["Home", "#home"], ["About", "#about"], ["Ecosystem", "#ecosystem"], ["Community", "#community"], ["Socials", "#socials"]] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="wrap bar">
        <a className="logo" href="#home" onClick={close}><b aria-hidden="true">X</b>Xean Digital</a>
        <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? "Tutup menu" : "Buka menu"} onClick={() => setOpen((o) => !o)}>
          <i /><i /><i />
        </button>
        <nav id="menu" className={`menu${open ? " open" : ""}`} aria-label="Navigasi utama">
          <div>
            <ul>{nav.map(([l, h]) => <li key={h}><a className="l" href={h} onClick={close}>{l}</a></li>)}</ul>
            <a className="btn" href="#ecosystem" onClick={close}>Explore Ecosystem <span className="ar" aria-hidden="true">→</span></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
