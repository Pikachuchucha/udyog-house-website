import type { Metadata } from "next";
import SiteImage from "../components/SiteImage";
import Link from "next/link";
import RecordBuilder from "../components/RecordBuilder";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Udyog House — Discover. Trust. Source. | Capability, on record.",
  description:
    "Discover manufacturers by what they can make. Udyog House is building India's industrial discovery and sourcing network, beginning in Maharashtra, starting with structured, owner-approved capability records in Vasai East. Preview: all services PLANNED, none live.",
  robots: { index: false, follow: false },
};

const CAPTION = "AI-generated editorial illustration — not a Udyog House facility or member.";

export default function Home() {
  return (
    <>
      <section className="hero hero-anim" aria-label="Introduction">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <SiteImage src="/img/cnc-hero-1600.webp" srcSet="/img/cnc-hero-800.webp 800w, /img/cnc-hero-1200.webp 1200w, /img/cnc-hero-1600.webp 1600w" sizes="100vw" alt="" fetchPriority="high" />
        </div>
        <div className="wrap hero-inner">
          <div className="hero-logo-row">
            <span className="logo-panel">
              {/* Original logo on a white panel — transparent variant is for light backgrounds only. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <SiteImage src="/logo/uh-monogram-320.png" alt="Udyog House monogram: three graphite pillars joined by a copper crossbar" width="72" height="72" />
            </span>
            <p className="mono" style={{ color: "var(--grey)" }}>Three pillars. One copper connection.<br />The record, not the decoration.</p>
          </div>
          <p className="hero-tag">Discover. <span>Trust.</span> Source.</p>
          <h1>Discover manufacturers by <span className="copper-word">what they can make.</span></h1>
          <p className="lede">
            Not by category. Not by claim. By process, machine, material,
            dimension, tolerance — and the evidence behind each one.
          </p>
          <p>
            Udyog House is building that record, owner by owner, starting in
            Vasai East. It is not a directory yet, and this preview does not
            pretend otherwise.
          </p>
          <p className="hero-cta">
            <Link className="btn btn-light" href="/manufacturers">For manufacturers — build your record</Link>
            <Link className="btn btn-light-secondary" href="/buyers">For buyers — start a conversation</Link>
          </p>
          <div className="copper-draw" aria-hidden="true" />
          <dl className="hero-spec">
            <div><dt>Starting place</dt><dd>Vasai East / Waliv / Sativali / Gokhivare</dd></div>
            <div><dt>First record</dt><dd>Tool rooms, mould makers, mould-base, CNC / VMC, precision job-work</dd></div>
            <div><dt>Status today</dt><dd><span className="pill">PLANNED</span> No directory, search, or profile is live.</dd></div>
            <div><dt>Supporting line</dt><dd>Capability, on record.</dd></div>
          </dl>
          <p className="mono" style={{ color: "var(--grey)", marginTop: "1rem" }}>{CAPTION}</p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((n) => (
            <span key={n}>Tool rooms <b>·</b> Mould makers <b>·</b> Mould-base <b>·</b> CNC / VMC <b>·</b> Precision job-work <b>·</b> Vasai East <b>·</b> Waliv <b>·</b> Sativali <b>·</b> Gokhivare <b>·</b> Capability, on record <b>·</b>&nbsp;</span>
          ))}
        </div>
      </div>

      <Reveal>
        <section className="section" aria-labelledby="record-heading">
          <div className="wrap ed-grid">
            <div className="span-5">
              <span className="section-no">01</span>
              <p className="eyebrow">The record, before the network</p>
              <h2 id="record-heading">A capability record you can actually read</h2>
              <p className="pull">Most industrial discovery fails at the same point: a shop says it <em>“does CNC”</em> — and nobody can tell what that covers.</p>
              <p>
                To what tolerance, in what material, or on what evidence? The record
                is Udyog House&apos;s answer to that exact gap.
              </p>
              <figure className="figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SiteImage src="/img/macro-mould-1200.webp" srcSet="/img/macro-mould-800.webp 800w, /img/macro-mould-1200.webp 1200w" sizes="(max-width: 1080px) 100vw, 45vw" alt="Macro detail of a mould plate beside a measuring caliper, with copper-coloured chips" loading="lazy" />
                <figcaption><strong>Detail matters more than the brochure.</strong> {CAPTION}</figcaption>
              </figure>
            </div>
            <div className="span-7">
              <RecordBuilder />
              <p className="secondary">
                Try it. The record above is a draft in your browser only. It is not
                published, not sent, and not checked — and it says so, in the record itself.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section section-dark" aria-labelledby="pillars-heading">
        <div className="wrap">
          <Reveal>
            <span className="section-no">02</span>
            <p className="eyebrow">Discover. Trust. Source. — as a direction, not a live service</p>
            <h2 id="pillars-heading">Three words. Three different jobs.</h2>
            <div className="pillar-strip" aria-hidden="true"><i /><i /><i className="copper" /></div>
          </Reveal>
          <div className="pillar-row">
            <Reveal delay={0} className="pillar-col"><h3>Discover</h3><p><span className="pill">PLANNED</span></p><p>Find a shop by process, machine, material, dimension, tolerance, and evidence — only when real, owner-approved profiles exist. No search exists today.</p></Reveal>
            <Reveal delay={120} className="pillar-col copper-col"><h3>Trust</h3><p><span className="pill">PLANNED</span></p><p>Evidence labels P0 to P4, each with scope, method, checker, date, and limits. No blanket &ldquo;verified&rdquo; claim, ever. See <Link href="/trust-evidence">Trust &amp; Evidence</Link>.</p></Reveal>
            <Reveal delay={240} className="pillar-col"><h3>Source</h3><p><span className="pill">PLANNED</span></p><p>Clearer conversations about a sourcing need, before drawings are shared. No quotation, matching, or order system is live.</p></Reveal>
          </div>
          <p>The copper column is not decoration. It is the connection the whole idea depends on: a declared claim, joined to a stated check.</p>
        </div>
      </section>

      <div className="image-band">
        <SiteImage src="/img/workbench-hands-1600.webp" srcSet="/img/workbench-hands-800.webp 800w, /img/workbench-hands-1200.webp 1200w, /img/workbench-hands-1600.webp 1600w" sizes="100vw" alt="" loading="lazy" />
        <div className="band-caption">
          <p className="eyebrow">The check, in practice</p>
          <p className="pull" style={{ color: "var(--ivory)" }}>A record is only as good as the check behind it.</p>
          <p className="mono">{CAPTION}</p>
        </div>
      </div>

      <Reveal>
        <section className="section section-white" aria-labelledby="how-heading">
          <div className="wrap ed-grid">
            <div className="span-4">
              <span className="section-no">03</span>
              <p className="eyebrow">How it works today — honestly</p>
              <h2 id="how-heading">Today, the work is the record. Not the platform.</h2>
              <p className="big-num" aria-hidden="true">01 → 03</p>
            </div>
            <div className="span-8">
              <div className="grid-three">
                <div className="card"><p className="mono">Step 1 — Declare</p><h3>Owner states it, in their own words</h3><p>Process, machines, materials, dimensions, tolerances. Labelled P0 Supplier-declared. Nothing is upgraded by being written down.</p></div>
                <div className="card"><p className="mono">Step 2 — Show the check</p><h3>Evidence, with its limits attached</h3><p>Document received, cross-checked, observed, or transaction-evidenced — each with scope, source, method, checker, date, and limits. See the ladder on <Link href="/trust-evidence">Trust &amp; Evidence</Link>.</p></div>
                <div className="card"><p className="mono">Step 3 — Approve, then publish</p><h3>Nothing goes live without the owner</h3><p>No profile is published without owner approval for that field, and a correction or removal route must be live before any profile is ever published. Neither exists yet, because no profile exists yet.</p></div>
              </div>
              <h3>Where we are today — the short version</h3>
              <table>
                <thead><tr><th scope="col">Item</th><th scope="col">Status</th><th scope="col">What that means</th></tr></thead>
                <tbody>
                  <tr><td data-label="Item">This preview website</td><td data-label="Status"><span className="pill">PLANNED</span></td><td data-label="What that means">Pages exist as a preview. No service is live.</td></tr>
                  <tr><td data-label="Item">Manufacturer directory</td><td data-label="Status"><span className="pill">PLANNED</span></td><td data-label="What that means">Not built, and not published, until real owner-approved profiles exist.</td></tr>
                  <tr><td data-label="Item">Capability search</td><td data-label="Status"><span className="pill">PLANNED</span></td><td data-label="What that means">Not built. No search results exist on this site.</td></tr>
                  <tr><td data-label="Item">RFQ, matching, Order Room</td><td data-label="Status"><span className="pill">PLANNED</span></td><td data-label="What that means">Roadmap only. Not built and not offered.</td></tr>
                  <tr><td data-label="Item">Live service</td><td data-label="Status"><span className="pill">NONE</span></td><td data-label="What that means">Nothing here is described as Live, and nothing is in pilot.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section" aria-labelledby="corridor-heading">
          <div className="wrap ed-grid">
            <div className="span-7">
              <span className="section-no">04</span>
              <p className="eyebrow">Starting place — schematic, not to scale</p>
              <h2 id="corridor-heading">One corridor first. Not India, all at once.</h2>
              <p className="lede">Vasai East is the starting node. The rest of the strip is a direction, not a claim.</p>
              <div className="corridor">
                <p className="mono">Corridor — Vasai East / Waliv / Sativali / Gokhivare · Mumbai industrial belt · Maharashtra first</p>
                <div className="corridor-track">
                  <span className="corridor-node active">Vasai East — starting here</span>
                  <span className="corridor-link" aria-hidden="true" />
                  <span className="corridor-node">Waliv — next, when built</span>
                  <span className="corridor-link" aria-hidden="true" />
                  <span className="corridor-node">Sativali — next, when built</span>
                  <span className="corridor-link" aria-hidden="true" />
                  <span className="corridor-node">Gokhivare — next, when built</span>
                </div>
                <p className="corridor-note">Schematic only, not to scale, not a map of members. Future clusters including Bhosari, Pimpri-Chinchwad, and Chakan are only for when the network is genuinely built there — they are not claimed now.</p>
              </div>
              <div className="grid-two">
                <section className="door" aria-labelledby="m-door">
                  <h2 id="m-door">For manufacturers</h2>
                  <p>Be discovered for what you can make. A structured record, in your own approved words, with the evidence and its limits shown alongside it.</p>
                  <p>No enquiry or order is guaranteed. No price is announced.</p>
                  <p><Link className="btn" href="/manufacturers">Express interest in a founding profile</Link></p>
                </section>
                <section className="door" aria-labelledby="b-door">
                  <h2 id="b-door">For buyers</h2>
                  <p>Talk through a sourcing need in general terms, before any drawing is shared. Learn what to ask, and what evidence to request, for the job you describe.</p>
                  <p>No search, match, or quotation system is live. Do not send drawings through this site.</p>
                  <p><Link className="btn" href="/buyers">Talk to us about a sourcing need</Link></p>
                </section>
              </div>
            </div>
            <div className="span-5">
              <figure className="figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <SiteImage src="/img/pillar-abstract-1200.webp" srcSet="/img/pillar-abstract-800.webp 800w, /img/pillar-abstract-1200.webp 1200w" sizes="(max-width: 1080px) 100vw, 40vw" alt="Abstract graphite pillars joined by a copper bar — a visual echo of the Udyog House monogram, not the logo itself" loading="lazy" />
                <figcaption><strong>Three pillars. One connection.</strong> An abstract echo of the monogram — not the logo itself, and not a photograph of a facility. {CAPTION}</figcaption>
              </figure>
              <p className="pull" style={{ marginTop: "1.5rem" }}>Start with one corridor, <em>done properly</em> — before claiming a network.</p>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section section-white" aria-labelledby="faq-heading">
        <div className="wrap wrap-narrow">
          <Reveal>
            <span className="section-no">05</span>
            <p className="eyebrow">Questions, answered plainly</p>
            <h2 id="faq-heading">Frequently asked questions</h2>
          </Reveal>
          <details><summary>Can I search manufacturers on this site today?</summary><p>No. There is no directory or search here today. The record builder above shows the shape of the record being built — it contains no shop and no list.</p></details>
          <details><summary>Does expressing interest guarantee enquiries or orders?</summary><p>No. No enquiry, order, match, quality, delivery, or price outcome is guaranteed, on any page of this site.</p></details>
          <details><summary>Should I send drawings through the forms?</summary><p>No. Do not send drawings or confidential specifications through this site. Describe the need in general terms first.</p></details>
          <details><summary>Is there a price for a profile?</summary><p>No price is announced here. Any Free Basic / Paid Professional profile concept is unvalidated, and pricing is not announced.</p></details>
          <details><summary>Are the Privacy and Terms pages final?</summary><p>No. They are drafts only and require qualified legal review. They make no compliance claim.</p></details>
          <details><summary>What happens after I submit a form?</summary><p>On this preview site, nothing is sent. The form states clearly that no data has been sent and no network request was made.</p></details>
          <p>
            <Link className="btn" href="/manufacturers">Express interest in a founding profile</Link>
            <Link className="btn btn-secondary" href="/buyers">Talk to us about a sourcing need</Link>
          </p>
        </div>
      </section>
    </>
  );
}
