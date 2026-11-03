import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, COLUMN_SIZES } from "../../components/SiteImage";
import Reveal from "../../components/Reveal";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema, LinkedInIcon } from "../../components/Chrome";
import { PREVIEW } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact - Udyog House | Email routes and preview tools",
  description:
    "Email routes for the Udyog House preview, plus tools to assess the idea. Tools run in your browser only.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/contact/` },
  openGraph: {
    title: "Contact - Udyog House",
    description: "Email routes for the Udyog House preview, plus tools to assess the idea. Tools run in your browser only.",
    url: `${PREVIEW}/contact/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact - Udyog House",
    description: "Email routes for the Udyog House preview, plus tools to assess the idea. Tools run in your browser only.",
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={webPageSchema("/contact/", "Contact - Udyog House", "Email routes for the Udyog House preview, plus tools to assess the idea. Tools run in your browser only.")} />
      <JsonLd data={breadcrumbSchema([{ label: "Contact", path: "/contact/" }])} />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="hero-panel hero-anim" aria-labelledby="c-h1">
        <div className="wrap">
          <h1 id="c-h1">Write to us. Start with the tools if you want to judge the idea first.</h1>
          <p className="lede">
            Email routes are published below. The tools remain the fastest way to
            judge the idea: build a draft record if you run a shop, or check a
            brief if you buy.
          </p>
          <p className="hero-cta btn-row">
            <Link className="btn btn-outline" href="/manufacturers">For manufacturers: build a draft record</Link>
            <Link className="btn btn-outline" href="/buyers">For buyers: check a brief</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="c-routes">
        <div className="wrap ed-grid">
          <div className="span-7">
            <Reveal>
              <p className="eyebrow">Email routes</p>
              <h2 id="c-routes">Contact Udyog House</h2>
              <p>
                General enquiries: <a href="mailto:info@udyoghouse.com">info@udyoghouse.com</a>
              </p>
              <p>
                Contact: <a href="mailto:contact@udyoghouse.com">contact@udyoghouse.com</a>
              </p>
              <p>
                Team feedback and suggestions: <a href="mailto:team@udyoghouse.com">team@udyoghouse.com</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/udyog-house" target="_blank" rel="noopener noreferrer" aria-label="Udyog House on LinkedIn">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                    <LinkedInIcon /> Udyog House on LinkedIn
                  </span>
                </a>
              </p>
              <p className="small secondary">Email links open your own mail client. This site collects nothing from an email you send.</p>
              <h3>Have a suggestion?</h3>
              <p>Have a suggestion, question, or something we should improve? We&apos;d love to hear from you.</p>
              <p>Write to us: <a href="mailto:team@udyoghouse.com">team@udyoghouse.com</a></p>
              <p className="small secondary">It helps if you say whether you run a shop or buy, and the process, material, and tolerance in one line.</p>
            </Reveal>
          </div>
          <div className="span-5">
            <Reveal>
              <figure className="figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SiteImage src="/img/material-bars-1200.webp" srcSet={imgSet("material-bars", [800, 1200, 1600])} sizes={COLUMN_SIZES} width="1200" height="800" alt="Bars of steel, aluminium, and copper racked in a workshop store" loading="lazy" />
                <figcaption>Illustrative material store, not a Udyog House facility or member stock.</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="c-next">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">What happens next</p>
            <h2 id="c-next">The honest next step today</h2>
            <p>
              The tools remain the way to assess this idea today: both run in your
              browser, both are copyable and printable, and neither sends anything
              anywhere. Email is the contact route for everything else. No reply
              timeframe is promised.
            </p>
            <p className="btn-row">
              <Link className="btn btn-outline" href="/manufacturers">For manufacturers: build a draft record</Link>
              <Link className="btn btn-outline" href="/buyers">For buyers: check a brief</Link>
            </p>
          </Reveal>
          <p>
            <Link href="/">Home</Link>
            {" · "}
            <Link href="/trust-evidence">Trust &amp; Evidence</Link>
          </p>
        </div>
      </section>
    </>
  );
}
