"use client";

import { useState } from "react";

type Variant = "manufacturer" | "buyer" | "general";

export default function PlaceholderForm({ variant, title }: { variant: Variant; title: string }) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: string[] = [];
    if (!name.trim()) nextErrors.push("Please enter your name.");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.push("Please enter a valid email address.");
    }
    if (!consent) nextErrors.push("Please tick the consent box to continue.");
    setErrors(nextErrors);
    if (nextErrors.length === 0) {
      // Staging placeholder: deliberately no fetch, no action, no storage.
      setSubmitted(true);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label={title}>
      <h2>{title}</h2>
      <p>
        Staging form only. Do not send confidential drawings, GST documents, identity
        documents, or financial information through this form.
      </p>
      <noscript>
        <p>JavaScript is off: this staging form does not send data.</p>
      </noscript>
      {errors.length > 0 && (
        <div className="error" role="alert">
          <ul>
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}
      {submitted ? (
        <div className="success" role="status">
          <p>
            <strong>Staging placeholder — no data has been sent, and no network request was made.</strong>
          </p>
          <p>Your information was not collected or stored by this form.</p>
        </div>
      ) : (
        <>
          <label htmlFor={`${variant}-name`}>Your name *</label>
          <input id={`${variant}-name`} name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />

          {variant !== "general" && (
            <>
              <label htmlFor={`${variant}-business`}>Business name</label>
              <input id={`${variant}-business`} name="business" autoComplete="organization" value={business} onChange={(e) => setBusiness(e.target.value)} />
            </>
          )}

          <label htmlFor={`${variant}-email`}>Email address *</label>
          <input id={`${variant}-email`} name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor={`${variant}-message`}>
            {variant === "buyer"
              ? "What are you sourcing, in general terms only? (Do not include drawings or confidential specifications.)"
              : variant === "manufacturer"
                ? "What does your business make, in general terms?"
                : "Your message"}
          </label>
          <textarea id={`${variant}-message`} name="message" value={message} onChange={(e) => setMessage(e.target.value)} />

          <div className="checkbox-row">
            <input
              id={`${variant}-consent`}
              name="consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <label htmlFor={`${variant}-consent`} style={{ marginTop: 0 }}>
              I understand this is a staging form, that no data will be sent, and that I should not
              include confidential information. *
            </label>
          </div>

          <button className="btn" type="submit">Send (staging placeholder)</button>
          <p className="secondary">
            * Required. No reply timeframe is promised on this staging site, because no form backend is live yet.
          </p>
        </>
      )}
    </form>
  );
}
