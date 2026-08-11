import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import DotArc from "@/components/ui/DotArc";
import SquareBreakout from "@/components/ui/SquareBreakout";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import NewsletterForm from "@/components/NewsletterForm";
import { blogPosts } from "@/lib/blog-posts";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: { absolute: "Arnold & Finlay | Accountants & Planners, Southport QLD" },
  description:
    "Proactive Southport accountants for Gold Coast business — tax compliance, start-ups, growth and virtual Financial Director services. Fixed fees upfront.",
  alternates: { canonical: "/" },
};

const reasons = [
  { n: 1, title: "Pro-active accountants", copy: "We always look for ways to add value for you, and provide new ideas." },
  { n: 4, title: "We aim to simplify", copy: "Complex tax and business issues explained simply, so you understand them." },
  { n: 5, title: "We are available", copy: "Calls and emails returned promptly, and we visit clients at their businesses." },
  { n: 6, title: "No hidden costs", copy: "Fees agreed upfront. The clock isn't ticking for a simple call or email." },
  { n: 8, title: "Guaranteed work", copy: "We'll fix any aspect of our work you're not satisfied with, at no charge." },
  { n: 10, title: "Painless to switch", copy: "No charge to review past returns. We liaise with your previous accountant." },
];

const approach = [
  { step: "01", title: "We meet, free of charge", copy: "We'll ask lots of questions and listen, so we properly understand your needs and the results you want." },
  { step: "02", title: "You choose the level", copy: "Suggestions, support on some level, or fully hands-on. You choose the approach and the budget." },
  { step: "03", title: "We agree the fee upfront", copy: "Set fees for compliance, upfront and fixed for everything else, on a billing program that suits us both." },
];

const projects = [
  "Business Energiser",
  "Profit & Growth Check-up",
  "Cash Flow Positive-Plus",
  "Finance Options Review",
  "Wealth Builder",
  "Price Strategy",
  "Effective Business Planning",
  "Reporting Systems",
];

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Southport, QLD &middot; outside the square
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-5xl lg:text-[3.7rem]">
              It&rsquo;s accountancy.
              <br />
              <span className="relative inline-block">
                Just not as you know it.
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-gold"
                >
                  <path d="M2 8c60-6 130-7 296-3" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Great accounting comes from great client relationships. We
              believe it&rsquo;s not just the numbers &mdash; it&rsquo;s
              people, partnership and potential too.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/contact" variant="ink">
                Book a free first meeting
              </Button>
              <a
                href="tel:0755327244"
                className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
              >
                (07) 5532 7244
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <SquareBreakout className="w-full" />
          </div>
        </div>
      </section>

      {/* Trust strip — every figure drawn from their own content */}
      <section className="border-b border-line bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-5 px-4 py-7 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            ["Xero certified", "advisors and partners"],
            [`${blogPosts.length} articles`, "published since 2012"],
            ["Fixed fees", "agreed upfront, no surprises"],
            ["Two partners", "a deliberately small client list"],
          ].map(([big, small]) => (
            <div key={big} className="flex items-baseline gap-2.5 sm:block">
              <p className="font-display text-lg font-semibold text-gold">{big}</p>
              <p className="text-sm text-cream/70">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services — with the firm's own illustrations */}
      <section className="dot-grid border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <DotArc className="h-7 w-24" />
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]">
                Four ways we work with you
              </h2>
              <p className="mt-3 text-ink-soft">
                Every service is built around your business, and where it is in
                its lifecycle &mdash; from first trading day to full financial
                leadership.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 70}>
                <Link
                  href={s.href}
                  className="accent-rule group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 pb-8 transition duration-300 hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-xl hover:shadow-ink/5"
                >
                  <span className="flex h-24 items-end justify-center">
                    <Image
                      src={s.img}
                      alt=""
                      width={s.imgW}
                      height={s.imgH}
                      className="h-auto w-auto max-h-24 max-w-[7rem] transition duration-300 group-hover:-translate-y-1"
                    />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-dark">{s.tag}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    Learn more
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-b border-line bg-cream/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]">
                  How working together starts
                </h2>
                <p className="mt-3 text-ink-soft">
                  No jargon, no meter running, and no surprises on the invoice.
                </p>
                <p className="mt-6 inline-flex rounded-full bg-gold px-5 py-2 font-display text-base font-semibold text-ink">
                  No surprises.
                </p>
              </div>
            </Reveal>

            <ol className="grid gap-6 sm:grid-cols-3">
              {approach.map((a, i) => (
                <Reveal key={a.step} delay={i * 90}>
                  <li className="h-full border-t-2 border-gold pt-4">
                    <span className="font-display text-2xl font-semibold text-gold-dark/70">{a.step}</span>
                    <h3 className="mt-1 font-display text-base font-semibold text-ink">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.copy}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Ten reasons */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]">
                  Ten good reasons to choose us
                </h2>
                <p className="mt-3 text-ink-soft">
                  We think there&rsquo;s more to choosing an accountant than
                  numbers. Here&rsquo;s six of the ten.
                </p>
              </div>
              <Button href="/why-us" variant="outline">
                See all ten reasons
              </Button>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.n} delay={i * 55}>
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-gold">
                    {r.n}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{r.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{r.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + Xero, side by side to avoid a thin lonely band */}
      <section className="border-b border-line bg-cream/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <Reveal>
            <div>
              <DotArc className="h-7 w-24" />
              <blockquote className="mt-5 font-display text-xl font-medium leading-snug text-ink sm:text-[1.7rem]">
                &ldquo;We think it&rsquo;s about Partnership, and we love
                getting to know our clients &mdash; the dread of &lsquo;going
                to the accountant&rsquo; is well and truly over.&rdquo;
              </blockquote>
              <Link
                href="/you-and-us"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4"
              >
                Read our approach
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-line bg-paper p-6 text-center">
              <Image
                src="/images/xero-certified-advisor-badge.png"
                alt="Xero Certified Advisor"
                width={164}
                height={80}
                className="mx-auto h-14 w-auto"
              />
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                We set you up, support you, and read the numbers with you in
                real time.
              </p>
              <Link
                href="/accounting-software"
                className="mt-4 inline-flex text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4"
              >
                See the Xero packages
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects strip — real content from Most Requested */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]">
                  Projects clients ask for
                </h2>
                <p className="mt-3 text-ink-soft">
                  Different problem, similar process. Each one can be tailored,
                  whether you&rsquo;re starting up, growing, or fixing
                  something.
                </p>
              </div>
              <Button href="/most-requested" variant="outline">
                All projects
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {projects.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-line bg-cream/70 px-4 py-2 text-sm font-medium text-ink-soft"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Blog + newsletter */}
      <section className="border-b border-line bg-cream/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[2rem]">
                  From the blog
                </h2>
                <p className="mt-2 text-ink-soft">
                  {blogPosts.length} posts of straight-talking tax and business
                  advice, going back over a decade.
                </p>
              </div>
              <Button href="/blog" variant="outline">
                Browse the archive
              </Button>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 70}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="accent-rule group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 pb-8 transition duration-300 hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-xl hover:shadow-ink/5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-dark">{post.dateDisplay}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                    {post.body[0]}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-2xl border border-line bg-paper p-6 sm:p-7">
              <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Get the monthly newsletter
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Practical, readable notes on business and tax &mdash; not
                    the stereotypical mass-produced format.
                  </p>
                </div>
                <NewsletterForm compact />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
