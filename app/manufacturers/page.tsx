import type { Metadata } from "next";
import SiteImage from "../../components/SiteImage";
import Link from "next/link";
import PlaceholderForm from "../../components/PlaceholderForm";
import RecordBuilder from "../../components/RecordBuilder";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "For Manufacturers — Udyog House (Preview, PLANNED)",
  description:
    "Be discovered for what you can make. A structured, owner-approved capability record for tool rooms, mould makers, and precision machining — in Vasai East first. Preview: no profile is published yet, no enquiry is guaranteed.",
  robots: { index: false, follow: false },
};

const CAPTION = "AI-generated editorial illustration — not a Udyog House facility or member.";

export default function Manufacturers() {
  return (
    <>
      <section className="hero hero-anim" aria-labelledby="m-h1">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <SiteImage src="/img/workbench-hands-1600.webp" srcSet="/img/workbench-hands-800.webp 800w, /img/workbench-hands-1200.webp 1200w, /img/workbench-hands-1600.webp 1600w" sizes="100vw" alt="" fetchPriority="high" />
        </div>
        <div className="wrap hero-inner">
          <p className="eyebrow">For manufacturers — Planned</p>
          <h1 id="m-h1">Be discovered for what you can make.</h1>
          <p className="lede">
            Not for a generic category. For a process, a machine, a material, a
            tolerance — stated in your own approved words, with the evidence
            and its limits shown beside it.
          </p>
          <p><span className="pill">PLANNED</span> No profile is published yet. No enquiry or order is guaranteed.</p>
          <p className="mono" style={{ color: "var(--grey)" }}>{CAPTION}</p>
        </div>
      </section>

      <Reveal>
        <section className="section" aria-labelledby="m-record">
          <div className="wrap ed-grid">
            <div className="span-5">
              <span className="section-no">01</span>
              <p className="eyebrow">What a record contains</p>
              <h2 id="m-record">The record, field by field</h2>
              <p className="pull">Try the builder. It is the fastest way to see whether this record is <em>worth your time</em> — before you share anything with anyone.</p>
              <figure className="figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SiteImage src="/img/macro-mould-1200.webp" srcSet="/img/macro-mould-800.webp 800w, /img/macro-mould-1200.webp 1200w" sizes="(max-width: 1080px) 100vw, 40vw" alt="Macro detail of a mould plate beside a measuring caliper" loading="lazy" />
                <figcaption><strong>Measured, not merely claimed.</strong> {CAPTION}</figcaption>
              </figure>
            </div>
            <div className="span-7"><RecordBuilder /></div>
          </div>
        </section>
      </Reveal>

      <section className="section section-white" aria-labelledby="m-approval">
        <div className="wrap">
          <Reveal>
            <span className="section-no">02</span>
            <p className="eyebrow">Owner control, not a listing scraped from the web</p>
            <h2 id="m-approval">You approve every field. Or it does not go up.</h2>
          </Reveal>
          <div className="grid-three">
            <div className="card"><p className="mono">01 — Declare</p><h3>Your words first</h3><p>Processes, machines, materials, dimensions, tolerances. Labelled P0 Supplier-declared until a check is stated.</p></div>
            <div className="card"><p className="mono">02 — Check, with limits</p><h3>Evidence, not adjectives</h3><p>Document received, cross-checked, observed, or transaction-evidenced — each with scope, source, method, checker, date, and limits.</p></div>
            <div className="card"><p className="mono">03 — Approve, then publish</p><h3>Correction and removal first</h3><p>A correction/removal route must be live before any profile is ever published. That route is not live here, because no profile is published here.</p></div>
          </div>
          <div className="ed-grid">
            <div className="span-6">
              <h3>Basic and Professional — concept only</h3>
              <p>A Free Basic and Paid Professional profile concept may be explored in future. Pricing and paid conversion are not validated, and no price is announced on this preview site. No paid tier, checkout, or payment is offered here.</p>
            </div>
            <div className="span-6">
              <h3>No guarantee — stated plainly</h3>
              <p>A profile, or an expression of interest, does not guarantee enquiries, orders, customers, or revenue. That limit applies to every page on this site.</p>
              <p><Link href="/trust-evidence">Read the evidence ladder, with its limits →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section" aria-labelledby="m-form">
          <div className="wrap wrap-narrow">
            <span className="section-no">03</span>
            <p className="eyebrow">Founding invitation — preview form, sends no data</p>
            <h2 id="m-form">Express interest in a founding profile</h2>
            <p>Describe what your business makes, in general terms. Do not send drawings, GST documents, identity documents, or financial information.</p>
            <PlaceholderForm variant="manufacturer" title="Founding manufacturer interest (preview)" />
          </div>
        </section>
      </Reveal>
    </>
  );
}
