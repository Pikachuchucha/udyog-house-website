import type { Metadata } from "next";
import SiteImage from "../../components/SiteImage";
import Link from "next/link";
import PlaceholderForm from "../../components/PlaceholderForm";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Contact / Join — Udyog House (Preview, PLANNED)",
  description:
    "Contact and join forms on this preview site are placeholders and send no data. No public email or phone is published here yet.",
  robots: { index: false, follow: false },
};

const CAPTION = "AI-generated editorial illustration — not a Udyog House facility or member.";

export default function Contact() {
  return (
    <>
      <section className="hero hero-anim" aria-labelledby="c-h1">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <SiteImage src="/img/workbench-hands-1600.webp" srcSet="/img/workbench-hands-800.webp 800w, /img/workbench-hands-1200.webp 1200w, /img/workbench-hands-1600.webp 1600w" sizes="100vw" alt="" fetchPriority="high" />
        </div>
        <div className="wrap hero-inner">
          <p className="eyebrow">Contact / Join — Planned</p>
          <h1 id="c-h1">Three routes. One honest form.</h1>
          <p className="lede">Preview forms only. No public email or phone is published on this preview site yet. No reply timeframe is promised, because no form backend is live yet.</p>
          <p className="mono" style={{ color: "var(--grey)" }}>{CAPTION}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="c-routes">
        <div className="wrap">
          <h2 id="c-routes">Three routes to start</h2>
          <div className="grid-three">
            <div className="card"><p className="mono">Route 1</p><h3>Manufacturers</h3><p>Express interest in a founding profile.</p><p><Link href="/manufacturers">For Manufacturers →</Link></p></div>
            <div className="card"><p className="mono">Route 2</p><h3>Buyers</h3><p>Talk through a sourcing need in general terms.</p><p><Link href="/buyers">For Buyers →</Link></p></div>
            <div className="card"><p className="mono">Route 3</p><h3>General / collaborators</h3><p>Ask a question or propose a collaboration, using the form below.</p></div>
          </div>
          <Reveal>
            <p>
              Forms ask for minimal information only. Do not send confidential drawings, GST documents,
              identity documents, or financial information. Consent is separate and unticked by default.
            </p>
            <PlaceholderForm variant="general" title="General contact (preview)" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
