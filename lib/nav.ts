export type NavLink = { href: string; label: string };
export type NavSection = { href: string; label: string; children?: NavLink[] };

/*
 * Section groups are exported by name and referenced directly by pages.
 * Avoid `primaryNav.find(...)!.children!` in pages — regrouping the nav
 * silently turns those non-null assertions into runtime crashes.
 */

export const whyUsChildren: NavLink[] = [
  { href: "/why-us", label: "Why choose Arnold & Finlay?" },
  { href: "/why-us/our-team", label: "Our Team" },
  { href: "/why-us/associations", label: "Associations" },
];

export const youAndUsChildren: NavLink[] = [
  { href: "/you-and-us", label: "You and Us" },
  { href: "/you-and-us/the-numbers", label: "The Numbers" },
  { href: "/you-and-us/services", label: "Services" },
  { href: "/you-and-us/our-approach", label: "Our Approach" },
];

export const servicesChildren: NavLink[] = [
  { href: "/compliance", label: "Compliance" },
  { href: "/start-up", label: "Start Up" },
  { href: "/growth", label: "Growth" },
  { href: "/financial-director", label: "Financial Director" },
  { href: "/accounting-software", label: "Accounting Software" },
  { href: "/most-requested", label: "Most Requested" },
];

export const resourcesChildren: NavLink[] = [
  { href: "/resources/internet-links", label: "Internet Links" },
  { href: "/resources/key-dates", label: "Key Dates" },
  { href: "/resources/tax-facts", label: "Tax Facts" },
  { href: "/resources/checklists", label: "Information Required Checklists" },
];

export const insightsChildren: NavLink[] = [
  { href: "/blog", label: "Blog" },
  { href: "/newsletters", label: "Newsletter" },
  { href: "/newsletters/archives", label: "News Archives" },
];

export const contactChildren: NavLink[] = [
  { href: "/contact", label: "Make an Enquiry" },
  { href: "/contact/location-map", label: "Location Map" },
];

export const primaryNav: NavSection[] = [
  { href: "/", label: "Home" },
  { href: "/why-us", label: "Why Us?", children: whyUsChildren },
  { href: "/you-and-us", label: "You and Us", children: youAndUsChildren },
  { href: "/compliance", label: "Services", children: servicesChildren },
  { href: "/resources", label: "Resources", children: resourcesChildren },
  { href: "/blog", label: "Insights", children: insightsChildren },
  { href: "/contact", label: "Contact Us", children: contactChildren },
];

/** Not part of the primary nav — this section was never linked from any
 * menu on the original site either (only discoverable via sitemap.xml).
 * Kept reachable from the footer and site map instead. */
export const covidNavLink: NavLink = { href: "/covid-19-support", label: "COVID-19 Support" };
