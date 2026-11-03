"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Scroll reveal: adds .reveal-in when the element enters view.
 *  Content is fully visible without JS (server render has no .reveal class
 *  hiding it permanently — the class is only added client-side). If
 *  IntersectionObserver is unavailable, content stays visible. */
export default function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
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
  // No hiding class in server HTML: without JS, content stays fully visible.
  return (
    <div ref={ref} className={`${mounted ? `reveal ${inView ? "reveal-in" : ""}` : ""} ${className}`} style={{ ["--reveal-delay" as string]: `${delay}ms` }}>
      {children}
    </div>
  );
}
