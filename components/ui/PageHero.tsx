import DotArc from "@/components/ui/DotArc";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-line bg-cream/60">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <DotArc className="h-7 w-24" />
        {eyebrow && (
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-dark">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-ink-soft">{subtitle}</p>}
      </div>
    </div>
  );
}
