import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SectionNav from "@/components/SectionNav";
import { whyUsChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Our Team",
  description: "We're in the people business. A deliberately small Southport firm built on long-term client relationships, with the skills and attitude to match.",
  alternates: { canonical: "/why-us/our-team" },
};

const values = [
  "Accept and drive change",
  "Be creative, open-minded and questioning",
  "Pursue growth and learning",
  "Build open and honest relationships through communication",
  "Positive and innovative",
  "Deliver WOW service",
  "Passionate, determined, committed",
];

export default function OurTeamPage() {
  return (
    <>
      <PageHero eyebrow="Why Us?" title="Our Team" subtitle="We're in the people business." />
      <PageContainer>
        <SectionNav links={whyUsChildren} />

        <p>
          This means that we don&rsquo;t only think that accounting and
          financial management isn&rsquo;t only about numbers, we&rsquo;re sure
          it&rsquo;s about the people too.
        </p>

        <p>
          We build relationships with our clients which are central to
          everything we do, so it&rsquo;s only natural that as well as the
          practical skills, knowledge and professionalism you expect from a
          team with a reputation, it&rsquo;s the extras like personality,
          attitude, stability and caring that help make us who we are.
        </p>

        <p>
          We have made a conscious decision to restrict the number of clients
          we can assist and so the total size of our firm. Our team reflects
          this vision: the right number, here for the long term, passionate
          about results, and committed to client satisfaction.
        </p>

        <h2>The core values to us are:</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v} className="flex items-start gap-3 rounded-xl border border-line px-4 py-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
              <span className="text-sm text-ink-soft">{v}</span>
            </div>
          ))}
        </div>
      </PageContainer>

      <CtaBand />
    </>
  );
}
