import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionNav from "@/components/SectionNav";
import CtaBand from "@/components/ui/CtaBand";
import { servicesChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Most Requested Projects",
  description: "Business Energiser, Profit & Growth Check-up, Cash Flow Positive-Plus, Wealth Builder and more — targeted projects tailored to your situation.",
  alternates: { canonical: "/most-requested" },
};

const GROUPS = [
  {
    title: "Taking Action",
    items: [
      { name: "Business Energiser", copy: "Identify the needs and goals of the owners" },
      { name: "Profit & Growth Check-up", copy: "Discover areas for improvement, growth, or concern" },
      { name: "What If", copy: "See the benefit of changing marketing, pricing, service etc" },
      { name: "Cash Flow Positive-Plus", copy: "Finding opportunities to improve cash flow" },
      { name: "Finance Options Review", copy: "Ensure current finance is the most effective option" },
      { name: "Reporting Systems", copy: "Review accounting processes and reporting needs" },
      { name: "Wealth Builder", copy: "Protection of assets, review of investments, maximising wealth opportunities" },
      { name: "AGM", copy: "Review year's results, focus on improvement, actions to consider" },
    ],
  },
  {
    title: "Understanding The Numbers",
    items: [
      { name: "Xero", copy: "Cloud based accounting (simpler, more information, reduced costs)" },
      { name: "Panalytics", copy: "Desktop monitoring of financials (daily information on key numbers)" },
      { name: "Analysis & Monitoring", copy: "Regular analysis and reporting of financials" },
      { name: "Accountability", copy: "Meetings to ensure plans are made and actions taken" },
    ],
  },
  {
    title: "Improving ANY Business",
    items: [
      { name: "Forecasts", copy: "Sales; Profit & Cash; Breakeven Sales; Profit sensitivity" },
      { name: "Effective Business Planning", copy: "One Year Goals, Strategies for results, Key Actions required" },
      { name: "Cash Flow Improvement", copy: "Reduce the Cash Cycle, Debtor Management, Cost Savings" },
      { name: "Profit Improvement", copy: "Make more profit, in any business or industry" },
      { name: "Price Strategy", copy: "Charge more without losing sales" },
    ],
  },
];

export default function MostRequestedPage() {
  return (
    <>
      <PageHero
        eyebrow="Most Requested"
        title="Most Requested"
        subtitle="Different problem, similar process. Here's how we tackle the questions clients ask most."
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
        <SectionNav links={servicesChildren} />
        {GROUPS.map((group) => (
          <section key={group.title} className="mb-14">
            <h2 className="mb-6 font-display text-2xl font-semibold text-ink">{group.title}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map((item) => (
                <div key={item.name} className="rounded-2xl border border-line p-5">
                  <h3 className="font-display text-sm font-semibold text-ink">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.copy}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
          Our services are essentially in four areas: accounting and tax,
          requirements of start-ups, cash &amp; profit improvement, and
          monitoring &amp; accountability. The Projects are integral with the
          delivery of those services. Each project can be tailored to suit
          your needs and applicable whether a start-up, for growth or a
          remedial situation. Our services can be as recommendations,
          assistance as requested, or we can carry out the whole project.
        </p>
      </div>

      <CtaBand />
    </>
  );
}
