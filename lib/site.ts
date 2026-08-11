/** Single source of truth for metadata, structured data and contact details. */

export const site = {
  name: "Arnold & Finlay",
  legalName: "Arnold & Finlay Accountants & Planners Pty Ltd",
  tagline: "It's accountancy, but not as you might know it.",
  description:
    "Southport accountants and financial planners on the Gold Coast. Proactive tax compliance, start-up support, business growth and virtual Financial Director services, with fixed fees agreed upfront.",
  // Override with NEXT_PUBLIC_SITE_URL in Vercel if the domain changes.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.arnfin.net.au").replace(/\/$/, ""),
  phone: "(07) 5532 7244",
  phoneE164: "+61755327244",
  mobile: "0402 487 244",
  fax: "(07) 5591 1606",
  email: "arnold.finlay@arnfin.net.au",
  address: {
    street: "Suite 30701, 7th Floor, Southport Central Tower Three, 9 Lawson Street",
    suburb: "Southport",
    state: "QLD",
    postcode: "4215",
    country: "AU",
  },
  postal: "PO Box 929, Southport BC QLD 4215",
  geo: { lat: -27.9678, lng: 153.4103 },
  partners: [
    "Cameron M Finlay MBA Adv. (Dist), B. Bus, CTA",
    "Kirsten A Seage B. Bus, CTA, FNTAA",
  ],
  openingHours: "Mo-Fr 09:00-17:00",
} as const;

export function absoluteUrl(path = "/"): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * The generated share card (app/opengraph-image.tsx).
 *
 * Routes that declare their own `openGraph` object REPLACE the inherited one,
 * which drops the file-convention image — so those routes must spread this in
 * explicitly.
 */
export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — Accountants & Planners, Southport QLD`,
} as const;
