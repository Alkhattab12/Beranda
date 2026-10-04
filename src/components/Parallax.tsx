"use client";
import { useEffect, useRef } from "react";

/** Mengisi CSS var --mx/--my (-1..1) dari posisi pointer. Nonaktif untuk reduced-motion dan layar sentuh. */
export default function Parallax({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", String((e.clientX / innerWidth - 0.5) * 2));
        el.style.setProperty("--my", String((e.clientY / innerHeight - 0.5) * 2));
      });
    };
    addEventListener("pointermove", move, { passive: true });
    return () => { removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return <section ref={ref} id={id} className={className}>{children}</section>;
}
