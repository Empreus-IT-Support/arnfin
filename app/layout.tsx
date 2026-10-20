import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import JsonLd, { accountingServiceSchema, websiteSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Off by default, so previews are never indexed. Flip to "true" at launch.
const indexable = process.env.SITE_INDEXABLE === "true";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Accountants & Planners, Southport QLD`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  generator: "Next.js",
  keywords: [
    "accountants Southport",
    "Gold Coast accountants",
    "tax agent Southport",
    "business accountant Gold Coast",
    "SMSF accountant",
    "Xero accountant Gold Coast",
    "BAS agent Southport",
    "virtual CFO Gold Coast",
  ],
  // Deliberately NO alternates.canonical here: child pages inherit it, which
  // would point every page without its own canonical at the homepage.
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    title: `${site.name} | Accountants & Planners, Southport QLD`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Accountants & Planners, Southport QLD`,
    description: site.description,
  },
  // Indexing stays off until launch: set SITE_INDEXABLE=true in Vercel at the
  // same moment DNS moves, so the .vercel.app preview is never indexed.
  robots: indexable
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      }
    : { index: false, follow: false, nocache: true },
  category: "Accounting",
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport = {
  themeColor: "#ffdd00",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`h-full ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        <JsonLd data={accountingServiceSchema} />
        <JsonLd data={websiteSchema} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-gold"
        >
          Skip to content
        </a>
        <Header />
        <div id="main" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
