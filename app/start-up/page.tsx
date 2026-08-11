import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Start-up Accounting",
  description: "Getting a new business structured, registered and trading properly — with a One Page Plan, cash flow forecasts and help through your first GST return.",
  alternates: { canonical: "/start-up" },
};

export default function StartUpPage() {
  return (
    <ServicePageLayout
      href="/start-up"
      intro={[
        "Research shows that 80% of new businesses fail within the first 5 years but 57% within just 12 months. However, research also shows that careful planning and a good accountant are two of the key things that make a huge difference in avoiding this fate.",
      ]}
      sections={[
        {
          heading: "What's this one do?",
          paragraphs: [
            "Our Start-up service is squarely aimed at new businesses who realise they have to learn the financial rules, get accounts in order and then prepare to grow and prosper. It's our way of helping tip the balance towards short-term survival and the road to long-term success.",
          ],
        },
        {
          heading: "How does it work?",
          paragraphs: [
            "New businesses come in all shapes and sizes, so Start-up is tailored to the needs of the client and the demands of their industry. In everyday terms, it means you'll have support and input from our team to give you knowledge, skills, resources and confidence.",
          ],
        },
        {
          heading: "Some of the key elements of our service include:",
          list: [
            "A review of your idea and plan",
            "Getting the structure right, and properly set up",
            "Help with matters like tax registration, payroll requirements, other legal essentials, and guidance in setting up your financial records",
            "Advice with finance needs",
            "Preparation of a One Page Plan (goals, targets, strategy and key tactics) and detailed cash flow and profit forecasts",
            "Assistance with the first GST return",
            "Review of financials and progress towards goals",
            "Support and advice",
          ],
        },
        {
          heading: "What are the Benefits?",
          list: [
            "Huge peace of mind from knowing that everything that needs to be done has been done",
            "You have more energy and time to focus on running the business and doing what you do best",
            "The reassurance of help, support and advice, by phone or email or a visit",
            "The option of including us in key meetings, like your bank manager",
            "You'll know the key numbers you have to get right",
            "Access to our commercial insight which could really help your business grow, and perhaps access to business grants.",
          ],
        },
        {
          heading: "Who is it for?",
          paragraphs: [
            "The clue is in the title. Start-up is for those launching or running a fledging business, about to start trading.",
            "The skills, experience and resources we bring are generally applicable to all businesses, but we may adapt our service to take into account any industry-specific issues which may be important.",
            "Typically, our Start-up service suits any business that recognises the huge commercial advantage that can be gained from access to accounting best practice and professional financial advice, right from the start.",
          ],
        },
      ]}
    />
  );
}
