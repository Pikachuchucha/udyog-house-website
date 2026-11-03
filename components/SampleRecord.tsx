import { SAMPLE } from "../lib/site";

/* D8: THE SAME illustrative record on Home and Trust, headed everywhere
   "ILLUSTRATIVE EXAMPLE: NOT A REAL MANUFACTURER". No real-sounding
   business name, no address, no contact, no fictional live profile. */
export function SampleRecord() {
  return (
    <div className="record-sheet" aria-label="Illustrative capability record example">
      <div className="record-sheet-head">
        <strong>{SAMPLE.heading}</strong>
        <span>Draft: P0 only</span>
      </div>
      <dl>
        <div className="record-row"><dt>Business</dt><dd>{SAMPLE.business}</dd></div>
        <div className="record-row"><dt>Process</dt><dd>{SAMPLE.process}</dd></div>
        <div className="record-row"><dt>Service type</dt><dd>{SAMPLE.serviceType}</dd></div>
        <div className="record-row"><dt>Machine + travel</dt><dd>{SAMPLE.machine}</dd></div>
        <div className="record-row"><dt>Material</dt><dd>{SAMPLE.material}</dd></div>
        <div className="record-row"><dt>Size (dimension) band</dt><dd>{SAMPLE.size}</dd></div>
        <div className="record-row"><dt>Quantity band</dt><dd>{SAMPLE.quantity}</dd></div>
        <div className="record-row"><dt>Tolerance + finish</dt><dd>{SAMPLE.tolerance}</dd></div>
        <div className="record-row"><dt>Inspection</dt><dd>{SAMPLE.inspection}</dd></div>
        <div className="record-row"><dt>Evidence label</dt><dd>{SAMPLE.evidence}</dd></div>
      </dl>
      <p className="small secondary" style={{ padding: "0 1.25rem 1rem", margin: 0 }}>
        Certificate availability alone does not earn P1: receipt and logging do.
        Commercial facts (lead time, payment, delivery) are not part of this draft yet.
      </p>
    </div>
  );
}

/* D8 worked trace: ONE field (CNC milling, stainless steel, ±0.02–0.05 mm)
   traced P0→P4, with limits at each rung. Trust page only. */
export function SampleTrace() {
  return (
    <table>
      <caption>One field, traced through every evidence level, with limits</caption>
      <thead>
        <tr><th scope="col">Level</th><th scope="col">What it would add for this field</th><th scope="col">Limit: what it still does not prove</th></tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Level">P0: Supplier-declared</td>
          <td data-label="What it would add">The shop states: CNC milling in stainless steel at ±0.02–0.05 mm.</td>
          <td data-label="Limit">Nothing checked. Words alone prove no capability, quality, or delivery.</td>
        </tr>
        <tr>
          <td data-label="Level">P1: Document received</td>
          <td data-label="What it would add">A named document is received and logged, for example, an inspection report for a comparable bore, with its own date.</td>
          <td data-label="Limit">Receipt is not authenticity, currency, or capability. The document must relate to this field; an unrelated document adds nothing here.</td>
        </tr>
        <tr>
          <td data-label="Level">P2-ID: Identity cross-checked</td>
          <td data-label="What it would add">Nothing for this field: identity checking is not applicable to this field: identity only, proves nothing about capability.</td>
          <td data-label="Limit">P2-ID answers “who is this?” and nothing else. It adds no capability evidence to this field, and must never be read as support for it.</td>
        </tr>
        <tr>
          <td data-label="Level">P2-DOC: Document cross-checked</td>
          <td data-label="What it would add">Named fields of that report are matched to a named independent source, on a named date.</td>
          <td data-label="Limit">Matching a document does not prove the shop can repeat the work, or that it will.</td>
        </tr>
        <tr>
          <td data-label="Level">P3: Observed capability</td>
          <td data-label="What it would add">A named machine is witnessed producing comparable work in stainless steel, measured by a stated method (bore gauge) to ±0.02–0.05 mm.</td>
          <td data-label="Limit">Point in time only. Seeing one job does not prove ongoing quality, capacity, or delivery. Seeing a machine, a facility, or a finished part without witnessing production and measurement does not earn P3.</td>
        </tr>
        <tr>
          <td data-label="Level">P4: Transaction-evidenced</td>
          <td data-label="What it would add">A past delivery of comparable work is evidenced: counterparty-confirmed evidence is strongest; supplier-held documents are weakest and labelled as such, with transaction date and evidence date.</td>
          <td data-label="Limit">One past transaction only. It does not establish an inspection pass, timeliness, satisfaction, or repeatability, and it is not a rating or a future guarantee.</td>
        </tr>
      </tbody>
    </table>
  );
}
