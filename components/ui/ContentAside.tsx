import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

/** Sticky sidebar for long-form pages, so the column doesn't sit in dead space. */
export default function ContentAside() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
      <div className="rounded-2xl border border-line bg-cream/70 p-5">
        <p className="font-display text-base font-semibold text-ink">
          First meeting is free
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          We&rsquo;ll ask questions, listen, and tell you honestly whether we
          can help. Then we agree the fee upfront.
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
          Our services
        </p>
        <ul className="mt-3 space-y-1">
          {services.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-cream"
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
  );
}
