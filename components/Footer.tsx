import Image from "next/image";
import Link from "next/link";
import { primaryNav, covidNavLink } from "@/lib/nav";

// Why Us?, You and Us, Services | Resources, Insights, Contact Us, COVID-19 archive
const columnA = primaryNav.slice(1, 4);
const columnB = [...primaryNav.slice(4), covidNavLink];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-main.png"
              alt="Arnold & Finlay"
              width={496}
              height={130}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              It&rsquo;s accountancy, but not as you might know it &mdash;
              proactive, personal, and always looking outside the square.
            </p>
            <div className="mt-5 space-y-1 text-sm text-cream/80">
              <p>Suite 30701, 7th Floor, Southport Central Tower Three</p>
              <p>9 Lawson Street, Southport QLD 4215</p>
              <p>
                <a href="tel:0755327244" className="hover:text-gold">
                  (07) 5532 7244
                </a>
              </p>
              <p>
                <a href="mailto:arnold.finlay@arnfin.net.au" className="hover:text-gold">
                  arnold.finlay@arnfin.net.au
                </a>
              </p>
            </div>
          </div>

          <nav aria-label="Footer links 1">
            <ul className="space-y-2.5 text-sm">
              {columnA.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/80 transition hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer links 2">
            <ul className="space-y-2.5 text-sm">
              {columnB.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/80 transition hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Arnold &amp; Finlay Accountants &amp; Planners Pty Ltd</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:justify-end">
            <Link href="/disclaimer" className="hover:text-gold">
              Disclaimer
            </Link>
            <Link href="/site-map" className="hover:text-gold">
              Site Map
            </Link>
            <span aria-hidden className="hidden text-cream/25 sm:inline">
              |
            </span>
            <a
              href="https://www.empreus.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Managed by Empreus IT Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
