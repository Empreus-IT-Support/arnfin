/**
 * Shared Resend helpers.
 *
 * Required env vars (see .env.example):
 *   RESEND_API_KEY      from the Resend dashboard
 *   CONTACT_FROM        verified sender, e.g. "Arnold & Finlay <website@arnfin.net.au>"
 *                       (the domain must be verified in Resend via DNS)
 *   CONTACT_RECIPIENT   defaults to arnold.finlay@arnfin.net.au
 *   RESEND_AUDIENCE_ID  optional — newsletter signups are added to this audience
 *
 * With no API key configured in DEVELOPMENT, submissions are logged
 * server-side only and the visitor still sees success, so the forms are
 * testable without credentials.
 *
 * In PRODUCTION a missing key is treated as a hard failure — see
 * `skippedIsFatal`. Showing "thank you" for an enquiry that was never
 * delivered would lose real client work, which is worse than showing an error.
 */

export const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

export const FIRM_PHONE = "(07) 5532 7244";

export type SendOutcome = "sent" | "skipped" | "failed";

/**
 * Whether an unconfigured send should surface as an error to the visitor.
 *
 * True in production: a silent no-op there means a lost enquiry. False in dev
 * so the forms can be exercised locally without a Resend account.
 */
export function skippedIsFatal(): boolean {
  return process.env.NODE_ENV === "production";
}

export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function resendKey(): string | undefined {
  return process.env.RESEND_API_KEY;
}

export function sender(): string {
  return process.env.CONTACT_FROM ?? "Arnold & Finlay Website <onboarding@resend.dev>";
}

export function recipient(): string {
  return process.env.CONTACT_RECIPIENT ?? "arnold.finlay@arnfin.net.au";
}

/** Simple branded wrapper so the firm's inbox copy is readable. */
export function wrap(title: string, rows: [string, string][], body?: string) {
  const cells = rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#6b6763;font:14px system-ui;vertical-align:top;white-space:nowrap">${esc(
          k
        )}</td><td style="padding:6px 0;color:#1a1717;font:14px system-ui">${esc(v)}</td></tr>`
    )
    .join("");

  return `<div style="font:15px/1.6 system-ui,-apple-system,sans-serif;color:#1a1717;max-width:600px">
    <div style="border-left:4px solid #ffdd00;padding-left:14px;margin-bottom:20px">
      <h2 style="margin:0;font-size:18px">${esc(title)}</h2>
      <p style="margin:2px 0 0;color:#6b6763;font-size:13px">arnfin.net.au</p>
    </div>
    <table style="border-collapse:collapse">${cells}</table>
    ${
      body
        ? `<div style="margin-top:18px;padding-top:14px;border-top:1px solid #e9e2cd">
             <p style="margin:0 0 6px;color:#6b6763;font-size:13px">Message</p>
             <div style="white-space:pre-wrap">${esc(body)}</div>
           </div>`
        : ""
    }
  </div>`;
}

export async function sendEmail(opts: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SendOutcome> {
  const key = resendKey();
  if (!key) return "skipped";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender(),
      to: [recipient()],
      ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      subject: opts.subject,
      html: opts.html,
    }),
  });
  return res.ok ? "sent" : "failed";
}
