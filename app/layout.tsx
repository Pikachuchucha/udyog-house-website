import type { Metadata } from "next";
import SiteImage from "../components/SiteImage";
import Nav from "../components/Nav";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import { FOOTER_LINE, IMAGERY_NOTE, PREVIEW } from "../lib/site";
import { LinkedInIcon } from "../components/Chrome";
import "./globals.css";

const display = Archivo({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(`${PREVIEW}/`),
  title: "Udyog House - Discover. Trust. Source. | Capability, on record.",
  description:
    "Discover manufacturers by what they can make. A capability record for tool rooms and mould makers in Vasai East. Preview: planned, not live.",
  robots: { index: false, follow: false },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.png` },
  openGraph: {
    title: "Udyog House - Discover. Trust. Source.",
    description: "Discover manufacturers by what they can make. A capability record for tool rooms and mould makers in Vasai East. Preview: planned, not live.",
    url: `${PREVIEW}/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Udyog House - Discover. Trust. Source.",
    description: "Discover manufacturers by what they can make. A capability record for tool rooms and mould makers in Vasai East. Preview: planned, not live.",
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
                {/* Original logo on a white panel. One asset only (160px) at all sizes. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SiteImage src="/logo/uh-monogram-160.png" alt="" width="48" height="48" fetchPriority="low" />
              </span>
              <span className="wordmark">
                Udyog House
                <small>Capability, on record.</small>
              </span>
            </Link>
            <Nav />
          </div>
          <div className="status-strip">
            <strong>Preview: Planned, not live.</strong> No directory, search, match, or order system is live here.
          </div>
        </header>
        <main id="main" tabIndex={-1}>{children}</main>
        <footer className="site-footer">
          <div className="wrap footer-grid">
            <div>
              <span className="logo-panel" style={{ display: "inline-flex", marginBottom: "1rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SiteImage src="/logo/uh-monogram-160.png" alt="" width="48" height="48" loading="lazy" />
              </span>
              <p className="foot-head">Udyog House</p>
              <p>Discover. Trust. Source.</p>
              <p>Capability, on record.</p>
              <p>{FOOTER_LINE}</p>
            </div>
            <div>
              <p className="foot-head">Pages</p>
              <p>
                <Link href="/">Home</Link><br />
                <Link href="/manufacturers">For Manufacturers</Link><br />
                <Link href="/buyers">For Buyers</Link><br />
                <Link href="/trust-evidence">Trust &amp; Evidence</Link><br />
                <Link href="/about">About</Link><br />
                <Link href="/contact">Contact</Link>
              </p>
            </div>
            <div>
              <p className="foot-head">Drafts: legal review required</p>
              <p>
                <Link href="/privacy">Privacy (draft)</Link><br />
                <Link href="/terms">Terms (draft)</Link>
              </p>
              <p>Privacy and Terms here are drafts only. They require qualified legal review and make no compliance claim.</p>
            </div>
            <div>
              <p className="foot-head">Contact</p>
              <p>
                General enquiries: <a href="mailto:info@udyoghouse.com">info@udyoghouse.com</a><br />
                Contact: <a href="mailto:contact@udyoghouse.com">contact@udyoghouse.com</a><br />
                Team feedback: <a href="mailto:team@udyoghouse.com">team@udyoghouse.com</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/udyog-house" target="_blank" rel="noopener noreferrer" aria-label="Udyog House on LinkedIn">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                    <LinkedInIcon /> Udyog House on LinkedIn
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className="wrap">
            <p>Preview only. No manufacturer profile, directory, search, RFQ, dashboard, or order system is live on this site. Tools on this site run in your browser only and send no data. Email links open your own mail client.</p>
            <p>{IMAGERY_NOTE}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
