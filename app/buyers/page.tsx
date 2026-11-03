import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, FIGURE_SIZES } from "../../components/SiteImage";
import Reveal from "../../components/Reveal";
import BriefChecker from "../../components/BriefChecker";
import PreviewForm from "../../components/PreviewForm";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema } from "../../components/Chrome";
import { GEO_ONE_FORM, PREVIEW } from "../../lib/site";

export const metadata: Metadata = {
  title: "For Buyers — Udyog House | Brief a tool room or mould maker in Vasai East",
  description:
    "Check a sourcing brief before sharing a drawing: process, machine, material, tolerance and evidence to request. Preview — no directory or match live.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/buyers/` },
  openGraph: {
    title: "For Buyers — Udyog House",
    description: "Check a sourcing brief before sharing a drawing: process, machine, material, tolerance and evidence to request.",
    url: `${PREVIEW}/buyers/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "For Buyers — Udyog House",
    description: "Check a sourcing brief before sharing a drawing: process, machine, material, tolerance and evidence to request.",
  },
};

const GLOSSARY: [string, string, string][] = [
  ["Tool room", "A workshop that makes, repairs, and maintains tools, dies, moulds, jigs, and fixtures — usually one-off or small-batch precision work.", "What to ask: what tool-room work do you do most — new, repair, modification, or maintenance? What evidence supports the tolerance you claim?"],
  ["Mould making", "Making the mould that shapes a product, most often by injecting or pressing material into a cavity.", "What to ask: how many cavities, what runner, what expected shots and mould life, and what are the tryout and correction terms?"],
  ["Mould-base manufacturing", "Making the standard or custom base that holds a mould: plates, pillars, bushes, ejectors, and water lines, fitted together.", "What to ask: is this raw plates or a fitted base, what pocketing and guide work is included, and is heat treatment included?"],
  ["CNC machining", "Computer Numerical Control machining: a computer-controlled machine cutting a part to a programmed shape.", "What to ask: which machine, what travel, and what size part fits it? A machine name without travel is half an answer."],
  ["VMC machining", "Machining on a vertical machining centre (VMC): a CNC milling machine whose spindle is vertical.", "What to ask: 3-axis or 4/5-axis, and what envelope does the job need? A VMC is a kind of CNC milling machine, not a separate process."],
  ["Precision job-work", "Work done on a customer\u2019s order or material, to tight tolerances, usually in small batches.", "What to ask: what tolerance have you actually held on comparable work, and what inspection record shows it?"],
  ["Tolerance bands", "Ranges of permitted deviation from a stated size, for example general (±0.1 mm and looser), precision (±0.02–0.05 mm), or fine (±0.01 mm or tighter).", "What to ask: on which feature, at what size, with what finish, measured by what instrument? A band without a feature cannot be checked."],
  ["Materials", "The metal or plastic a part is made from — named properly, that means a grade (SS 316, P20, EN24, AA 6061), in a stated condition, with a certificate answer.", "What to ask: which grade, in what condition, who supplies it, and is a mill certificate available?"],
];

export default function Buyers() {
  return (
    <>
      <JsonLd data={webPageSchema("/buyers/", "For Buyers — Udyog House", "Check a sourcing brief before sharing a drawing: process, machine, material, tolerance and evidence to request.")} />
      <JsonLd data={breadcrumbSchema([{ label: "For Buyers", path: "/buyers/" }])} />
      <Breadcrumbs items={[{ label: "For Buyers" }]} />

      <section className="hero-panel hero-anim" aria-labelledby="b-h1">
        <div className="wrap hero-grid">
          <div>
            <p><span className="pill-opaque">For buyers — Preview</span></p>
            <h1 id="b-h1">Know who can make it before you send the drawing.</h1>
            <p className="lede">
              The most expensive mistake in sourcing is not a bad price. It is a
              conversation that starts with a drawing, before anyone has checked
              whether the shop works in that material, at that tolerance, at all.
            </p>
            <p>
              No searchable database exists here, and no supplier is shown. What
              exists is a checker: it turns a brief, described without drawings,
              into the questions worth asking and the evidence worth requesting.
            </p>
            <p className="hero-cta btn-row">
              <a className="btn btn-copper" href="#brief-checker">Check a brief</a>
              <Link className="btn btn-outline" href="/trust-evidence">How evidence labels work</Link>
            </p>
          </div>
          <figure className="figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <SiteImage src="/img/drawing-and-part-1600.webp" srcSet={imgSet("drawing-and-part", [800, 1200, 1600])} sizes={FIGURE_SIZES} width="1600" height="1067" alt="An engineering drawing beside a finished machined part, with dimensions marked" loading="eager" fetchPriority="high" />
          </figure>
        </div>
      </section>

      <section className="section section-white" id="brief-checker" aria-labelledby="b-tool">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">The tool</p>
            <h2 id="b-tool">Check the brief first. Then talk.</h2>
            <p>Computer Numerical Control (CNC) machining includes the vertical machining centre (VMC): a VMC is a CNC milling machine, not a separate process. Precision job-work is work on a customer&apos;s order or material — the arrangement, not the process.</p>
          </Reveal>
          <BriefChecker />
        </div>
      </section>

      <section className="section" aria-labelledby="b-guide">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">A short guide — not a new service</p>
            <h2 id="b-guide">How to brief a tool room or mould maker before sharing a drawing</h2>
            <p>Work through these in order. Each one prevents a different kind of wasted conversation.</p>
          </Reveal>
          <ol className="step-list">
            <li>
              <span className="step-num" aria-hidden="true">1</span>
              <div>
                <h3>Process</h3>
                <p>Say what kind of work it is — CNC milling, turning, grinding, mould making, mould-base machining — and whether it is new work, a repair, a modification, or maintenance. A shop that makes new moulds may not be the shop that repairs one well.</p>
              </div>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">2</span>
              <div>
                <h3>Material</h3>
                <p>Name the grade and condition, not just the family: SS 316 rather than “stainless steel”, P20 rather than “tool steel”. Ask who supplies the material and whether a mill certificate is available. The grade is the quote.</p>
              </div>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">3</span>
              <div>
                <h3>Tolerance band</h3>
                <p>Name the band, the feature it applies to, the size, the finish (Ra), and how it will be measured. A tolerance without a feature, a size, and an instrument cannot be checked — and a fine tolerance on a declared claim alone should not be accepted.</p>
              </div>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">4</span>
              <div>
                <h3>Quantity band</h3>
                <p>Say whether this is a single piece, a small batch, or repeat work. Quantity changes what matters: for larger or repeat runs, ask about batch drift, acceptance criteria, and who bears rework and scrap cost.</p>
              </div>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">5</span>
              <div>
                <h3>Evidence to request</h3>
                <p>Ask for the evidence behind the specific field, not a general assurance: a document received (P1), fields cross-checked (P2), capability observed on a named machine (P3), or a past transaction evidenced (P4). Each level has limits — read them on <Link href="/trust-evidence">Trust &amp; Evidence</Link> before you treat any of them as a guarantee.</p>
              </div>
            </li>
          </ol>
          <Reveal>
            <h3>When you do share a drawing</h3>
            <p>A complete request-for-quotation pack, when the time comes, is: a 2D drawing with dimensions and tolerances, a 3D model where one exists, the grade, the quantity, the finish, the inspection requirement, and the delivery need. Share it only through a direct, agreed channel with a named shop, once the scope is clear — never through a preview form. Confidentiality terms for that channel are agreed directly between buyer and shop; this preview site sets none, because it carries no drawings at all.</p>
            <p>Where this starts: {GEO_ONE_FORM}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="b-glossary">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Plain prose, no jargon assumed</p>
            <h2 id="b-glossary">Glossary: words shops use, in plain language</h2>
          </Reveal>
          <dl>
            {GLOSSARY.map(([term, def, ask]) => (
              <div key={term} style={{ borderBottom: "1px solid var(--neutral)", padding: "1rem 0" }}>
                <dt><strong>{term}</strong></dt>
                <dd style={{ margin: "0.25rem 0 0" }}>{def}</dd>
                <dd style={{ margin: "0.25rem 0 0" }}><em>{ask}</em></dd>
              </div>
            ))}
          </dl>
          <p>The full evidence method behind these questions is on <Link href="/trust-evidence">Trust &amp; Evidence</Link>.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="b-faq">
        <div className="wrap wrap-narrow">
          <Reveal>
            <p className="eyebrow">Questions, answered plainly</p>
            <h2 id="b-faq">Questions buyers actually ask</h2>
          </Reveal>
          <details><summary>How do I find a tool room that can hold my tolerance?</summary><p>Start from the tolerance with its feature, size, finish, and instrument — then ask what the shop has actually held on comparable work, and what record shows it. A declared claim alone is the weakest evidence, especially at fine tolerances.</p></details>
          <details><summary>What should I ask before sending a drawing?</summary><p>Process, machine and travel, material grade and condition, tolerance band, quantity band, and the evidence you want to see for that specific field. The checker above turns those answers into a question sheet you can copy and print.</p></details>
          <details><summary>What does an evidence label actually guarantee?</summary><p>Nothing about the future. Each label describes one past check on one field, with its limits: P1 is receipt, P2 is matching, P3 is one witnessed job, P4 is one past transaction. No label is a quality guarantee, a rating, or a promise of delivery.</p></details>
          <details><summary>Can Udyog House recommend a shop for my job?</summary><p>Not on this preview site, and not as a general claim anywhere: no shop is listed, ranked, or recommended here. The honest step today is a better brief — and, when records exist, a record you can read for yourself.</p></details>
          <details><summary>Where does this start?</summary><p>{GEO_ONE_FORM} Vasai East, Palghar district, Maharashtra. No other cluster is claimed until it is genuinely built there.</p></details>
        </div>
      </section>

      <section className="section section-white" id="preview-form-section" aria-labelledby="b-form">
        <div className="wrap wrap-narrow">
          <Reveal>
            <p className="eyebrow">Preview form — secondary to the tool</p>
            <h2 id="b-form">Talk through a sourcing need</h2>
            <p>Describe the need. The checker above is the primary way to assess this idea today; this form is a preview only and sends nothing.</p>
          </Reveal>
          <PreviewForm variant="buyer" title="Talk through a sourcing need (preview)" idPrefix="buy" />
          <p className="btn-row">
            <Link className="btn btn-outline" href="/trust-evidence">Read the evidence method</Link>
            <Link className="btn btn-outline" href="/contact">Contact / Join</Link>
          </p>
        </div>
      </section>
    </>
  );
}
