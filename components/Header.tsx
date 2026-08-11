"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav, covidNavLink } from "@/lib/nav";

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-line shadow-sm shadow-ink/5" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo-main.png"
            alt="Arnold & Finlay, Accountants, Southport, Queensland"
            width={496}
            height={130}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex flex-nowrap items-center gap-0.5 text-[0.875rem] font-medium">
            {primaryNav.map((item, i) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenIndex(i)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-ink-soft transition hover:bg-cream hover:text-ink"
                >
                  {item.label}
                  {item.children && (
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden>
                      <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
                {item.children && openIndex === i && (
                  <ul className="absolute left-0 top-full min-w-[15rem] rounded-2xl border border-line bg-paper p-2 shadow-lg shadow-ink/5">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-xl px-3 py-2 text-sm text-ink-soft transition hover:bg-cream hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a
            href="tel:0755327244"
            className="hidden whitespace-nowrap text-sm font-semibold text-ink-soft transition hover:text-ink 2xl:inline"
          >
            (07) 5532 7244
          </a>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-gold transition hover:bg-ink-soft"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
            <path d="M0 1h18M0 7h18M0 13h18" stroke="var(--color-ink)" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav aria-label="Primary mobile" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto max-w-6xl divide-y divide-line px-4 sm:px-6">
            {primaryNav.map((item) => (
              <li key={item.href} className="py-2">
                <Link
                  href={item.href}
                  className="block py-1.5 font-medium text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 border-l border-line pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1.5 text-sm text-ink-soft"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="py-2">
              <Link
                href={covidNavLink.href}
                className="block py-1.5 font-medium text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {covidNavLink.label}
              </Link>
            </li>
            <li className="py-3">
              <a href="tel:0755327244" className="font-semibold text-ink">
                (07) 5532 7244
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
