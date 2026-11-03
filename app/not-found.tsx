import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" aria-labelledby="nf-h1">
      <div className="wrap wrap-narrow">
        <p className="eyebrow">404 — Page not found — Planned site</p>
        <h1 id="nf-h1">That page does not exist on this preview site.</h1>
        <p>
          This preview site contains only Home, For Manufacturers, For Buyers, Trust &amp; Evidence,
          About, Contact / Join, Privacy (draft), and Terms (draft).
        </p>
        <p><Link className="btn" href="/">Return home</Link></p>
      </div>
    </section>
  );
}
