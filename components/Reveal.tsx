"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Scroll reveal, no delays: adds .reveal-in when the element enters view.
 *  Content is fully visible without JS (server render carries no hiding
 *  class — it is only added client-side). If IntersectionObserver is
 *  unavailable, content stays visible. prefers-reduced-motion forces
 *  visible + no motion via CSS. */
export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } });
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${mounted ? `reveal ${inView ? "reveal-in" : ""}` : ""} ${className}`}>
      {children}
    </div>
  );
}
