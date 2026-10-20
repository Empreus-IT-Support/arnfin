import ContentAside from "@/components/ui/ContentAside";

/**
 * Long-form page shell.
 *
 * `aside` (default) puts the prose beside a sticky sidebar so the page doesn't
 * leave wide empty margins. Pass aside={false} for pages that manage their own
 * full-width layout.
 */
export default function PageContainer({
  children,
  aside = true,
}: {
  children: React.ReactNode;
  aside?: boolean;
}) {
  if (!aside) {
    return (
      <div className="prose-af mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
        {children}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="prose-af">{children}</div>
        <ContentAside />
      </div>
    </div>
  );
}
