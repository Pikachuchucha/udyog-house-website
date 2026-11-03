import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, COLUMN_SIZES } from "../../components/SiteImage";
import Reveal from "../../components/Reveal";
import RecordBuilder from "../../components/RecordBuilder";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema } from "../../components/Chrome";
import { GEO_ONE_FORM, OWNER_APPROVAL, PREVIEW } from "../../lib/site";

export const metadata: Metadata = {
  title: "For Manufacturers - Udyog House | Vasai East tool rooms, mould makers",
  description:
    "Build a draft capability record for your tool room or mould shop in Vasai East. Preview: no profile published yet.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/manufacturers/` },
  openGraph: {
    title: "For Manufacturers - Udyog House",
    description: "Build a draft capability record for your tool room or mould shop in Vasai East. Preview: no profile published yet.",
    url: `${PREVIEW}/manufacturers/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "For Manufacturers - Udyog House",
    description: "Build a draft capability record for your tool room or mould shop in Vasai East. Preview: no profile published yet.",
  },
};

const FIELDS_13 = [
  "Business name",
  "Location area / locality (street address only with your explicit consent)",
  "Contact and authorised representative",
  "Processes",
  "Machines and equipment",
  "Materials",
  "Component / product categories",
  "Size and capacity bands",
  "Tolerance bands",
  "Technical capabilities, including limits and what the shop does not do",
  "Supporting documents, where appropriate",
  "Business-provided photographs, captioned as such, with consent, withdrawable",
  "Additional capability information",
];

const STAGES = [
  { n: "Stage 1", title: "Introduction", body: "You agree to be considered and name an authorised representative. No profile is created without that agreement, scraped from the web, or copied from a directory, and a draft you decline or withdraw is deleted." },
  { n: "Stage 2", title: "Information collection", body: "The 13 fields below are collected briefly at first, all starting at P0, supplier-declared, and you may withhold any field. Confidential drawings, GST, identity, financial, customer-list, pricing, and employee personal data are never collected through a public form." },
  { n: "Stage 3", title: "Documentation and review", body: "Information is reviewed for consistency, completeness, and relevance to the field it supports, with labels assigned per field, never to the business as a whole, by a reviewer who is never the supplier and is not an accredited inspector. Outcomes are approve, approve with narrowing, hold, or reject with a reason, and you see the reviewed draft (wording, labels, limits, and dates) before Stage 4." },
  { n: "Stage 4", title: "Manufacturer approval", body: `${OWNER_APPROVAL} Approval is recorded per field (approver name and role, date, and version), is revocable, and is not a warranty, an endorsement, or a transfer of ownership. Fields you refuse or partly approve are omitted entirely, never shown as “pending” placeholders. An edit by Udyog House to an approved field also requires fresh per-field approval before that field goes live again.` },
  { n: "Stage 5", title: "Publication", body: "Only Stage-4-approved fields go live, each with its label, scope, method, checker, source, date, and limits shown beside it, and no profile badge, score, ranking, or blanket claim appears. Full documents, GST, identity, financial information, drawings, customer names without consent, prices, and withheld fields are never published." },
  { n: "Stage 6", title: "Maintenance", body: "You may update, narrow, or withdraw your record at any time, and any edit to a labelled field drops that field to P0 until it is re-checked. A correction and removal route must be live before any publication, and stays live afterwards." },
];

export default function Manufacturers() {
  return (
    <>
      <JsonLd data={webPageSchema("/manufacturers/", "For Manufacturers - Udyog House", "Build a draft capability record for your tool room or mould shop in Vasai East. Preview: no profile published yet.")} />
      <JsonLd data={breadcrumbSchema([{ label: "For Manufacturers", path: "/manufacturers/" }])} />
      <Breadcrumbs items={[{ label: "For Manufacturers" }]} />

      <section className="hero-panel hero-anim" aria-labelledby="m-h1">
        <div className="wrap hero-grid">
          <div>
            <h1 id="m-h1">Say what your shop can make, in your own words.</h1>
            <p className="lede">
              Not for a generic category. For a process, a machine, a material and
              its grade, a tolerance, stated in your own approved words, with
              the evidence and its limits shown beside it.
            </p>
            <p className="hero-cta btn-row">
              <a className="btn btn-copper" href="#record-builder">Build a draft record</a>
              <Link className="btn btn-outline" href="/trust-evidence">How evidence labels work</Link>
            </p>
            <p className="small secondary">No profile is published yet. No enquiry or order is guaranteed.</p>
          </div>
          <figure className="figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <SiteImage src="/img/workbench-hands-1600.webp" srcSet={imgSet("workbench-hands", [800, 1200, 1600])} sizes={COLUMN_SIZES} width="1600" height="1067" alt="Hands at a workbench checking a machined component against its dimensions" loading="eager" fetchPriority="high" />
            <figcaption>Hands at a workbench checking a machined component, not a Udyog House facility, member, or job.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="m-three">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">One question, answered three ways</p>
            <h2 id="m-three">What do I give, what do you do with it, what do I get back?</h2>
          </Reveal>
          <ol className="ruled-list">
            <li>
              <h3>What you give</h3>
              <p>Statements about your own shop, in brief: processes, machines and travel, materials and grades, sizes, tolerances, and what you do not do. No drawings, no GST or identity documents, no financial information, no customer lists, no pricing, not through any public form on this site, and not as part of a draft record. Grades are the point: buyers compare P20 with H13, and SS 304 with SS 316, not tool steel with stainless steel.</p>
            </li>
            <li>
              <h3>What is done with it</h3>
              <p>Under the proposed method, your statements are reviewed field by field, labelled with their evidence and limits, and shown back to you as a draft. Nothing is published, ranked, or scored from a draft. Payment, if ever introduced, will never upgrade an evidence label, improve search position, or add any trust badge.</p>
            </li>
            <li>
              <h3>What you get back</h3>
              <p>A record a buyer can actually read, and the right to approve, narrow, or withdraw every field of it. {OWNER_APPROVAL} A record you have not approved does not exist in public, and a field you withdraw disappears rather than lingering as a placeholder.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section-white" id="record-builder" aria-labelledby="m-tool">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">The tool</p>
            <h2 id="m-tool">Build a draft record</h2>
            <p>Computer Numerical Control (CNC) milling includes the vertical machining centre (VMC): a VMC is a CNC milling machine, not a separate process. Job-work (work on a customer&apos;s order or material) is the commercial arrangement around the process, not a process itself.</p>
          </Reveal>
          <RecordBuilder />
        </div>
      </section>

      <section className="section" aria-labelledby="m-onboard">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Proposed methodology: not yet operated</p>
            <h2 id="m-onboard">How a manufacturer would join, in six stages</h2>
            <p>Every stage below is labelled PROPOSED METHODOLOGY. No stage has been operated with a real manufacturer, and no part of it is a promise about timing, cost, or outcome.</p>
          </Reveal>
          <div className="table-wrap">
          <table>
            <caption>Six proposed stages, in order</caption>
            <thead>
              <tr><th scope="col">Stage</th><th scope="col">What happens</th><th scope="col">Status</th></tr>
            </thead>
            <tbody>
              {STAGES.map((s, i) => (
                <tr key={s.title}>
                  <td data-label="Stage">{s.n} of 6: {s.title}</td>
                  <td data-label="What happens">{s.body}</td>
                  <td data-label="Status">Proposed</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <Reveal>
            <h3>The 13 fields collected at Stage 2</h3>
            <ol>
              {FIELDS_13.map((f) => (<li key={f}>{f}</li>))}
            </ol>
            <h3>Document handling, in brief</h3>
            <p>Documents are logged by type and date, access-restricted, never published in full, and redacted where needed. A document is deleted after its check unless you consent to retention, for a period still to be decided. Anything sent despite the warning (a confidential drawing, an identity document, financial information) is deleted on receipt, not stored or published. Staffing that deletion route is still to be confirmed before any publication.</p>
            <h3>Commercial facts a record must eventually carry</h3>
            <p>Even a perfect capability record does not answer a buyer&apos;s commercial questions, so before any record is treated as complete, it must eventually carry load and lead time, batch and repeat drift, inspection, rework, and scrap cost and who bears them, acceptance criteria, material sourcing (who supplies it), payment terms and milestones, and delivery or pickup. None of these is collected or published today.</p>
            <h3>Price</h3>
            <p>No price has been announced yet.</p>
            <p>Where you are: {GEO_ONE_FORM} Vasai East, Palghar district, Maharashtra.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="m-close">
        <div className="wrap wrap-narrow">
          <Reveal>
            <h2 id="m-close">Talk to Udyog House</h2>
            <p>To talk about a record for your shop, <a href="mailto:contact@udyoghouse.com">write to contact@udyoghouse.com</a> or use the <Link href="/contact">Contact page</Link>.</p>
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
