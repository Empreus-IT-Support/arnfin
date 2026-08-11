import Image from "next/image";

/**
 * Initial-load splash.
 *
 * Deliberately a server component with no JavaScript: the fade-out is a pure
 * CSS animation with `forwards` fill, so the overlay always clears even if JS
 * fails to load. `pointer-events: none` throughout means it never blocks a
 * click, and the page content renders underneath immediately — so this is
 * decoration over ready content, not a gate in front of it.
 *
 * Hidden outright under prefers-reduced-motion (see globals.css).
 */
export default function SplashScreen() {
  return (
    <div className="af-splash" aria-hidden="true">
      <div className="af-splash__inner">
        <Image
          src="/images/logo-main.png"
          alt=""
          width={496}
          height={130}
          priority
          className="h-12 w-auto sm:h-14"
        />
        <div className="af-splash__dots">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
