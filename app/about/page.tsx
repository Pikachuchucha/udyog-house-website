import type { Metadata } from "next";
import SiteImage from "../../components/SiteImage";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "About — Udyog House (Preview, PLANNED)",
  description:
    "Udyog House is a founder-led, early-stage project beginning in Maharashtra. This preview page separates long-term vision from what exists today.",
  robots: { index: false, follow: false },
};

const CAPTION = "AI-generated editorial illustration — not a Udyog House facility or member.";

export default function About() {
  return (
    <>
      <section className="hero hero-anim" aria-labelledby="a-h1">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <SiteImage src="/img/pillar-abstract-1600.webp" srcSet="/img/pillar-abstract-800.webp 800w, /img/pillar-abstract-1200.webp 1200w, /img/pillar-abstract-1600.webp 1600w" sizes="100vw" alt="" fetchPriority="high" />
        </div>
        <div className="wrap hero-inner">
          <p className="eyebrow">About — Planned</p>
          <h1 id="a-h1">Founder-led. Early-stage. Maharashtra first.</h1>
          <p className="lede">Vision is separated from today, plainly, on this page. Nothing below is presented as already built.</p>
          <p className="mono" style={{ color: "var(--grey)" }}>{CAPTION} Abstract pillar image is a visual echo of the monogram, not the logo itself.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="a-purpose">
        <div className="wrap ed-grid">
          <div className="span-7">
            <span className="section-no">01</span>
            <p className="eyebrow">Purpose</p>
            <h2 id="a-purpose">Make industrial discovery structured, transparent, and accessible</h2>
            <p>
              Udyog House is building India&apos;s industrial discovery and sourcing network, beginning in
              Maharashtra. Its purpose is to make industrial discovery and sourcing more structured,
              transparent, and accessible — starting with structured capability profiles for tool rooms,
              mould makers and precision machining businesses.
            </p>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <SiteImage src="/img/cnc-hero-1200.webp" srcSet="/img/cnc-hero-800.webp 800w, /img/cnc-hero-1200.webp 1200w" sizes="(max-width: 1080px) 100vw, 55vw" alt="Machined part in the foreground with a blurred machine background" loading="lazy" />
              <figcaption><strong>Built in one corridor first.</strong> {CAPTION}</figcaption>
            </figure>
          </div>
          <div className="span-5">
            <h3>Principles</h3>
            <ul>
              <li>Exact, plain-spoken, rooted, builder-minded, fair.</li>
              <li>Owner-approved information, with evidence and limits stated.</li>
              <li>No invented counts, members, testimonials, logos, partnerships, or revenue.</li>
              <li>No guarantee of enquiries, orders, quality, delivery, or price.</li>
              <li>Stage stated once, confidently: building, not yet established.</li>
            </ul>
            <p className="pull" style={{ marginTop: "1.5rem" }}>Ambition, <em>without pretending</em> the work is already done.</p>
            <figure className="figure figure-logo" style={{ marginTop: "1.5rem" }}>
              <SiteImage src="/logo/uh-transparent-320.png" alt="Udyog House monogram, transparent variant, on a light background" width={160} height={160} loading="lazy" />
              <figcaption><strong>Transparent variant, on a light background only.</strong> This variant is used here because the background is light. It is never used on dark backgrounds, where the dark pillars would disappear.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="a-roadmap">
        <div className="wrap">
          <Reveal>
            <span className="section-no">02</span>
            <p className="eyebrow">Long-term vision — planned, not live</p>
            <h2 id="a-roadmap">Four phases. None of them live yet.</h2>
          </Reveal>
          <div className="pillar-row">
            <Reveal delay={0} className="pillar-col"><p className="mono">Phase 1 — Planned</p><h3>Manufacturer Network</h3><p>Real, owner-approved capability profiles.</p></Reveal>
            <Reveal delay={100} className="pillar-col"><p className="mono">Phase 2 — Planned</p><h3>Buyer Discovery Network</h3><p>Discover and filter by processes, machines, materials, dimensions, tolerances and evidence.</p></Reveal>
            <Reveal delay={200} className="pillar-col copper-col"><p className="mono">Phase 3 — Planned</p><h3>RFQ, Matching &amp; Order Room</h3><p>Buyer requirements, supplier invitations, quotations, comparisons, introductions and order milestones.</p></Reveal>
            <Reveal delay={300} className="pillar-col"><p className="mono">Phase 4 — Planned</p><h3>National Industrial Infrastructure</h3><p>Expanded clusters, capability intelligence, reputation, integrations and workflows.</p></Reveal>
          </div>
          <p>None of these phases is live on this preview site. Future clusters are only for when the network is genuinely built there.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="a-founder">
        <div className="wrap ed-grid">
          <div className="span-6">
            <span className="section-no">03</span>
            <p className="eyebrow">Founder introduction</p>
            <h2 id="a-founder">Founder introduction</h2>
            <p>No founder biography, photograph, or personal claim is published on this preview site yet.</p>
          </div>
          <div className="span-6">
            <h3>What this site is not</h3>
            <p>
              Udyog House, as described here, is not a generic directory, an industrial consultancy, a
              manufacturer or machine shop, a certification agency, a broker claiming guaranteed
              outcomes, a generic software startup, or an established nationwide marketplace.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
