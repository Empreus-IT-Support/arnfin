import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import SectionNav from "@/components/SectionNav";
import { insightsChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Newsletter Archive",
  description: "Past editions of Your Knowledge, our monthly business and tax newsletter, from February 2018 to March 2020.",
  alternates: { canonical: "/newsletters/archives" },
};

const ARCHIVES = [
  { label: "March 2020", file: "your-knowledge-march-2020.pdf" },
  { label: "November 2019", file: "your-knowledge-november-2019.pdf" },
  { label: "October 2019", file: "your-knowledge-october-2019.pdf" },
  { label: "September 2019", file: "your-knowledge-september-2019.pdf" },
  { label: "July 2019", file: "your-knowledge-july-2019.pdf" },
  { label: "June 2019", file: "your-knowledge-june-2019.pdf" },
  { label: "May 2019", file: "your-knowledge-may-2019.pdf" },
  { label: "March 2019", file: "your-knowledge-march-2019.pdf" },
  { label: "February 2019", file: "your-knowledge-february-2019.pdf" },
  { label: "December 2018", file: "your-knowledge-december-2018.pdf" },
  { label: "November 2018", file: "your-knowledge-november-2018.pdf" },
  { label: "October 2018", file: "your-knowledge-october-2018.pdf" },
  { label: "September 2018", file: "your-knowledge-september-2018.pdf" },
  { label: "August 2018", file: "your-knowledge-august-2018.pdf" },
  { label: "July 2018", file: "your-knowledge-july-2018.pdf" },
  { label: "May 2018", file: "your-knowledge-may-2018.pdf" },
  { label: "April 2018", file: "your-knowledge-april-2018.pdf" },
  { label: "March 2018", file: "your-knowledge-march-2018.pdf" },
  { label: "February 2018", file: "your-knowledge-february-2018.pdf" },
];

export default function NewsArchivesPage() {
  return (
    <>
      <PageHero eyebrow="Newsletters" title="News Archives" subtitle="Your Knowledge, monthly, February 2018 through March 2020." />
      <PageContainer>
        <SectionNav links={insightsChildren} />

        <div className="grid gap-3 sm:grid-cols-2">
          {ARCHIVES.map((a) => (
            <a
              key={a.file}
              href={`/pdfs/newsletters/${a.file}`}
              className="flex items-center justify-between rounded-xl border border-line px-4 py-3 text-ink no-underline transition hover:border-ink hover:text-ink"
            >
              <span className="text-sm font-medium text-ink">Your Knowledge &mdash; {a.label}</span>
              <span className="text-xs text-muted">PDF &darr;</span>
            </a>
          ))}
        </div>
      </PageContainer>
    </>
  );
}
