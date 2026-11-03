import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <p className="mono">404 — PAGE NOT FOUND — PLANNED SITE</p>
      <h1>That page does not exist on this staging site.</h1>
      <p>
        This staging site contains only Home, For Manufacturers, For Buyers, Trust &amp; Evidence,
        About, Contact / Join, Privacy (draft), and Terms (draft).
      </p>
      <p><Link className="btn" href="/">Return home</Link></p>
    </>
  );
}
