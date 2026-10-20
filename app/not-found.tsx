import Link from "next/link";
import Button from "@/components/ui/Button";
import DotArc from "@/components/ui/DotArc";
import { servicesChildren } from "@/lib/nav";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
      <DotArc className="mx-auto h-7 w-24" />
      <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold-dark">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        We can&rsquo;t find that page
      </h1>
      <p className="mx-auto mt-4 max-w-md text-ink-soft">
        It may have moved when we rebuilt the site. Try one of the links below,
        or give us a call and we&rsquo;ll point you in the right direction.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/" variant="ink">
          Back to home
        </Button>
        <a
          href="tel:0755327244"
          className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
        >
          (07) 5532 7244
        </a>
      </div>

      <div className="mt-12 border-t border-line pt-8">
        <p className="text-sm font-semibold text-ink">Popular pages</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {[...servicesChildren, { href: "/blog", label: "Blog" }, { href: "/contact", label: "Contact Us" }].map(
            (link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft transition hover:border-ink hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
