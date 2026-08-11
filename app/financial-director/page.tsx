import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Virtual Financial Director",
  description: "The benefit of a Financial Director on your team without the full-time cost: budgets, monthly management accounts, cash flow and board-level input.",
  alternates: { canonical: "/financial-director" },
};

export default function FinancialDirectorPage() {
  return (
    <ServicePageLayout
      href="/financial-director"
      intro={[
        "This initiative gives you the benefits of having a Financial Director on your team, which is aimed at forward-looking businesses that are going places. Expanding businesses grow to a point where their financial matters need the attention of a Financial Director, but perhaps not a full-time one, perhaps due to cost, or not having the work for someone full time, or even sufficient commercial experience in a growing business.",
      ]}
      sections={[
        {
          heading: "How does it work?",
          paragraphs: [
            "We take on the role of your Financial Director, bringing the specialist skills, services and expertise needed for the role. We become part of your team, just as committed to your commercial and financial success as you are. Our activity frees you up to focus on running the business, while we take care of the essential financial stuff that can bog you down.",
          ],
        },
        {
          heading: "What is included?",
          list: [
            "Review of the Business Plan and agreeing a Strategic (1 year) Plan",
            "Budget preparation and Monitoring",
            "Cash flow forecast and updates",
            "Monthly management accounts prepared and analysed",
            "Attendance at monthly meetings",
            "Support of your accounts team",
            "End of financial year tax planning",
            "Annual compliance services for the business and principals",
            "Contact and availability at any time",
            "Agreed time spans that suit your business needs",
            "Attendance and contact with banker and key business relationships",
          ],
        },
        {
          heading: "What are the benefits?",
          paragraphs: [
            "The services above are those most needed, but the real benefit is that this is more than the sum of its parts. It is the bigger picture and the real-world advantages where it shines:",
          ],
          list: [
            "Your time is freed-up from financial management for operations and building the business, the things you're best at",
            "An outsider's perspective brings new life into the business. Because of the closer involvement, you gain from our experience, expertise and forward-looking support",
            "Less stress, reduced risk and uncertainty because finance is no-longer out of your comfort zone.",
          ],
        },
        {
          heading: "Who is it for?",
          paragraphs: [
            "It is not a one-size fits-all approach, and is carefully constructed to meet the needs of each client. It's suitable for a wide range of businesses and situations, and slots in after the Growth service. It is aimed at organisations where the experience of a Financial Director is needed in the pursuit for growth and profits, but the cost of a full-time person can not yet be justified.",
          ],
        },
      ]}
    />
  );
}
