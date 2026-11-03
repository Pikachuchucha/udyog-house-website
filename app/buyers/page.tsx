import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, FULL_SIZES } from "../../components/SiteImage";
import Reveal from "../../components/Reveal";
import BriefChecker from "../../components/BriefChecker";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema } from "../../components/Chrome";
import { GEO_ONE_FORM, PREVIEW } from "../../lib/site";

export const metadata: Metadata = {
  title: "For Buyers - Udyog House | Brief a tool room or mould maker in Vasai East",
  description:
    "Check a sourcing brief before sharing a drawing: process, machine, material, tolerance and evidence to request. Preview: no directory or match live.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/buyers/` },
  openGraph: {
    title: "For Buyers - Udyog House",
    description: "Check a sourcing brief before sharing a drawing: process, machine, material, tolerance and evidence to request. Preview: no directory or match live.",
    url: `${PREVIEW}/buyers/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "For Buyers - Udyog House",
    description: "Check a sourcing brief before sharing a drawing: process, machine, material, tolerance and evidence to request. Preview: no directory or match live.",
  },
};

const GLOSSARY: [string, string, string][] = [
  ["Tool room", "A workshop that makes, repairs, and maintains tools, dies, moulds, jigs, and fixtures, usually one-off or small-batch precision work.", "What tool-room work do you do most: new, repair, modification, or maintenance? What evidence supports the tolerance you claim?"],
  ["Mould making", "Making the mould that shapes a product, most often by injecting or pressing material into a cavity.", "How many cavities, what runner, what expected shots and mould life, and what are the tryout and correction terms?"],
  ["Mould-base machining", "Making the standard or custom base that holds a mould: plates, pillars, bushes, ejectors, and water lines, fitted together.", "Is this raw plates or a fitted base, what pocketing and guide work is included, and is heat treatment included?"],
  ["CNC machining, including VMC", "Computer Numerical Control machining: a computer-controlled machine cutting a part to a programmed shape. A vertical machining centre (VMC) is a CNC milling machine whose spindle is vertical, not a separate process.", "Which machine, what travel, and what size part fits it? For a VMC: 3-axis or 4/5-axis, and what envelope does the job need?"],
  ["Precision job-work", "Work done on a customer\u2019s order or material, to tight tolerances, usually in small batches.", "What tolerance have you actually held on comparable work, and what inspection record shows it?"],
  ["Tolerance bands", "Ranges of permitted deviation from a stated size, for example general (±0.1 mm and looser), precision (±0.02–0.05 mm), or fine (±0.01 mm or tighter).", "On which feature, at what size, with what finish, measured by what instrument?"],
  ["Materials", "The metal or plastic a part is made from. Named properly, that means a grade (SS 316, P20, EN24, AA 6061), in a stated condition, with a certificate answer.", "Which grade, in what condition, who supplies it, and is a mill certificate available?"],
  ["EDM (wire-cut and sinker)", "Electrical discharge machining: cutting or shaping metal with controlled electrical sparks. Wire-cut EDM cuts profiles with a thin wire; sinker EDM shapes cavities with a formed electrode.", "Which EDM type fits this job, and what tolerance and finish has it held on comparable work?"],
  ["Grinding", "Finishing a part by abrasion, usually for tight tolerances or fine surface finish after milling or turning.", "What grinding capacity exists, and what finish and tolerance has it held?"],
  ["Inspection instruments", "Tools that check a part against its drawing: micrometer, bore gauge, coordinate measuring machine (CMM), surface plate and height gauge.", "Which instrument will check the tolerance feature, and can a sample inspection record be shown?"],
  ["Surface finish (Ra)", "A measure of how smooth or rough a surface is, stated as an Ra value in micrometres. Lower Ra means a smoother finish.", "What Ra is required, and how will it be achieved and checked?"],
  ["Machine travel (envelope)", "The largest part a machine can reach and cut, stated as travel in each axis, for example 800 × 500 × 500 mm.", "What travel does this job need, including fixturing, and does it fit?"],
  ["Mill certificate", "A document from the material supplier stating the grade and composition of a batch of material.", "Is a mill certificate available for the quoted grade, and does it cover this batch?"],
];

export default function Buyers() {
  return (
    <>
      <JsonLd data={webPageSchema("/buyers/", "For Buyers - Udyog House", "Check a sourcing brief before sharing a drawing: process, machine, material, tolerance and evidence to request. Preview: no directory or match live.")} />
      <JsonLd data={breadcrumbSchema([{ label: "For Buyers", path: "/buyers/" }])} />
      <Breadcrumbs items={[{ label: "For Buyers" }]} />

      <section className="hero-panel hero-anim" aria-labelledby="b-h1">
        <div className="wrap">
          <div>
            <h1 id="b-h1">Check the brief before you send the drawing.</h1>
            <p className="lede">
              The most expensive mistake in sourcing is not a bad price. It is a
              conversation that starts with a drawing, before anyone has checked
              whether the shop works in that material, at that tolerance, at all.
            </p>
            <p className="hero-cta btn-row">
              <a className="btn btn-copper" href="#brief-checker">Check a brief</a>
              <Link className="btn btn-outline" href="/trust-evidence">How evidence labels work</Link>
            </p>
            <p className="small secondary">No searchable database exists here, and no supplier is shown. What exists is a checker: it turns a brief, described without drawings, into the questions worth asking and the evidence worth requesting.</p>
          </div>
        </div>
      </section>

      <section className="section section-white" id="brief-checker" aria-labelledby="b-tool">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">The tool</p>
            <h2 id="b-tool">Check the brief first. Then talk.</h2>
            <p>Computer Numerical Control (CNC) machining includes the vertical machining centre (VMC): a VMC is a CNC milling machine, not a separate process. Precision job-work is work on a customer&apos;s order or material (the arrangement, not the process).</p>
          </Reveal>
          <BriefChecker />
        </div>
      </section>

      <section className="section" aria-labelledby="b-guide">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">A short guide: not a new service</p>
            <h2 id="b-guide">How to brief a tool room or mould maker before sharing a drawing</h2>
            <p>Work through these in order. Each one prevents a different kind of wasted conversation.</p>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <SiteImage src="/img/drawing-and-part-1600.webp" srcSet={imgSet("drawing-and-part", [800, 1200, 1600])} sizes={FULL_SIZES} width="1600" height="1067" alt="An engineering drawing beside a finished machined part, with dimensions marked" loading="lazy" />
              <figcaption>Illustrative drawing and part, not a real job or drawing.</figcaption>
            </figure>
          </Reveal>
          <ol className="step-list">
            <li>
              <span className="step-num" aria-hidden="true">1</span>
              <div>
                <h3>Process</h3>
                <p>Say what kind of work it is: CNC milling, turning, grinding, mould making, mould-base machining, and whether it is new work, a repair, a modification, or maintenance. A shop that makes new moulds may not be the shop that repairs one well.</p>
              </div>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">2</span>
              <div>
                <h3>Material</h3>
                <p>Name the grade and condition, not just the family: SS 316 rather than “stainless steel”, P20 rather than “tool steel”, and ask who supplies the material and whether a mill certificate is available. The grade is the quote.</p>
              </div>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">3</span>
              <div>
                <h3>Tolerance band</h3>
                <p>Name the band, the feature it applies to, the size, the finish (Ra), and how it will be measured. A tolerance without a feature, a size, and an instrument cannot be checked, and a fine tolerance on a declared claim alone should not be accepted.</p>
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
                <p>Ask for the evidence behind the specific field, not a general assurance. What each label means (and what it does not prove) is on <Link href="/trust-evidence">Trust &amp; Evidence</Link>. When you do share a drawing, the pack is a 2D drawing with dimensions and tolerances, a 3D model where one exists, the grade, the quantity, the finish, the inspection requirement, and the delivery need, shared only through a direct, agreed channel with a named shop, once the scope is clear.</p>
              </div>
            </li>
          </ol>
          <Reveal>
            <p>Where this starts: {GEO_ONE_FORM}</p>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="b-glossary">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Plain prose, no jargon assumed</p>
            <h2 id="b-glossary">Glossary: words shops use, in plain language</h2>
          </Reveal>
          <div className="table-wrap">
          <table>
            <caption>Term, meaning, and what to ask</caption>
            <thead>
              <tr><th scope="col">Term</th><th scope="col">In plain words</th><th scope="col">Ask this</th></tr>
            </thead>
            <tbody>
            {GLOSSARY.map(([term, def, ask]) => (
              <tr key={term}>
                <td data-label="Term"><strong>{term}</strong></td>
                <td data-label="In plain words">{def}</td>
                <td data-label="Ask this">{ask}</td>
              </tr>
            ))}
            </tbody>
          </table>
          </div>
          <p>The full evidence method behind these questions is on <Link href="/trust-evidence">Trust &amp; Evidence</Link>.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="b-faq">
        <div className="wrap wrap-narrow">
          <Reveal>
            <p className="eyebrow">Questions, answered plainly</p>
            <h2 id="b-faq">Questions buyers actually ask</h2>
          </Reveal>
          <details><summary>How do I find a tool room that can hold my tolerance?</summary><p>Start from the tolerance with its feature, size, finish, and instrument, then ask what the shop has actually held on comparable work, and what record shows it. A declared claim alone is the weakest evidence, especially at fine tolerances.</p></details>
          <details><summary>What does an evidence label actually guarantee?</summary><p>Nothing about the future. Each label describes one past check on one field, with its limits. The full definitions are on <Link href="/trust-evidence">Trust &amp; Evidence</Link>.</p></details>
          <details><summary>Can Udyog House recommend a shop for my job?</summary><p>Not on this preview site, and not as a general claim anywhere: no shop is listed, ranked, or recommended here. The honest step today is a better brief, and, when records exist, a record you can read for yourself.</p></details>
          <details><summary>How does pricing or quoting work?</summary><p>No price is published here yet, and no quotation is shown. A comparable quote needs the grade, tolerance, finish, quantity, and inspection requirement from the brief first.</p></details>
          <details><summary>Who supplies the material?</summary><p>Either side can, and the brief should say which. Ask who supplies the material, in what grade and condition, and whether a mill certificate is available for that batch.</p></details>
          <details><summary>What drawing details stay confidential?</summary><p>Share drawings only through a direct, agreed channel with a named shop, once the scope is clear. Confidentiality terms for that channel are agreed directly between buyer and shop; this preview site sets none, because it carries no drawings at all.</p></details>
          <details><summary>What about lead time?</summary><p>No lead time is published here yet. Lead time depends on the shop&apos;s load, the job&apos;s size and tolerance, and material availability, and it is one of the commercial facts a complete record must eventually carry.</p></details>
          <details><summary>What about rework, scrap, or repeat orders?</summary><p>Not stated here yet. For larger or repeat runs, ask about batch drift, acceptance criteria, and who bears rework and scrap cost. Those commercial facts are listed on <Link href="/manufacturers">For Manufacturers</Link> as facts a record must eventually carry.</p></details>
        </div>
      </section>

      <section className="section" aria-labelledby="b-close">
        <div className="wrap wrap-narrow">
          <Reveal>
            <h2 id="b-close">Talk to Udyog House</h2>
            <p>To talk about a sourcing need, <a href="mailto:contact@udyoghouse.com">write to contact@udyoghouse.com</a> or use the <Link href="/contact">Contact page</Link>.</p>
          </Reveal>
          <p>
            <Link href="/trust-evidence">Read the evidence method</Link>
            {" · "}
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </section>
    </>
  );
}
