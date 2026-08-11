/** The rising-idea dots from the real logo, reused as a decorative motif. */
export default function DotArc({ className = "" }: { className?: string }) {
  const dots = [
    { cx: 6, cy: 34, r: 5 },
    { cx: 26, cy: 18, r: 6 },
    { cx: 52, cy: 8, r: 6.5 },
    { cx: 80, cy: 6, r: 6 },
    { cx: 106, cy: 12, r: 5 },
  ];
  return (
    <svg
      viewBox="0 0 112 40"
      fill="none"
      className={className}
      aria-hidden
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="var(--color-gold)" />
      ))}
    </svg>
  );
}
