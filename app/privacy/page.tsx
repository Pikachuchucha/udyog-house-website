import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema } from "../../components/Chrome";
import { PREVIEW } from "../../lib/site";

export const metadata: Metadata = {
  title: "Privacy (draft) - Udyog House",
  description:
    "Draft privacy page only. Requires qualified legal review and makes no compliance claim. Tools run in your browser only.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/privacy/` },
  openGraph: {
    title: "Privacy (draft) - Udyog House",
    description: "Draft privacy page only. Requires qualified legal review and makes no compliance claim. Tools run in your browser only.",
    url: `${PREVIEW}/privacy/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: { card: "summary", title: "Privacy (draft) - Udyog House", description: "Draft privacy page only. Requires qualified legal review and makes no compliance claim. Tools run in your browser only." },
};

export default function Privacy() {
  return (
    <>
      <JsonLd data={webPageSchema("/privacy/", "Privacy (draft) - Udyog House", "Draft privacy page only. Requires qualified legal review and makes no compliance claim. Tools run in your browser only.")} />
      <JsonLd data={breadcrumbSchema([{ label: "Privacy (draft)", path: "/privacy/" }])} />
      <Breadcrumbs items={[{ label: "Privacy (draft)" }]} />
      <section className="section" aria-labelledby="p-h1">
        <div className="wrap wrap-narrow">
          <p><span className="pill-opaque">Privacy: Draft only</span></p>
          <h1 id="p-h1">Privacy</h1>
          <div className="record-sheet">
            <div className="record-sheet-head"><strong>Draft only</strong><span>Legal review required</span></div>
            <div style={{ padding: "1rem 1.25rem" }}>
              <p>This page requires qualified legal review. It makes no claim of legal compliance. It is not a final privacy policy, and it stays out of search results until it is legally final.</p>
            </div>
          </div>
          <h2>Data flow, as a record</h2>
          <p>Where information goes on this preview site, row by row. The short answer is: nowhere.</p>
          <div className="record-sheet" aria-label="Preview data-flow record">
            <div className="record-sheet-head"><strong>Data flow: preview</strong><span>Nothing sent</span></div>
            <dl>
              <div className="record-row"><dt>Tools</dt><dd>Run only in your browser. Nothing you enter is sent, stored, or collected.</dd></div>
              <div className="record-row"><dt>Email links</dt><dd>Open your own mail client. The site itself collects nothing from an email you send.</dd></div>
              <div className="record-row"><dt>Analytics and third parties</dt><dd>None run on this preview site.</dd></div>
              <div className="record-row"><dt>A live site would need</dt><dd>With qualified legal review: what each contact route and any future form asks for and why; what must not be sent; how consent is recorded and withdrawn; how information is used, stored, and protected; retention periods and response windows for requests; and how to ask for correction or removal. None of those decisions is stated here as a fact, because none has been made yet.</dd></div>
              <div className="record-row"><dt>Correction and removal</dt><dd>A correction and removal route for published manufacturer information must be live before any profile is ever published. No profile is published here, so no such route is live yet.</dd></div>
            </dl>
          </div>
          <p>
            Data minimisation: tools ask for minimal information only. No unnecessary
            personal data is requested, and no automatic publication follows any draft.
          </p>
          <p><Link href="/">Home</Link> · <Link href="/contact">Contact</Link></p>
        </div>
      </section>
    </>
  );
}
