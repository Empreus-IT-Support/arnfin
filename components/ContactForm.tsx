"use client";

import { useState } from "react";

const field =
  "w-full rounded-xl border border-field bg-paper px-4 py-3 text-ink outline-none transition placeholder:text-muted/70 focus:border-ink focus:ring-2 focus:ring-gold/50";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (r.ok) {
        setStatus("done");
      } else {
        const body = await r.json().catch(() => ({}));
        setError(body.error ?? "Something went wrong — please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-paper p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold" aria-hidden>
          <svg viewBox="0 0 16 16" className="h-7 w-7 fill-ink">
            <path d="M6.5 12L2 7.5l1.4-1.4 3.1 3.1L12.6 3 14 4.4z" />
          </svg>
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Thank you</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Your enquiry has been received &mdash; one of the partners will be in
          touch shortly. If it&rsquo;s urgent, call{" "}
          <a href="tel:0755327244" className="font-semibold underline decoration-gold decoration-2 underline-offset-2">
            (07) 5532 7244
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from humans. Not named "company": that's a real field. */}
      <input
        type="text"
        name="nickname"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-ink">
          Name <span className="text-gold-dark">*</span>
        </label>
        <input id="cf-name" name="name" required maxLength={100} autoComplete="name" className={field} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-position" className="mb-1.5 block text-sm font-medium text-ink">
            Position
          </label>
          <input id="cf-position" name="position" maxLength={100} autoComplete="organization-title" className={field} />
        </div>
        <div>
          <label htmlFor="cf-company" className="mb-1.5 block text-sm font-medium text-ink">
            Company
          </label>
          <input id="cf-company" name="company" maxLength={150} autoComplete="organization" className={field} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-ink">
            Telephone <span className="text-gold-dark">*</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" required maxLength={30} autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-ink">
            Email <span className="text-gold-dark">*</span>
          </label>
          <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-comments" className="mb-1.5 block text-sm font-medium text-ink">
          Comments
        </label>
        <textarea id="cf-comments" name="comments" rows={5} maxLength={5000} className={field} />
      </div>

      <p className="text-xs text-muted">
        <span className="text-gold-dark">*</span> Required fields
      </p>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-gold transition hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
