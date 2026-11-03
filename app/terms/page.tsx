import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, FIGURE_SIZES } from "../../components/SiteImage";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema } from "../../components/Chrome";
import { PREVIEW } from "../../lib/site";

export const metadata: Metadata = {
  title: "Terms (draft) — Udyog House",
  description:
    "Terms draft only. Requires qualified legal review and makes no compliance claim. Preview — planned, not live.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/terms/` },
  openGraph: {
    title: "Terms (draft) — Udyog House",
    description: "Terms draft only. Requires qualified legal review and makes no compliance claim.",
    url: `${PREVIEW}/terms/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: { card: "summary", title: "Terms (draft) — Udyog House", description: "Terms draft only. Requires qualified legal review." },
};

export default function Terms() {
  return (
    <>
      <JsonLd data={webPageSchema("/terms/", "Terms (draft) — Udyog House", "Terms draft only. Requires qualified legal review and makes no compliance claim.")} />
      <JsonLd data={breadcrumbSchema([{ label: "Terms (draft)", path: "/terms/" }])} />
      <Breadcrumbs items={[{ label: "Terms (draft)" }]} />
      <section className="section" aria-labelledby="t-h1">
        <div className="wrap wrap-narrow">
          <p><span className="pill-opaque">Terms — Draft only</span></p>
          <h1 id="t-h1">Terms</h1>
          <div className="record-sheet">
            <div className="record-sheet-head"><strong>Draft only</strong><span>Legal review required</span></div>
            <div style={{ padding: "1rem 1.25rem" }}>
              <p>This page requires qualified legal review. It makes no claim of legal compliance. It is not final terms, and it stays out of search results until it is legally final.</p>
            </div>
          </div>
          <figure className="figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <SiteImage src="/img/macro-mould-1200.webp" srcSet={imgSet("macro-mould", [800, 1200, 1600])} sizes={FIGURE_SIZES} width="1200" height="800" alt="Close detail of a machined mould plate surface" loading="lazy" />
            <figcaption>Illustrative mould detail — not a Udyog House facility, member, or job.</figcaption>
          </figure>
          <h2>Draft clauses</h2>
          <p>Numbered for reference only. These are draft clauses, not final terms.</p>
          <ol className="ruled-list">
            <li>
              <h3>Clause 1 — What this preview site is</h3>
              <p>
                This preview site describes a project that is building, not yet established.
                No directory, search, RFQ, matching, dashboard, order system, or paid profile
                is offered here.
              </p>
            </li>
            <li>
              <h3>Clause 2 — No guarantees</h3>
              <p>
                Nothing on this site guarantees enquiries, orders, customers, revenue, a supplier
                match, a quotation, quality, delivery, or price. Udyog House does not make the
                product and does not control the supplier.
              </p>
            </li>
            <li>
              <h3>Clause 3 — What users must not send</h3>
              <p>
                Users must not send confidential drawings, specifications, GST documents, identity
                documents, or financial information through forms on this site. Forms on this
                preview site send no data, and the tools run only in the visitor&apos;s browser.
              </p>
            </li>
            <li>
              <h3>Clause 4 — Evidence labels</h3>
              <p>
                Evidence labels P0 to P4, where described, are definitions only on this preview
                site — a proposed methodology, not an operated one. No label is applied to any
                manufacturer here, and no blanket claim is made.
              </p>
            </li>
            <li>
              <h3>Clause 5 — Future terms</h3>
              <p>
                Final terms, including any terms for a live service, buyer–supplier contracts,
                payment, and dispute handling, are not stated here. They would require qualified
                legal review before any public launch.
              </p>
            </li>
          </ol>
          <p><Link href="/">Home</Link> · <Link href="/contact">Contact</Link></p>
        </div>
      </section>
    </>
  );
}
