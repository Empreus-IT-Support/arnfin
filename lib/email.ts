/**
 * Shared email helpers. Delivery goes through Atlas — see lib/atlas.ts.
 *
 * Required env vars (see .env.example):
 *   ATLAS_API_KEY       per-client key from Atlas
 *   CONTACT_FROM        bare sender address Atlas authorises for the key,
 *                       defaults to DoNotReply@arnfin.net.au
 *   CONTACT_RECIPIENT   defaults to arnold.finlay@arnfin.net.au
 *
 * With no API key configured in DEVELOPMENT, submissions are logged
 * server-side only and the visitor still sees success, so the forms are
 * testable without credentials.
 *
 * In PRODUCTION a missing key is treated as a hard failure — see
 * `skippedIsFatal`. Showing "thank you" for an enquiry that was never
 * delivered would lose real client work, which is worse than showing an error.
 */
import { atlasConfigured, sendAtlasEmail } from "@/lib/atlas";

export const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

export const FIRM_PHONE = "(07) 5532 7244";

export type SendOutcome = "sent" | "skipped" | "failed";

/**
 * Whether an unconfigured send should surface as an error to the visitor.
 *
 * True in production: a silent no-op there means a lost enquiry. False in dev
 * so the forms can be exercised locally without an Atlas key.
 */
export function skippedIsFatal(): boolean {
  return process.env.NODE_ENV === "production";
}

export function mailConfigured(): boolean {
  return atlasConfigured();
}

export function sender(): string {
  return process.env.CONTACT_FROM ?? "DoNotReply@arnfin.net.au";
}

export function recipient(): string {
  return process.env.CONTACT_RECIPIENT ?? "arnold.finlay@arnfin.net.au";
}

/**
 * Lay the firm's inbox copy out as plain text. Atlas takes a text body only,
 * so the previous branded HTML table is gone; the labelled rows survive it.
 */
export function wrap(title: string, rows: [string, string][], body?: string) {
  const lines = [title, "arnfin.net.au", ""];
  for (const [k, v] of rows) if (v) lines.push(`${k}: ${v}`);
  if (body) lines.push("", "Message", body);
  return lines.join("\n");
}

export async function sendEmail(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<SendOutcome> {
  if (!atlasConfigured()) return "skipped";

  const res = await sendAtlasEmail({
    from: sender(),
    to: recipient(),
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
  });

  if (!res.ok) {
    console.error(`[email] Atlas send failed ${res.status}: ${res.detail}`);
    return "failed";
  }
  return "sent";
}
