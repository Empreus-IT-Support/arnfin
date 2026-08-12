import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionNav from "@/components/SectionNav";
import CtaBand from "@/components/ui/CtaBand";
import { resourcesChildren } from "@/lib/nav";

export const metadata = {
  alternates: { canonical: "/resources/key-dates" },
  title: "Key Dates",
  description:
    "A general guide to recurring Australian lodgment and payment dates — BAS, super guarantee, FBT and income tax returns.",
};

type Row = { date: string; what: string; who: string };

const GROUPS: { heading: string; note?: string; rows: Row[] }[] = [
  {
    heading: "Quarterly BAS",
    note: "These apply when you lodge the activity statement yourself. Lodging online can give an extra two weeks, and lodging through us extends most of them further.",
    rows: [
      { date: "28 October", what: "Quarter 1 — July to September", who: "GST, PAYG instalments" },
      { date: "28 February", what: "Quarter 2 — October to December", who: "GST, PAYG instalments" },
      { date: "28 April", what: "Quarter 3 — January to March", who: "GST, PAYG instalments" },
      { date: "28 July", what: "Quarter 4 — April to June", who: "GST, PAYG instalments" },
    ],
  },
  {
    heading: "Annual",
    note: "If your tax agent lodges the FBT return electronically, the due date is generally 25 June rather than 21 May.",
    rows: [
      { date: "31 March", what: "FBT year ends", who: "Employers with fringe benefits" },
      { date: "21 May", what: "FBT return and payment", who: "Employers with fringe benefits" },
      { date: "14 July", what: "Single Touch Payroll finalisation", who: "Employers" },
      { date: "28 August", what: "Taxable Payments Annual Report (TPAR)", who: "Building, cleaning, courier and similar" },
      { date: "31 October", what: "Individual income tax return", who: "Self-lodgers" },
    ],
  },
  {
    heading: "Monthly",
    rows: [
      { date: "21st", what: "Monthly BAS or IAS for the previous month", who: "Monthly reporters" },
    ],
  },
];

export default function KeyDatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Key Dates"
        subtitle="The recurring lodgment and payment dates that catch most businesses out."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-14">
        <SectionNav links={resourcesChildren} />

        <div className="mb-10 rounded-2xl border-l-4 border-gold bg-cream/70 p-5">
          <p className="text-sm leading-relaxed text-ink-soft">
            <strong className="font-semibold text-ink">This is a general guide.</strong>{" "}
            Dates move to the next business day when they fall on a weekend or
            public holiday, and lodging through a registered tax or BAS agent
            usually extends most of them. We keep track of your specific dates
            for you &mdash;{" "}
            <Link href="/contact" className="font-semibold underline decoration-gold decoration-2 underline-offset-2">
              ask us
            </Link>{" "}
            if you&rsquo;re unsure which apply.
          </p>
        </div>

        {/* Super is no longer a fixed-date obligation, so it gets a callout
            rather than a row in a date table. */}
        <section className="mb-10 rounded-2xl border border-ink bg-ink p-6 text-cream">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Changed 1 July 2026
          </p>
          <h2 className="mt-2 font-display text-xl font-semibold text-cream">
            Super guarantee is now paid on every payday
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/85">
            Under Payday Super, contributions must be{" "}
            <strong className="font-semibold text-cream">
              received by your employees&rsquo; super funds within 7 business
              days of each payday
            </strong>{" "}
            &mdash; not quarterly. The old 28 October / 28 January / 28 April /
            28 July deadlines applied to quarters ending on or before 30 June
            2026. Some exceptions to the 7-day rule apply, such as for new
            employees.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/85">
            Super is also now calculated on <em>qualifying earnings</em> rather
            than ordinary time earnings, and the super guarantee charge is
            assessed by the ATO instead of self-assessed.{" "}
            <Link href="/contact" className="font-semibold text-gold hover:underline">
              Talk to us
            </Link>{" "}
            if you&rsquo;re not sure your payroll is set up for it.
          </p>
        </section>

        <div className="space-y-10">
          {GROUPS.map((group) => (
            <section key={group.heading}>
              <h2 className="font-display text-xl font-semibold text-ink">{group.heading}</h2>
              {group.note && <p className="mt-1.5 text-sm text-muted">{group.note}</p>}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-cream text-left">
                      <th className="border border-line px-4 py-2.5 font-display font-semibold whitespace-nowrap">Date</th>
                      <th className="border border-line px-4 py-2.5 font-display font-semibold">What&rsquo;s due</th>
                      <th className="border border-line px-4 py-2.5 font-display font-semibold">Applies to</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((r) => (
                      <tr key={group.heading + r.date + r.what}>
                        <td className="border border-line px-4 py-2.5 font-semibold whitespace-nowrap text-ink">{r.date}</td>
                        <td className="border border-line px-4 py-2.5 text-ink-soft">{r.what}</td>
                        <td className="border border-line px-4 py-2.5 text-ink-soft">{r.who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted">
          Checked against ato.gov.au on 13 August 2026. Rules change &mdash;
          if a date matters to you, confirm it with us.
        </p>
        <p className="mt-2 text-sm text-muted">
          The ATO publishes the full list, including agent concessions, at{" "}
          <a
            href="https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/due-dates"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-2"
          >
            ato.gov.au
          </a>
          .
        </p>
      </div>

      <CtaBand
        heading="Never miss a due date"
        copy="Tax due date reminders are included in every one of our Xero packages, and we lodge on your behalf so the agent concessions apply."
      />
    </>
  );
}
