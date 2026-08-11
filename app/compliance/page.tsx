import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Tax Compliance & Returns",
  description: "Income tax returns for every structure, GST and BAS, FBT, capital gains and Tax Office correspondence — handled properly for the best legal tax outcome.",
  alternates: { canonical: "/compliance" },
};

export default function CompliancePage() {
  return (
    <ServicePageLayout
      href="/compliance"
      intro={[
        "Compliance is attending to accounting; income tax and other statutory obligations. This is a specific and comprehensive service to ensure that all the issues and requirements that a business needs to comply with are attended to, legally.",
      ]}
      sections={[
        {
          heading: "What's this one do?",
          paragraphs: [
            "If you're serious about the best tax outcome, then you need the best support. Whether you're just starting a business, wanting to take advantage of available tax concessions, or just looking to make your compliance with tax law simpler, we can assist you to deal with the many issues involved.",
          ],
        },
        {
          heading: "How does it work?",
          paragraphs: [
            "Our approach is a little different; we think beyond the immediate task so we can deliver the best solutions and strategies. We really get to know your business - to understand your objectives, your systems, and your current and future tax risks. The best tax strategies can make a big difference to your total liability, especially if buying or selling a business or making a substantial investment.",
          ],
        },
        {
          heading: "In Tax Compliance, we assist with:",
          list: [
            "Tax returns for individuals or any form of business, whatever the structure (partnership, companies, trusts, superannuation)",
            "GST registration and Business Activity returns",
            "Reviewing and advising on Tax Office correspondence",
            "Getting the best overall tax position",
            "Other taxes, such as Fringe Benefits, Capital Gains",
            "Advice on tax withholding obligations and employee superannuation",
            "R & D Incentive and EMDG.",
          ],
        },
        {
          heading: "What are the Benefits?",
          list: [
            "We'll be seeking to ensure that you'll legally save more in tax than your investment with us. Our strategy is to understand your business and to do things for your benefit, even if it does take a bit longer",
            "Huge peace of mind from knowing that everything that has to be done has been properly completed",
            "The reassurance of help, support and advice, when you need it",
            "You'll understand the numbers better, so you can think about improving your business (see Growth), and for talking to your bank.",
          ],
        },
        {
          heading: "Who is it for?",
          paragraphs: [
            "Everyone earns income so everyone must lodge a tax return. We specialise in returns for businesses, and so we attend to all structures (partnerships, trusts, companies, super funds) and for all situations (start-up, growth, buy-sell, disputes, forward planning). Our Compliance service suits everyone who not only has to lodge a return, but especially those who want to get the best tax outcome.",
          ],
        },
      ]}
      footnote="The comments made represent general advice only and no person should act on these without obtaining personal advice that takes into account their own circumstances and background."
    />
  );
}
