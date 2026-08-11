import Image from "next/image";

/** Shown by Next during route transitions that suspend. */
export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center px-4">
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/images/logo-main.png"
          alt=""
          width={496}
          height={130}
          className="h-11 w-auto opacity-90 sm:h-12"
        />
        <div className="af-splash__dots" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className="sr-only" role="status">
          Loading
        </p>
      </div>
    </div>
  );
}
