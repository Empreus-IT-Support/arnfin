import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SectionNav from "@/components/SectionNav";
import { youAndUsChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "The Numbers",
  description: "What you can measure, you can manage. The financial reports that matter — P&L, job costing, forecasts, benchmarks, variances and trends.",
  alternates: { canonical: "/you-and-us/the-numbers" },
};

export default function TheNumbersPage() {
  return (
    <>
      <PageHero eyebrow="You and Us" title="The Numbers" subtitle="What you can measure, you can manage." />
      <PageContainer>
        <SectionNav links={youAndUsChildren} />

        <p>
          Research shows most businesses want more from their accountants;
          sometimes just an idea, perhaps some support, or hands-on help to
          get something done. We can work with you with any of these and this
          approach also helps your budget, you choose what you need.
        </p>

        <p>
          You may have heard that &lsquo;what you can measure, you can
          manage&rsquo;. We&rsquo;ll guide you on your bookkeeping and help you
          interpret the results against your forecasts and goals. We work
          with programs like MYOB and Quicken and we&rsquo;re now showing
          businesses the significant savings and benefits of Cloud Computing
          (a Web-based service which hosts all the programs you might need).
        </p>

        <h2>These are the major &lsquo;numbers&rsquo; that matter:</h2>
        <ul>
          <li>Profit &amp; Loss and Balance Sheet, usually annual (for tax purposes)</li>
          <li>Regular financials, say monthly or quarterly (in more detail for management)</li>
          <li>Job cost and margins (for profit)</li>
          <li>Goals, forecasts, benchmarks (for budgeting)</li>
          <li>Variances and trends (for analysis)</li>
        </ul>
      </PageContainer>

      <CtaBand />
    </>
  );
}
