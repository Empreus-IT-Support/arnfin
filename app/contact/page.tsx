import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionNav from "@/components/SectionNav";
import ContactForm from "@/components/ContactForm";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { contactChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to Cameron Finlay or Kirsten Seage in Southport on (07) 5532 7244, or send an enquiry. The first meeting is free and there's no obligation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
      <PageHero eyebrow="Contact Us" title="Contact Details" />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
        <SectionNav links={contactChildren} />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Partners</h2>
            <p className="mt-2 text-ink-soft">
              Cameron M Finlay MBA Adv. (Dist), B. Bus, CTA
              <br />
              Kirsten A Seage B. Bus, CTA, FNTAA
            </p>

            <h2 className="mt-8 font-display text-xl font-semibold text-ink">Office</h2>
            <p className="mt-2 text-ink-soft">
              Arnold &amp; Finlay Accountants &amp; Planners Pty Ltd
              <br />
              Suite 30701, 7th Floor
              <br />
              Southport Central Tower Three
              <br />
              9 Lawson Street, Southport Q 4215
            </p>
            <p className="mt-2 text-sm text-muted">
              Free parking in building for clients (enter from Southern side/Lawson Street)
            </p>

            <h2 className="mt-8 font-display text-xl font-semibold text-ink">Get in touch</h2>
            <p className="mt-2 text-ink-soft">
              Telephone: <a href="tel:0755327244" className="underline decoration-gold decoration-2 underline-offset-2 hover:text-gold-dark">07 5532 7244</a>
              <br />
              Facsimile: 07 5591 1606
              <br />
              Email: <a href="mailto:arnold.finlay@arnfin.net.au" className="underline decoration-gold decoration-2 underline-offset-2 hover:text-gold-dark">arnold.finlay@arnfin.net.au</a>
              <br />
              Postal: PO Box 929, Southport BC, Qld 4215
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-ink">
              What happens next
            </h2>
            <ol className="mt-4 space-y-4">
              {[
                ["We meet, free of charge", "We ask questions and listen, so we understand what you actually need."],
                ["You choose the level", "Suggestions, some support, or fully hands-on — and the budget to match."],
                ["We agree the fee upfront", "Set for compliance, fixed for everything else. No surprises."],
              ].map(([title, copy], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-display text-xs font-bold text-gold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="text-sm text-ink-soft">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              href="/contact/location-map"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4"
            >
              See the location map
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          <div className="h-fit rounded-2xl border border-line bg-cream/60 p-6 sm:p-8 lg:sticky lg:top-24">
            <h2 className="font-display text-xl font-semibold text-ink">Make an Enquiry</h2>
            <p className="mt-2 mb-6 text-sm text-ink-soft">
              Please contact the partners on{" "}
              <a href="tel:0755327244" className="font-semibold underline decoration-gold decoration-2 underline-offset-2">
                07 5532 7244
              </a>
              , or use the form below.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
