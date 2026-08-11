type IconName = "compliance" | "startup" | "growth" | "director";

const paths: Record<IconName, React.ReactNode> = {
  compliance: (
    <>
      <path d="M16 4l10 4v8c0 8-5.5 13-10 16-4.5-3-10-8-10-16V8l10-4z" />
      <path d="M11.5 16l3 3 6-6.5" />
    </>
  ),
  startup: (
    <>
      <path d="M16 27c-6-1-9-4-9-9 5 0 8 2 9 5" />
      <path d="M16 4c4.5 2 8 6.5 8 12.5 0 4-1.8 7.5-4 10-2.4 2.6-3.6 3.5-4 4.5-.4-1-1.6-1.9-4-4.5-2.2-2.5-4-6-4-10C8 10.5 11.5 6 16 4z" />
      <circle cx="16" cy="15" r="2.6" />
    </>
  ),
  growth: (
    <>
      <path d="M5 25l7-8 5 5 10-13" />
      <path d="M21 9h6v6" />
    </>
  ),
  director: (
    <>
      <circle cx="16" cy="16" r="12" />
      <path d="M20.5 11.5l-3 6.5-6.5 3 3-6.5 6.5-3z" />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function ServiceIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="var(--color-ink)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
