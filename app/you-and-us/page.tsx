import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SectionNav from "@/components/SectionNav";
import { youAndUsChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "You and Us",
  description: "We believe accounting is about partnership. A smaller client list means more time, closer relationships and highly customised service.",
  alternates: { canonical: "/you-and-us" },
};

export default function YouAndUsPage() {
  return (
    <>
      <PageHero
        eyebrow="You and Us"
        title="You and Us"
        subtitle="We think it's about Partnership, and we love getting to know our clients."
      />
      <PageContainer>
        <SectionNav links={youAndUsChildren} />

        <p>
          We set out to understand the people and businesses we work with,
          which makes our job more enjoyable, and the enjoyable things are
          what help to make our partnership successful. So, the dread of
          &lsquo;going to the accountant&rsquo; is well and truly over.
        </p>

        <p>
          We believe in quality over quantity, and so our client list is
          smaller than many other firms because that&rsquo;s the way we like
          it. Being selective and personal means we&rsquo;re able to give you
          extra time and a focus on developing highly customised and
          individualized services that really deliver results. We&rsquo;re
          told our client relationships are closer than other firms&rsquo;,
          but that&rsquo;s because the clients we work with value this
          approach.
        </p>

        <p>
          Our partnerships are built on trust, communication and being
          two-way. We&rsquo;re a team that builds lasting relationships, a
          philosophy that&rsquo;s for the long term, not a quick dollar.
        </p>
      </PageContainer>

      <CtaBand />
    </>
  );
}
