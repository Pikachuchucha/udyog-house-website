import type { Metadata } from "next";
import PlaceholderForm from "../../components/PlaceholderForm";

export const metadata: Metadata = {
  title: "Contact / Join — Udyog House (Staging, PLANNED)",
  description:
    "Contact and join forms on this staging site are placeholders and send no data. No public email or phone is published here yet.",
  robots: { index: false, follow: false },
};

export default function Contact() {
  return (
    <>
      <p className="mono">CONTACT / JOIN — PLANNED</p>
      <h1>Contact / Join</h1>
      <div className="copper-bar" aria-hidden="true" />
      <div className="stage-box">
        <p><strong>Staging forms only. No public email or phone is published on this staging site yet.</strong></p>
        <p>No reply timeframe is promised, because no form backend is live yet.</p>
      </div>
      <h2>Three routes, one staging form</h2>
      <ul>
        <li>Manufacturers: express interest in a founding profile — see <a href="/manufacturers">For Manufacturers</a>.</li>
        <li>Buyers: talk through a sourcing need in general terms — see <a href="/buyers">For Buyers</a>.</li>
        <li>General: ask a question or propose a collaboration, using the form below.</li>
      </ul>
      <p>
        Forms ask for minimal information only. Do not send confidential drawings, GST documents,
        identity documents, or financial information. Consent is separate and unticked by default.
      </p>
      <PlaceholderForm variant="general" title="General contact (staging)" />
    </>
  );
}
