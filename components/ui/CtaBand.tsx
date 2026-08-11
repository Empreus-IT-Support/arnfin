import Button from "@/components/ui/Button";

export default function CtaBand({
  heading = "Ready to talk?",
  copy = "The first meeting is free and there's no obligation — we'll ask questions, listen, and tell you honestly whether we can help.",
}: {
  heading?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* Faint dot lattice, fading out from the edges so the band has depth
          without a hard-edged shape competing with the copy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(var(--color-gold) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, black 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, black 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cream/80">{copy}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" variant="gold">
            Make an enquiry
          </Button>
          <a
            href="tel:0755327244"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
          >
            (07) 5532 7244
          </a>
        </div>
      </div>
    </section>
  );
}
