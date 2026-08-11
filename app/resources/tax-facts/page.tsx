import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionNav from "@/components/SectionNav";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import { resourcesChildren } from "@/lib/nav";
import { topicsWithPosts } from "@/lib/topics";
import { blogPosts } from "@/lib/blog-posts";

export const metadata = {
  alternates: { canonical: "/resources/tax-facts" },
  title: "Tax Facts",
  description:
    "Plain-English notes on tax, superannuation, GST and business, grouped by topic — written by Cameron Finlay.",
};

export default function TaxFactsPage() {
  const grouped = topicsWithPosts();

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Tax Facts"
        subtitle={`Plain-English notes on the questions we're asked most — ${blogPosts.length} articles, grouped by topic.`}
      />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
        <SectionNav links={resourcesChildren} />

        <p className="mb-10 max-w-2xl text-ink-soft">
          We thought information on various tax issues would be useful to you.
          Personal circumstances always vary, so please{" "}
          <Link href="/contact" className="font-semibold underline decoration-gold decoration-2 underline-offset-2">
            contact us
          </Link>{" "}
          for advice specific to your situation.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {grouped.map((topic, i) => (
            <Reveal key={topic.slug} delay={i * 60}>
              <section className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-lg font-semibold text-ink">
                    {topic.title}
                  </h2>
                  <span className="shrink-0 rounded-full bg-cream px-2.5 py-1 text-xs font-semibold text-ink-soft">
                    {topic.posts.length}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted">{topic.blurb}</p>
                <ul className="mt-4 space-y-2.5">
                  {topic.posts.slice(0, 5).map((post) => (
                    <li key={post.slug} className="flex gap-2.5">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm leading-snug text-ink-soft transition hover:text-ink"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                {topic.posts.length > 5 && (
                  <p className="mt-4 text-xs text-muted">
                    + {topic.posts.length - 5} more in the{" "}
                    <Link href="/blog" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-2">
                      full archive
                    </Link>
                  </p>
                )}
              </section>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBand
        heading="Need an answer for your situation?"
        copy="General notes only go so far. Tell us what you're dealing with and we'll give you advice that takes your circumstances into account."
      />
    </>
  );
}
