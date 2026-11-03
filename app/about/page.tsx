import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, FIGURE_SIZES } from "../../components/SiteImage";
import Reveal from "../../components/Reveal";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema } from "../../components/Chrome";
import { GEO_ONE_FORM, PREVIEW } from "../../lib/site";

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
              <p>The site states what it knows and what it does not, in plain language, and it does not fill gaps with invented counts, members, testimonials, logos, partnerships, or revenue. Nothing here guarantees enquiries, orders, quality, delivery, or price. Information is published only with the owner&apos;s approval for that field.</p>
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
                <figcaption>Illustrative corridor evening — not a photograph of Udyog House facilities or members.</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="a-corridor">
        <div className="wrap ed-grid">
          <div className="span-7">
            <Reveal>
              <p className="eyebrow">Where it starts</p>
              <h2 id="a-corridor">Vasai East first, then only where the record is built</h2>
              <p>
                The record starts in Vasai East, Palghar district, Maharashtra, and
                grows only where it has genuinely been built — Waliv, Sativali, and
                Gokhivare next, when built. No other cluster is claimed in advance.
              </p>
              <p>
                The record starts narrow because checks need a place: shops that can
                be visited, work that can be witnessed, and deliveries that can be
                made — so one corridor is earned before the next.
              </p>
            </Reveal>
          </div>
          <div className="span-5">
            <Reveal>
              <div className="corridor-drawing">
                <svg viewBox="0 0 520 220" role="img" aria-label="Schematic corridor drawing: Vasai East first, then Waliv, Sativali, and Gokhivare, not to scale">
                  <defs>
                    <pattern id="grid-about" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e7e2d6" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="520" height="220" fill="url(#grid-about)" />
                  <line x1="40" y1="120" x2="480" y2="120" stroke="#1e2328" strokeWidth="2" />
                  <circle cx="80" cy="120" r="14" fill="#1e2328" />
                  <circle cx="220" cy="120" r="10" fill="#f4f1ea" stroke="#1e2328" strokeWidth="2" />
                  <circle cx="330" cy="120" r="10" fill="#f4f1ea" stroke="#1e2328" strokeWidth="2" />
                  <circle cx="440" cy="120" r="10" fill="#f4f1ea" stroke="#1e2328" strokeWidth="2" />
                  <text x="80" y="160" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e2328">Vasai East</text>
                  <text x="80" y="178" textAnchor="middle" fontSize="11" fill="#5a6772">starting here</text>
                  <text x="220" y="160" textAnchor="middle" fontSize="13" fill="#1e2328">Waliv</text>
                  <text x="330" y="160" textAnchor="middle" fontSize="13" fill="#1e2328">Sativali</text>
                  <text x="440" y="160" textAnchor="middle" fontSize="13" fill="#1e2328">Gokhivare</text>
                  <text x="220" y="178" textAnchor="middle" fontSize="11" fill="#5a6772">next, when built</text>
                  <text x="330" y="178" textAnchor="middle" fontSize="11" fill="#5a6772">next, when built</text>
                  <text x="440" y="178" textAnchor="middle" fontSize="11" fill="#5a6772">next, when built</text>
                  <line x1="480" y1="30" x2="480" y2="60" stroke="#1e2328" strokeWidth="2" />
                  <polygon points="480,18 474,32 486,32" fill="#1e2328" />
                  <text x="480" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e2328">N</text>
                  <text x="40" y="205" fontSize="11" letterSpacing="2" fill="#5a6772">NOT TO SCALE — SCHEMATIC ONLY, NOT A MAP OF MEMBERS</text>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="phases" aria-labelledby="a-roadmap">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">How it grows — planned, not live</p>
            <h2 id="a-roadmap">Four phases, in order, none of them live yet</h2>
            <p>Each phase depends on the one before it being real. No phase is skipped by announcement.</p>
          </Reveal>
          <ol className="ruled-list">
            <li><h3>Phase 1 of 4 — Capability records</h3><p>Real, owner-approved capability records for tool rooms, mould makers, and precision job-work in Vasai East first.</p></li>
            <li><h3>Phase 2 of 4 — Discovery by capability</h3><p>Finding shops by process, machine, material, size, tolerance, and evidence — only once real records exist to search.</p></li>
            <li><h3>Phase 3 of 4 — Conversations, quotations, orders</h3><p>Structured conversations from a record, then quotations, comparison, and order milestones — only once discovery is real.</p></li>
            <li><h3>Phase 4 of 4 — Wider corridors</h3><p>More clusters, only where the record has genuinely been built there. No cluster is claimed in advance.</p></li>
          </ol>
          <Reveal>
            <p>Phase 3 raises an open decision: whether quotations run through Udyog House or direct between buyer and shop is not decided. Nothing in Phase 3 assumes an answer.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="a-founder">
        <div className="wrap wrap-narrow">
          <Reveal>
            <h2 id="a-founder">Why this record, why this corridor</h2>
            <p>
              The intent behind this project is
              simple — that a small workshop should be found for what it can actually
              make, and that a buyer should be able to tell, before sharing a drawing,
              whether a shop works in that material, at that tolerance, at all. The
              record is the way to make both of those things checkable, rather than
              a matter of who shouts loudest or who happens to be known already.
              Starting in one corridor, and doing that properly, matters more than
              claiming a network that does not exist yet.
            </p>
            <p className="small secondary">Written by the founder — to come.</p>
            <p>
              <Link href="/manufacturers">For manufacturers</Link>
              {" · "}
              <Link href="/buyers">For buyers</Link>
              {" · "}
              <Link href="/contact">Contact</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
