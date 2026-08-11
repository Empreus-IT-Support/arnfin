import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { primaryNav } from "@/lib/nav";
import { blogPosts } from "@/lib/blog-posts";
import { covidPosts } from "@/lib/covid-posts";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the Arnold & Finlay website, in one list.",
  alternates: { canonical: "/site-map" },
};

export default function SiteMapPage() {
  return (
    <>
      <PageHero title="Site Map" />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-2">
          {primaryNav.map((section) => (
            <div key={section.href}>
              <Link href={section.href} className="font-display font-semibold text-ink hover:text-gold-dark">
                {section.label}
              </Link>
              {section.children && (
                <ul className="mt-2 space-y-1.5 border-l border-line pl-4">
                  {section.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="text-sm text-ink-soft hover:text-ink">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div>
            <Link href="/covid-19-support" className="font-display font-semibold text-ink hover:text-gold-dark">
              COVID-19 Support
            </Link>
            <p className="mt-1 text-xs text-muted">Archive &mdash; March 2020</p>
          </div>
          <div>
            <Link href="/disclaimer" className="font-display font-semibold text-ink hover:text-gold-dark">
              Disclaimer
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-display font-semibold text-ink">Blog ({blogPosts.length} posts)</h2>
            <p className="mt-2 text-sm text-ink-soft">
              See the full <Link href="/blog" className="underline decoration-gold decoration-2">Blog index</Link>.
            </p>
          </div>
          <div>
            <h2 className="font-display font-semibold text-ink">COVID-19 Support ({covidPosts.length} pages)</h2>
            <p className="mt-2 text-sm text-ink-soft">
              See the <Link href="/covid-19-support" className="underline decoration-gold decoration-2">COVID-19 Support index</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
