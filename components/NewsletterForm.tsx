"use client";

import { useState } from "react";

const field =
  "w-full rounded-xl border border-field bg-paper px-4 py-3 text-ink outline-none transition placeholder:text-muted/70 focus:border-ink focus:ring-2 focus:ring-gold/50";

const LISTS = ["Accounting News", "Your Knowledge"];

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    const chosen = fd.getAll("lists").map(String);
    const payload = {
      email: fd.get("email"),
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      company: fd.get("company"),
      nickname: fd.get("nickname"),
      // The compact form has no list checkboxes — subscribe to both by default.
      lists: chosen.length ? chosen : LISTS,
    };
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
      <div className="flex items-start gap-3 rounded-xl border border-line bg-paper px-5 py-4">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold" aria-hidden>
          <svg viewBox="0 0 16 16" className="h-4 w-4 fill-ink">
            <path d="M6.5 12L2 7.5l1.4-1.4 3.1 3.1L12.6 3 14 4.4z" />
          </svg>
        </span>
        <p className="text-sm text-ink-soft">
          <strong className="font-semibold text-ink">You&rsquo;re subscribed.</strong>{" "}
          Look out for the next edition in your inbox.
        </p>
      </div>
    );
  }

  const hp = (
    <input
      type="text"
      name="nickname"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="absolute -left-[9999px] h-0 w-0 opacity-0"
    />
  );

  if (compact) {
    return (
      <form onSubmit={onSubmit} className="space-y-3" noValidate>
        {hp}
        <div className="flex flex-col gap-2 sm:flex-row">
          <label htmlFor="nl-email-compact" className="sr-only">
            Email address
          </label>
          <input
            id="nl-email-compact"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="Your email address"
            className={field}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="shrink-0 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-bright disabled:opacity-60"
          >
            {status === "sending" ? "Joining…" : "Subscribe"}
          </button>
        </div>
        {status === "error" && (
          <p role="alert" className="text-sm text-red-700">
            {error}
          </p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {hp}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nl-first" className="mb-1.5 block text-sm font-medium text-ink">
            First name
          </label>
          <input id="nl-first" name="firstName" maxLength={100} autoComplete="given-name" className={field} />
        </div>
        <div>
          <label htmlFor="nl-last" className="mb-1.5 block text-sm font-medium text-ink">
            Last name
          </label>
          <input id="nl-last" name="lastName" maxLength={100} autoComplete="family-name" className={field} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nl-email" className="mb-1.5 block text-sm font-medium text-ink">
            Email <span className="text-gold-dark">*</span>
          </label>
          <input id="nl-email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="nl-company" className="mb-1.5 block text-sm font-medium text-ink">
            Company
          </label>
          <input id="nl-company" name="company" maxLength={150} autoComplete="organization" className={field} />
        </div>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-ink">Lists</legend>
        <div className="flex flex-wrap gap-4">
          {LISTS.map((list) => (
            <label key={list} className="flex items-center gap-2 text-sm text-ink-soft">
              <input
                type="checkbox"
                name="lists"
                value={list}
                defaultChecked
                className="h-4 w-4 accent-gold"
              />
              {list}
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-gold transition hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
