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
    note: "Due dates below apply when you lodge the activity statement yourself.",
    rows: [
      { date: "28 October", what: "Quarter 1 — July to September", who: "GST, PAYG instalments" },
      { date: "28 February", what: "Quarter 2 — October to December", who: "GST, PAYG instalments" },
      { date: "28 April", what: "Quarter 3 — January to March", who: "GST, PAYG instalments" },
      { date: "28 July", what: "Quarter 4 — April to June", who: "GST, PAYG instalments" },
    ],
  },
  {
    heading: "Super guarantee",
    note: "Contributions must be received by the employee's fund by these dates, not merely sent.",
    rows: [
      { date: "28 October", what: "Quarter 1 — July to September", who: "Employers" },
      { date: "28 January", what: "Quarter 2 — October to December", who: "Employers" },
      { date: "28 April", what: "Quarter 3 — January to March", who: "Employers" },
      { date: "28 July", what: "Quarter 4 — April to June", who: "Employers" },
    ],
  },
  {
    heading: "Annual",
    rows: [
      { date: "31 March", what: "FBT year ends", who: "Employers with fringe benefits" },
      { date: "14 July", what: "Single Touch Payroll finalisation", who: "Employers" },
      { date: "21 May", what: "FBT return and payment", who: "Employers with fringe benefits" },
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
