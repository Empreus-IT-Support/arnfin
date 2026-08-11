import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionNav from "@/components/SectionNav";
import { contactChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Location Map",
  description: "Find us at Suite 30701, Southport Central Tower Three, 9 Lawson Street, Southport QLD 4215. Free client parking in the building.",
  alternates: { canonical: "/contact/location-map" },
};

export default function LocationMapPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Location Map" />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
        <SectionNav links={contactChildren} />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Street Address</h2>
            <p className="mt-2 text-ink-soft">
              Suite 30701, 7th Floor
              <br />
              Southport Central Tower Three
              <br />
              9 Lawson Street, Southport QLD 4215
            </p>

            <p className="mt-6 text-ink-soft">
              Tel: <a href="tel:0755327244" className="underline decoration-gold decoration-2 underline-offset-2 hover:text-gold-dark">07 5532 7244</a>
              <br />
              Fax: 07 5591 1606
              <br />
              Email: <a href="mailto:arnold.finlay@arnfin.net.au" className="underline decoration-gold decoration-2 underline-offset-2 hover:text-gold-dark">arnold.finlay@arnfin.net.au</a>
            </p>

            <h2 className="mt-8 font-display text-xl font-semibold text-ink">Postal Address</h2>
            <p className="mt-2 text-ink-soft">
              PO Box 929
              <br />
              Southport BC QLD 4215
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title="Map showing Arnold & Finlay at 9 Lawson Street, Southport QLD"
              src="https://www.google.com/maps?q=Southport+Central+Tower+Three,+9+Lawson+Street,+Southport+QLD+4215&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 lg:h-full lg:min-h-[22rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
