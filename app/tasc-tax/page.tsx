import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";

/**
 * TASC Tax (TASC Mount Isa).
 *
 * Content rules, carried over from the TASC brand guidelines:
 * - The tagline is "Tax, Accounting & Super" and is never shortened to "TAS".
 * - Only the approved contact details are shown (phone, email, postal
 *   address, website). The Mount Isa street address, opening hours and any
 *   registration or TPB badge came from the old archived site under the
 *   previous operator and are NOT confirmed, so they are deliberately left
 *   out until the client confirms them.
 * - Enquiries go to tasc@arnfin.net.au, not the Southport contact form.
 */

const PHONE = "07 4743 6342";
const PHONE_HREF = "tel:+61747436342";
const EMAIL = "tasc@arnfin.net.au";
const WEBSITE = "www.tascentre.com.au";
const POSTAL = "PO Box 929, Southport BC QLD 4215";

export const metadata: Metadata = {
  title: "TASC Tax, Mount Isa",
  description:
    "Tax, accounting and superannuation for Mount Isa and North West Queensland. Returns for individuals, partnerships, companies, trusts and SMSFs, GST and BAS, plus a remote mail-in lodgement service.",
  alternates: { canonical: "/tasc-tax" },
};

const ENTITIES = [
  "Individuals and sole traders",
  "Partnerships",
  "Companies",
  "Discretionary and family trusts",
  "Deceased estates",
  "Bookkeeping",
  "Self-managed superannuation funds",
];

const COMPLIANCE = [
  "ABN and TFN applications",
  "GST registration, cancellation or variation",
  "PAYG withholding tax and employee PAYG payment summaries",
  "Instalment activity statements (IAS)",
  "Fuel tax credits",
  "Business name registration",
  "Fringe benefits tax",
];

const STEPS = [
  {
    step: "1",
    title: "Get in touch",
    body: "Call or email us and we will tell you exactly what we need.",
  },
  {
    step: "2",
    title: "Sign and send",
    body: "We send you an engagement letter and Tax Agent Authority to sign and return with your paperwork.",
  },
  {
    step: "3",
    title: "We lodge",
    body: "We prepare and quality-check your return, then lodge it electronically.",
  },
];

/** A check-marked, two-column list. Built from divs so the prose list styles
 *  (gold bullets) do not stack on top of the tick. */
function TickList({ items }: { items: string[] }) {
  return (
    <div role="list" className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
      {items.map((item) => (
        <div
          role="listitem"
          key={item}
          className="flex gap-3 border-b border-line py-2.5 text-[15px] leading-snug text-ink-soft"
        >
          <span aria-hidden className="mt-0.5 font-bold text-gold-dark">
            &#10003;
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function TascTaxPage() {
  return (
    <>
      <div className="dot-grid border-b border-line bg-cream/70">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
            TASC Mount Isa &middot; Tax, Accounting &amp; Super
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem]">
            TASC Tax, Mount Isa
          </h1>
          <div className="mt-4 max-w-2xl space-y-3 text-lg leading-relaxed text-ink-soft">
            <p>
              Our aim is to lift the tax and accounting burden for you. We take
              care of your tax, accounting and financial concerns so you can
              enjoy a better work-life balance.
            </p>
            <p>
              We work with individuals and businesses in Mount Isa and North
              West Queensland, and offer a remote mail-in service for clients
              further out.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-gold no-underline transition hover:bg-ink-soft"
            >
              Email TASC
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-full border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink no-underline transition hover:border-gold"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div className="space-y-12">
            <Reveal>
              <section aria-labelledby="tax-accounting">
                <h2
                  id="tax-accounting"
                  className="font-display text-2xl font-semibold tracking-tight text-ink"
                >
                  Taxation and accounting
                </h2>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  We prepare tax returns and financial statements to the
                  required standards for:
                </p>
                <TickList items={ENTITIES} />
                <p className="mt-5 leading-relaxed text-ink-soft">
                  We lodge returns electronically, and every return goes
                  through a quality check before it is lodged.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="remote">
                <h2
                  id="remote"
                  className="font-display text-2xl font-semibold tracking-tight text-ink"
                >
                  Remote or out of area lodgement
                </h2>
                <div className="mt-4 rounded-2xl border border-line bg-cream/70 p-6">
                  <p className="leading-relaxed text-ink-soft">
                    TASC makes it easy for clients living in remote areas to
                    send us their paperwork and tell us what they need, using a
                    hassle-free mail-in service.
                  </p>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    For an initial enquiry, simply give us a call, or email or
                    mail us.
                  </p>
                </div>
              </section>
            </Reveal>

            <section aria-labelledby="how-it-works">
              <Reveal>
                <h2
                  id="how-it-works"
                  className="font-display text-2xl font-semibold tracking-tight text-ink"
                >
                  How it works
                </h2>
              </Reveal>
              <ol className="mt-5 grid gap-6 sm:grid-cols-3">
                {STEPS.map((s, i) => (
                  <Reveal
                    key={s.step}
                    as="li"
                    delay={i * 90}
                    className="h-full border-t-2 border-gold pt-4"
                  >
                    <span className="font-display text-2xl font-semibold text-gold-dark/70">
                      {s.step}
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </section>

            <Reveal>
              <section aria-labelledby="compliance">
                <h2
                  id="compliance"
                  className="font-display text-2xl font-semibold tracking-tight text-ink"
                >
                  GST, IAS, ABN, PAYG, FTC and FBT
                </h2>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Our team can help with any issue relating to:
                </p>
                <TickList items={COMPLIANCE} />
              </section>
            </Reveal>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-line bg-cream/70 p-5">
              <p className="font-display text-base font-semibold text-ink">
                Contact TASC
              </p>
              <dl className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">
                <div>
                  <dt className="font-semibold text-ink">Phone</dt>
                  <dd>
                    <a href={PHONE_HREF} className="transition hover:text-ink">
                      {PHONE}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="break-all transition hover:text-ink"
                    >
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Post</dt>
                  <dd>{POSTAL}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Website</dt>
                  <dd>{WEBSITE}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Talk to TASC about your tax
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cream/80">
            Give us a call or send us an email and we will let you know exactly
            what we need to get started.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink no-underline transition hover:bg-gold-bright"
            >
              Email TASC
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream no-underline transition hover:border-gold hover:text-gold"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
