"use client";

import { useEffect, useState } from "react";
import {
  PROCESSES, SERVICE_TYPES, MATERIAL_GENERICS, GRADES, CONDITIONS, SIZE_BANDS,
  QUANTITY_BANDS, TOLERANCE_BANDS, FEATURE_TYPES, FINISHES, INSPECTION_METHODS,
} from "../lib/site";
import { copyText, printText, prefillForm } from "./toolUtils";

/* Mid-sentence lowercasing that never lowercases acronyms (CNC, VMC). */
function lowerKeepAcronyms(s: string): string {
  return s.toLowerCase().replace(/\b(cnc|vmc)\b/g, (m) => m.toUpperCase());
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

export default function BriefChecker() {
  const [process, setProcess] = useState("");
  const [serviceType, setServiceType] = useState("");
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
  const [live, setLive] = useState("Brief checker is empty. Choose a process to see the questions.");

  const grades = material ? GRADES[material] ?? [] : [];
  const briefLine = process
    ? `For a ${process} job${serviceType ? ` (${lowerKeepAcronyms(serviceType)})` : ""}${material ? ` in ${lowerKeepAcronyms(material)}${grade ? `, ${grade}` : ""}` : ""}${size ? `, size ${lowerKeepAcronyms(size)}` : ""}${quantity ? `, quantity ${lowerKeepAcronyms(quantity)}` : ""}${tolerance ? `, at ${lowerKeepAcronyms(tolerance)}` : ""}`
    : "";

  function askFirst(): string[] {
    if (!process) return [];
    const out: string[] = [
      `Do you regularly work in ${material ? lowerKeepAcronyms(material) : "this material"} for ${lowerKeepAcronyms(process)} — or would this be a first?`,
      "What tolerance have you actually held on a comparable job, and what record shows it?",
      "What machine and travel would this job need, and does it fit your current capacity, in plain terms?",
    ];
    if (process === "Mould making") {
      out.push("For a mould: how many cavities, what runner, what expected shots and mould life, and what are the tryout and correction terms?");
    }
    if (process === "Mould-base machining") {
      out.push("For a mould-base: what plate scope, pocketing, guide pillar and bush, ejector arrangement, and water lines — and is heat treatment included?");
    }
    if (tolerance.startsWith("Fine")) {
      out.push("For a fine tolerance: what was measured, on what comparable job, with what instrument — and can that record be shown before any drawing is shared?");
    }
    return out;
  }

  function notes(): string[] {
    const out: string[] = [];
    if (!material || grade === "Grade not yet specified" || !grade) {
      out.push("Name the grade, not just the material family: a quote in “tool steel” or “stainless steel” alone cannot be compared. Ask which grade, in what condition, and whether a mill certificate is available.");
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
    return out;
  }

  const asks = askFirst();
  const noteList = notes();
  const sheetText = [
    "Brief check — questions and evidence to request (local only, no supplier shown)",
    briefLine || "No brief chosen yet.",
    "",
    "Ask first:",
    ...(asks.length ? asks.map((a) => `- ${a}`) : ["- Choose a process above to see the questions."]),
    "",
    "Evidence to request — and what each level does not prove:",
    "- P0 Supplier-declared: the shop's own words. A starting point; not a check.",
    "- P1 Document received: a document was received and logged. Receipt is not authenticity, currency, or capability.",
    "- P2 Cross-checked: named fields matched a named source on a named date. Split as P2-ID (identity / authorised representative only) and P2-DOC (named document fields). Identity alone proves nothing about capability.",
    "- P3 Observed capability: a named machine witnessed producing comparable work, measured by a stated method to a stated tolerance. Point in time only.",
    "- P4 Transaction-evidenced: only that specific past transaction, by stated evidence. Counterparty-confirmed is strongest; supplier-held documents are weakest and labelled as such. Not a rating or a future guarantee.",
    "",
    ...(noteList.length ? ["Notes:", ...noteList.map((n) => `- ${n}`), ""] : []),
    "Do not send drawings or confidential specifications through this site. Describe the need in general terms first, and share drawings only through a direct, agreed channel once a shop and a scope are clear.",
  ].join("\n");

  useEffect(() => {
    const t = setTimeout(() => {
      setLive(process
        ? `${briefLine}. ${asks.length} questions and ${noteList.length} note${noteList.length === 1 ? "" : "s"} ready.`
        : "Brief checker is empty. Choose a process to see the questions.");
    }, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [process, serviceType, material, grade, condition, cert, size, quantity, tolerance, feature, finish, inspection]);

  function clearAll() {
    setProcess(""); setServiceType(""); setMaterial(""); setGrade(""); setCondition("");
    setCert(""); setSize(""); setQuantity(""); setTolerance(""); setFeature("");
    setFinish(""); setInspection(""); setCopied(false);
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
        <Select id="bc-process" label="Process needed" value={process} onChange={setProcess} options={PROCESSES} />
        <Select id="bc-service" label="Service type" value={serviceType} onChange={setServiceType} options={SERVICE_TYPES} />
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
        <h4>Evidence to request — and what each level does not prove</h4>
        <ul>
          <li><strong>P0 Supplier-declared:</strong> the shop&apos;s own words. Useful as a starting point; not a check.</li>
          <li><strong>P1 Document received:</strong> a document was received and logged. Receipt is not authenticity, currency, or capability.</li>
          <li><strong>P2 Cross-checked:</strong> named fields matched a named source on a named date. Shown split as P2-ID (identity / authorised representative only) and P2-DOC (named document fields). Identity alone proves nothing about capability.</li>
          <li><strong>P3 Observed capability:</strong> a named machine witnessed producing comparable work, measured by a stated method to a stated tolerance. Not an ongoing quality guarantee.</li>
          <li><strong>P4 Transaction-evidenced:</strong> only that specific past transaction, by stated evidence. Counterparty-confirmed is strongest; supplier-held documents are weakest and labelled as such. Not a rating or a future guarantee.</li>
        </ul>
        {noteList.length > 0 && (
          <ul>{noteList.map((n) => (<li key={n}>{n}</li>))}</ul>
        )}
        <h4>Do not send yet</h4>
        <p>Do not send drawings or confidential specifications through this site, or through this tool. Describe the need in general terms first, and share drawings only through a direct, agreed channel once a shop and a scope are clear.</p>
        <div aria-live="polite" className="small secondary"><p>{live}</p></div>
        <p className="btn-row">
          <button className="btn" type="button" onClick={() => copyText(sheetText, setCopied)}>Copy question sheet</button>
          <button className="btn btn-outline" type="button" onClick={() => printText("Brief question sheet", sheetText)}>Print question sheet</button>
          <a className="btn btn-outline" href="#preview-form" onClick={() => prefillForm(sheetText)}>Use this sheet in the form below</a>
          <button className="btn btn-outline" type="button" onClick={clearAll}>Clear brief</button>
        </p>
        {copied && <p role="status">Question sheet copied to your clipboard.</p>}
        <p className="secondary">This checker runs only in your browser. Nothing is sent, stored, or matched to a supplier.</p>
      </div>
    </div>
  );
}
