import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = Archivo({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Udyog House — Discover. Trust. Source. | Capability, on record.",
  description:
    "Udyog House is building India's industrial discovery and sourcing network, beginning in Maharashtra. Discover manufacturers by what they can make — starting with structured, owner-approved capability records in Vasai East. Staging preview: all services PLANNED, none live.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Udyog House — Discover. Trust. Source.",
    description: "Capability, on record. Building India's industrial discovery and sourcing network, beginning in Maharashtra.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <header className="site-header">
          <div className="header-inner">
            <Link className="logo-link" href="/">
              <span className="logo-panel">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo/uh-monogram-160.png" alt="Udyog House monogram" width="48" height="48" />
              </span>
              <span className="wordmark">
                Udyog House
                <small>Capability, on record.</small>
              </span>
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/manufacturers">For Manufacturers</Link>
              <Link href="/buyers">For Buyers</Link>
              <Link href="/trust-evidence">Trust &amp; Evidence</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
          <div className="status-strip">
            <div className="wrap">
              <strong>Preview — Planned, not live.</strong> No directory, search, match, or order system is live here.
            </div>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="wrap footer-grid">
            <div>
              <h2>Udyog House</h2>
              <p>Discover. Trust. Source.</p>
              <p>Capability, on record.</p>
              <p>Building India&apos;s industrial discovery and sourcing network, beginning in Maharashtra — starting in Vasai East.</p>
            </div>
            <div>
              <h2>Pages</h2>
              <p>
                <Link href="/manufacturers">For Manufacturers</Link><br />
                <Link href="/buyers">For Buyers</Link><br />
                <Link href="/trust-evidence">Trust &amp; Evidence</Link><br />
                <Link href="/about">About</Link><br />
                <Link href="/contact">Contact</Link>
              </p>
            </div>
            <div>
              <h2>Drafts — legal review required</h2>
              <p>
                <Link href="/privacy">Privacy (draft)</Link><br />
                <Link href="/terms">Terms (draft)</Link>
              </p>
              <p>Privacy and Terms here are drafts only. They require qualified legal review and make no compliance claim.</p>
            </div>
          </div>
          <div className="wrap">
            <p>Preview only. No manufacturer profile, directory, search, RFQ, dashboard, or order system is live on this site. Forms on this site send no data.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
