import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";
import JsonLd, { blogPostingSchema, breadcrumbSchema } from "@/components/JsonLd";
import { ogImage } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/** Trim the first paragraph to a clean sentence boundary for the description. */
function excerpt(body: string[], max = 155): string {
  const text = (body[0] ?? "").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastStop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf(" "));
  return `${cut.slice(0, lastStop > 60 ? lastStop : max).trim()}…`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found", robots: { index: false } };

  const description = excerpt(post.body);
  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url,
      ...(post.dateISO ? { publishedTime: post.dateISO } : {}),
      authors: [post.author],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage.url],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = blogPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const post = blogPosts[index];
  const older = blogPosts[index + 1];
  const newer = blogPosts[index - 1];

  return (
    <article>
      <JsonLd data={blogPostingSchema({ ...post, section: "blog" })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <div className="border-b border-line bg-cream/60">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
          <Link href="/blog" className="text-sm font-semibold text-ink-soft hover:text-ink">
            &larr; Back to Blog
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

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:justify-between">
          {older ? (
            <Link href={`/blog/${older.slug}`} className="max-w-xs text-sm">
              <span className="block text-xs font-semibold uppercase tracking-wide text-muted">&larr; Older</span>
              <span className="font-medium text-ink">{older.title}</span>
            </Link>
          ) : <span />}
          {newer ? (
            <Link href={`/blog/${newer.slug}`} className="max-w-xs text-right text-sm sm:ml-auto">
              <span className="block text-xs font-semibold uppercase tracking-wide text-muted">Newer &rarr;</span>
              <span className="font-medium text-ink">{newer.title}</span>
            </Link>
          ) : <span />}
        </div>
      </div>
    </article>
  );
}
