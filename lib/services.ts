/**
 * The four core services, with the client's own illustrations from the
 * original site. Each drawing matches its tagline — the ticked checklist for
 * "get it right", the brick staircase for "the right foundation", the rocket
 * for "turbo charge" — so they're used as-is rather than replaced.
 *
 * Native sizes are small (160–240px wide); that's the maximum the originals
 * offer, so they're rendered at modest sizes to stay crisp.
 */
export type Service = {
  href: string;
  title: string;
  tag: string;
  blurb: string;
  img: string;
  imgW: number;
  imgH: number;
};

export const services: Service[] = [
  {
    href: "/compliance",
    title: "Compliance",
    tag: "get it right",
    blurb:
      "Tax, GST and statutory obligations handled properly, with a planned outcome and peace of mind.",
    img: "/images/services/compliance.png",
    imgW: 184,
    imgH: 155,
  },
  {
    href: "/start-up",
    title: "Start Up",
    tag: "start with a bang",
    blurb:
      "Structure, registrations and a one-page plan, built for new businesses about to start trading.",
    img: "/images/services/start-up.png",
    imgW: 240,
    imgH: 152,
  },
  {
    href: "/growth",
    title: "Growth",
    tag: "the right foundation",
    blurb:
      "Strategic planning, forecasts and quarterly accountability for businesses ready to scale.",
    img: "/images/services/growth.png",
    imgW: 160,
    imgH: 150,
  },
  {
    href: "/financial-director",
    title: "Financial Director",
    tag: "turbo charge",
    blurb:
      "All the benefit of a Financial Director on your team, without the full-time cost.",
    img: "/images/services/financial-director.png",
    imgW: 240,
    imgH: 148,
  },
];

export function serviceByHref(href: string): Service | undefined {
  return services.find((s) => s.href === href);
}
