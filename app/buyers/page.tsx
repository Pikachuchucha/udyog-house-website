import type { Metadata } from "next";
import PlaceholderForm from "../../components/PlaceholderForm";

export const metadata: Metadata = {
  title: "For Buyers — Udyog House (Staging, PLANNED)",
  description:
    "Udyog House is building clearer industrial discovery, beginning in Maharashtra. No searchable database or guaranteed supplier match exists on this staging site.",
  robots: { index: false, follow: false },
};

export default function Buyers() {
  return (
    <>
      <p className="mono">FOR BUYERS — PLANNED</p>
      <h1>Know who can make it before you send the drawing.</h1>
      <div className="copper-bar" aria-hidden="true" />
      <div className="stage-box">
        <p><strong>Concept only. Discovery capability on this site is early-stage, and no database exists yet.</strong></p>
        <p>Do not send drawings or confidential specifications through this site.</p>
      </div>
      <h2>What future discovery would cover</h2>
      <p>As a planned direction only, not a live search:</p>
      <ul>
        <li>Processes</li>
        <li>Machines</li>
        <li>Materials</li>
        <li>Dimensions and tolerances</li>
        <li>Evidence, labelled P0 to P4 — see <a href="/trust-evidence">Trust &amp; Evidence</a></li>
      </ul>
      <h2>What is available today</h2>
      <p>
        Today, only a conversation is proposed: a buyer can share a requirement signal in general
        terms, without drawings, and talk through a sourcing need. No large database, no guaranteed
        supplier match, no quotation, and no order system is live on this site.
      </p>
      <h2>No guarantee</h2>
      <p>
        Udyog House does not guarantee a supplier match, a quotation, quality, delivery, price, or
        an order. It does not make the product and does not control the supplier.
      </p>
      <h2>What not to send</h2>
      <p>
        Do not send confidential drawings, specifications, GST documents, identity documents, or
        financial information through the form below. The form is a staging placeholder and sends
        no data.
      </p>
      <PlaceholderForm variant="buyer" title="Talk to us about a sourcing need (staging)" />
    </>
  );
}
