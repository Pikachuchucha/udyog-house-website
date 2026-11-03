import type { Metadata } from "next";
import Link from "next/link";
import { PREVIEW } from "../lib/site";

export const metadata: Metadata = {
  title: "Page not found — Udyog House",
  description: "That page does not exist on this preview site. Try Home, For Manufacturers, For Buyers, or Contact.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/` },
};

export default function NotFound() {
  return (
    <section className="section" aria-labelledby="nf-h1">
      <div className="wrap wrap-narrow">
        <p><span className="pill-opaque">404 — Page not found</span></p>
        <h1 id="nf-h1">That page does not exist on this preview site.</h1>
        <p>
          This preview site contains only Home, For Manufacturers, For Buyers, Trust &amp; Evidence,
          About, Contact / Join, Privacy (draft), and Terms (draft).
        </p>
        <p className="btn-row">
          <Link className="btn btn-copper" href="/">Return home</Link>
          <Link className="btn btn-outline" href="/manufacturers">For Manufacturers</Link>
          <Link className="btn btn-outline" href="/buyers">For Buyers</Link>
          <Link className="btn btn-outline" href="/contact">Contact / Join</Link>
        </p>
      </div>
    </section>
  );
}
