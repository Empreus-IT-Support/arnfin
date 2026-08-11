import { NextResponse } from "next/server";
import { rateLimited, clientIp } from "@/lib/rate-limit";
import { EMAIL_RE, resendKey, sendEmail, wrap } from "@/lib/email";

// Newsletter signups go into a Resend Audience when RESEND_AUDIENCE_ID is set.
// If no audience is configured we email the firm instead, so a signup is never
// silently lost while the account is still being set up.

const LISTS = new Set(["Accounting News", "Your Knowledge"]);

async function addToAudience(fields: {
  email: string;
  firstName: string;
  lastName: string;
}): Promise<"sent" | "skipped" | "failed"> {
  const key = resendKey();
  const audienceId = (process.env.RESEND_AUDIENCE_ID || "").trim();
  if (!key || !audienceId) return "skipped";

  const res = await fetch(
    `https://api.resend.com/audiences/${audienceId}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: fields.email,
        first_name: fields.firstName || undefined,
        last_name: fields.lastName || undefined,
        unsubscribed: false,
      }),
    }
  );
  // 409 = already subscribed, which is a success from the visitor's point of view
  if (res.ok || res.status === 409) return "sent";
  console.error("[newsletter signup] Resend audience error", res.status);
  return "failed";
}

export async function POST(req: Request) {
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
    outcome = await addToAudience({ email, firstName, lastName });
    if (outcome === "skipped") {
      // No audience configured — notify the firm so the signup isn't lost.
      outcome = await sendEmail({
        subject: `Newsletter signup — ${email}`,
        html: wrap("New newsletter signup", [
          ["Name", [firstName, lastName].filter(Boolean).join(" ")],
          ["Email", email],
          ["Company", company],
          ["Lists", lists.join(", ")],
        ]),
        replyTo: email,
      });
    }
  } catch {
    outcome = "failed";
  }
  console.log(
    `[newsletter signup] outcome=${outcome}`,
    JSON.stringify({ email, firstName, lastName, company, lists })
  );

  if (outcome === "failed") {
    return NextResponse.json(
      { error: "Subscription failed — please try again later." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
