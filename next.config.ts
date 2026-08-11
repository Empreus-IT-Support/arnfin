import type { NextConfig } from "next";
import legacyRedirects from "./lib/legacy-redirects.json";

const isDev = process.env.NODE_ENV === "development";

/*
 * Content Security Policy.
 *
 * All images, fonts and PDFs are served from this origin (next/font self-hosts
 * the Google fonts at build time, and the one remaining CDN image was pulled
 * local), so img/font/script/style can stay on 'self'.
 *
 * Known-necessary relaxations:
 *  - style-src 'unsafe-inline'  — Tailwind and React inline style attributes.
 *  - script-src 'unsafe-inline' — Next's inline bootstrap/flight payload.
 *  - frame-src google.com/maps  — the embedded map on /contact/location-map.
 *  - dev only: 'unsafe-eval' + ws: for HMR and the error overlay.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

/**
 * Old-site paths that changed shape in the rebuild. The blog and COVID entries
 * are generated from each post's real original URL (see
 * scripts/generate-content.js), so 13 years of inbound links keep working.
 */
const STATIC_REDIRECTS: Record<string, string> = {
  "/why_us_": "/why-us",
  "/why_us_/index": "/why-us",
  "/why_us_/our_team": "/why-us/our-team",
  "/why_us_/associations": "/why-us/associations",
  "/you___us": "/you-and-us",
  "/you___us/index": "/you-and-us",
  "/you___us/the_numbers": "/you-and-us/the-numbers",
  "/you___us/services": "/you-and-us/services",
  "/you___us/our_approach": "/you-and-us/our-approach",
  "/start_up": "/start-up",
  "/financial_director": "/financial-director",
  "/accounting_software": "/accounting-software",
  "/resources/internet_links": "/resources/internet-links",
  "/resources/key_dates": "/resources/key-dates",
  "/resources/tax_facts": "/resources/tax-facts",
  "/resources/information_required_checklists": "/resources/checklists",
  "/newsletters/newsletter": "/newsletters",
  "/newsletters/news_archives": "/newsletters/archives",
  "/newsletter/archives": "/newsletters/archives",
  "/most_requested": "/most-requested",
  "/contact_us": "/contact",
  "/contact_us/contact_us": "/contact",
  "/contact_us/location_map": "/contact/location-map",
  "/covid-19_support": "/covid-19-support",
  // Empty page that existed in the old sitemap.
  "/blank": "/",
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        // Content-addressed by filename; safe to cache hard.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/pdfs/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store" },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
    ];
  },

  async redirects() {
    const all = { ...STATIC_REDIRECTS, ...(legacyRedirects as Record<string, string>) };
    const entries = Object.entries(all).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));

    return [
      ...entries,
      // Any remaining old newsletter PDF landing pages → the archive index.
      {
        source: "/newsletters/news_archives/:slug*",
        destination: "/newsletters/archives",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
