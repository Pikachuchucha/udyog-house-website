import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Udyog House (Preview, PLANNED)",
  description:
    "Udyog House is a founder-led, early-stage project beginning in Maharashtra. This preview page separates long-term vision from what exists today.",
  robots: { index: false, follow: false },
};

export default function About() {
  return (
    <>
      <section className="section section-dark" aria-labelledby="a-h1">
        <div className="wrap">
          <p className="eyebrow">About — Planned</p>
          <h1 id="a-h1">Founder-led. Early-stage. Maharashtra first.</h1>
          <p className="lede">Vision is separated from today, plainly, on this page. Nothing below is presented as already built.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="a-purpose">
        <div className="wrap">
          <div className="section-head">
            <span className="section-no">01</span>
            <div>
              <p className="eyebrow">Purpose</p>
              <h2 id="a-purpose">Make industrial discovery structured, transparent, and accessible</h2>
              <p>
                Udyog House is building India&apos;s industrial discovery and sourcing network, beginning in
                Maharashtra. Its purpose is to make industrial discovery and sourcing more structured,
                transparent, and accessible — starting with structured capability profiles for tool rooms,
                mould makers and precision machining businesses.
              </p>
            </div>
          </div>
          <h3>Principles</h3>
          <ul>
            <li>Exact, plain-spoken, rooted, builder-minded, fair.</li>
            <li>Owner-approved information, with evidence and limits stated.</li>
            <li>No invented counts, members, testimonials, logos, partnerships, or revenue.</li>
            <li>No guarantee of enquiries, orders, quality, delivery, or price.</li>
            <li>Stage stated once, confidently: building, not yet established.</li>
          </ul>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="a-roadmap">
        <div className="wrap">
          <div className="section-head">
            <span className="section-no">02</span>
            <div>
              <p className="eyebrow">Long-term vision — planned, not live</p>
              <h2 id="a-roadmap">Four phases. None of them live yet.</h2>
            </div>
          </div>
          <div className="pillar-row">
            <div className="pillar-col"><p className="mono">Phase 1 — Planned</p><h3>Manufacturer Network</h3><p>Real, owner-approved capability profiles.</p></div>
            <div className="pillar-col"><p className="mono">Phase 2 — Planned</p><h3>Buyer Discovery Network</h3><p>Discover and filter by processes, machines, materials, dimensions, tolerances and evidence.</p></div>
            <div className="pillar-col copper-col"><p className="mono">Phase 3 — Planned</p><h3>RFQ, Matching &amp; Order Room</h3><p>Buyer requirements, supplier invitations, quotations, comparisons, introductions and order milestones.</p></div>
            <div className="pillar-col"><p className="mono">Phase 4 — Planned</p><h3>National Industrial Infrastructure</h3><p>Expanded clusters, capability intelligence, reputation, integrations and workflows.</p></div>
          </div>
          <p>None of these phases is live on this preview site. Future clusters are only for when the network is genuinely built there.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="a-founder">
        <div className="wrap wrap-narrow">
          <div className="section-head">
            <span className="section-no">03</span>
            <div>
              <p className="eyebrow">Founder introduction</p>
              <h2 id="a-founder">Placeholder until approved</h2>
              <p>No founder biography, photograph, or personal claim is published on this preview site yet.</p>
            </div>
          </div>
          <h3>What this site is not</h3>
          <p>
            Udyog House, as described here, is not a generic directory, an industrial consultancy, a
            manufacturer or machine shop, a certification agency, a broker claiming guaranteed
            outcomes, a generic software startup, or an established nationwide marketplace.
          </p>
        </div>
      </section>
    </>
  );
}
