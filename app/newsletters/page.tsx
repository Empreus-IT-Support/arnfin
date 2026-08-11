import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import SectionNav from "@/components/SectionNav";
import NewsletterForm from "@/components/NewsletterForm";
import { insightsChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Our monthly newsletter takes a practical, readable approach to business and tax issues — subscribe or read the latest edition.",
  alternates: { canonical: "/newsletters" },
};

export default function NewslettersPage() {
  return (
    <>
      <PageHero eyebrow="Newsletters" title="Newsletter" subtitle="A practical, monthly look at business issues that matter." />
      <PageContainer>
        <SectionNav links={insightsChildren} />

        <p>
          Our monthly newsletter takes a practical approach to business
          issues. We try to make it readable and informative and it is
          certainly not the stereotypical mass-produced format. We subscribe
          to a regular Tax Update prepared by Sydney associates Hayes Knight
          Accountants which is also included for client reference purposes.
        </p>

        <p>
          Please tell us if you would like to see any issue discussed, or
          even if you find our Newsletters helpful and informative.
        </p>

        <div className="not-prose my-8 flex flex-wrap items-center gap-3">
          <a
            href="/pdfs/newsletters/your-knowledge-march-2020.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink no-underline transition hover:bg-gold-bright"
          >
            Read the latest edition
            <span aria-hidden>&darr;</span>
          </a>
          <Link
            href="/newsletters/archives"
            className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink no-underline transition hover:border-ink"
          >
            All 19 past editions
          </Link>
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-cream/60 p-6 sm:p-8">
          <h2 className="!mt-0">Subscribe</h2>
          <p className="text-sm text-ink-soft">
            Get the monthly newsletter straight to your inbox. Unsubscribe any
            time via the link in the footer of every edition.
          </p>
          <NewsletterForm />
        </div>
      </PageContainer>
    </>
  );
}
