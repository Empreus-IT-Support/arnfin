import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SectionNav from "@/components/SectionNav";
import { youAndUsChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "A free first meeting, three levels of service to choose from, and fees agreed upfront on a billing program that suits you. No surprises.",
  alternates: { canonical: "/you-and-us/our-approach" },
};

export default function OurApproachPage() {
  return (
    <>
      <PageHero eyebrow="You and Us" title="Our Approach" subtitle="No surprises." />
      <PageContainer>
        <SectionNav links={youAndUsChildren} />

        <p>
          We&rsquo;ll initially meet with you, no charge to you, to understand
          your needs and the results you want. We&rsquo;ll ask you lots of
          questions, and listen so we understand your needs.
        </p>

        <p>
          We&rsquo;ll confirm our thoughts to you and, where possible, the
          choice of three levels of service: suggestions, support on some
          level, or hands-on. You choose the approach and the budget.
        </p>

        <p>
          With Compliance, we&rsquo;ll agree a set fee and you&rsquo;ll know in
          advance what we need to do. With our other Services, we mostly agree
          on upfront and fixed fees, on a billing program that suits us all.
          This helps your budgeting, and ours too.
        </p>
      </PageContainer>

      <CtaBand />
    </>
  );
}
