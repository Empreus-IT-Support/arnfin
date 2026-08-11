import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Xero Packages & Pricing",
  description: "Three Xero cloud accounting packages from $155/month — subscription, set-up, quarterly BAS review, management reports and unlimited Xero support.",
  alternates: { canonical: "/accounting-software" },
};

const PLANS = [
  {
    name: "Core Lite",
    price: "$155",
    features: [
      "Xero subscription",
      "Initial set-up",
      "Quarterly BAS review and lodgment",
      "Support online from Xero",
      "Tax due date reminders",
      "Annual planning meeting",
    ],
  },
  {
    name: "Core",
    price: "$465",
    featured: true,
    features: [
      "Xero subscription",
      "Initial set-up",
      "Quarterly BAS review and lodgment",
      "Support online from Xero",
      "Tax due date reminders",
      "Annual planning meeting",
      "Monthly check of data file",
      "Quarterly management reports",
      "Bookkeeping assistance",
      "Annual strategy meeting",
    ],
  },
  {
    name: "Core Plus",
    price: "$955",
    features: [
      "Xero subscription",
      "Initial set-up",
      "Quarterly BAS review and lodgment",
      "Support online from Xero",
      "Tax due date reminders",
      "Annual planning meeting",
      "Monthly check of data file",
      "Quarterly management reports",
      "Bookkeeping assistance",
      "Annual strategy meeting",
      "Quarterly board meeting",
      "Benchmark monitoring",
      "Telephone advice",
    ],
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 h-4 w-4 shrink-0">
      <circle cx="8" cy="8" r="8" fill="var(--color-gold)" />
      <path d="M4.5 8.2l2.2 2.2L11.5 5.5" stroke="var(--color-ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AccountingSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Accounting Software"
        title="Accounting Software"
        subtitle="Three Xero packages, each with the software subscription included and different levels of support and reporting."
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.featured ? "border-ink bg-ink text-cream shadow-xl" : "border-line bg-paper"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                  Most popular
                </span>
              )}
              <h2 className={`font-display text-xl font-semibold ${plan.featured ? "text-cream" : "text-ink"}`}>
                {plan.name}
              </h2>
              <p className="mt-2">
                <span className={`font-display text-3xl font-semibold ${plan.featured ? "text-gold" : "text-ink"}`}>
                  {plan.price}
                </span>
                <span className={plan.featured ? "text-cream/70" : "text-muted"}> / month, from</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckIcon />
                    <span className={plan.featured ? "text-cream/90" : "text-ink-soft"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={plan.featured ? "gold" : "outline"}
                className="mt-8"
              >
                Ask about {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <PageContainer aside={false}>
        <h2>What&rsquo;s this about?</h2>
        <p>
          Previously, businesses purchased software from MYOB and Quicken, and
          updated regularly at further cost. Now, you can access software
          applications that exist on the Internet; Cloud computing means less
          need for network hardware, software, or some support. This is a
          subscription based service, accessible from just about anywhere and
          on any Internet-enabled device. You have instant visibility of
          transactions, cash flow, debtor exposure or supplier payments due.
          And, we can also look at the records remotely using a password,
          providing reports and advice when it may be needed, not at the end
          of the year.
        </p>

        <h2>What are the benefits?</h2>
        <ul>
          <li>We assist you with set-up</li>
          <li>Entry via automated daily bank downloads</li>
          <li>Real time collaboration with us, no need for files to us</li>
          <li>Safe and secure data</li>
          <li>Available anytime you are online</li>
          <li>Unlimited Xero support, with no additional cost</li>
          <li>No need to install the software, for upgrades or maintenance</li>
          <li>Pay as you go helps your cashflow</li>
          <li>Integrates with other support software such as Customer Relationship, Point of Sale, Stock Control</li>
          <li>No need to upgrade hardware (store &lsquo;in the cloud&rsquo;).</li>
        </ul>

        <h2>Who is it for?</h2>
        <p>
          For any business wanting simple to use software and versatile,
          functional, smart and streamlined reporting for management. Again,
          this is not a one-size-fits-all, and we have selected specific
          services to be applicable to different levels or sizes of business.
          We can tailor any package to your needs, and provide aspects of our
          core Services too. It&rsquo;s suitable for all businesses, whether
          based around products or services.
        </p>
      </PageContainer>

      <CtaBand />
    </>
  );
}
