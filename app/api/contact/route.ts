import { NextResponse } from "next/server";
import { rateLimited, clientIp } from "@/lib/rate-limit";
import { EMAIL_RE, FIRM_PHONE, sendEmail, skippedIsFatal, wrap } from "@/lib/email";

// Mirrors the enquiry form on the original site:
// Name*, Position, Company, Telephone*, Email*, Comments
export async function POST(req: Request) {
  if (rateLimited(`contact:${clientIp(req)}`)) {
    return NextResponse.json(
      { error: "Too many requests — please try again in a few minutes." },
      { status: 429 }
    );
  }

  const data = await req.json().catch(() => null);
  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot. NOTE: cannot be "company" — that's a real field on this form.
  if (typeof data.nickname === "string" && data.nickname.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const position = String(data.position ?? "").trim();
  const company = String(data.company ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const email = String(data.email ?? "").trim();
  const comments = String(data.comments ?? "").trim();

  if (
    !name ||
    name.length > 100 ||
    position.length > 100 ||
    company.length > 150 ||
    !phone ||
    !/^[\d\s()+-]{6,30}$/.test(phone) ||
    !EMAIL_RE.test(email) ||
    comments.length > 5000
  ) {
    return NextResponse.json(
      { error: "Please check the required fields and try again." },
      { status: 400 }
    );
  }

  const text = wrap(
    "New website enquiry",
    [
      ["Name", name],
      ["Position", position],
      ["Company", company],
      ["Telephone", phone],
      ["Email", email],
    ],
    comments
  );

  let outcome: string;
  try {
    outcome = await sendEmail({
      subject: `Website enquiry — ${name}${company ? ` (${company})` : ""}`,
      text,
      replyTo: email,
    });
  } catch {
    outcome = "failed";
  }
  console.log(
    `[contact enquiry] outcome=${outcome}`,
    JSON.stringify({ name, position, company, phone, email, comments })
  );

  // "skipped" means Atlas isn't configured. In production that must not look
  // like success — an undelivered enquiry is a lost client.
  if (outcome === "failed" || (outcome === "skipped" && skippedIsFatal())) {
    if (outcome === "skipped") {
      console.error(
        "[contact enquiry] ATLAS_API_KEY is not set in production — enquiry NOT delivered."
      );
    }
    return NextResponse.json(
      { error: `We couldn't send your enquiry — please call ${FIRM_PHONE}.` },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
