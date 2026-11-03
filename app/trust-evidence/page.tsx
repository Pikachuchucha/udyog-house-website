import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, FIGURE_SIZES } from "../../components/SiteImage";
import Reveal from "../../components/Reveal";
import { SampleRecord, SampleTrace } from "../../components/SampleRecord";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema } from "../../components/Chrome";
import { IMAGERY_NOTE, PREVIEW } from "../../lib/site";

export const metadata: Metadata = {
  title: "Trust & Evidence — Udyog House | Evidence labels P0 to P4, proposed method",
  description:
    "Proposed methodology only: what each evidence label P0 to P4 would mean, its limits, and what is never claimed. No label applied to any manufacturer.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/trust-evidence/` },
  openGraph: {
    title: "Trust & Evidence — Udyog House",
    description: "Proposed methodology only: what each evidence label P0 to P4 would mean, its limits, and what is never claimed.",
    url: `${PREVIEW}/trust-evidence/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Trust & Evidence — Udyog House",
    description: "Proposed methodology only: what each evidence label P0 to P4 would mean, its limits, and what is never claimed.",
  },
};

const DEFINITIONS: { code: string; title: string; body: string[] }[] = [
  { code: "P0", title: "Supplier-declared", body: [
    "Meaning: the supplier\u2019s own words about one named field of capability.",
    "What was checked: nothing. No independent check is recorded for P0.",
    "Checker: none. Source: the supplier\u2019s statement, with its date.",
    "Limits: a P0 statement does not prove capability, quality, capacity, reliability, or delivery. It is the starting point, and it stays the label for every draft record made with the tools on this site.",
  ] },
  { code: "P1", title: "Document received", body: [
    "Meaning: a named document was received and logged, beside the field it relates to.",
    "What was checked: receipt and logging only. The document type, its own date, and its validity or expiry are shown.",
    "Relevance rule: a document counts only beside the field it relates to. Registration and identity documents are never capability evidence, and an expired document is shown as expired.",
    "Limits: receipt is not verification, authenticity, or currency. A received document alone does not prove capability or delivery.",
  ] },
  { code: "P2-ID", title: "Identity cross-checked", body: [
    "Meaning: identity, or the authorised representative, matched to a named independent source, on a named date.",
    "What was checked: identity fields only — nothing about what the business can make.",
    "Limits: P2-ID establishes nothing about capability, quality, capacity, reliability, or delivery. It answers “who is this?” and nothing else.",
  ] },
  { code: "P2-DOC", title: "Document cross-checked", body: [
    "Meaning: named document fields matched to a named independent source, on a named date.",
    "What was checked: only the named fields, against only the named source. The document, its fields, and the source are all stated.",
    "Limits: matching a document does not prove the shop can do the work, can repeat it, or will deliver it. P2-DOC is about documents, not capability.",
  ] },
  { code: "P3", title: "Observed capability", body: [
    "Meaning: a named machine was witnessed producing comparable work in a named material, measured by a stated method to a stated tolerance.",
    "What was checked: production and measurement, witnessed together, on a named date, by a stated checker (role and relationship to the supplier).",
    "Exclusions: seeing equipment, a facility, a photograph, a brochure, or a finished part — without witnessing production and measurement — does not earn P3.",
    "Limits: point in time only. Observation does not prove ongoing quality, capacity, or delivery, and the observer is not an accredited inspector.",
  ] },
  { code: "P4", title: "Transaction-evidenced", body: [
    "Meaning: one specific past transaction, evidenced by a stated evidence type, with transaction date and evidence date both mandatory.",
    "Evidence ranked: counterparty-confirmed evidence is strongest; supplier-held documents are weakest and are labelled as such. What was delivered is stated; acceptance and timeliness are shown as evidenced or unknown, never assumed.",
    "Limits: one past transaction only. P4 does not establish an inspection pass, timeliness, satisfaction, or repeatability, and it is not a rating, a testimonial, or a future-performance guarantee.",
  ] },
];

export default function TrustEvidence() {
  return (
    <>
      <JsonLd data={webPageSchema("/trust-evidence/", "Trust & Evidence — Udyog House", "Proposed methodology only: what each evidence label P0 to P4 would mean, its limits, and what is never claimed.")} />
      <JsonLd data={breadcrumbSchema([{ label: "Trust & Evidence", path: "/trust-evidence/" }])} />
      <Breadcrumbs items={[{ label: "Trust & Evidence" }]} />

      <section className="hero-panel hero-anim" aria-labelledby="t-h1">
        <div className="wrap hero-grid">
          <div>
            <h1 id="t-h1">A label without its record is not used here.</h1>
            <p className="lede">
              Evidence labels are useful only when the reader can see exactly what
              was checked, by whom, when, and with what limits. No label is applied
              to any manufacturer on this preview site, because no check has been
              performed on any real manufacturer.
            </p>
            <p className="hero-cta btn-row">
              <Link className="btn btn-copper" href="/manufacturers">Build a draft record</Link>
              <Link className="btn btn-outline" href="/buyers">Check a brief</Link>
            </p>
          </div>
          <div className="ladder-strip" aria-label="Evidence ladder at a glance">
            <p className="eyebrow">The ladder, at a glance</p>
            <ol>
              <li><strong>P0</strong> — Supplier-declared: the shop says so.</li>
              <li><strong>P1</strong> — Document received: a named document arrived and was logged.</li>
              <li><strong>P2-ID</strong> — Identity cross-checked: who, matched to a source.</li>
              <li><strong>P2-DOC</strong> — Document cross-checked: named fields matched to a source.</li>
              <li><strong>P3</strong> — Observed capability: a named machine witnessed, measured as stated.</li>
              <li><strong>P4</strong> — Transaction-evidenced: one specific past transaction, by stated evidence.</li>
            </ol>
            <p className="small secondary">Full definitions, with limits, follow below. No label is applied to anyone here.</p>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="banner-proposed" role="note" aria-label="Proposed methodology banner">
          <p><strong>Proposed methodology — definitions only.</strong> No label is applied to any manufacturer. No check has been performed on any real manufacturer. No record, profile, or evidence file is published. Recheck intervals and checker roles marked proposed are proposals, not decisions. Udyog House is not an accredited inspection or certification body, and no label is a certification, an accreditation, an inspection certificate, or a quality guarantee.</p>
        </div>
      </div>

      <section className="section section-deep" aria-labelledby="t-ladder">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">The ladder, at a glance</p>
            <h2 id="t-ladder">P0 to P4: each rung, and what it does not prove</h2>
            <p>Read the limits column first. A higher rung is a stronger statement about one field — never about the business as a whole.</p>
          </Reveal>
          <table>
            <caption>Evidence ladder summary — full definitions follow below</caption>
            <thead>
              <tr><th scope="col">Level</th><th scope="col">In plain language</th><th scope="col">What it does not prove</th></tr>
            </thead>
            <tbody>
              <tr><td data-label="Level">P0 — Supplier-declared</td><td data-label="In plain language">The shop says so.</td><td data-label="What it does not prove">Anything beyond the statement itself.</td></tr>
              <tr><td data-label="Level">P1 — Document received</td><td data-label="In plain language">A named document arrived and was logged.</td><td data-label="What it does not prove">Authenticity, currency, or capability.</td></tr>
              <tr><td data-label="Level">P2-ID — Identity cross-checked</td><td data-label="In plain language">Who the business or representative is, matched to a source.</td><td data-label="What it does not prove">Anything about capability.</td></tr>
              <tr><td data-label="Level">P2-DOC — Document cross-checked</td><td data-label="In plain language">Named document fields matched to a named source.</td><td data-label="What it does not prove">That the work can be done or repeated.</td></tr>
              <tr><td data-label="Level">P3 — Observed capability</td><td data-label="In plain language">A named machine witnessed making comparable work, measured as stated.</td><td data-label="What it does not prove">Ongoing quality, capacity, or delivery.</td></tr>
              <tr><td data-label="Level">P4 — Transaction-evidenced</td><td data-label="In plain language">One specific past transaction, by stated evidence.</td><td data-label="What it does not prove">Future performance, satisfaction, or repeatability.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="t-rules">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Binding display rules</p>
            <h2 id="t-rules">Five rules every label must obey</h2>
          </Reveal>
          <table>
            <caption>Five binding display rules, beside the ladder above</caption>
            <thead>
              <tr><th scope="col">Rule</th><th scope="col">What it requires</th></tr>
            </thead>
            <tbody>
              <tr><td data-label="Rule">Rule 1 of 5 — One field, never a business</td><td data-label="What it requires">Every label belongs to one named field. A label is never a badge for a profile, a business, or a person, and the highest label on one field says nothing about any other field.</td></tr>
              <tr><td data-label="Rule">Rule 2 of 5 — No label without its record</td><td data-label="What it requires">No label is displayed unless scope, what was checked, method, checker (role and relationship to the supplier), source, date, and limitations are all filled in. A missing field means no label.</td></tr>
              <tr><td data-label="Rule">Rule 3 of 5 — The supplier is never its own checker</td><td data-label="What it requires">Above P0, the checker is never the supplier itself. The checker&apos;s role and relationship to the supplier are stated beside the label.</td></tr>
              <tr><td data-label="Rule">Rule 4 of 5 — Edits and disputes downgrade, never hide</td><td data-label="What it requires">An owner edit to a labelled field drops that field to P0 until it is re-checked. A disputed field&apos;s label is suspended as “under review” (proposed default, to be confirmed before first publication) — never silently left standing.</td></tr>
              <tr><td data-label="Rule">Rule 5 of 5 — Payment never changes a label</td><td data-label="What it requires">Payment, if ever introduced, will never upgrade an evidence label, improve search position, or add any trust badge.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="t-worked">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Worked example — the same record as Home</p>
            <h2 id="t-worked">One field, from a claim to a transaction</h2>
            <p>Below is the same illustrative record shown on Home, followed by what each level would add for one of its fields — CNC milling in stainless steel at ±0.02–0.05 mm — and the limit that stays attached at each rung.</p>
          </Reveal>
          <SampleRecord />
          <SampleTrace />
          <figure className="figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <SiteImage src="/img/inspection-micrometer-1600.webp" srcSet={imgSet("inspection-micrometer", [800, 1200, 1600])} sizes={FIGURE_SIZES} width="1600" height="1067" alt="A micrometer measuring a machined part, close detail" loading="lazy" />
            <figcaption>Illustrative measurement detail — not a Udyog House check, facility, or member job. No inspection has occurred for this site.</figcaption>
          </figure>
          <p className="small secondary">This record is illustrative only. It describes no real business, and no field in it has been checked.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="t-defs">
        <div className="wrap wrap-narrow">
          <Reveal>
            <p className="eyebrow">Full definitions</p>
            <h2 id="t-defs">Every level, in full</h2>
            <p>Open each level for its meaning, what was checked, and its limits. P2 is shown split, because identity and documents are two different checks and must never share one label.</p>
          </Reveal>
          {DEFINITIONS.map((d) => (
            <details key={d.code} open={d.code === "P0" || d.code === "P3" || d.code === "P4"}>
              <summary>{d.code} — {d.title}</summary>
              {d.body.map((para) => (<p key={para}>{para}</p>))}
            </details>
          ))}
          <div className="banner-proposed" role="note" aria-label="Proposed, not decided">
            <p><strong>Proposed, not decided — kept apart from the definitions on purpose.</strong> Recheck intervals (P2 and P3 annual) are proposals, not decisions. Marking P4 evidence as “historical (date)” after 12 months unless refreshed is a proposal, not a decision. The disputed-field default (“under review” suspension) is proposed, to be confirmed before first publication. None of these is policy yet, and none is applied to anyone.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="t-never">
        <div className="wrap wrap-narrow">
          <Reveal>
            <p className="eyebrow">What is never claimed</p>
            <h2 id="t-never">No blanket claim. No shortcut to trust.</h2>
          </Reveal>
          <ul>
            <li>No blanket claim is made that a manufacturer is “verified”, certified, accredited, approved, or vetted in general terms — and none is planned. Such words appear only inside a specific field record, with scope, checker, date, and limits.</li>
            <li>Udyog House is not an accredited inspection or certification body.</li>
            <li>A factory visit, an identity document, or a registration document alone does not prove capability, quality, capacity, reliability, or delivery.</li>
            <li>No pay-to-rank, pay-to-verify, or opaque trust score is offered or implied.</li>
            <li>No ranking, testimonial, customer logo, partnership, transaction, or revenue claim is made on this site.</li>
            <li>Expired or unrechecked labels must be downgraded or removed — silence is not an option, once labels exist. No label exists yet.</li>
          </ul>
          <h3>Who checks?</h3>
          <p>The checker for a field is named by role and relationship to the supplier, beside the label. The checker is never the supplier above P0, and is not an accredited inspector. The role and competence criteria for checkers are still to be defined before any check is performed — that definition is a launch item, not a preview claim.</p>
          <h3>Correction and removal — a gate, not an afterthought</h3>
          <p>A correction and removal route for published manufacturer information must be live before any profile is ever published. That route is not live here, because no profile is published here. Its design and response window are still to be staffed and confirmed. The full joining method, including owner approval per field, is on <Link href="/manufacturers">For Manufacturers</Link>.</p>
          <p>{IMAGERY_NOTE}</p>
          <p>
            <Link href="/manufacturers">Build a draft record</Link>
            {" · "}
            <Link href="/buyers">Check a brief</Link>
            {" · "}
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </section>
    </>
  );
}
