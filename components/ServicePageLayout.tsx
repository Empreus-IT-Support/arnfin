import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionNav from "@/components/SectionNav";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import { servicesChildren } from "@/lib/nav";
import { services, serviceByHref } from "@/lib/services";

export type ServiceSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export default function ServicePageLayout({
  href,
  intro,
  sections,
  footnote,
}: {
  href: string;
  intro: string[];
  sections: ServiceSection[];
  footnote?: string;
}) {
  const service = serviceByHref(href);
  if (!service) throw new Error(`Unknown service href: ${href}`);
  const { title, tag, img, imgW, imgH } = service;
  const others = services.filter((s) => s.href !== href);

  return (
    <>
      <div className="dot-grid border-b border-line bg-cream/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
              {tag}
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem]">
              {title}
            </h1>
            <div className="mt-4 max-w-2xl space-y-3 text-lg leading-relaxed text-ink-soft">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" variant="ink">
                Talk to us about {title}
              </Button>
              <a
                href="tel:0755327244"
                className="inline-flex items-center justify-center rounded-full border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
              >
                (07) 5532 7244
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-paper shadow-lg shadow-ink/5 ring-1 ring-line sm:h-48 sm:w-48">
              <Image
                src={img}
                alt=""
                width={imgW}
                height={imgH}
                priority
                className="h-auto w-28 sm:w-32"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <SectionNav links={servicesChildren} />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div className="prose-af">
            {sections.map((section) => (
              <Reveal key={section.heading}>
                <section>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                  {section.list && (
                    <ul>
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
            {footnote && (
              <p className="mt-10 border-l-2 border-gold pl-4 text-sm italic text-muted">
                {footnote}
              </p>
            )}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-line bg-cream/70 p-5">
              <p className="font-display text-base font-semibold text-ink">
                First meeting is free
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                We&rsquo;ll ask questions, listen, and tell you honestly
                whether we can help. Then we agree the fee upfront.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-gold transition hover:bg-ink-soft"
              >
                Make an enquiry
              </Link>
              <a
                href="tel:0755327244"
                className="mt-2 block text-center text-sm font-semibold text-ink-soft transition hover:text-ink"
              >
                (07) 5532 7244
              </a>
            </div>

            <div className="rounded-2xl border border-line p-5">
              <p className="font-display text-base font-semibold text-ink">
                Other services
              </p>
              <ul className="mt-3 space-y-1">
                {others.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="group flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-cream"
                    >
                      <Image
                        src={s.img}
                        alt=""
                        width={s.imgW}
                        height={s.imgH}
                        className="h-9 w-auto max-w-10 shrink-0"
                      />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-ink">
                          {s.title}
                        </span>
                        <span className="block text-xs text-muted">{s.tag}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <CtaBand heading={`Talk to us about ${title}`} />
    </>
  );
}
