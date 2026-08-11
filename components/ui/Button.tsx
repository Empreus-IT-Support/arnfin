import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "gold" | "ink" | "outline";
};

const variants: Record<string, string> = {
  gold: "bg-gold text-ink hover:bg-gold-bright no-underline",
  ink: "bg-ink text-gold hover:bg-ink-soft no-underline",
  outline: "border border-ink text-ink hover:bg-ink hover:text-gold no-underline",
};

export default function Button({ href, variant = "gold", className = "", children, ...rest }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
