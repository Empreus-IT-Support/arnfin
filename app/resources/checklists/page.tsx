import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import SectionNav from "@/components/SectionNav";
import { resourcesChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Information Required Checklists",
  description: "Download our year-end checklists for individuals, companies, trusts, partnerships and self-managed superannuation funds.",
  alternates: { canonical: "/resources/checklists" },
};

const CHECKLISTS = [
  {
    title: "Superannuation Fund",
    size: "362 Kb",
    href: "/pdfs/Checklist-Superannuation-Fund.pdf",
  },
  {
    title: "Company, Trust or Partnership",
    size: "602 Kb",
    href: "/pdfs/Checklist-Company-Trust-Partnership.pdf",
  },
  {
    title: "Individual",
    size: "451 Kb",
    href: "/pdfs/Checklist-Individual.pdf",
  },
];

function PdfIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8 shrink-0">
      <path d="M8 4h12l6 6v18a1 1 0 01-1 1H8a1 1 0 01-1-1V5a1 1 0 011-1z" fill="var(--color-cream)" stroke="var(--color-ink)" strokeWidth="1.4" />
      <path d="M20 4v6h6" stroke="var(--color-ink)" strokeWidth="1.4" strokeLinejoin="round" />
      <text x="16" y="22" textAnchor="middle" fontSize="7" fontWeight="700" fill="var(--color-ink)">PDF</text>
    </svg>
  );
}

export default function ChecklistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Information Required Checklists"
        subtitle="Comprehensive lists of the information and records we require, and possibly the ATO too."
      />
      <PageContainer aside={false}>
        <SectionNav links={resourcesChildren} />

        <p>
          Please work through the list(s) applicable. Some of the
          records/information may be known by us or already in our files,
          such as Deeds or Auditor&rsquo;s Reports, but as every year brings
          changes in tax through rulings and legislation, we need to review
          the basics regularly.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {CHECKLISTS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-line p-6 text-ink no-underline transition hover:-translate-y-1 hover:border-ink hover:text-ink hover:shadow-lg hover:shadow-ink/5"
            >
              <PdfIcon />
              <h2 className="!mt-0 !mb-0 font-display text-base font-semibold text-ink">{c.title}</h2>
              <span className="text-xs text-muted">{c.size} &middot; Download</span>
            </a>
          ))}
        </div>
      </PageContainer>
    </>
  );
}
