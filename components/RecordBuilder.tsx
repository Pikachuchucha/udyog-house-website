"use client";

import { useEffect, useState } from "react";
import {
  PROCESSES, SERVICE_TYPES, MATERIAL_GENERICS, GRADES, CONDITIONS, SIZE_BANDS,
  QUANTITY_BANDS, TOLERANCE_BANDS, FEATURE_TYPES, FINISHES, INSPECTION_METHODS,
  MACHINE_TYPES,
} from "../lib/site";
import { copyText, printText, prefillForm } from "./toolUtils";

function Select({ id, label, value, onChange, options, hint }: {
  id: string; label: string; value: string; onChange: (v: string) => void;
  options: string[]; hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}
        aria-describedby={hint ? `${id}-hint` : undefined}>
        <option value="">Choose…</option>
        {options.map((o) => (<option key={o} value={o}>{o}</option>))}
      </select>
      {hint && <p id={`${id}-hint`} className="small secondary">{hint}</p>}
    </div>
  );
}

export default function RecordBuilder() {
  const [business, setBusiness] = useState("");
  const [process, setProcess] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [machineType, setMachineType] = useState("");
  const [travel, setTravel] = useState("");
  const [material, setMaterial] = useState("");
  const [grade, setGrade] = useState("");
  const [condition, setCondition] = useState("");
  const [cert, setCert] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [tolerance, setTolerance] = useState("");
  const [feature, setFeature] = useState("");
  const [finish, setFinish] = useState("");
  const [inspection, setInspection] = useState("");
  const [copied, setCopied] = useState(false);
  const [live, setLive] = useState("Draft record is empty. Choose fields to fill it.");

  const grades = material ? GRADES[material] ?? [] : [];
  const filled = [process, serviceType, machineType, material, grade, size, quantity, tolerance].filter(Boolean).length;

  function notes(): string[] {
    const out: string[] = [];
    if (!machineType || !travel.trim()) {
      out.push("Machine envelope still missing: machine type and travel are the first real filters in job-work. A record without them cannot be matched to a job.");
    }
    if (grade === "Grade not yet specified" || !grade) {
      out.push("Grade still missing: nobody quotes a mould or a part in a generic material name. The grade is the quote — name it, or say it is not yet specified.");
    }
    if (tolerance.startsWith("Fine")) {
      out.push("Fine tolerance (±0.01 mm or tighter): declared words are the weakest evidence. Before anyone relies on this, ask what was actually measured, on what comparable job, and what record supports it. A caliper alone does not prove this band — use a micrometer, bore gauge, or coordinate measuring machine (CMM).");
    } else if (tolerance.startsWith("Precision")) {
      out.push("Precision tolerance (±0.02–0.05 mm): name the feature, the finish, and how it will be measured. A tolerance without a feature, a size, and an instrument cannot be checked.");
    }
    if (process === "Mould making") {
      out.push("For mould making, a complete record also needs: cavity count, runner type, expected shots and mould life, tryout and correction terms, and polishing or texture requirements.");
    }
    if (process === "Mould-base machining") {
      out.push("For mould-base work, a complete record also needs: plate scope, pocketing, guide pillar and bush, ejector arrangement, water lines, whether raw plates or a fitted base are supplied, and heat treatment.");
    }
    if (quantity === "Over 100 pieces" || quantity === "Repeat batches") {
      out.push("For larger or repeat quantities, a complete record also needs: batch-to-batch drift, acceptance criteria, and inspection, rework, and scrap cost — who bears them, and how they are decided.");
    }
    if (cert === "No") {
      out.push("No mill certificate: the grade claim stays at P0 (supplier-declared). A mill certificate, received and logged, would support P1 for that field — receipt alone is still not verification.");
    }
    if (inspection === "Not yet decided") {
      out.push("Inspection method not yet decided: without a stated method and instrument, a tolerance claim cannot be checked at any level above P0.");
    }
    return out;
  }

  const noteList = notes();
  const recordText = [
    "Capability record — draft (local only, P0 supplier-declared)",
    `Business: ${business || "Not entered — draft only"}`,
    `Process: ${process || "Not chosen"}`,
    `Service type: ${serviceType || "Not chosen"}`,
    `Machine: ${machineType || "Not chosen"}${travel ? ` — travel/envelope: ${travel}` : ""}`,
    `Material: ${material || "Not chosen"}${grade ? `, ${grade}` : ""}${condition ? `, ${condition}` : ""}${cert ? `, mill certificate available: ${cert}` : ""}`,
    `Size (dimension) band: ${size || "Not chosen"}`,
    `Quantity band: ${quantity || "Not chosen"}`,
    `Tolerance: ${tolerance || "Not chosen"}${feature ? ` on ${feature}` : ""}${finish ? `, finish ${finish}` : ""}`,
    `Inspection: ${inspection || "Not chosen"}`,
    "Evidence label: P0 — supplier-declared. Not checked, not observed, not transaction-evidenced.",
    "",
    "What this record still needs:",
    ...(noteList.length ? noteList.map((n) => `- ${n}`) : ["- Every field above, chosen and stated, before anyone should rely on it."]),
  ].join("\n");

  useEffect(() => {
    const t = setTimeout(() => {
      setLive(filled === 0
        ? "Draft record is empty. Choose fields to fill it."
        : `Draft record has ${filled} of 8 main fields chosen. ${noteList.length} note${noteList.length === 1 ? "" : "s"} on what it still needs.`);
    }, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [business, process, serviceType, machineType, travel, material, grade, condition, cert, size, quantity, tolerance, feature, finish, inspection]);

  function clearAll() {
    setBusiness(""); setProcess(""); setServiceType(""); setMachineType(""); setTravel("");
    setMaterial(""); setGrade(""); setCondition(""); setCert(""); setSize("");
    setQuantity(""); setTolerance(""); setFeature(""); setFinish(""); setInspection("");
    setCopied(false);
  }

  return (
    <div className="tool" aria-label="Capability record builder">
      <p className="eyebrow">Working tool — local only, no data sent</p>
      <h3>Build a draft record. See what it still needs.</h3>
      <p>
        Choose briefly, without drawings or confidential detail. This fills a blank record with <em>your</em> selections only.
        Nothing here is a published profile, a checked claim, or a shop on a list.
        Every field below starts at P0 — supplier-declared — because that is all a
        selection on this page can ever be. Computer Numerical Control (CNC) and
        vertical machining centre (VMC) are spelled out where they first appear.
      </p>
      <noscript><p>Without JavaScript this tool cannot be used interactively. Nothing is sent.</p></noscript>
      <div className="tool-grid">
        <div>
          <label htmlFor="rb-business">Business name (optional, draft only)</label>
          <input id="rb-business" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Your business, if you wish to draft with it" />
        </div>
        <Select id="rb-process" label="Process" value={process} onChange={setProcess} options={PROCESSES} />
        <Select id="rb-service" label="Service type" value={serviceType} onChange={setServiceType} options={SERVICE_TYPES}
          hint="Tool-room work covers new work, repair, modification, and maintenance — say which." />
        <Select id="rb-machine" label="Machine type" value={machineType} onChange={setMachineType} options={MACHINE_TYPES} />
        <div>
          <label htmlFor="rb-travel">Machine travel / envelope</label>
          <input id="rb-travel" value={travel} onChange={(e) => setTravel(e.target.value)} placeholder="For example: 800 × 500 × 500 mm" />
        </div>
        <Select id="rb-material" label="Material (generic)" value={material} onChange={(v) => { setMaterial(v); setGrade(""); }} options={MATERIAL_GENERICS} />
        <Select id="rb-grade" label="Grade" value={grade} onChange={setGrade} options={grades} />
        <Select id="rb-condition" label="Material condition" value={condition} onChange={setCondition} options={CONDITIONS} />
        <Select id="rb-cert" label="Mill certificate available?" value={cert} onChange={setCert} options={["Yes", "No", "Not known"]} />
        <Select id="rb-size" label="Size (dimension) band" value={size} onChange={setSize} options={SIZE_BANDS} hint="Longest dimension of the part or plate." />
        <Select id="rb-quantity" label="Quantity band" value={quantity} onChange={setQuantity} options={QUANTITY_BANDS} />
        <Select id="rb-tolerance" label="Tolerance band" value={tolerance} onChange={setTolerance} options={TOLERANCE_BANDS} />
        <Select id="rb-feature" label="Feature the tolerance applies to" value={feature} onChange={setFeature} options={FEATURE_TYPES} />
        <Select id="rb-finish" label="Surface finish (Ra)" value={finish} onChange={setFinish} options={FINISHES} />
        <Select id="rb-inspection" label="Inspection method / instrument" value={inspection} onChange={setInspection} options={INSPECTION_METHODS} />
      </div>

      <div className="tool-output">
        <div className="record-sheet" aria-label="Draft capability record">
          <div className="record-sheet-head">
            <strong>Capability record — draft</strong>
            <span>Label: P0 Supplier-declared</span>
          </div>
          <dl>
            <div className="record-row"><dt>Business</dt><dd className={business ? "" : "muted"}>{business || "Not entered — draft only"}</dd></div>
            <div className="record-row"><dt>Process</dt><dd className={process ? "" : "muted"}>{process || "Not chosen"}</dd></div>
            <div className="record-row"><dt>Service type</dt><dd className={serviceType ? "" : "muted"}>{serviceType || "Not chosen"}</dd></div>
            <div className="record-row"><dt>Machine + travel</dt><dd className={machineType ? "" : "muted"}>{machineType ? `${machineType}${travel ? ` — ${travel}` : ""}` : "Not chosen"}</dd></div>
            <div className="record-row"><dt>Material</dt><dd className={material ? "" : "muted"}>{material ? `${material}${grade ? `, ${grade}` : ""}${condition ? `, ${condition}` : ""}${cert ? `, mill certificate: ${cert.toLowerCase()}` : ""}` : "Not chosen"}</dd></div>
            <div className="record-row"><dt>Size (dimension) band</dt><dd className={size ? "" : "muted"}>{size || "Not chosen"}</dd></div>
            <div className="record-row"><dt>Quantity band</dt><dd className={quantity ? "" : "muted"}>{quantity || "Not chosen"}</dd></div>
            <div className="record-row"><dt>Tolerance + finish</dt><dd className={tolerance ? "" : "muted"}>{tolerance ? `${tolerance}${feature ? ` on ${feature}` : ""}${finish ? `, finish ${finish}` : ""}` : "Not chosen"}</dd></div>
            <div className="record-row"><dt>Inspection</dt><dd className={inspection ? "" : "muted"}>{inspection || "Not chosen"}</dd></div>
            <div className="record-row"><dt>Evidence label</dt><dd>P0 Supplier-declared — your selection here. Not checked, not observed, not transaction-evidenced.</dd></div>
            <div className="record-row"><dt>Owner approval</dt><dd>Not recorded. Nothing is published from this tool.</dd></div>
          </dl>
        </div>

        <h3>What this record still needs before anyone should rely on it</h3>
        <ul>
          <li><strong>P1 — Document received:</strong> a named document, received and logged. Receipt alone is not verification.</li>
          <li><strong>P2 — Cross-checked:</strong> named fields matched against a named source, on a named date. Identity or document only — not capability or quality.</li>
          <li><strong>P3 — Observed capability:</strong> a named machine witnessed producing comparable work, measured by a stated method to a stated tolerance. Point in time only.</li>
          <li><strong>P4 — Transaction-evidenced:</strong> only that specific past transaction, by stated evidence. Never a rating or a future guarantee.</li>
        </ul>
        {noteList.length > 0 && (
          <ul>
            {noteList.map((n) => (<li key={n}>{n}</li>))}
          </ul>
        )}
        <div aria-live="polite" className="small secondary"><p>{live}</p></div>
        <p className="btn-row">
          <button className="btn" type="button" onClick={() => copyText(recordText, setCopied)}>Copy draft record</button>
          <button className="btn btn-outline" type="button" onClick={() => printText("Draft capability record", recordText)}>Print draft record</button>
          <a className="btn btn-outline" href="#preview-form" onClick={() => prefillForm(recordText)}>Use this draft in the form below</a>
          <button className="btn btn-outline" type="button" onClick={clearAll}>Clear draft</button>
        </p>
        {copied && <p role="status">Draft record copied to your clipboard.</p>}
        <p className="secondary">Draft only. Nothing on this page is sent, stored, published, or checked.</p>
      </div>
    </div>
  );
}
