import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = Archivo({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Udyog House — Capability, on record. (Staging, PLANNED)",
  description:
    "Udyog House is building India's industrial discovery and sourcing network, beginning in Maharashtra. This staging site is PLANNED, not live, and is not a directory yet.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <header className="site-header">
          <div className="header-inner wrap">
            <Link className="logo-link" href="/">
              <span className="logo-panel">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo/uh-monogram-160.png" alt="Udyog House monogram (staging)" width="48" height="48" />
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
          <div className="status-banner">
            <div className="wrap">
              <strong>Status: Planned</strong> — This staging site is not live, not in pilot, and is not a directory yet.
            </div>
          </div>
        </header>
        <main id="main">
          <div className="wrap">{children}</div>
        </main>
        <footer className="site-footer">
          <div className="wrap footer-grid">
            <div>
              <h2>Udyog House</h2>
              <p>Building India&apos;s industrial discovery and sourcing network, beginning in Maharashtra.</p>
              <p className="dark-accent">Vision only: Discover. Trust. Source.</p>
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
              <h2>Drafts</h2>
              <p>
                <Link href="/privacy">Privacy (draft)</Link><br />
                <Link href="/terms">Terms (draft)</Link>
              </p>
              <p>Privacy and Terms on this staging site are drafts only. They require qualified legal review and make no compliance claim.</p>
            </div>
          </div>
          <div className="wrap">
            <p>Staging build only. No manufacturer profile, directory, search, RFQ, dashboard, or order system is live on this site.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
