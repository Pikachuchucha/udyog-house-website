import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderForm from "../../components/PlaceholderForm";
import BriefChecker from "../../components/BriefChecker";

export const metadata: Metadata = {
  title: "For Buyers — Udyog House (Preview, PLANNED)",
  description:
    "Know who can make it before you send the drawing. Udyog House is building clearer industrial discovery, beginning in Maharashtra. Preview: no searchable database or guaranteed supplier match exists here.",
  robots: { index: false, follow: false },
};

export default function Buyers() {
  return (
    <>
      <section className="section section-dark" aria-labelledby="b-h1">
        <div className="wrap">
          <p className="eyebrow">For buyers — Planned, concept only</p>
          <h1 id="b-h1">Know who can make it before you send the drawing.</h1>
          <p className="lede">
            The most expensive mistake in sourcing is not a bad price. It is a
            conversation that starts with a drawing, before anyone has checked
            whether the shop works in that material, at that tolerance, at all.
          </p>
          <p><span className="pill">PLANNED</span> No database, no guaranteed match, no quotation system is live here.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="b-checker">
        <div className="wrap">
          <div className="section-head">
            <span className="section-no">01</span>
            <div>
              <p className="eyebrow">A tool, not a match</p>
              <h2 id="b-checker">Check the brief first. Then talk.</h2>
              <p>Use it in general terms. It will not show you a supplier — because there is no list yet — and that honesty is the point.</p>
            </div>
          </div>
          <BriefChecker />
        </div>
      </section>

      <section className="section section-white" aria-labelledby="b-future">
        <div className="wrap">
          <div className="section-head">
            <span className="section-no">02</span>
            <div>
              <p className="eyebrow">What future discovery would cover — planned only</p>
              <h2 id="b-future">Processes, machines, materials, dimensions, tolerances, evidence</h2>
            </div>
          </div>
          <div className="grid-three">
            <div className="card"><p className="mono">Processes</p><h3>Tool room, mould, CNC, VMC, job-work</h3><p>Discovery by what a shop actually does, not by a generic category label.</p></div>
            <div className="card"><p className="mono">Materials &amp; tolerances</p><h3>The two facts that kill most briefs</h3><p>Material worked with, and tolerance actually held — with the record behind each.</p></div>
            <div className="card"><p className="mono">Evidence</p><h3>P0 to P4, with limits</h3><p>Declared, received, cross-checked, observed, transaction-evidenced. See <Link href="/trust-evidence">Trust &amp; Evidence</Link>.</p></div>
          </div>
          <h3>Three conversation starters — not live search categories</h3>
          <p>These are the kinds of jobs a conversation would start from. They are not pages, listings, or search results, and no shop is attached to any of them yet.</p>
          <div className="grid-three">
            <div className="card"><p className="mono">Job starter 1</p><h3>Need a mould made</h3><p>Start with: mould type in general terms, material, size band, tolerance band, and what evidence you want to see first.</p></div>
            <div className="card"><p className="mono">Job starter 2</p><h3>Need CNC job-work</h3><p>Start with: process, material, tolerance band, and quantity band — in general terms, before any drawing is shared.</p></div>
            <div className="card"><p className="mono">Job starter 3</p><h3>Need a mould-base</h3><p>Start with: mould-base type in general terms, steel grade, size band, and the tolerance the base must hold.</p></div>
          </div>
          <h3>What is available today</h3>
          <p>Today, only a conversation is proposed: share a requirement signal in general terms, without drawings, and talk through a sourcing need. No large database, no guaranteed supplier match, no quotation, and no order system is live on this site.</p>
          <h3>No guarantee</h3>
          <p>Udyog House does not guarantee a supplier match, a quotation, quality, delivery, price, or an order. It does not make the product and does not control the supplier.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="b-form">
        <div className="wrap wrap-narrow">
          <div className="section-head">
            <span className="section-no">03</span>
            <div>
              <p className="eyebrow">Conversation form — preview, sends no data</p>
              <h2 id="b-form">Talk to us about a sourcing need</h2>
              <p>Do not send confidential drawings, specifications, GST documents, identity documents, or financial information through the form below.</p>
            </div>
          </div>
          <PlaceholderForm variant="buyer" title="Talk to us about a sourcing need (preview)" />
        </div>
      </section>
    </>
  );
}
