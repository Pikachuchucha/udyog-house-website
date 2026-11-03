/* Shared tool helpers: copy, print (local-only), prefill-into-form.
   Copy/print failures are never silent: callers pass a failure setter and
   render a visible fallback (textarea for copy, on-page printable block
   for print) when it fires. */

export function copyText(
  text: string,
  setCopied: (v: boolean) => void,
  setCopyFailed?: (v: boolean) => void,
) {
  const fail = () => {
    setCopied(false);
    setCopyFailed?.(true);
  };
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setCopyFailed?.(false);
      })
      .catch(fail);
  } else {
    fail();
  }
}

/* Returns true when a print popup opened, false when it was blocked (the
   caller then shows the on-page printable fallback instead). */
export function printText(title: string, text: string): boolean {
  if (typeof window === "undefined") return false;
  const win = window.open("", "_blank", "width=800,height=900");
  if (!win) return false;
  const esc = text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  win.document.write(
    `<!doctype html><html><head><title>${title}</title><style>body{font-family:system-ui,sans-serif;line-height:1.6;padding:2rem}pre{white-space:pre-wrap;font:inherit}</style></head><body><h1>${title}</h1><pre>${esc}</pre><p>Draft only — local copy, nothing sent, nothing published, nothing checked.</p></body></html>`,
  );
  win.document.close();
  win.focus();
  win.print();
  return true;
}

/* Prefill-into-form: the preview form on the same page listens for this
   event. The form APPENDS the draft below any typed text (never overwrites
   it). Nothing is sent by dispatching it. */
export function prefillForm(message: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("uh:prefill", { detail: { message } }));
  }
}
