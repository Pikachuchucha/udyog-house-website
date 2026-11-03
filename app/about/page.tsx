import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Udyog House (Staging, PLANNED)",
  description:
    "Udyog House is a founder-led, early-stage project beginning in Maharashtra. This staging page separates long-term vision from what exists today.",
  robots: { index: false, follow: false },
};

export default function About() {
  return (
    <>
      <p className="mono">ABOUT — PLANNED</p>
      <h1>About Udyog House</h1>
      <div className="copper-bar" aria-hidden="true" />
      <div className="stage-box">
        <p><strong>Founder-led and early-stage. Maharashtra beginning. Vision is separated from today, plainly, on this page.</strong></p>
      </div>
      <h2>Purpose</h2>
      <p>
        Udyog House is building India&apos;s industrial discovery and sourcing network, beginning in
        Maharashtra. Its purpose is to make industrial discovery and sourcing more structured,
        transparent, and accessible — starting with structured capability profiles for tool rooms,
        mould makers and precision machining businesses.
      </p>
      <h2>Principles</h2>
      <ul>
        <li>Exact, plain-spoken, rooted, builder-minded, fair.</li>
        <li>Owner-approved information, with evidence and limits stated.</li>
        <li>No invented counts, members, testimonials, logos, partnerships, or revenue.</li>
        <li>No guarantee of enquiries, orders, quality, delivery, or price.</li>
        <li>Stage stated once, confidently: building, not yet established.</li>
      </ul>
      <h2>Long-term vision — planned, not live</h2>
      <ol>
        <li>Manufacturer Network — real, owner-approved capability profiles. Planned.</li>
        <li>Buyer Discovery Network — discover and filter by processes, machines, materials, dimensions, tolerances and evidence. Planned.</li>
        <li>RFQ, Matching &amp; Order Room — buyer requirements, supplier invitations, quotations, comparisons, introductions and order milestones. Planned.</li>
        <li>National Industrial Infrastructure — expanded clusters, capability intelligence, reputation, integrations and workflows. Planned.</li>
      </ol>
      <p>None of these phases is live on this staging site. Future clusters are only for when the network is genuinely built there.</p>
      <h2>Founder introduction</h2>
      <div className="stage-box">
        <p><strong>Placeholder until approved.</strong></p>
        <p>No founder biography, photograph, or personal claim is published on this staging site yet.</p>
      </div>
      <h2>What this site is not</h2>
      <p>
        Udyog House, as described here, is not a generic directory, an industrial consultancy, a
        manufacturer or machine shop, a certification agency, a broker claiming guaranteed
        outcomes, a generic software startup, or an established nationwide marketplace.
      </p>
    </>
  );
}
