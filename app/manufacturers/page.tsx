import type { Metadata } from "next";
import PlaceholderForm from "../../components/PlaceholderForm";

export const metadata: Metadata = {
  title: "For Manufacturers — Udyog House (Staging, PLANNED)",
  description:
    "Udyog House is building structured capability profiles for tool rooms, mould makers and precision businesses. No profile is published yet on this staging site.",
  robots: { index: false, follow: false },
};

export default function Manufacturers() {
  return (
    <>
      <p className="mono">FOR MANUFACTURERS — PLANNED</p>
      <h1>Be discovered for what you can make.</h1>
      <div className="copper-bar" aria-hidden="true" />
      <div className="stage-box">
        <p><strong>This is the direction we are building toward. No profile is published yet.</strong></p>
        <p>Nothing on this page is a live listing, and nothing here guarantees an enquiry or an order.</p>
      </div>
      <h2>Why capability visibility matters</h2>
      <p>
        Buyers look for a specific capability, not a generic category. A structured profile aims to
        state, in plain terms, what a business can make, with what processes and machines, in what
        materials and size ranges, and with what evidence — so the right conversation can start
        sooner, and the wrong one can be avoided earlier.
      </p>
      <h2>What a structured capability profile would contain</h2>
      <p>As a proposed record only, not a live profile:</p>
      <ul>
        <li>Processes the business works with</li>
        <li>Machines and equipment, in general terms</li>
        <li>Materials worked with</li>
        <li>Dimensions and tolerances, where relevant</li>
        <li>Evidence label (P0 to P4) with scope, method, checker, date and limitations — see <a href="/trust-evidence">Trust &amp; Evidence</a></li>
        <li>Owner approval for every published field</li>
      </ul>
      <h2>Owner control and approval</h2>
      <p>
        Information in a profile would be owner-controlled. Nothing would be published without the
        owner&apos;s approval for that field, and a correction or removal route would need to be live
        before any profile is ever published. That route is not live on this staging site, because
        no profile is published here.
      </p>
      <h2>Basic and Professional — concept only</h2>
      <p>
        A Free Basic and Paid Professional profile concept may be explored in future. Pricing and
        paid conversion are not validated, and no price is announced on this staging site. No paid
        tier, checkout, or payment is offered here.
      </p>
      <h2>No guarantee</h2>
      <p>
        A profile, or an expression of interest, does not guarantee enquiries, orders, customers,
        or revenue. That limit is stated here plainly, and it applies to every page on this site.
      </p>
      <h2>Consent and confidentiality</h2>
      <p>
        Forms on this staging site ask for minimal information only, require separate unticked
        consent, and — as a staging placeholder — send no data at all. Do not send confidential
        drawings, GST documents, identity documents, or financial information.
      </p>
      <PlaceholderForm variant="manufacturer" title="Express interest in a founding profile (staging)" />
    </>
  );
}
