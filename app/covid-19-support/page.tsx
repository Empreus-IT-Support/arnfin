import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { covidPosts } from "@/lib/covid-posts";

export const metadata: Metadata = {
  title: "COVID-19 Support (2020 Archive)",
  description: "Historical guidance on the 2020 government support measures — JobKeeper, cash flow boost, instant asset write-off and early super access.",
  alternates: { canonical: "/covid-19-support" },
  robots: { index: false, follow: true },
};

export default function CovidSupportIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Archive · March 2020"
        title="COVID-19 Support"
        subtitle="Historical guidance on the government's early pandemic support measures, kept here for the record."
      />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
        <ul className="divide-y divide-line rounded-2xl border border-line">
          {covidPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/covid-19-support/${post.slug}`}
                className="flex flex-col justify-between gap-1 px-5 py-4 transition hover:bg-cream/60 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="font-medium text-ink">{post.title}</span>
                <span className="shrink-0 text-xs text-muted">{post.dateDisplay}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
