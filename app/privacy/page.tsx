import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — Draft — Udyog House (Staging, PLANNED)",
  description:
    "Privacy draft only for Udyog House staging. Requires qualified legal review and makes no compliance claim.",
  robots: { index: false, follow: false },
};

export default function Privacy() {
  return (
    <>
      <p className="mono">PRIVACY — DRAFT ONLY — PLANNED</p>
      <h1>Privacy</h1>
      <div className="copper-bar" aria-hidden="true" />
      <div className="stage-box">
        <p><strong>Draft only. This page requires qualified legal review.</strong></p>
        <p>It makes no claim of legal compliance. It is not a final privacy policy.</p>
      </div>
      <h2>What this staging site collects</h2>
      <p>
        On this staging site, forms are placeholders and send no data. No information submitted
        through a staging form is collected or stored by this site.
      </p>
      <h2>What a live site would need to state, before launch</h2>
      <ul>
        <li>Exactly what information each form asks for, and why.</li>
        <li>What must not be sent: confidential drawings, GST documents, identity documents, and financial information.</li>
        <li>How consent is recorded, and how it can be withdrawn.</li>
        <li>How information is used, stored, and protected.</li>
        <li>Retention periods — not yet decided, and not stated here as a fact.</li>
        <li>Response windows for requests — not yet decided, and not stated here as a fact.</li>
        <li>How to ask for correction or removal of information.</li>
      </ul>
      <h2>Data minimisation</h2>
      <p>
        Forms are designed to ask for minimal information only. No unnecessary personal data is
        requested on this staging site, and no automatic publication follows a form submission.
      </p>
      <h2>Correction and removal</h2>
      <p>
        A correction and removal route for published manufacturer information must be live before
        any profile is ever published. No profile is published on this staging site, so no such
        route is live here yet.
      </p>
    </>
  );
}
