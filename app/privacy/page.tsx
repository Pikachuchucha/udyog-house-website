import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, FIGURE_SIZES } from "../../components/SiteImage";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema } from "../../components/Chrome";
import { PREVIEW } from "../../lib/site";

export const metadata: Metadata = {
  title: "Privacy (draft) — Udyog House",
  description:
    "Draft privacy page only. Requires qualified legal review and makes no compliance claim. Preview forms send no data.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/privacy/` },
  openGraph: {
    title: "Privacy (draft) — Udyog House",
    description: "Draft privacy page only. Requires qualified legal review and makes no compliance claim.",
    url: `${PREVIEW}/privacy/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: { card: "summary", title: "Privacy (draft) — Udyog House", description: "Draft privacy page only. Requires qualified legal review." },
};

export default function Privacy() {
  return (
    <>
      <JsonLd data={webPageSchema("/privacy/", "Privacy (draft) — Udyog House", "Draft privacy page only. Requires qualified legal review and makes no compliance claim.")} />
      <JsonLd data={breadcrumbSchema([{ label: "Privacy (draft)", path: "/privacy/" }])} />
      <Breadcrumbs items={[{ label: "Privacy (draft)" }]} />
      <section className="section" aria-labelledby="p-h1">
        <div className="wrap wrap-narrow">
          <p><span className="pill-opaque">Privacy — Draft only</span></p>
          <h1 id="p-h1">Privacy</h1>
          <div className="record-sheet">
            <div className="record-sheet-head"><strong>Draft only</strong><span>Legal review required</span></div>
            <div style={{ padding: "1rem 1.25rem" }}>
              <p>This page requires qualified legal review. It makes no claim of legal compliance. It is not a final privacy policy, and it stays out of search results until it is legally final.</p>
            </div>
          </div>
          <figure className="figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <SiteImage src="/img/pillar-abstract-1200.webp" srcSet={imgSet("pillar-abstract", [800, 1200, 1600])} sizes={FIGURE_SIZES} width="1200" height="800" alt="Abstract graphite pillars joined by a copper bar, an echo of the Udyog House monogram" loading="lazy" />
          </figure>
          <h2>What this preview site collects</h2>
          <p>
            On this preview site, forms are previews and send no data, and the tools run
            only in your browser. No information entered on this site is collected or
            stored by it, and no analytics or third-party service runs here.
          </p>
          <h2>What a live site would need to state, before launch</h2>
          <p>
            Before any live launch, this page must state, with qualified legal review:
            exactly what each form asks for and why; what must not be sent; how consent
            is recorded and withdrawn; how information is used, stored, and protected;
            retention periods and response windows for requests; and how to ask for
            correction or removal. None of those decisions is stated here as a fact,
            because none has been made yet.
          </p>
          <h2>Data minimisation</h2>
          <p>
            Forms ask for minimal information only. No unnecessary personal data is
            requested, and no automatic publication follows any draft. A correction and
            removal route for published manufacturer information must be live before
            any profile is ever published; no profile is published here, so no such
            route is live yet.
          </p>
          <p><Link href="/">Home</Link> · <Link href="/contact">Contact / Join</Link></p>
        </div>
      </section>
    </>
  );
}
