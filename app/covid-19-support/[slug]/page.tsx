import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { covidPosts } from "@/lib/covid-posts";
import JsonLd, { blogPostingSchema } from "@/components/JsonLd";
import { ogImage } from "@/lib/site";

export function generateStaticParams() {
  return covidPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = covidPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Page not found", robots: { index: false } };

  const description = (post.body[0] ?? "").replace(/\s+/g, " ").slice(0, 155);

  return {
    title: `${post.title} (2020 archive)`,
    description,
    alternates: { canonical: `/covid-19-support/${post.slug}` },
    // Superseded 2020 guidance: kept for the record, but shouldn't rank.
    robots: { index: false, follow: true },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `/covid-19-support/${post.slug}`,
      images: [ogImage],
    },
  };
}

export default async function CovidSupportPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = covidPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <JsonLd data={blogPostingSchema({ ...post, section: "covid-19-support" })} />
      <div className="border-b border-line bg-cream/60">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
          <Link href="/covid-19-support" className="text-sm font-semibold text-ink-soft hover:text-ink">
            &larr; Back to COVID-19 Support
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-gold-dark">
            {post.dateDisplay}
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-muted">By {post.author}</p>
        </div>
      </div>

      <div className="prose-af mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        {post.images.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={400}
            height={300}
            className="mb-4 rounded-lg border border-line"
            unoptimized
          />
        ))}
      </div>
    </article>
  );
}
