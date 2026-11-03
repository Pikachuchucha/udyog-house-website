import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, FIGURE_SIZES } from "../components/SiteImage";
import Reveal from "../components/Reveal";
import { SampleRecord } from "../components/SampleRecord";
import { JsonLd, orgSchema, webPageSchema } from "../components/Chrome";
import { GEO_ONE_FORM, PREVIEW } from "../lib/site";

export const metadata: Metadata = {
  title: "Udyog House — Discover. Trust. Source. | Capability, on record.",
  description:
    "Discover manufacturers by what they can make. A capability record for tool rooms and mould makers in Vasai East. Preview — planned, not live.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/` },
  openGraph: {
    title: "Udyog House — Discover. Trust. Source.",
    description: "Capability, on record. A capability record for tool rooms and mould makers in Vasai East.",
    url: `${PREVIEW}/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Udyog House — Discover. Trust. Source.",
    description: "Capability, on record. A capability record for tool rooms and mould makers in Vasai East.",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={orgSchema()} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Udyog House",
        url: `${PREVIEW}/`,
        description: "Capability, on record. A capability record for tool rooms and mould makers in Vasai East.",
      }} />
      <JsonLd data={webPageSchema("/", "Udyog House — Discover. Trust. Source.", "Discover manufacturers by what they can make. A capability record for tool rooms and mould makers in Vasai East.")} />

      <section className="hero-panel hero-anim" aria-labelledby="home-h1">
        <div className="wrap ed-grid">
          <div className="span-7">
            <p className="lede" style={{ fontWeight: 700 }}>Discover. Trust. Source.</p>
            <h1 id="home-h1">Discover manufacturers by what they can make.</h1>
            <p className="lede">
              Most industrial discovery fails at the same point: a shop says it
              &ldquo;does CNC&rdquo; — and nobody can tell what that covers.
            </p>
            <p>
              Computer Numerical Control (CNC) is a category, not a capability. A useful
              record says more: the process, the machine and its travel, the material
              and its grade, the size, the tolerance and how it is measured — and the
              evidence behind each one, with its limits attached.
            </p>
            <p>
              That record is what Udyog House is building, owner by owner, in one
              corridor first.
            </p>
            <p className="hero-cta btn-row">
              <Link className="btn btn-copper" href="/manufacturers">Build a draft record</Link>
              <Link className="btn btn-outline" href="/buyers">Check a brief</Link>
            </p>
          </div>
          <div className="span-5">
            <SampleRecord />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="exists-heading">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">What exists today</p>
            <h2 id="exists-heading">One honest paragraph, before anything else</h2>
            <p>
              This preview site contains pages and two working tools. It contains no
              manufacturer profile, no directory, no search, no match, no quotation,
              and no order system. No check has been performed on any real
              manufacturer, and no evidence label is applied to anyone here. The
              tools below run in your browser only: they draft a record and a
              question sheet, and they send nothing anywhere.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="record-heading">
        <div className="wrap ed-grid">
          <div className="span-7">
            <Reveal>
              <p className="eyebrow">The record, first</p>
              <h2 id="record-heading">A capability record you can actually read</h2>
              <p>
                The same field from this record — CNC milling in stainless steel at
                ±0.02–0.05 mm — is traced through every evidence level on{" "}
                <Link href="/trust-evidence">Trust &amp; Evidence</Link>, with the
                limits at each rung.
              </p>
            </Reveal>
          </div>
          <div className="span-5">
            <Reveal>
              <h3>How to read this record</h3>
              <ol className="ruled-list">
                <li><strong>1 — Process, then machine.</strong> A process name alone is not a filter. The machine and its travel decide whether a job fits at all.</li>
                <li><strong>2 — Grade, not just material.</strong> Stainless steel alone cannot be quoted. SS 316, in a stated condition, with a certificate answer, can.</li>
                <li><strong>3 — Tolerance with a feature.</strong> ±0.02–0.05 mm means something only on a named feature, at a named size, with a named instrument.</li>
                <li><strong>4 — Evidence per field.</strong> The label belongs to one field, never to the business as a whole. A strong label on one field says nothing about the others.</li>
              </ol>
              <figure className="figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SiteImage src="/img/cnc-hero-1600.webp" srcSet={imgSet("cnc-hero", [800, 1200, 1600])} sizes={FIGURE_SIZES} width="1600" height="1067" alt="A computer-controlled milling machine cutting a metal part, with coolant visible" loading="lazy" />
                <figcaption>Illustrative workshop detail — not a Udyog House facility, member, or job.</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-heading">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">How a record is built</p>
            <h2 id="how-heading">Declare, check, approve — in that order</h2>
          </Reveal>
          <ol className="step-list">
            <li>
              <span className="step-num" aria-hidden="true">1</span>
              <div>
                <h3>Declare</h3>
                <p>The owner states capability in their own words: process, machine, material and grade, size, tolerance, and what the shop does not do. That statement is labelled P0, supplier-declared, and nothing is upgraded by being written down.</p>
              </div>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">2</span>
              <div>
                <h3>Check, with limits</h3>
                <p>Each field can earn a higher label only with a stated check: a document received, fields cross-checked against a named source, capability observed on a named machine, or a past transaction evidenced. Every label carries its scope, method, checker, date, and limits. See <Link href="/trust-evidence">Trust &amp; Evidence</Link>.</p>
              </div>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">3</span>
              <div>
                <h3>Approve, then publish</h3>
                <p>{`You approve every field. Or it does not go up.`} Approval is recorded per field. Nothing is approved or published yet, because no profile exists yet.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="corridor-heading">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Starting place</p>
            <h2 id="corridor-heading">One corridor first. Not everywhere, all at once.</h2>
            <p>
              Vasai East, in Palghar district, Maharashtra, is the corridor where
              the record starts. {GEO_ONE_FORM} No other
              cluster is claimed until it is genuinely built there — including
              Bhosari, Pimpri-Chinchwad, and Chakan, which are named here only as
              a future direction, not a present claim.
            </p>
            <p>
              Job-work here means work on a customer&apos;s order or material. It is
              a commercial arrangement, not a process: the process is still CNC
              milling, turning, grinding, or mould making, and the record says which.
            </p>
            <p>
              The corridor schematic is on{" "}
              <Link href="/about#a-corridor">About</Link>. How this grows, phase by
              phase, is on{" "}
              <Link href="/about#phases">About</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="doors-heading">
        <div className="wrap">
          <Reveal>
            <h2 id="doors-heading">Start where you stand</h2>
            <div className="two-col">
              <section className="door" aria-labelledby="m-door">
                <h3 id="m-door">For manufacturers</h3>
                <p>Build a draft record for what your shop can actually make, and see what it still needs before anyone should rely on it. No enquiry is guaranteed.</p>
                <p><Link href="/manufacturers">Build a draft record</Link></p>
              </section>
              <section className="door" aria-labelledby="b-door">
                <h3 id="b-door">For buyers</h3>
                <p>Check a brief before sharing a drawing: the questions to ask, and the evidence to request, for the job you describe. No shop, price, or lead time is shown, because none exists here yet.</p>
                <p><Link href="/buyers">Check a brief</Link></p>
              </section>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="wrap wrap-narrow">
          <Reveal>
            <p className="eyebrow">Questions, answered plainly</p>
            <h2 id="faq-heading">Questions buyers and shops actually ask</h2>
          </Reveal>
          <details><summary>What is a capability record?</summary><p>A structured statement of what a shop can make: process, machine and travel, material and grade, size, tolerance with its feature and finish, inspection method — and the evidence behind each field, with its limits. One field, one label, no blanket claim.</p></details>
          <details><summary>How is this different from a directory?</summary><p>A directory lists names and categories. A record answers the question a directory cannot: what this shop can actually make, at what tolerance, in what material, on what evidence. No directory exists here yet, and none is claimed.</p></details>
          <details><summary>Why start narrow, in one corridor?</summary><p>Because a record is only as good as its checks, and checks need a place: shops that can be visited, work that can be witnessed, and deliveries that can be made. So the record starts in one corridor and earns the next one. {GEO_ONE_FORM} See the <a href="#corridor-heading">corridor section</a> above.</p></details>
          <details><summary>Can I search for a shop on this site today?</summary><p>Not yet. There is no shop to search for here. What you can do today is build a draft record or check a brief, in your browser, and judge whether the record itself is worth your time.</p></details>
          <details><summary>What should I do before sharing a drawing?</summary><p>Check the brief first: process, material and grade, tolerance band, quantity band, and the evidence you want to see. Share drawings only through a direct, agreed channel once a shop and a scope are clear.</p></details>
          <p>
            <Link href="/manufacturers">Build a draft record</Link>
            {" · "}
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </section>
    </>
  );
}
