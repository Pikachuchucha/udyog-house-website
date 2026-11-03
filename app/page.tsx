import type { Metadata } from "next";
import Link from "next/link";
import RecordBuilder from "../components/RecordBuilder";

export const metadata: Metadata = {
  title: "Udyog House — Discover. Trust. Source. | Capability, on record.",
  description:
    "Discover manufacturers by what they can make. Udyog House is building India's industrial discovery and sourcing network, beginning in Maharashtra, starting with structured, owner-approved capability records in Vasai East. Preview: all services PLANNED, none live.",
  robots: { index: false, follow: false },
};

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="wrap hero-grid">
          <div>
            <div className="hero-logo-panel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/uh-monogram-320.png" alt="Udyog House monogram: three graphite pillars joined by a copper crossbar" width="320" height="320" />
            </div>
            <p className="mono hero-logo-note">Three pillars. One copper connection.<br />The record, not the decoration.</p>
          </div>
          <div>
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
            <p>
              <Link className="btn btn-light" href="/manufacturers">For manufacturers — build your record</Link>
              <Link className="btn btn-light-secondary" href="/buyers">For buyers — start a conversation</Link>
            </p>
          </div>
          <dl className="hero-spec">
            <dt>Starting place</dt>
            <dd>Vasai East / Waliv / Sativali / Gokhivare</dd>
            <dt>First record</dt>
            <dd>Tool rooms, mould makers, mould-base, CNC / VMC, precision job-work</dd>
            <dt>Status today</dt>
            <dd><span className="pill">PLANNED</span> No directory, search, or profile is live.</dd>
            <dt>Supporting line</dt>
            <dd>Capability, on record.</dd>
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="record-heading">
        <div className="wrap">
          <div className="section-head">
            <span className="section-no">01</span>
            <div>
              <p className="eyebrow">The record, before the network</p>
              <h2 id="record-heading">A capability record you can actually read</h2>
              <p className="lede">
                Most industrial discovery fails at the same point: a shop says it
                &ldquo;does CNC&rdquo;, and nobody can tell what that covers, to what
                tolerance, in what material, or on what evidence. The record is
                Udyog House&apos;s answer to that exact gap.
              </p>
            </div>
          </div>
          <RecordBuilder />
          <p className="secondary">
            Try it. The record above is a draft in your browser only. It is not
            published, not sent, and not checked — and it says so, in the record itself.
          </p>
        </div>
      </section>

      <section className="section section-dark" aria-labelledby="pillars-heading">
        <div className="wrap">
          <div className="section-head">
            <span className="section-no">02</span>
            <div>
              <p className="eyebrow">Discover. Trust. Source. — as a direction, not a live service</p>
              <h2 id="pillars-heading">Three words. Three different jobs.</h2>
            </div>
          </div>
          <div className="pillar-row">
            <div className="pillar-col">
              <h3>Discover</h3>
              <p><span className="pill">PLANNED</span></p>
              <p>Find a shop by process, machine, material, dimension, tolerance, and evidence — only when real, owner-approved profiles exist. No search exists today.</p>
            </div>
            <div className="pillar-col copper-col">
              <h3>Trust</h3>
              <p><span className="pill">PLANNED</span></p>
              <p>Evidence labels P0 to P4, each with scope, method, checker, date, and limits. No blanket &ldquo;verified&rdquo; claim, ever. See <Link href="/trust-evidence">Trust &amp; Evidence</Link>.</p>
            </div>
            <div className="pillar-col">
              <h3>Source</h3>
              <p><span className="pill">PLANNED</span></p>
              <p>Clearer conversations about a sourcing need, before drawings are shared. No quotation, matching, or order system is live.</p>
            </div>
          </div>
          <p>The copper column is not decoration. It is the connection the whole idea depends on: a declared claim, joined to a stated check.</p>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="how-heading">
        <div className="wrap">
          <div className="section-head">
            <span className="section-no">03</span>
            <div>
              <p className="eyebrow">How it works today — honestly</p>
              <h2 id="how-heading">Today, the work is the record. Not the platform.</h2>
            </div>
          </div>
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
      </section>

      <section className="section" aria-labelledby="corridor-heading">
        <div className="wrap">
          <div className="section-head">
            <span className="section-no">04</span>
            <div>
              <p className="eyebrow">Starting place — schematic, not to scale</p>
              <h2 id="corridor-heading">One corridor first. Not India, all at once.</h2>
              <p className="lede">Vasai East is the starting node. The rest of the strip is a direction, not a claim.</p>
            </div>
          </div>
          <div className="corridor" role="img" aria-label="Corridor schematic: Vasai East as the starting node, followed by Waliv, Sativali, and Gokhivare as future nodes only when genuinely built">
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
      </section>

      <section className="section section-white" aria-labelledby="faq-heading">
        <div className="wrap wrap-narrow">
          <div className="section-head">
            <span className="section-no">05</span>
            <div>
              <p className="eyebrow">Questions, answered plainly</p>
              <h2 id="faq-heading">Frequently asked questions</h2>
            </div>
          </div>
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
