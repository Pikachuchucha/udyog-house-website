"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "manufacturer" | "buyer" | "general";

/* D6: NOT a native submittable form. A div with a button, JS-handled draft
   preview only. With JS off the button does nothing and no data can enter
   a URL — the noscript note says exactly that. Success never echoes
   personal data back. Consent starts unticked. */
export default function PreviewForm({ variant, title, idPrefix }: {
  variant: Variant; title: string; idPrefix: string;
}) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>([]);
  const [done, setDone] = useState(false);
  const [prefilled, setPrefilled] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const p = idPrefix;

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { message?: string };
      if (detail?.message) { setMessage(detail.message); setPrefilled(true); setDone(false); }
    };
    window.addEventListener("uh:prefill", handler);
    return () => window.removeEventListener("uh:prefill", handler);
  }, []);

  useEffect(() => {
    if (errors.length > 0) errorRef.current?.focus();
  }, [errors]);
  useEffect(() => {
    if (done) successRef.current?.focus();
  }, [done]);

  const fieldError = (field: string) => errors.find((e) => e.field === field)?.message;
  const describedBy = (field: string, hintId?: string) =>
    [fieldError(field) ? `${p}-${field}-error` : undefined, hintId].filter(Boolean).join(" ") || undefined;

  function onPreview() {
    const next: { field: string; message: string }[] = [];
    if (!name.trim()) next.push({ field: "name", message: "Please enter your name." });
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.push({ field: "email", message: "Please enter a valid email address." });
    }
    if (phone.trim() && phone.replace(/[\d+\- ]/g, "").length > 0) {
      next.push({ field: "phone", message: "Please enter a phone or WhatsApp number using digits, spaces, + and - only." });
    }
    if (!consent) next.push({ field: "consent", message: "Please tick the consent box to continue." });
    setErrors(next);
    if (next.length === 0) setDone(true);
  }

  function resetAll() {
    setName(""); setBusiness(""); setEmail(""); setPhone(""); setMessage("");
    setConsent(false); setErrors([]); setDone(false); setPrefilled(false);
  }

  const messageLabel = variant === "buyer"
    ? "What are you sourcing?"
    : variant === "manufacturer"
      ? "What does your business make?"
      : "Your message";

  return (
    <div className="preview-form" id="preview-form" aria-label={title}>
      <h3>{title}</h3>
      <p><strong>Preview form — sends nothing yet.</strong> Describe your need in general terms only.</p>
      <noscript><p>Without JavaScript this form does not work and sends nothing. No information can be submitted from this page.</p></noscript>
      {prefilled && !done && <p role="status">Your tool draft has been placed in the message field below. You can edit it before previewing.</p>}
      {errors.length > 0 && (
        <div className="error-summary" ref={errorRef} tabIndex={-1} role="alert" aria-labelledby={`${p}-error-heading`}>
          <h4 id={`${p}-error-heading`} style={{ marginTop: 0 }}>Please fix the following</h4>
          <ul>
            {errors.map((e) => (
              <li key={e.field}><a href={`#${p}-${e.field}`}>{e.message}</a></li>
            ))}
          </ul>
        </div>
      )}
      {done ? (
        <div className="success-box" ref={successRef} tabIndex={-1} role="status">
          <p><strong>Preview only — no data has been sent, and no network request was made.</strong></p>
          <p>Nothing you entered was collected or stored. When a live form backend exists, this form will send your message and show a sent confirmation with a reply window instead. Until then, nothing leaves this page.</p>
          <p className="btn-row">
            <button className="btn btn-outline" type="button" onClick={() => setDone(false)}>Edit your draft</button>
            <button className="btn btn-outline" type="button" onClick={resetAll}>Start again</button>
          </p>
        </div>
      ) : (
        <>
          <div>
            <label htmlFor={`${p}-name`}>Your name *</label>
            <input id={`${p}-name`} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)}
              required aria-required="true" aria-invalid={!!fieldError("name")} aria-describedby={describedBy("name")} />
            {fieldError("name") && <p id={`${p}-name-error`} className="field-error">{fieldError("name")}</p>}
          </div>
          {variant !== "general" && (
            <div>
              <label htmlFor={`${p}-business`}>Business name</label>
              <input id={`${p}-business`} autoComplete="organization" value={business} onChange={(e) => setBusiness(e.target.value)} />
            </div>
          )}
          <div>
            <label htmlFor={`${p}-email`}>Email address *</label>
            <input id={`${p}-email`} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}
              required aria-required="true" aria-invalid={!!fieldError("email")} aria-describedby={describedBy("email")} />
            {fieldError("email") && <p id={`${p}-email-error`} className="field-error">{fieldError("email")}</p>}
          </div>
          <div>
            <label htmlFor={`${p}-phone`}>Phone / WhatsApp (optional)</label>
            <input id={`${p}-phone`} type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
              aria-invalid={!!fieldError("phone")} aria-describedby={describedBy("phone")} />
            {fieldError("phone") && <p id={`${p}-phone-error`} className="field-error">{fieldError("phone")}</p>}
          </div>
          <div>
            <label htmlFor={`${p}-message`}>{messageLabel}</label>
            <textarea id={`${p}-message`} value={message} onChange={(e) => setMessage(e.target.value)}
              aria-describedby={`${p}-message-hint`} />
            <p id={`${p}-message-hint`} className="small secondary">
              Do not include confidential drawings, specifications, GST documents,
              identity documents, financial information, customer lists, pricing, or employee personal data.
            </p>
          </div>
          <div className="checkbox-row">
            <input id={`${p}-consent`} type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)}
              aria-required="true" aria-invalid={!!fieldError("consent")} aria-describedby={describedBy("consent")} />
            <label htmlFor={`${p}-consent`} style={{ marginTop: 0 }}>
              I understand this is a preview form, that no data will be sent, and that I should not
              include confidential information. *
            </label>
          </div>
          {fieldError("consent") && <p id={`${p}-consent-error`} className="field-error">{fieldError("consent")}</p>}
          <p className="btn-row">
            <button className="btn" type="button" onClick={onPreview}>Preview draft — nothing is sent</button>
          </p>
          <p className="secondary">* Required. No reply timeframe is promised on this preview site, because no form backend is live yet. See the <a href="/privacy">Privacy (draft)</a> page.</p>
        </>
      )}
    </div>
  );
}
