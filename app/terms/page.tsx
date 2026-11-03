import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — Draft — Udyog House (Staging, PLANNED)",
  description:
    "Terms draft only for Udyog House staging. Requires qualified legal review and makes no compliance claim.",
  robots: { index: false, follow: false },
};

export default function Terms() {
  return (
    <>
      <p className="mono">TERMS — DRAFT ONLY — PLANNED</p>
      <h1>Terms</h1>
      <div className="copper-bar" aria-hidden="true" />
      <div className="stage-box">
        <p><strong>Draft only. This page requires qualified legal review.</strong></p>
        <p>It makes no claim of legal compliance. It is not final terms.</p>
      </div>
      <h2>What this staging site is</h2>
      <p>
        This staging site describes a project that is building, not yet established. No directory,
        search, RFQ, matching, dashboard, order system, or paid profile is offered here.
      </p>
      <h2>No guarantees</h2>
      <p>
        Nothing on this site guarantees enquiries, orders, customers, revenue, a supplier match,
        a quotation, quality, delivery, or price. Udyog House does not make the product and does
        not control the supplier.
      </p>
      <h2>What users must not send</h2>
      <p>
        Users must not send confidential drawings, specifications, GST documents, identity
        documents, or financial information through forms on this site. Forms on this staging
        site send no data.
      </p>
      <h2>Evidence labels</h2>
      <p>
        Evidence labels P0 to P4, where described, are definitions only on this staging site.
        No label is applied to any manufacturer here, and no blanket claim is made.
      </p>
      <h2>Future terms</h2>
      <p>
        Final terms, including any terms for a live service, buyer–supplier contracts, payment,
        and dispute handling, are not stated here. They would require qualified legal review
        before any public launch.
      </p>
    </>
  );
}
