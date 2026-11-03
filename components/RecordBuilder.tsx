"use client";

import { useEffect, useState } from "react";
import {
  PROCESSES, SERVICE_TYPES, MATERIAL_GENERICS, GRADES, CONDITIONS, SIZE_BANDS,
  QUANTITY_BANDS, TOLERANCE_BANDS, FEATURE_TYPES, FINISHES, INSPECTION_METHODS,
  MACHINE_TYPES, joinList, coherenceWarnings,
} from "../lib/site";
import { copyText, printText } from "./toolUtils";

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

function MultiSelect({ idPrefix, legend, options, values, onToggle, hint }: {
  idPrefix: string; legend: string; options: string[]; values: string[];
  onToggle: (v: string) => void; hint?: string;
}) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {hint && <p className="small secondary" style={{ marginTop: "0.35rem" }}>{hint}</p>}
      {options.map((o) => {
        const id = `${idPrefix}-${o.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
        return (
          <div className="checkbox-row" key={o}>
            <input type="checkbox" id={id} checked={values.includes(o)} onChange={() => onToggle(o)} />
            <label htmlFor={id} style={{ marginTop: 0 }}>{o}</label>
          </div>
        );
      })}
    </fieldset>
  );
}

export default function RecordBuilder() {
  const [business, setBusiness] = useState("");
  const [processes, setProcesses] = useState<string[]>([]);
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);
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
  const [copyFailed, setCopyFailed] = useState(false);
  const [printFailed, setPrintFailed] = useState(false);
  const [live, setLive] = useState("Draft record is empty. Choose fields to fill it.");

  const grades = material ? GRADES[material] ?? [] : [];
  const toggle = (list: string[], setList: (v: string[]) => void) => (v: string) =>
    setList(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  /* Completion counts ALL 14 fields, including travel, condition,
     certificate, feature, finish, and inspection. Never a partial count.
     Placeholder selections ("not yet specified" and friends) do NOT count
     as filled: choosing a placeholder is not stating a value. */
  const PLACEHOLDERS = ["Grade not yet specified", "Condition not yet stated", "Feature not yet specified", "Not specified", "Not yet decided"];
  const real = (v: string) => (v && !PLACEHOLDERS.includes(v) ? "x" : "");
  const filled = [
    processes.length ? "x" : "", serviceTypes.length ? "x" : "", machineType,
    travel.trim(), material, real(grade), real(condition), cert, size, quantity,
    tolerance, real(feature), real(finish), real(inspection),
  ].filter(Boolean).length;

  function notes(): string[] {
    const out: string[] = [];
    if (!machineType || !travel.trim()) {
      out.push("Machine envelope still missing: machine type and travel are the first real filters in job-work. A record without them cannot be matched to a job.");
    }
    if (grade === "Grade not yet specified" || !grade) {
      out.push("Grade still missing: nobody quotes a mould or a part in a generic material name. The grade is the quote: name it, or say it is not yet specified.");
    }
    if (tolerance.startsWith("Fine")) {
      out.push("Fine tolerance (±0.01 mm or tighter): declared words are the weakest evidence. Before anyone relies on this, ask what was actually measured, on what comparable job, and what record supports it. A caliper alone does not prove this band: use a micrometer, bore gauge, or coordinate measuring machine (CMM).");
    } else if (tolerance.startsWith("Precision")) {
      out.push("Precision tolerance (±0.02–0.05 mm): name the feature, the finish, and how it will be measured. A tolerance without a feature, a size, and an instrument cannot be checked.");
    }
    if (processes.includes("Mould making")) {
      out.push("For mould making, a complete record also needs: cavity count, runner type, expected shots and mould life, tryout and correction terms, and polishing or texture requirements.");
    }
    if (processes.includes("Mould-base machining")) {
      out.push("For mould-base work, a complete record also needs: plate scope, pocketing, guide pillar and bush, ejector arrangement, water lines, whether raw plates or a fitted base are supplied, and heat treatment.");
    }
    if (serviceTypes.includes("Repair")) {
      out.push("For repair work, a complete record also needs: what is worn or damaged, and whether the original drawing or a sample is available.");
    }
    if (serviceTypes.includes("Modification")) {
      out.push("For modification work, a complete record also needs: what changes from the original, and what must stay unchanged.");
    }
    if (serviceTypes.includes("Maintenance")) {
      out.push("For maintenance work, a complete record also needs: the scope and interval of the maintenance.");
    }
    if (serviceTypes.includes("New")) {
      out.push("For new work, the record must state the full specification up front: grade, tolerance, finish, and inspection, before any drawing is shared.");
    }
    if (condition && condition !== "Condition not yet stated") {
      out.push(`Material condition stated as ${condition.toLowerCase()}: a buyer should ask whether the condition is certified or only declared, and whether heat treatment is included in the quote.`);
    } else if (condition === "Condition not yet stated") {
      out.push("Material condition not yet stated. A quote cannot be compared until the condition is named.");
    }
    if (size) {
      out.push(`At size band ${size.toLowerCase()}, a buyer should ask what machine travel and fixturing this needs. A part that does not fit the envelope cannot be made on that machine.`);
    }
    if (feature && feature !== "Feature not yet specified") {
      out.push(`Tolerance on ${feature.toLowerCase()}: a buyer should ask how that feature will be measured, and from what datum.`);
    } else if (feature === "Feature not yet specified") {
      out.push("Feature not yet specified. A tolerance without a named feature cannot be checked.");
    }
    if (finish && finish !== "Not specified") {
      out.push(`Finish ${finish}: a buyer should ask how the finish will be achieved and checked.`);
    } else if (finish === "Not specified") {
      out.push("Finish not specified. Name the Ra, or state that finish is not critical, or quotes cannot be compared.");
    }
    if (quantity === "Over 100 pieces" || quantity === "Repeat batches") {
      out.push("For larger or repeat quantities, a complete record also needs: batch-to-batch drift, acceptance criteria, and inspection, rework, and scrap cost: who bears them, and how they are decided.");
    }
    if (cert === "No") {
      out.push("No mill certificate: the grade claim stays at P0 (supplier-declared). A mill certificate, received and logged, would support P1 for that field. Receipt alone is still not verification.");
    }
    if (inspection === "Not yet decided") {
      out.push("Inspection method not yet decided: without a stated method and instrument, a tolerance claim cannot be checked at any level above P0.");
    } else if (inspection) {
      out.push(`Inspection by ${inspection.toLowerCase()}: a buyer should ask for a sample inspection record for comparable work, and whether first-article inspection is included.`);
    }
    out.push(...coherenceWarnings(processes, machineType));
    return out;
  }

  const noteList = notes();
  /* Grouping for display only: "missing" notes name a field or detail the
     draft still lacks; everything else is a question to ask before relying
     on the draft. Nothing is dropped: the fallback group is "ask", and the
     copy/print sheet below still carries every note, ungrouped. */
  const noteGroup = (n: string): "missing" | "ask" =>
    /still missing|not yet specified|not yet stated|not specified|not yet decided|also needs|must state the full specification|cannot be compared until/i.test(n)
      ? "missing"
      : "ask";
  const missingNotes = noteList.filter((n) => noteGroup(n) === "missing");
  const askNotes = noteList.filter((n) => noteGroup(n) === "ask");
  const recordOnly = [
    "Capability record: draft (local only, P0 supplier-declared)",
    `Business: ${business || "Not entered (draft only)"}`,
    `Process: ${processes.length ? joinList(processes) : "Not chosen"}`,
    `Service type: ${serviceTypes.length ? joinList(serviceTypes) : "Not chosen"}`,
    `Machine: ${machineType || "Not chosen"}${travel ? `, travel/envelope: ${travel}` : ""}`,
    `Material: ${material || "Not chosen"}${grade ? `, ${grade}` : ""}${condition ? `, ${condition}` : ""}${cert ? `, mill certificate available: ${cert}` : ""}`,
    `Size band: ${size || "Not chosen"}`,
    `Quantity band: ${quantity || "Not chosen"}`,
    `Tolerance: ${tolerance || "Not chosen"}${feature ? ` on ${feature}` : ""}${finish ? `, finish ${finish}` : ""}`,
    `Inspection: ${inspection || "Not chosen"}`,
    "Evidence label: P0: supplier-declared. Not checked, not observed, not transaction-evidenced.",
  ].join("\n");
  const recordText = [
    recordOnly,
    "",
    "What this record still needs:",
    ...(noteList.length ? noteList.map((n) => `- ${n}`) : ["- Every field above, chosen and stated, before anyone should rely on it."]),
  ].join("\n");

  useEffect(() => {
    const t = setTimeout(() => {
      setLive(filled === 0
        ? "Draft record is empty. Choose fields to fill it."
        : `Draft record has ${filled} of 14 fields chosen. ${noteList.length} note${noteList.length === 1 ? "" : "s"} on what it still needs.`);
    }, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [business, processes, serviceTypes, machineType, travel, material, grade, condition, cert, size, quantity, tolerance, feature, finish, inspection]);

  function clearAll() {
    setBusiness(""); setProcesses([]); setServiceTypes([]); setMachineType(""); setTravel("");
    setMaterial(""); setGrade(""); setCondition(""); setCert(""); setSize("");
    setQuantity(""); setTolerance(""); setFeature(""); setFinish(""); setInspection("");
    setCopied(false); setCopyFailed(false); setPrintFailed(false);
  }

  return (
    <div className="tool" aria-label="Capability record builder">
      <p className="eyebrow">Working tool: local only, no data sent</p>
      <h3>Build a draft record. See what it still needs.</h3>
      <p>
        Choose briefly, without drawings or confidential detail. This fills a blank record with <em>your</em> selections only.
        Nothing here is a published profile, a checked claim, or a shop on a list.
        Every field below starts at P0 (supplier-declared) because that is all a
        selection on this page can ever be. Computer Numerical Control (CNC) and
        vertical machining centre (VMC) are spelled out where they first appear.
      </p>
      <noscript><p>Without JavaScript this tool cannot be used interactively. Nothing is sent.</p></noscript>
      <div className="tool-grid">
        <div>
          <label htmlFor="rb-business">Business name (optional, draft only)</label>
          <input id="rb-business" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Your business, if you wish to draft with it" />
        </div>
        <MultiSelect idPrefix="rb-process" legend="Process (choose all that apply)" options={PROCESSES} values={processes} onToggle={toggle(processes, setProcesses)} />
        <MultiSelect idPrefix="rb-service" legend="Service type (choose all that apply)" options={SERVICE_TYPES} values={serviceTypes} onToggle={toggle(serviceTypes, setServiceTypes)}
          hint="Tool-room work covers new work, repair, modification, and maintenance. Say which." />
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
            <strong>Capability record: draft</strong>
            <span>Label: P0 Supplier-declared</span>
          </div>
          <dl>
            <div className="record-row"><dt>Business</dt><dd className={business ? "" : "muted"}>{business || "Not entered (draft only)"}</dd></div>
            <div className="record-row"><dt>Process</dt><dd className={processes.length ? "" : "muted"}>{processes.length ? joinList(processes) : "Not chosen"}</dd></div>
            <div className="record-row"><dt>Service type</dt><dd className={serviceTypes.length ? "" : "muted"}>{serviceTypes.length ? joinList(serviceTypes) : "Not chosen"}</dd></div>
            <div className="record-row"><dt>Machine + travel</dt><dd className={machineType ? "" : "muted"}>{machineType ? `${machineType}${travel ? `, ${travel}` : ""}` : "Not chosen"}</dd></div>
            <div className="record-row"><dt>Material</dt><dd className={material ? "" : "muted"}>{material ? `${material}${grade ? `, ${grade}` : ""}${condition ? `, ${condition}` : ""}${cert ? `, mill certificate: ${cert.toLowerCase()}` : ""}` : "Not chosen"}</dd></div>
            <div className="record-row"><dt>Size band</dt><dd className={size ? "" : "muted"}>{size || "Not chosen"}</dd></div>
            <div className="record-row"><dt>Quantity band</dt><dd className={quantity ? "" : "muted"}>{quantity || "Not chosen"}</dd></div>
            <div className="record-row"><dt>Tolerance + finish</dt><dd className={tolerance ? "" : "muted"}>{tolerance ? `${tolerance}${feature ? ` on ${feature}` : ""}${finish ? `, finish ${finish}` : ""}` : "Not chosen"}</dd></div>
            <div className="record-row"><dt>Inspection</dt><dd className={inspection ? "" : "muted"}>{inspection || "Not chosen"}</dd></div>
            <div className="record-row"><dt>Evidence label</dt><dd>P0 Supplier-declared: your selection here. Not checked, not observed, not transaction-evidenced.</dd></div>
            <div className="record-row"><dt>Owner approval</dt><dd>Not recorded. Nothing is published from this tool.</dd></div>
          </dl>
        </div>
        <p><span className="check-mark" aria-hidden="true">✓ </span>Check status: no check has been performed on this draft: every field is P0, supplier-declared.</p>

        <h3>What this record still needs before anyone should rely on it</h3>
        <details>
          <summary>What the evidence levels mean</summary>
          <ul>
            <li><strong>P1: Document received:</strong> a named document, received and logged. Receipt alone is not verification.</li>
            <li><strong>P2-ID: Identity cross-checked:</strong> identity or authorised representative only, matched to a named source. Proves nothing about capability.</li>
            <li><strong>P2-DOC: Document cross-checked:</strong> named document fields matched to a named source. About documents, not capability.</li>
            <li><strong>P3: Observed capability:</strong> a named machine witnessed producing comparable work, measured by a stated method to a stated tolerance. Point in time only.</li>
            <li><strong>P4: Transaction-evidenced:</strong> only that specific past transaction, by stated evidence. Never a rating or a future guarantee.</li>
          </ul>
        </details>
        {missingNotes.length > 0 && (
          <>
            <h4>Missing from this draft</h4>
            <ul>
              {missingNotes.map((n) => (<li key={n}>{n}</li>))}
            </ul>
          </>
        )}
        {askNotes.length > 0 && (
          <>
            <h4>Ask before anyone relies on it</h4>
            <ul>
              {askNotes.map((n) => (<li key={n}>{n}</li>))}
            </ul>
          </>
        )}
        <div aria-live="polite" className="small secondary"><p>{live}</p></div>
        <p className="btn-row">
          <button className="btn" type="button" onClick={() => copyText(recordText, setCopied, setCopyFailed)}>Copy draft record</button>
          <button className="btn btn-outline" type="button" onClick={() => { if (!printText("Draft capability record", recordText)) setPrintFailed(true); else setPrintFailed(false); }}>Print draft record</button>
          <button className="btn btn-outline" type="button" onClick={clearAll}>Clear draft</button>
        </p>
        {copied && <p role="status">Draft record copied to your clipboard.</p>}
        {copyFailed && (
          <div>
            <p role="alert">Copy did not work. Select the text below.</p>
            <textarea readOnly value={recordText} aria-label="Draft record text to copy manually" rows={12} />
          </div>
        )}
        {printFailed && (
          <div className="print-fallback">
            <p role="alert">The print popup was blocked. Use your browser print on the text below instead.</p>
            <pre>{recordText}</pre>
            <p className="btn-row">
              <button className="btn btn-outline" type="button" onClick={() => window.print()}>Print this page</button>
            </p>
          </div>
        )}
        <p className="secondary">Draft only. Nothing on this page is sent, stored, published, or checked.</p>
      </div>
    </div>
  );
}
