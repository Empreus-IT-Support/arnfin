import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SectionNav from "@/components/SectionNav";
import { youAndUsChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Services Overview",
  description: "Compliance, Start-up, Growth and Financial Director — accounting services built around your business and where it sits in its lifecycle.",
  alternates: { canonical: "/you-and-us/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="You and Us" title="Services" subtitle="Our services are built around your business." />
      <PageContainer>
        <SectionNav links={youAndUsChildren} />

        <p>
          We&rsquo;ve been doing our jobs for long enough to know them inside
          out. What this means to you is that we understand what kind of
          services will produce the results required.
        </p>

        <p>
          Although every one of our services is highly customisable in design
          and execution, each one is intended for a slightly different outcome
          or situation.
        </p>

        <p>
          Our <Link href="/compliance">Compliance</Link> service is just that;
          a specific and comprehensive service to cover all the issues and
          requirements that a business needs for complying with tax, company
          office, and other regulatory authorities. We tailor it to your needs
          so you get a planned outcome and Peace of Mind. Compliance can be a
          factor in any service area but usually refers to GST, payroll,
          statutory accounts, and income tax returns.
        </p>

        <p>
          Some businesses need more. So, we also have{" "}
          <Link href="/start-up">Start-up</Link>,{" "}
          <Link href="/growth">Growth</Link>, and{" "}
          <Link href="/financial-director">Financial Director</Link>. These
          include most accountancy and financial bases between them. Each one
          suits businesses at different stages in their lifecycle, and more
          detail on them is on their own section on this website.
        </p>

        <p>
          All businesses need good accounting software, so we provide three
          packages based around cloud accounting provider Xero. In those
          packages, we have included the software and various levels of
          support for users. Naturally, we can mix and match to separate the
          software, provide some support like regular checking of entities,
          and more services based around our core packages of Compliance,
          Start-up, Growth, and Financial Director.
        </p>
      </PageContainer>

      <CtaBand />
    </>
  );
}
