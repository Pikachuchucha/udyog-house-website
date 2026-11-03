import type { Metadata } from "next";
import Link from "next/link";
import SiteImage, { imgSet, FIGURE_SIZES } from "../../components/SiteImage";
import Reveal from "../../components/Reveal";
import PreviewForm from "../../components/PreviewForm";
import { Breadcrumbs, JsonLd, webPageSchema, breadcrumbSchema } from "../../components/Chrome";
import { PREVIEW } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact — Udyog House | Preview contact",
  description:
    "No public email or phone yet. Use the tools to assess the idea, or leave a preview draft. Preview form — sends nothing yet.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${PREVIEW}/contact/` },
  openGraph: {
    title: "Contact — Udyog House",
    description: "No public email or phone yet. Use the tools to assess the idea, or leave a preview draft.",
    url: `${PREVIEW}/contact/`,
    siteName: "Udyog House",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact — Udyog House",
    description: "No public email or phone yet. Use the tools to assess the idea, or leave a preview draft.",
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={webPageSchema("/contact/", "Contact — Udyog House", "No public email or phone yet. Use the tools to assess the idea, or leave a preview draft.")} />
      <JsonLd data={breadcrumbSchema([{ label: "Contact", path: "/contact/" }])} />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="hero-panel hero-anim" aria-labelledby="c-h1">
        <div className="wrap">
          <h1 id="c-h1">No inbox yet. Start with the tools.</h1>
          <p className="lede">
            There is no public email address, phone number, or reply window published
            on this preview site yet, and no form backend is live. That is stated
            here rather than hidden behind a form that pretends otherwise.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="c-next">
        <div className="wrap ed-grid">
          <div className="span-7">
            <Reveal>
              <p className="eyebrow">What happens next</p>
              <h2 id="c-next">The honest next step today</h2>
              <p>
                The way to assess this idea today is the tools: build a draft record
                if you run a shop, or check a brief if you buy. Both run in your
                browser, both are copyable and printable, and neither sends anything
                anywhere. A real contact route — with a named channel and a reply
                window — is a launch decision, and it will be published as one when
                it exists, rather than implied by a form that goes nowhere.
              </p>
              <p className="btn-row">
                <Link className="btn btn-outline" href="/manufacturers">For manufacturers — build a draft record</Link>
                <Link className="btn btn-outline" href="/buyers">For buyers — check a brief</Link>
              </p>
              <h3>If you still want to leave a note</h3>
              <p>The preview form below takes a draft only. It sends nothing, stores nothing, and promises no reply — because there is no backend to reply from yet. Describe your interest briefly.</p>
            </Reveal>
          </div>
          <div className="span-5">
            <Reveal>
              <figure className="figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SiteImage src="/img/material-bars-1200.webp" srcSet={imgSet("material-bars", [800, 1200, 1600])} sizes={FIGURE_SIZES} width="1200" height="800" alt="Bars of steel, aluminium, and copper racked in a workshop store" loading="lazy" />
                <figcaption>Illustrative material store — not a Udyog House facility or member stock.</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="c-form">
        <div className="wrap wrap-narrow">
          <Reveal>
            <p className="eyebrow">Preview form — secondary to the tools</p>
            <h2 id="c-form">General contact (preview)</h2>
          </Reveal>
          <PreviewForm variant="general" title="General contact (preview)" idPrefix="gen" />
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
