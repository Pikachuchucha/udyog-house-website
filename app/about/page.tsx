import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, FIGURE_SIZES } from "../../components/SiteImage";
import Reveal from "../../components/Reveal";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema } from "../../components/Chrome";
import { GEO_ONE_FORM, IMAGERY_NOTE, PREVIEW } from "../../lib/site";

export const metadata: Metadata = {
  title: "About — Udyog House | Capability record for Vasai East first",
  description:
    "Udyog House is building a capability record for Vasai East first: who it is for, where it starts, and how it grows. Preview — planned, not live.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/about/` },
  openGraph: {
    title: "About — Udyog House",
    description: "Udyog House is building a capability record for Vasai East first: who it is for, where it starts, and how it grows.",
    url: `${PREVIEW}/about/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About — Udyog House",
    description: "Udyog House is building a capability record for Vasai East first: who it is for, where it starts, and how it grows.",
  },
};

export default function About() {
  return (
    <>
      <JsonLd data={webPageSchema("/about/", "About — Udyog House", "Udyog House is building a capability record for Vasai East first: who it is for, where it starts, and how it grows.")} />
      <JsonLd data={breadcrumbSchema([{ label: "About", path: "/about/" }])} />
      <Breadcrumbs items={[{ label: "About" }]} />

      <section className="hero-panel hero-anim" aria-labelledby="a-h1">
        <div className="wrap">
          <p><span className="pill-opaque">About — Preview</span></p>
          <h1 id="a-h1">A record before a network.</h1>
          <p className="lede">
            Udyog House is building a capability record for tool rooms, mould makers,
            and precision job-work — starting in one corridor, and only growing where
            the record has actually been built.
          </p>
          <p>{GEO_ONE_FORM} Vasai East, Palghar district, Maharashtra.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="a-who">
        <div className="wrap ed-grid">
          <div className="span-7">
            <Reveal>
              <p className="eyebrow">Who it is for</p>
              <h2 id="a-who">Two audiences, one record between them</h2>
              <p>
                For manufacturers, the record is a way to be discovered for what a shop
                can actually make — process, machine, material and grade, size,
                tolerance — in words the owner has approved, with the evidence and
                its limits shown beside each field. For buyers, the same record is
                a way to ask better questions before sharing a drawing, and to judge
                a claim by the check behind it rather than by the adjective in front
                of it.
              </p>
              <p>
                The record comes first because everything else — discovery, comparison,
                conversation — depends on it being readable and honest. A network built
                on vague categories would only reproduce the problem it claims to solve.
              </p>
              <h3>Principles, as sentences</h3>
              <p>The site states what it knows and what it does not, in plain language, and it does not fill gaps with invented counts, members, testimonials, logos, partnerships, or revenue. Nothing here guarantees enquiries, orders, quality, delivery, or price. Information is published only with the owner&apos;s approval for that field, and a correction and removal route must be live before any profile is ever published.</p>
              <p>
                <Link href="/manufacturers">For manufacturers — build a draft record</Link><br />
                <Link href="/buyers">For buyers — check a brief</Link>
              </p>
            </Reveal>
          </div>
          <div className="span-5">
            <Reveal>
              <figure className="figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SiteImage src="/img/corridor-evening-1200.webp" srcSet={imgSet("corridor-evening", [800, 1200])} sizes={FIGURE_SIZES} width="1200" height="800" alt="Workshops along an industrial corridor in the evening, shutters and small units, no signage visible" loading="lazy" />
              </figure>
              <p className="small secondary">{IMAGERY_NOTE}</p>
              <figure className="figure figure-logo">
                {/* Transparent variant, used once, on a light background only, at 160px. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SiteImage src="/logo/uh-transparent-160.png" alt="Udyog House monogram" width="160" height="160" loading="lazy" />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="a-roadmap">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">How it grows — planned, not live</p>
            <h2 id="a-roadmap">Four phases, in order, none of them live yet</h2>
            <p>Each phase depends on the one before it being real. No phase is skipped by announcement.</p>
          </Reveal>
          <ol className="step-list">
            <li><span className="step-num" aria-hidden="true">1</span><div><h3>Phase 1 — Capability records</h3><p>Real, owner-approved capability records for tool rooms, mould makers, and precision job-work in Vasai East first.</p></div></li>
            <li><span className="step-num" aria-hidden="true">2</span><div><h3>Phase 2 — Discovery by capability</h3><p>Finding shops by process, machine, material, size, tolerance, and evidence — only once real records exist to search.</p></div></li>
            <li><span className="step-num" aria-hidden="true">3</span><div><h3>Phase 3 — Conversations, quotations, orders</h3><p>Structured conversations from a record, then quotations, comparison, and order milestones — only once discovery is real.</p></div></li>
            <li><span className="step-num" aria-hidden="true">4</span><div><h3>Phase 4 — Wider corridors</h3><p>More clusters, only where the record has genuinely been built there. No cluster is claimed in advance.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="a-founder">
        <div className="wrap wrap-narrow">
          <Reveal>
            <p className="eyebrow">Founder introduction — to be written by the founder</p>
            <h2 id="a-founder">Founder introduction</h2>
            <p>
              This section is intentionally short: the founder has not yet written it,
              and nothing is invented to fill it. The intent behind this project is
              simple — that a small workshop should be found for what it can actually
              make, and that a buyer should be able to tell, before sharing a drawing,
              whether a shop works in that material, at that tolerance, at all. The
              record is the way to make both of those things checkable, rather than
              a matter of who shouts loudest or who happens to be known already.
              Starting in one corridor, and doing that properly, matters more than
              claiming a network that does not exist yet.
            </p>
            <p className="small secondary">No name, background, photograph, or personal claim is published in this section until the founder writes it.</p>
            <p className="btn-row">
              <Link className="btn" href="/manufacturers">For manufacturers</Link>
              <Link className="btn btn-outline" href="/buyers">For buyers</Link>
              <Link className="btn btn-outline" href="/contact">Contact / Join</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
