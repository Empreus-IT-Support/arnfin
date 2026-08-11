import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Straight-talking tax, superannuation and business advice from Cameron Finlay — over a decade of articles for Australian business owners.",
  alternates: { canonical: "/blog" },
};

function yearOf(post: (typeof blogPosts)[number]) {
  return post.dateISO ? new Date(post.dateISO).getUTCFullYear() : 0;
}

export default function BlogIndexPage() {
  const years = Array.from(new Set(blogPosts.map(yearOf))).sort((a, b) => b - a);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Blog"
        subtitle={`${blogPosts.length} posts of straight-talking tax and business advice, from ${blogPosts[blogPosts.length - 1].dateDisplay} to ${blogPosts[0].dateDisplay}.`}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-14">
        {years.map((year) => {
          const posts = blogPosts.filter((p) => yearOf(p) === year);
          return (
            <section key={year} className="mb-14">
              <h2 className="mb-5 font-display text-2xl font-semibold text-ink">{year}</h2>
              <ul className="divide-y divide-line rounded-2xl border border-line">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex flex-col justify-between gap-1 px-5 py-4 transition hover:bg-cream/60 sm:flex-row sm:items-center sm:gap-6"
                    >
                      <span className="font-medium text-ink">{post.title}</span>
                      <span className="shrink-0 text-xs text-muted">{post.dateDisplay}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
