import { site, absoluteUrl } from "@/lib/site";

/**
 * Structured data. JSON is serialised with a `<` escape so a stray closing
 * tag inside any string can't break out of the script element.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const accountingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": absoluteUrl("/#organisation"),
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  description: site.description,
  logo: absoluteUrl("/images/logo-main.png"),
  image: absoluteUrl("/images/logo-main.png"),
  telephone: site.phoneE164,
  faxNumber: site.fax,
  email: site.email,
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Southport" },
    { "@type": "AdministrativeArea", name: "Gold Coast" },
    { "@type": "AdministrativeArea", name: "Queensland" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.suburb,
    addressRegion: site.address.state,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  employee: site.partners.map((name) => ({ "@type": "Person", name })),
  knowsAbout: [
    "Taxation",
    "GST",
    "Fringe Benefits Tax",
    "Self-managed superannuation funds",
    "Business advisory",
    "Cash flow forecasting",
    "Xero cloud accounting",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: site.url,
  name: site.name,
  publisher: { "@id": absoluteUrl("/#organisation") },
  inLanguage: "en-AU",
};

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  slug: string;
  author: string;
  dateISO: string | null;
  body: string[];
  section: "blog" | "covid-19-support";
}) {
  const path = `/${post.section}/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.slice(0, 110),
    description: post.body[0]?.slice(0, 300),
    ...(post.dateISO ? { datePublished: post.dateISO } : {}),
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": absoluteUrl("/#organisation") },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
    url: absoluteUrl(path),
    inLanguage: "en-AU",
  };
}
