import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Udyog House — Capability, on record. (Staging, PLANNED)",
  description:
    "Udyog House is building India's industrial discovery and sourcing network, beginning in Maharashtra. This staging site is PLANNED, not live, and is not a directory yet.",
  robots: { index: false, follow: false },
};

export default function Home() {
  return (
    <>
      <p className="mono">UDYOG HOUSE — STAGING — PLANNED</p>
      <h1>Capability, on record.</h1>
      <div className="copper-bar" aria-hidden="true" />
      <div className="stage-box" role="note" aria-label="Stage statement">
        <p>
          <strong>Udyog House is building this record, owner by owner, starting in Vasai East.</strong>
        </p>
        <p>
          It is not a directory yet. There is no searchable list of manufacturers on this site today,
          and no manufacturer profile is published here.
        </p>
      </div>
      <p className="lede">
        Udyog House is building India&apos;s industrial discovery and sourcing network, beginning in
        Maharashtra, starting with structured capability profiles for tool rooms, mould makers and
        precision machining businesses.
      </p>
      <p>
        Finding a manufacturer by what they can actually make is difficult today. Capability information
        is scattered, inconsistent, and hard to compare. The work described here is to make that
        information structured, owner-approved, and labelled by evidence — step by step, starting in
        one corridor.
      </p>

      <div className="grid-two">
        <section className="card" aria-labelledby="manufacturers-door">
          <h2 id="manufacturers-door">For Manufacturers</h2>
          <p>Be discovered for what you can make — as a direction we are building toward, not as a live listing.</p>
          <p><Link className="btn" href="/manufacturers">Express interest in a founding profile</Link></p>
          <p className="secondary">Status: <span className="pill">PLANNED</span> No profile is published yet. No enquiry or order is guaranteed.</p>
        </section>
        <section className="card" aria-labelledby="buyers-door">
          <h2 id="buyers-door">For Buyers</h2>
          <p>Talk through a sourcing need, in general terms, before any drawing is shared.</p>
          <p><Link className="btn" href="/buyers">Talk to us about a sourcing need</Link></p>
          <p className="secondary">Status: <span className="pill">PLANNED</span> No search, match, or quotation system is live. Do not send drawings through this site.</p>
        </section>
      </div>

      <h2>Discover. Trust. Source. — as a vision, not a live service</h2>
      <p>
        The longer-term vision is Discover. Trust. Source.: discover manufacturers by capability, check
        evidence with stated limits, and source with clearer information. At this stage, that vision is
        not yet a working system. The three words below describe what the record is being built to
        support, not what this site does today.
      </p>
      <div className="grid-two">
        <section className="card"><h3>Discover — PLANNED</h3><p>Future discovery by processes, machines, materials, dimensions, tolerances and evidence — only when real, owner-approved profiles exist.</p></section>
        <section className="card"><h3>Trust — PLANNED</h3><p>Evidence labels P0 to P4, each with scope, method, checker, date and limitations. No blanket claim is made on this site.</p></section>
        <section className="card"><h3>Source — PLANNED</h3><p>Clearer conversations about a sourcing need, before requirements or drawings are shared. No order system is live.</p></section>
        <section className="card"><h3>Where we are today</h3><p>See the status table below. It is the honest record for this staging site.</p></section>
      </div>

      <h2>Where we are today</h2>
      <table>
        <thead><tr><th scope="col">Item</th><th scope="col">Status</th><th scope="col">What that means</th></tr></thead>
        <tbody>
          <tr><td data-label="Item">This staging website</td><td data-label="Status"><span className="pill">PLANNED</span></td><td data-label="What that means">Pages exist as a staging build. No service is live.</td></tr>
          <tr><td data-label="Item">Manufacturer directory</td><td data-label="Status"><span className="pill">PLANNED</span></td><td data-label="What that means">Not built, and not published, until real owner-approved profiles exist.</td></tr>
          <tr><td data-label="Item">Capability search</td><td data-label="Status"><span className="pill">PLANNED</span></td><td data-label="What that means">Not built. No search results exist on this site.</td></tr>
          <tr><td data-label="Item">RFQ, matching, Order Room</td><td data-label="Status"><span className="pill">PLANNED</span></td><td data-label="What that means">Roadmap only. Not built and not offered.</td></tr>
          <tr><td data-label="Item">Founding manufacturer interest</td><td data-label="Status"><span className="pill">PLANNED</span></td><td data-label="What that means">Interest form on this site is a staging placeholder and sends no data.</td></tr>
          <tr><td data-label="Item">Buyer discovery conversation</td><td data-label="Status"><span className="pill">PLANNED</span></td><td data-label="What that means">Conversation form on this site is a staging placeholder and sends no data.</td></tr>
          <tr><td data-label="Item">Live service</td><td data-label="Status"><span className="pill">NONE</span></td><td data-label="What that means">Nothing on this site is described as Live, and nothing is in pilot.</td></tr>
        </tbody>
      </table>

      <h2>Why structured capability information matters</h2>
      <p>
        A buyer often needs to know, before sending a requirement, whether a shop works with a given
        process, machine, material, size range, or tolerance — and what evidence supports that. A
        manufacturer often needs to be found for that specific capability, not for a generic category.
        A structured record aims to hold those facts in one place, in the owner&apos;s own approved
        words, with the source and limits stated alongside each fact.
      </p>
      <p>
        That record does not exist yet on this site. The blank template below shows the shape of the
        record being built. It contains no shop, machine, or data.
      </p>

      <h2>Blank capability-record template — no data</h2>
      <table>
        <thead><tr><th scope="col">Field</th><th scope="col">Record</th></tr></thead>
        <tbody>
          <tr><td data-label="Field">Business name</td><td data-label="Record">Not yet recorded. Nothing is published here.</td></tr>
          <tr><td data-label="Field">Processes</td><td data-label="Record">Not yet recorded.</td></tr>
          <tr><td data-label="Field">Machines</td><td data-label="Record">Not yet recorded.</td></tr>
          <tr><td data-label="Field">Materials</td><td data-label="Record">Not yet recorded.</td></tr>
          <tr><td data-label="Field">Dimensions and tolerances</td><td data-label="Record">Not yet recorded.</td></tr>
          <tr><td data-label="Field">Evidence label</td><td data-label="Record">No label applied. See <Link href="/trust-evidence">Trust &amp; Evidence</Link> for P0 to P4 definitions only.</td></tr>
          <tr><td data-label="Field">Owner approval</td><td data-label="Record">Required before any profile is ever published. No approval is recorded here.</td></tr>
        </tbody>
      </table>

      <h2>Starting place</h2>
      <p>
        Initial ecosystem: tool rooms, mould makers, mould-base manufacturers, CNC / VMC machining,
        precision engineering, industrial job-work, and adjacent manufacturing capabilities.
        Initial cluster: Vasai East / Waliv / Sativali / Gokhivare and the wider Mumbai industrial
        belt. Maharashtra first. Future clusters, including Bhosari, Pimpri-Chinchwad and Chakan,
        are only for when the network is genuinely built there — they are not claimed now.
      </p>

      <h2>Frequently asked questions — honest answers only</h2>
      <h3>What is Udyog House building?</h3>
      <p>A structured, owner-approved capability record for industrial manufacturers, beginning in Maharashtra. It is building, not yet established.</p>
      <h3>Can I search manufacturers on this site today?</h3>
      <p>No. There is no directory or search on this site today.</p>
      <h3>Does expressing interest guarantee enquiries or orders?</h3>
      <p>No. No enquiry, order, match, quality, delivery, or price outcome is guaranteed.</p>
      <h3>Should I send drawings through the forms?</h3>
      <p>No. Do not send drawings or confidential specifications through this site.</p>
      <h3>Are the Privacy and Terms pages final?</h3>
      <p>No. They are drafts only and require qualified legal review. They make no compliance claim.</p>
      <h3>Is there a price for a profile?</h3>
      <p>No price is announced on this staging site. Any Basic or Professional profile concept is unvalidated, and pricing is not announced.</p>
      <h3>What happens after I submit a form?</h3>
      <p>On this staging site, nothing is sent. The form states clearly that no data has been sent and no network request was made.</p>

      <p>
        <Link className="btn" href="/manufacturers">Express interest in a founding profile</Link>
        <Link className="btn btn-secondary" href="/buyers">Talk to us about a sourcing need</Link>
      </p>
    </>
  );
}
