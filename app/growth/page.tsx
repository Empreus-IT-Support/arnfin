import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Business Growth Program",
  description: "Strategic planning, profit and cash forecasts, benchmarks and quarterly management accounts for established businesses ready to grow.",
  alternates: { canonical: "/growth" },
};

export default function GrowthPage() {
  return (
    <ServicePageLayout
      href="/growth"
      intro={[
        "Even established businesses often do not realise their true potential because they become bogged down in the 'doing' every day, rather than the essential planning and leading. We've considered this simple and common fact of life and created a program for those wanting to grow.",
      ]}
      sections={[
        {
          heading: "What's this one do?",
          paragraphs: [
            "We see our job as to do the extras, continuing where most other accountants stop. First we get to know you and your business, then share our thoughts to ensure the desire for growth becomes a vision with goals and a plan, and so becomes real. Growth includes the necessary compliance services, but is essentially focused on your business future. We'll meet frequently, on set dates and at key events in the financial year, to update the plan and look for more opportunities for your business.",
          ],
        },
        {
          heading: "How does it work?",
          paragraphs: [
            "There are three key parts: the ideas and concepts to choose from, working with you to implement them, and measuring and interpreting the results. Together, we'll first get the planning base right so we all know what the end result should look like; meet regularly to analyse the financials, provide input and be a sounding board, discuss problems, and deliver insights and advice so you can drive your business forward. We work to a program and adapt it for your needs so that our partnership is strong and productive.",
          ],
        },
        {
          heading: "Some of the key elements of Growth are:",
          list: [
            "Strategic planning (vision, goals, strategies)",
            "Forecasts of profits and cash; Budgets",
            "Setting benchmarks",
            "Determine the areas needing help, and the priorities",
            "Quarterly management accounts and analysis of results",
            "Quarterly meetings with your management team",
            "Tax planning and advice",
            "Support and advice",
          ],
        },
        {
          heading: "What are the Benefits?",
          list: [
            "An impartial view on issues, as well as practical ideas and identification of opportunities",
            "Meetings are planned and disciplined, no wasted time",
            "Accountability means good things get done",
            "The formality of meetings and the growth culture means behaving like the bigger businesses they want to become.",
          ],
        },
        {
          heading: "Who is it for?",
          paragraphs: [
            "Typically, Growth is needed by forward-thinking businesses that are already trading but looking for cost-effective ways to improve efficiency and financial operations.",
            "This is a program where one-size does not fit-all, so this service is tailored to the specific needs of the business. It's suitable for all businesses, whether based around products or services.",
          ],
        },
      ]}
    />
  );
}
