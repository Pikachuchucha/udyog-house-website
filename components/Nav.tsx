"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/manufacturers", label: "For Manufacturers" },
  { href: "/buyers", label: "For Buyers" },
  { href: "/trust-evidence", label: "Trust & Evidence" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  /* Normalise: on the Pages build the pathname may carry the basePath
     prefix, which must be stripped before comparing against basePath-free
     link hrefs, or aria-current never matches. */
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const path =
    pathname && base && pathname.startsWith(base) ? pathname.slice(base.length) || "/" : pathname;
  const current = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`);
  return (
    <nav className="main-nav" aria-label="Main navigation">
      {LINKS.map((l) => (
        <Link key={l.href} href={l.href} aria-current={current(l.href) ? "page" : undefined}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
