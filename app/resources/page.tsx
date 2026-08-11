import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Resources",
  description: "Key tax dates, plain-English tax notes, information checklists and useful links for Australian business owners.",
  alternates: { canonical: "/resources" },
};

const cards = [
  { href: "/resources/internet-links", title: "Internet Links", copy: "A curated list of useful government, banking and business sites." },
  { href: "/resources/key-dates", title: "Key Dates", copy: "Important dates for tax and compliance obligations." },
  { href: "/resources/tax-facts", title: "Tax Facts", copy: "Handy reference facts on common tax issues." },
  { href: "/resources/checklists", title: "Information Required Checklists", copy: "Downloadable checklists for individuals, companies, trusts and super funds." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Resources" subtitle="Everything you need between visits." />
      <PageContainer aside={false}>
        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-2xl border border-line p-6 text-ink no-underline transition hover:-translate-y-1 hover:border-ink hover:text-ink hover:shadow-lg hover:shadow-ink/5"
            >
              <h2 className="!mt-0 font-display text-lg font-semibold text-ink">{c.title}</h2>
              <p className="!mb-0 text-sm text-ink-soft">{c.copy}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink">
                View
                <span aria-hidden className="transition group-hover:translate-x-1">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </PageContainer>
    </>
  );
}
