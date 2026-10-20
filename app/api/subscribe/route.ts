import { NextResponse } from "next/server";
import { rateLimited, clientIp } from "@/lib/rate-limit";
import { sameOrigin, tooLarge } from "@/lib/request-guard";
import { EMAIL_RE, sendEmail, skippedIsFatal, wrap } from "@/lib/email";

// Newsletter signups are emailed to the firm so someone picks them up.
//
// This used to push the contact into a Resend Audience first. Atlas only sends
// mail — it has no subscriber lists — so that path is gone. If the firm wants
// signups landing in a list again, that needs a list platform (MailerLite is
// what the other builds use) wired in alongside this notification.
//
// If Atlas isn't configured, production returns an error rather than a false
// "subscribed" — see skippedIsFatal in lib/email.ts.

const LISTS = new Set(["Accounting News", "Your Knowledge"]);

export async function POST(req: Request) {
  if (!sameOrigin(req)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 403 });
  }
  if (tooLarge(req)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 413 });
  }

  if (rateLimited(`sub:${clientIp(req)}`)) {
    return NextResponse.json(
      { error: "Too many requests — please try again in a few minutes." },
      { status: 429 }
    );
  }

  const data = await req.json().catch(() => null);
  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — "company" is a real field here too, so use a decoy name.
  if (typeof data.nickname === "string" && data.nickname.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = String(data.email ?? "").trim();
  const firstName = String(data.firstName ?? "").trim();
  const lastName = String(data.lastName ?? "").trim();
  const company = String(data.company ?? "").trim();
  const rawLists: unknown = data.lists;
  const lists = Array.isArray(rawLists)
    ? rawLists.map(String).filter((l) => LISTS.has(l))
    : [];

  if (
    !EMAIL_RE.test(email) ||
    email.length > 200 ||
    firstName.length > 100 ||
    lastName.length > 100 ||
    company.length > 150
  ) {
    return NextResponse.json(
      { error: "Please check your details and try again." },
      { status: 400 }
    );
  }

  let outcome: string;
  try {
    outcome = await sendEmail({
      subject: `Newsletter signup — ${email}`,
      text: wrap("New newsletter signup", [
        ["Name", [firstName, lastName].filter(Boolean).join(" ")],
        ["Email", email],
        ["Company", company],
        ["Lists", lists.join(", ")],
      ]),
      replyTo: email,
    });
  } catch {
    outcome = "failed";
  }
  // Personal details only reach the logs when the email did NOT go out.
  console.log(
    `[newsletter signup] outcome=${outcome}`,
    outcome === "sent"
      ? ""
      : JSON.stringify({ email, firstName, lastName, company, lists })
  );

  // "skipped" means no Atlas key is configured. In production that must not
  // look like success — the signup went nowhere.
  if (outcome === "failed" || (outcome === "skipped" && skippedIsFatal())) {
    if (outcome === "skipped") {
      console.error(
        "[newsletter signup] ATLAS_API_KEY is not set in production — signup NOT recorded."
      );
    }
    return NextResponse.json(
      { error: "Subscription failed — please try again later." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
