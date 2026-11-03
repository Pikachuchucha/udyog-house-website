"use client";

import { useState } from "react";

const PROCESSES = ["Tool room work", "Mould making", "Mould-base manufacturing", "CNC machining", "VMC machining", "Precision engineering / job-work"];
const MATERIALS = ["Tool steel", "Mild steel / EN series", "Stainless steel", "Aluminium", "Brass / copper alloys", "Engineering plastics", "Other — describe in general terms"];
const TOLERANCES = ["General (±0.1 mm and looser)", "Precision (±0.02–0.05 mm)", "Fine (±0.01 mm or tighter — evidence matters most here)"];

export default function RecordBuilder() {
  const [process, setProcess] = useState(PROCESSES[3]);
  const [material, setMaterial] = useState(MATERIALS[0]);
  const [tolerance, setTolerance] = useState(TOLERANCES[1]);
  const [business, setBusiness] = useState("");

  function clearDraft() {
    setProcess(PROCESSES[3]);
    setMaterial(MATERIALS[0]);
    setTolerance(TOLERANCES[1]);
    setBusiness("");
  }

  return (
    <div className="tool" aria-label="Capability record builder">
      <p className="eyebrow">Working tool — local only, no data sent</p>
      <h3>Build a draft record. See what it still needs.</h3>
      <p>
        Choose in general terms. This fills a blank record with <em>your</em> selections only.
        Nothing here is a published profile, a checked claim, or a shop on a list.
        Every field below starts at P0 — supplier-declared — because that is all a
        selection on this page can ever be.
      </p>
      <div className="tool-grid">
        <div>
          <label htmlFor="rb-business">Business name (optional, draft only)</label>
          <input id="rb-business" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Your business, if you wish to draft with it" />
        </div>
        <div>
          <label htmlFor="rb-process">Process</label>
          <select id="rb-process" value={process} onChange={(e) => setProcess(e.target.value)}>
            {PROCESSES.map((p) => (<option key={p}>{p}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="rb-material">Material worked with</label>
          <select id="rb-material" value={material} onChange={(e) => setMaterial(e.target.value)}>
            {MATERIALS.map((m) => (<option key={m}>{m}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="rb-tolerance">Tolerance band</label>
          <select id="rb-tolerance" value={tolerance} onChange={(e) => setTolerance(e.target.value)}>
            {TOLERANCES.map((t) => (<option key={t}>{t}</option>))}
          </select>
        </div>
      </div>

      <div className="record-sheet" aria-label="Draft capability record">
        <div className="record-sheet-head">
          <strong>Capability record — draft</strong>
          <span>Label: P0 Supplier-declared</span>
        </div>
        <dl>
          <div className="record-row"><dt>Business</dt><dd className={business ? "" : "muted"}>{business || "Not entered — draft only"}</dd></div>
          <div className="record-row"><dt>Process</dt><dd>{process}</dd></div>
          <div className="record-row"><dt>Material</dt><dd>{material}</dd></div>
          <div className="record-row"><dt>Tolerance band</dt><dd>{tolerance}</dd></div>
          <div className="record-row"><dt>Evidence label</dt><dd>P0 Supplier-declared — your selection here. Not checked, not observed, not transaction-evidenced.</dd></div>
          <div className="record-row"><dt>Owner approval</dt><dd>Not recorded. Nothing is published from this tool.</dd></div>
        </dl>
      </div>

      <div className="tool-output" aria-label="What this record still needs">
        <h3>What this record still needs before anyone should rely on it</h3>
        <ul>
          <li><strong>P1 — Document received:</strong> a named document, received and logged. Receipt alone is not verification.</li>
          <li><strong>P2 — Cross-checked:</strong> named fields matched against a named source, on a named date. Identity/document only — not capability or quality.</li>
          <li><strong>P3 — Observed capability:</strong> what was actually seen, where, by whom, by what method. Point in time only.</li>
          <li><strong>P4 — Transaction-evidenced:</strong> only that specific past transaction, by stated evidence. Never a rating or a future guarantee.</li>
        </ul>
        {tolerance.startsWith("Fine") && (
          <p><strong>For a fine tolerance, declared words are the weakest evidence.</strong> Ask what was actually measured, on what job, and what record supports it — before any drawing is shared.</p>
        )}
        <p className="secondary">Draft only. Nothing on this page is sent, stored, published, or checked. Use the Clear draft button to remove your selections from this page.</p>
        <button className="btn btn-secondary" type="button" onClick={clearDraft}>Clear draft</button>
      </div>
    </div>
  );
}
