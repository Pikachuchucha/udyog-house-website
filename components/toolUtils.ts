/* Shared tool helpers: copy, print (local-only), prefill-into-form. */

export function copyText(text: string, setCopied: (v: boolean) => void) {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => setCopied(true)).catch(() => setCopied(false));
  } else {
    setCopied(false);
  }
}

export function printText(title: string, text: string) {
  if (typeof window === "undefined") return;
  const win = window.open("", "_blank", "width=800,height=900");
  if (!win) return;
  const esc = text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  win.document.write(
    `<!doctype html><html><head><title>${title}</title><style>body{font-family:system-ui,sans-serif;line-height:1.6;padding:2rem}pre{white-space:pre-wrap;font:inherit}</style></head><body><h1>${title}</h1><pre>${esc}</pre><p>Draft only — local copy, nothing sent, nothing published, nothing checked.</p></body></html>`,
  );
  win.document.close();
  win.focus();
  win.print();
}

/* Prefill-into-form: the preview form on the same page listens for this
   event and fills its message field. Nothing is sent by dispatching it. */
export function prefillForm(message: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("uh:prefill", { detail: { message } }));
  }
}
