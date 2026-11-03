import type { Metadata } from "next";
import SiteImage from "../../components/SiteImage";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Trust & Evidence — Udyog House (Preview, PLANNED)",
  description:
    "P0 to P4 evidence labels as definitions only. No label is applied to any manufacturer on this preview site, and no blanket verification claim is made.",
  robots: { index: false, follow: false },
};

const labels = [
  { code: "P0 — Supplier-declared", scope: "The supplier's own words about its capability.", source: "Supplier statement only.", checker: "No independent checker is recorded for P0.", date: "Date of the statement, when a record exists.", limits: "Explicitly not checked. A P0 statement does not prove capability, quality, capacity, reliability, or delivery.", recheck: "Recheck only when a new statement or a higher label replaces it." },
  { code: "P1 — Document received", scope: "A document was received and logged.", source: "The document as supplied.", checker: "Receipt and logging only.", date: "Date received, when a record exists.", limits: "Receipt is not verification, authenticity, or currency. A received document alone does not prove capability or delivery.", recheck: "Recheck when a newer document is received or a higher label is applied." },
  { code: "P2 — Cross-checked identity / document", scope: "Only the named fields were matched against a named source.", source: "Named source, on a named date, for named fields only.", checker: "The checker for those fields, when a record exists.", date: "Date of the cross-check, when a record exists.", limits: "Identity or document matching does not prove capability, quality, capacity, reliability, or delivery. Proposed recheck interval (annual) is a proposal, not a decision.", recheck: "Proposed annual recheck — to be confirmed before any label is published." },
  { code: "P3 — Observed capability", scope: "Only what was actually seen, where, by whom, and by what method.", source: "Observation record with stated method.", checker: "The observer, when a record exists.", date: "Date of observation, when a record exists.", limits: "Point-in-time only. Observation does not prove ongoing quality, capacity, or delivery. Proposed recheck interval (annual) is a proposal, not a decision.", recheck: "Proposed annual recheck — to be confirmed before any label is published." },
  { code: "P4 — Transaction-evidenced", scope: "Only that specific past transaction, by stated evidence type.", source: "Stated evidence for that transaction.", checker: "The evidence holder, when a record exists.", date: "Date of the transaction and of the evidence, when a record exists.", limits: "Not a rating, testimonial, or future-performance guarantee. Proposed 12-month historical marking is a proposal, not a decision.", recheck: "Proposed 12-month historical marking — to be confirmed before any label is published." },
];

const CAPTION = "AI-generated editorial illustration — not a Udyog House facility or member.";

export default function TrustEvidence() {
  return (
    <>
      <section className="hero hero-anim" aria-labelledby="t-h1">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <SiteImage src="/img/macro-mould-1600.webp" srcSet="/img/macro-mould-800.webp 800w, /img/macro-mould-1200.webp 1200w, /img/macro-mould-1600.webp 1600w" sizes="100vw" alt="" fetchPriority="high" />
        </div>
        <div className="wrap hero-inner">
          <p className="eyebrow">Trust &amp; Evidence — Planned — Definitions only</p>
          <h1 id="t-h1">A label without its record is not used here.</h1>
          <p className="lede">
            Evidence labels are useful only when the reader can see exactly what
            was checked, by whom, when, and with what limits. No P0 to P4 label
            is applied to any manufacturer on this preview site. No record,
            profile, or evidence file is published here.
          </p>
          <p className="mono" style={{ color: "var(--grey)" }}>{CAPTION}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="t-ladder">
        <div className="wrap ed-grid">
          <div className="span-4">
            <span className="section-no">01</span>
            <p className="eyebrow">The ladder — read the limits, not just the rung</p>
            <h2 id="t-ladder">P0 to P4</h2>
            <p className="pull">Status is never shown by colour alone — every label is real text, with its <em>full record fields.</em></p>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <SiteImage src="/img/pillar-abstract-1200.webp" srcSet="/img/pillar-abstract-800.webp 800w, /img/pillar-abstract-1200.webp 1200w" sizes="(max-width: 1080px) 100vw, 30vw" alt="Abstract graphite pillars joined by a copper bar" loading="lazy" />
              <figcaption><strong>Each rung, stated in full.</strong> {CAPTION}</figcaption>
            </figure>
          </div>
          <div className="span-8">
            {labels.map((label, i) => (
              <Reveal key={label.code} delay={i * 80}>
                <div className="record-sheet">
                  <div className="record-sheet-head">
                    <strong>{label.code}</strong>
                    <span>Definitions only — no label applied</span>
                  </div>
                  <dl>
                    <div className="record-row"><dt>Scope</dt><dd>{label.scope}</dd></div>
                    <div className="record-row"><dt>Source / method</dt><dd>{label.source}</dd></div>
                    <div className="record-row"><dt>Checker</dt><dd>{label.checker}</dd></div>
                    <div className="record-row"><dt>Date</dt><dd>{label.date}</dd></div>
                    <div className="record-row"><dt>Limitations</dt><dd>{label.limits}</dd></div>
                    <div className="record-row"><dt>Recheck / expiry</dt><dd>{label.recheck}</dd></div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="t-never">
        <div className="wrap wrap-narrow">
          <Reveal>
            <span className="section-no">02</span>
            <p className="eyebrow">What is never claimed</p>
            <h2 id="t-never">No blanket claim. No shortcut to trust.</h2>
          </Reveal>
          <ul>
            <li>No blanket claim that a manufacturer is &quot;verified&quot;, certified, accredited, approved, or vetted in general terms.</li>
            <li>Udyog House is not an accredited inspection or certification body.</li>
            <li>A factory visit, a GST document, or an identity check alone does not prove capability, quality, capacity, reliability, or delivery.</li>
            <li>No pay-to-rank, pay-to-verify, or opaque trust score is offered or implied.</li>
            <li>No ranking, testimonial, customer logo, partnership, transaction, or revenue claim is made on this site.</li>
            <li>Expired or unrechecked labels must be downgraded or removed — silence is not an option, once labels exist. No label exists yet.</li>
          </ul>
          <h3>Correction and removal — future gate</h3>
          <p>
            A correction and removal route for published manufacturer information must be live before
            any profile is ever published. That route is not live on this preview site, because no
            profile is published here. The disputed-fact default — &quot;under review&quot; or immediate
            removal — is an open decision, not a preview claim.
          </p>
        </div>
      </section>
    </>
  );
}
