import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Evidence — Udyog House (Staging, PLANNED)",
  description:
    "P0 to P4 evidence labels as definitions only. No label is applied to any manufacturer on this staging site, and no blanket verification claim is made.",
  robots: { index: false, follow: false },
};

const labels = [
  {
    code: "P0 — Supplier-declared",
    scope: "The supplier's own words about its capability.",
    source: "Supplier statement only.",
    checker: "No independent checker is recorded for P0.",
    date: "Date of the statement, when a record exists.",
    limits: "Explicitly not checked. A P0 statement does not prove capability, quality, capacity, reliability, or delivery.",
    recheck: "Recheck only when a new statement or a higher label replaces it.",
  },
  {
    code: "P1 — Document received",
    scope: "A document was received and logged.",
    source: "The document as supplied.",
    checker: "Receipt and logging only.",
    date: "Date received, when a record exists.",
    limits: "Receipt is not verification, authenticity, or currency. A received document alone does not prove capability or delivery.",
    recheck: "Recheck when a newer document is received or a higher label is applied.",
  },
  {
    code: "P2 — Cross-checked identity / document",
    scope: "Only the named fields were matched against a named source.",
    source: "Named source, on a named date, for named fields only.",
    checker: "The checker for those fields, when a record exists.",
    date: "Date of the cross-check, when a record exists.",
    limits: "Identity or document matching does not prove capability, quality, capacity, reliability, or delivery. Proposed recheck interval (annual) is a proposal, not a decision.",
    recheck: "Proposed annual recheck — to be confirmed before any label is published.",
  },
  {
    code: "P3 — Observed capability",
    scope: "Only what was actually seen, where, by whom, and by what method.",
    source: "Observation record with stated method.",
    checker: "The observer, when a record exists.",
    date: "Date of observation, when a record exists.",
    limits: "Point-in-time only. Observation does not prove ongoing quality, capacity, or delivery. Proposed recheck interval (annual) is a proposal, not a decision.",
    recheck: "Proposed annual recheck — to be confirmed before any label is published.",
  },
  {
    code: "P4 — Transaction-evidenced",
    scope: "Only that specific past transaction, by stated evidence type.",
    source: "Stated evidence for that transaction.",
    checker: "The evidence holder, when a record exists.",
    date: "Date of the transaction and of the evidence, when a record exists.",
    limits: "Not a rating, testimonial, or future-performance guarantee. Proposed 12-month historical marking is a proposal, not a decision.",
    recheck: "Proposed 12-month historical marking — to be confirmed before any label is published.",
  },
];

export default function TrustEvidence() {
  return (
    <>
      <p className="mono">TRUST &amp; EVIDENCE — PLANNED — DEFINITIONS ONLY</p>
      <h1>Trust &amp; Evidence</h1>
      <div className="copper-bar" aria-hidden="true" />
      <div className="stage-box">
        <p><strong>Definitions only. No P0 to P4 label is applied to any manufacturer on this staging site.</strong></p>
        <p>No record, profile, or evidence file is published here. No blanket claim is made on this site.</p>
      </div>
      <p>
        Evidence labels are useful only when the reader can see exactly what was checked, by whom,
        when, and with what limits. A label without its full record is not used on this site.
        Status is never shown by colour alone — every label is real text.
      </p>
      <h2>Evidence labels</h2>
      {labels.map((label) => (
        <section className="card" key={label.code} aria-labelledby={label.code}>
          <h3>{label.code}</h3>
          <p><strong>Scope:</strong> {label.scope}</p>
          <p><strong>Source / method:</strong> {label.source}</p>
          <p><strong>Checker:</strong> {label.checker}</p>
          <p><strong>Date:</strong> {label.date}</p>
          <p><strong>Limitations:</strong> {label.limits}</p>
          <p><strong>Recheck / expiry:</strong> {label.recheck}</p>
        </section>
      ))}
      <h2>What is never claimed</h2>
      <ul>
        <li>No blanket claim that a manufacturer is &quot;verified&quot;, certified, accredited, approved, or vetted in general terms.</li>
        <li>Udyog House is not an accredited inspection or certification body.</li>
        <li>A factory visit, a GST document, or an identity check alone does not prove capability, quality, capacity, reliability, or delivery.</li>
        <li>No pay-to-rank, pay-to-verify, or opaque trust score is offered or implied.</li>
        <li>No ranking, testimonial, customer logo, partnership, transaction, or revenue claim is made on this site.</li>
        <li>Expired or unrechecked labels must be downgraded or removed — silence is not an option, once labels exist. No label exists yet.</li>
      </ul>
      <h2>Correction and removal — future gate</h2>
      <p>
        A correction and removal route for published manufacturer information must be live before
        any profile is ever published. That route is not live on this staging site, because no
        profile is published here. The disputed-fact default — &quot;under review&quot; or immediate
        removal — is an open decision, not a staging claim.
      </p>
    </>
  );
}
