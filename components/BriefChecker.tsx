"use client";

import { useEffect, useState } from "react";
import {
  PROCESSES, SERVICE_TYPES, MATERIAL_GENERICS, GRADES, CONDITIONS, SIZE_BANDS,
  QUANTITY_BANDS, TOLERANCE_BANDS, FEATURE_TYPES, FINISHES, INSPECTION_METHODS,
  MACHINE_TYPES, joinList, shortProcess, articleFor, coherenceWarnings,
} from "../lib/site";
import { copyText, printText, prefillForm } from "./toolUtils";

/* Mid-sentence lowercasing that never lowercases acronyms (CNC, VMC, EDM). */
function lowerKeepAcronyms(s: string): string {
  return s.toLowerCase().replace(/\b(cnc|vmc|edm)\b/g, (m) => m.toUpperCase());
}

function Select({ id, label, value, onChange, options }: {
  id: string; label: string; value: string; onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Choose…</option>
        {options.map((o) => (<option key={o} value={o}>{o}</option>))}
      </select>
    </div>
  );
}

function MultiSelect({ idPrefix, legend, options, values, onToggle }: {
  idPrefix: string; legend: string; options: string[]; values: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend>{legend}</legend>
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

export default function BriefChecker() {
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
  const [live, setLive] = useState("Brief checker is empty. Choose a process to see the questions.");

  const grades = material ? GRADES[material] ?? [] : [];
  const toggle = (list: string[], setList: (v: string[]) => void) => (v: string) =>
    setList(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  const shortNames = processes.map(shortProcess);
  const briefLine = processes.length
    ? `For ${articleFor(shortNames[0])} ${joinList(shortNames)} job${serviceTypes.length ? ` (${lowerKeepAcronyms(joinList(serviceTypes))})` : ""}${machineType ? ` on ${lowerKeepAcronyms(machineType)}${travel ? `, travel ${travel}` : ""}` : ""}${material ? ` in ${lowerKeepAcronyms(material)}${grade ? `, ${grade}` : ""}` : ""}${size ? `, size ${lowerKeepAcronyms(size)}` : ""}${quantity ? `, quantity ${lowerKeepAcronyms(quantity)}` : ""}${tolerance ? `, at ${lowerKeepAcronyms(tolerance)}` : ""}`
    : "";

  function askFirst(): string[] {
    if (!processes.length) return [];
    const processPhrase = joinList(shortNames.map(lowerKeepAcronyms));
    const out: string[] = [
      `Do you regularly work in ${material ? lowerKeepAcronyms(material) : "this material"} for ${processPhrase} — or would this be a first?`,
      "What tolerance have you actually held on a comparable job, and what record shows it?",
    ];
    if (machineType && travel) {
      out.push(`You named ${lowerKeepAcronyms(machineType)} with travel ${travel} — ask whether the job, including fixturing, fits that envelope.`);
    } else if (machineType) {
      out.push(`You named ${lowerKeepAcronyms(machineType)} — ask for its travel, since a machine name without travel is half an answer.`);
    } else {
      out.push("What machine and travel would this job need, and does it fit your current capacity, in plain terms?");
    }
    if (processes.includes("Mould making")) {
      out.push("For a mould: how many cavities, what runner, what expected shots and mould life, and what are the tryout and correction terms?");
    }
    if (processes.includes("Mould-base machining")) {
      out.push("For a mould-base: what plate scope, pocketing, guide pillar and bush, ejector arrangement, and water lines — and is heat treatment included?");
    }
    if (tolerance.startsWith("Fine")) {
      out.push("For a fine tolerance: what was measured, on what comparable job, with what instrument — and can that record be shown before any drawing is shared?");
    }
    return out;
  }

  /* Every field drives at least one question or note when chosen. */
  function notes(): string[] {
    const out: string[] = [];
    if (!material || grade === "Grade not yet specified" || !grade) {
      out.push("Name the grade, not just the material family: a quote in “tool steel” or “stainless steel” alone cannot be compared. Ask which grade, in what condition, and whether a mill certificate is available.");
    }
    if (serviceTypes.includes("Repair")) {
      out.push("For a repair: what is worn or damaged, and is the original drawing or a sample available?");
    }
    if (serviceTypes.includes("Modification")) {
      out.push("For a modification: what changes from the original, and what must stay unchanged?");
    }
    if (serviceTypes.includes("Maintenance")) {
      out.push("For maintenance: what is the scope and interval of the maintenance?");
    }
    if (serviceTypes.includes("New")) {
      out.push("For new work: confirm the full specification up front — grade, tolerance, finish, and inspection — before any drawing is shared.");
    }
    if (condition && condition !== "Condition not yet stated") {
      out.push(`Material condition stated as ${condition.toLowerCase()} — ask whether the condition is certified or only declared, and whether heat treatment is included in the quote.`);
    } else if (condition === "Condition not yet stated") {
      out.push("Material condition not yet stated — ask what condition the quote assumes.");
    }
    if (size) {
      out.push(`At size band ${size.toLowerCase()}, ask what machine travel and fixturing this needs — a part that does not fit the envelope cannot be made on that machine.`);
    }
    if (feature && feature !== "Feature not yet specified") {
      out.push(`Tolerance applies to ${feature.toLowerCase()} — ask how that feature will be measured, and from what datum.`);
    } else if (feature === "Feature not yet specified") {
      out.push("Feature not yet specified — a tolerance without a named feature cannot be checked; name the feature first.");
    }
    if (finish && finish !== "Not specified") {
      out.push(`Finish ${finish} — ask how the finish will be achieved and checked.`);
    } else if (finish === "Not specified") {
      out.push("Finish not specified — name the Ra, or state that finish is not critical, or quotes cannot be compared.");
    }
    if (inspection === "Not yet decided") {
      out.push("Inspection method not yet decided: without a stated method and instrument, a tolerance claim cannot be checked above P0.");
    } else if (inspection) {
      out.push(`Inspection by ${inspection.toLowerCase()} — ask for a sample inspection record for comparable work, and whether first-article inspection is included.`);
    }
    if (tolerance.startsWith("Fine")) {
      out.push("Fine tolerance — raise the bar. Do not accept a declared claim alone. Ask for an observed record (P3) for a comparable tolerance, and be explicit about how the part will be measured. A factory visit or an identity document alone does not prove this capability.");
    }
    if (quantity === "Over 100 pieces" || quantity === "Repeat batches") {
      out.push("For larger or repeat quantities, ask about batch-to-batch drift, acceptance criteria, and who bears inspection, rework, and scrap cost.");
    }
    if (cert === "No") {
      out.push("No mill certificate stated: treat the grade as declared only (P0) until a document is received and logged (P1) — and remember receipt alone is not verification.");
    }
    out.push(...coherenceWarnings(processes, machineType));
    return out;
  }

  const asks = askFirst();
  const noteList = notes();
  const evidenceLines = [
    "- P0 Supplier-declared: the shop's own words. A starting point; not a check.",
    "- P1 Document received: a document was received and logged. Receipt is not authenticity, currency, or capability.",
    "- P2-ID Identity cross-checked: identity / authorised representative only. Proves nothing about capability.",
    "- P2-DOC Document cross-checked: named document fields matched to a named source. About documents, not capability.",
    "- P3 Observed capability: a named machine witnessed producing comparable work, measured as stated. Point in time only.",
    "- P4 Transaction-evidenced: only that specific past transaction, by stated evidence. Counterparty-confirmed is strongest; supplier-held documents are weakest. Not a rating or a future guarantee.",
  ];
  /* Prefill carries ONLY the question sheet, never the diagnostic notes. */
  const sheetPrefill = [
    "Brief check — questions and evidence to request (local only, no supplier shown)",
    briefLine || "No brief chosen yet.",
    "",
    "Ask first:",
    ...(asks.length ? asks.map((a) => `- ${a}`) : ["- Choose a process above to see the questions."]),
    "",
    "Evidence to request — and what each level does not prove:",
    ...evidenceLines,
  ].join("\n");
  const sheetText = [
    sheetPrefill,
    "",
    ...(noteList.length ? ["Notes:", ...noteList.map((n) => `- ${n}`), ""] : []),
    "Do not send drawings or confidential specifications through this site. Describe the need in general terms first, and share drawings only through a direct, agreed channel once a shop and a scope are clear.",
  ].join("\n");

  useEffect(() => {
    const t = setTimeout(() => {
      setLive(processes.length
        ? `${briefLine}. ${asks.length} questions and ${noteList.length} note${noteList.length === 1 ? "" : "s"} ready.`
        : "Brief checker is empty. Choose a process to see the questions.");
    }, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processes, serviceTypes, machineType, travel, material, grade, condition, cert, size, quantity, tolerance, feature, finish, inspection]);

  function clearAll() {
    setProcesses([]); setServiceTypes([]); setMachineType(""); setTravel("");
    setMaterial(""); setGrade(""); setCondition("");
    setCert(""); setSize(""); setQuantity(""); setTolerance(""); setFeature("");
    setFinish(""); setInspection(""); setCopied(false); setCopyFailed(false); setPrintFailed(false);
  }

  return (
    <div className="tool" aria-label="Sourcing brief checker">
      <p className="eyebrow">Working tool — local only, no data sent, no match shown</p>
      <h3>Check a brief. Get the questions, not a match.</h3>
      <p>
        No directory exists yet on this site, so this tool shows <em>no supplier, no price,
        and no lead time</em>. What it does show is what to ask, and what evidence to
        request, for the kind of job you describe, without drawings or confidential detail.
      </p>
      <noscript><p>Without JavaScript this tool cannot be used interactively. Nothing is sent.</p></noscript>
      <div className="tool-grid">
        <MultiSelect idPrefix="bc-process" legend="Process needed (choose all that apply)" options={PROCESSES} values={processes} onToggle={toggle(processes, setProcesses)} />
        <MultiSelect idPrefix="bc-service" legend="Service type (choose all that apply)" options={SERVICE_TYPES} values={serviceTypes} onToggle={toggle(serviceTypes, setServiceTypes)} />
        <Select id="bc-machine" label="Machine type" value={machineType} onChange={setMachineType} options={MACHINE_TYPES} />
        <div>
          <label htmlFor="bc-travel">Machine travel / envelope</label>
          <input id="bc-travel" value={travel} onChange={(e) => setTravel(e.target.value)} placeholder="For example: 800 × 500 × 500 mm" />
        </div>
        <Select id="bc-material" label="Material (generic)" value={material} onChange={(v) => { setMaterial(v); setGrade(""); }} options={MATERIAL_GENERICS} />
        <Select id="bc-grade" label="Grade" value={grade} onChange={setGrade} options={grades} />
        <Select id="bc-condition" label="Material condition" value={condition} onChange={setCondition} options={CONDITIONS} />
        <Select id="bc-cert" label="Mill certificate available?" value={cert} onChange={setCert} options={["Yes", "No", "Not known"]} />
        <Select id="bc-size" label="Size (dimension) band" value={size} onChange={setSize} options={SIZE_BANDS} />
        <Select id="bc-quantity" label="Quantity band" value={quantity} onChange={setQuantity} options={QUANTITY_BANDS} />
        <Select id="bc-tolerance" label="Tolerance band" value={tolerance} onChange={setTolerance} options={TOLERANCE_BANDS} />
        <Select id="bc-feature" label="Feature the tolerance applies to" value={feature} onChange={setFeature} options={FEATURE_TYPES} />
        <Select id="bc-finish" label="Surface finish (Ra)" value={finish} onChange={setFinish} options={FINISHES} />
        <Select id="bc-inspection" label="Inspection method / instrument" value={inspection} onChange={setInspection} options={INSPECTION_METHODS} />
      </div>

      <div className="tool-output">
        <h3>{briefLine || "Choose a process to see the questions."}</h3>
        {asks.length > 0 && (
          <>
            <h4>Ask first</h4>
            <ul>{asks.map((a) => (<li key={a}>{a}</li>))}</ul>
          </>
        )}
        <p><span className="check-mark" aria-hidden="true">✓ </span>Check status: no check is claimed here — the list below is what to request, not what has been done.</p>
        <h4>Evidence to request — and what each level does not prove</h4>
        <details>
          <summary>What the evidence levels mean</summary>
          <ul>
            <li><strong>P0 Supplier-declared:</strong> the shop&apos;s own words. A starting point; not a check.</li>
            <li><strong>P1 Document received:</strong> a document was received and logged. Receipt is not authenticity, currency, or capability.</li>
            <li><strong>P2-ID Identity cross-checked:</strong> identity / authorised representative only. Proves nothing about capability.</li>
            <li><strong>P2-DOC Document cross-checked:</strong> named document fields matched to a named source. About documents, not capability.</li>
            <li><strong>P3 Observed capability:</strong> a named machine witnessed producing comparable work, measured as stated. Point in time only.</li>
            <li><strong>P4 Transaction-evidenced:</strong> only that specific past transaction, by stated evidence. Counterparty-confirmed is strongest; supplier-held documents are weakest. Not a rating or a future guarantee.</li>
          </ul>
        </details>
        {noteList.length > 0 && (
          <ul>{noteList.map((n) => (<li key={n}>{n}</li>))}</ul>
        )}
        <h4>Do not send yet</h4>
        <p>Do not send drawings or confidential specifications through this site, or through this tool. Describe the need in general terms first, and share drawings only through a direct, agreed channel once a shop and a scope are clear.</p>
        <div aria-live="polite" className="small secondary"><p>{live}</p></div>
        <p className="btn-row">
          <button className="btn" type="button" onClick={() => copyText(sheetText, setCopied, setCopyFailed)}>Copy question sheet</button>
          <button className="btn btn-outline" type="button" onClick={() => { if (!printText("Brief question sheet", sheetText)) setPrintFailed(true); else setPrintFailed(false); }}>Print question sheet</button>
          <a className="btn btn-outline" href="#preview-form" onClick={() => prefillForm(sheetPrefill)}>Use this sheet in the form below</a>
          <button className="btn btn-outline" type="button" onClick={clearAll}>Clear brief</button>
        </p>
        {copied && <p role="status">Question sheet copied to your clipboard.</p>}
        {copyFailed && (
          <div>
            <p role="alert">Copy did not work — select the text below.</p>
            <textarea readOnly value={sheetText} aria-label="Question sheet text to copy manually" rows={12} />
          </div>
        )}
        {printFailed && (
          <div className="print-fallback">
            <p role="alert">The print popup was blocked. Use your browser print on the text below instead.</p>
            <pre>{sheetText}</pre>
            <p className="btn-row">
              <button className="btn btn-outline" type="button" onClick={() => window.print()}>Print this page</button>
            </p>
          </div>
        )}
        <p className="secondary">This checker runs only in your browser. Nothing is sent, stored, or matched to a supplier.</p>
      </div>
    </div>
  );
}
