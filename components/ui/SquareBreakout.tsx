/**
 * Hero motif built from the client's own tagline, "outside the square":
 * a ruled grid of conventional dots sits inside the box; one breaks the
 * boundary, grows, and escapes. Echoes the real logo's box-and-rising-dots
 * device without reproducing it literally.
 *
 * The trail draws itself on load and the escaping dots scale in behind it.
 * Both are disabled under prefers-reduced-motion (see globals.css).
 */
export default function SquareBreakout({ className = "" }: { className?: string }) {
  const gridDots: { cx: number; cy: number }[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      gridDots.push({ cx: 78 + col * 42, cy: 168 + row * 42 });
    }
  }

  const escapees = [
    { cx: 163, cy: 126, r: 9, delay: 0.55 },
    { cx: 212, cy: 94, r: 14, delay: 0.75 },
    { cx: 288, cy: 56, r: 34, delay: 0.95 },
  ];

  return (
    <svg viewBox="0 0 380 320" fill="none" className={className} aria-hidden>
      <defs>
        <radialGradient id="af-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.22" />
          <stop offset="55%" stopColor="var(--color-gold)" stopOpacity="0.07" />
          <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft halo behind the escaped idea, for depth */}
      <circle cx="288" cy="56" r="78" fill="url(#af-glow)" />

      {/* the box */}
      <rect
        x="56"
        y="146"
        width="192"
        height="152"
        rx="8"
        fill="var(--color-cream)"
        stroke="var(--color-line)"
        strokeWidth="2"
      />

      {/* the conventional crowd inside it */}
      {gridDots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="4.5" fill="var(--color-line)" />
      ))}

      {/* the escape route, drawing itself */}
      <path
        d="M120 168C150 120 196 92 248 74"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 9"
        pathLength={1}
        style={{
          strokeDasharray: "0.02 0.06",
          animation: "af-draw 1.1s ease-out both",
        }}
      />

      {/* the one that broke ranks */}
      <circle cx="120" cy="168" r="6" fill="var(--color-ink)" />

      {/* ...accelerating away */}
      {escapees.map((e) => (
        <circle
          key={e.cx}
          cx={e.cx}
          cy={e.cy}
          r={e.r}
          fill="var(--color-gold)"
          style={{
            transformOrigin: `${e.cx}px ${e.cy}px`,
            animation: `af-pop .5s cubic-bezier(.34,1.56,.64,1) ${e.delay}s both`,
          }}
        />
      ))}

      <style>{`
        @keyframes af-draw {
          from { stroke-dashoffset: 1; opacity: 0 }
          to   { stroke-dashoffset: 0; opacity: 1 }
        }
        @keyframes af-pop {
          from { transform: scale(0); opacity: 0 }
          to   { transform: scale(1); opacity: 1 }
        }
      `}</style>
    </svg>
  );
}
