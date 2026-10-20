import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { covidPosts } from "@/lib/covid-posts";
import { absoluteUrl } from "@/lib/site";

/** Static routes, highest priority first. */
const STATIC: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
  { path: "/compliance", priority: 0.9, changeFrequency: "yearly" },
  { path: "/start-up", priority: 0.9, changeFrequency: "yearly" },
  { path: "/growth", priority: 0.9, changeFrequency: "yearly" },
  { path: "/financial-director", priority: 0.9, changeFrequency: "yearly" },
  { path: "/accounting-software", priority: 0.8, changeFrequency: "yearly" },
  { path: "/why-us", priority: 0.8, changeFrequency: "yearly" },
  { path: "/why-us/our-team", priority: 0.6, changeFrequency: "yearly" },
  { path: "/why-us/associations", priority: 0.5, changeFrequency: "yearly" },
  { path: "/you-and-us", priority: 0.7, changeFrequency: "yearly" },
  { path: "/you-and-us/the-numbers", priority: 0.6, changeFrequency: "yearly" },
  { path: "/you-and-us/services", priority: 0.6, changeFrequency: "yearly" },
  { path: "/you-and-us/our-approach", priority: 0.6, changeFrequency: "yearly" },
  { path: "/tasc-tax", priority: 0.8, changeFrequency: "yearly" },
  { path: "/most-requested", priority: 0.7, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.6, changeFrequency: "yearly" },
  { path: "/resources/tax-facts", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources/key-dates", priority: 0.7, changeFrequency: "yearly" },
  { path: "/resources/checklists", priority: 0.6, changeFrequency: "yearly" },
  { path: "/resources/internet-links", priority: 0.4, changeFrequency: "yearly" },
  { path: "/newsletters", priority: 0.6, changeFrequency: "monthly" },
  { path: "/newsletters/archives", priority: 0.5, changeFrequency: "yearly" },
  { path: "/covid-19-support", priority: 0.3, changeFrequency: "yearly" },
  { path: "/contact/location-map", priority: 0.5, changeFrequency: "yearly" },
  { path: "/site-map", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC.map((s) => ({
    url: absoluteUrl(s.path),
    lastModified: now,
    changeFrequency: s.changeFrequency,
    priority: s.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: p.dateISO ? new Date(p.dateISO) : now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const covidEntries: MetadataRoute.Sitemap = covidPosts.map((p) => ({
    url: absoluteUrl(`/covid-19-support/${p.slug}`),
    lastModified: p.dateISO ? new Date(p.dateISO) : now,
    changeFrequency: "yearly",
    // Historical 2020 guidance — kept for the record, deprioritised for search.
    priority: 0.2,
  }));

  return [...staticEntries, ...postEntries, ...covidEntries];
}
