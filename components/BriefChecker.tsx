"use client";

import { useState } from "react";

const PROCESSES = ["Tool room work", "Mould making", "Mould-base manufacturing", "CNC machining", "VMC machining", "Precision engineering / job-work"];
const MATERIALS = ["Tool steel", "Mild steel / EN series", "Stainless steel", "Aluminium", "Brass / copper alloys", "Engineering plastics"];
const TOLERANCES = ["General (±0.1 mm and looser)", "Precision (±0.02–0.05 mm)", "Fine (±0.01 mm or tighter)"];

export default function BriefChecker() {
  const [process, setProcess] = useState(PROCESSES[3]);
  const [material, setMaterial] = useState(MATERIALS[2]);
  const [tolerance, setTolerance] = useState(TOLERANCES[1]);

  const tight = tolerance.startsWith("Fine");

  return (
    <div className="tool" aria-label="Sourcing brief checker">
      <p className="eyebrow">Working tool — local only, no data sent, no match shown</p>
      <h3>Check a brief in general terms. Get the questions, not a fake match.</h3>
      <p>
        No directory exists yet on this site, so this tool shows <em>no supplier, no price,
        and no lead time</em>. What it does show is what to ask, and what evidence to
        request, for the kind of job you describe — in general terms only.
      </p>
      <noscript>
        <p>Without JavaScript this tool shows an example only — changing the options will not update the questions, and nothing is sent.</p>
      </noscript>
      <div className="tool-grid">
        <div>
          <label htmlFor="bc-process">Process needed</label>
          <select id="bc-process" value={process} onChange={(e) => setProcess(e.target.value)}>
            {PROCESSES.map((p) => (<option key={p}>{p}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="bc-material">Material</label>
          <select id="bc-material" value={material} onChange={(e) => setMaterial(e.target.value)}>
            {MATERIALS.map((m) => (<option key={m}>{m}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="bc-tolerance">Tolerance band</label>
          <select id="bc-tolerance" value={tolerance} onChange={(e) => setTolerance(e.target.value)}>
            {TOLERANCES.map((t) => (<option key={t}>{t}</option>))}
          </select>
        </div>
      </div>

      <div className="tool-output" aria-label="Questions and evidence for this brief">
        <h3>For a {process.toLowerCase()} job in {material.toLowerCase()}, at {tolerance.toLowerCase()}</h3>
        <h4>Ask first</h4>
        <ul>
          <li>Do you regularly work in {material.toLowerCase()} for {process.toLowerCase()} — or would this be a first?</li>
          <li>What tolerance have you actually held on a comparable job, and what record shows it?</li>
          <li>What would stop this job from fitting your current capacity, in plain terms?</li>
        </ul>
        <h4>Evidence to request — and what each level does not prove</h4>
        <ul>
          <li><strong>P0 Supplier-declared:</strong> the shop&apos;s own words. Useful as a starting point; not a check.</li>
          <li><strong>P1 Document received:</strong> a document was received and logged. Receipt is not authenticity, currency, or capability.</li>
          <li><strong>P2 Cross-checked:</strong> named fields matched a named source on a named date. Identity/document only.</li>
          <li><strong>P3 Observed capability:</strong> capability actually seen, by a stated method, at a stated time. Not an ongoing quality guarantee.</li>
        </ul>
        {tight && (
          <p><strong>Fine tolerance — raise the bar.</strong> Do not accept a declared claim alone. Ask for an observed record (P3) for a comparable tolerance, and be explicit about how the part will be measured. A factory visit or a GST document alone does not prove this capability.</p>
        )}
        <h4>Do not send yet</h4>
        <p>Do not send drawings or confidential specifications through this site, or through this tool. Describe the need in general terms first, and share drawings only through a direct, agreed channel once a shop and a scope are clear.</p>
        <p className="secondary">This checker runs only in your browser. Nothing is sent, stored, or matched to a supplier.</p>
      </div>
    </div>
  );
}
