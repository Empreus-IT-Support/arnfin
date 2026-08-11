import type { Metadata } from "next";
import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SectionNav from "@/components/SectionNav";
import { whyUsChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Associations",
  description: "Arnold & Finlay are proud Xero Certified Advisors, providing set-up, unlimited support and tailored cloud accounting reporting for small business.",
  alternates: { canonical: "/why-us/associations" },
};

export default function AssociationsPage() {
  return (
    <>
      <PageHero eyebrow="Why Us?" title="Associations" subtitle="We are proudly affiliated with..." />
      <PageContainer>
        <SectionNav links={whyUsChildren} />

        <div className="flex flex-col gap-6 rounded-2xl border border-line p-6 sm:flex-row sm:items-center">
          <Image
            src="/images/xero-certified-advisor-badge.png"
            alt="Xero Certified Advisor"
            width={160}
            height={80}
            className="h-16 w-auto shrink-0"
          />
          <div>
            <h2 className="!mt-0">XERO</h2>
            <p className="!mb-0">
              By partnering with Xero, an online accounting platform (or
              cloud accounting), we can not only ensure trouble-free
              accounting but also offer versatile, functional and useful
              reporting and management for small businesses. We provide
              several options to help simplify your accounting, support them
              so that your reports are always timely and accurate, and we can
              even tailor them if your needs are not fully met.
            </p>
          </div>
        </div>
      </PageContainer>

      <CtaBand />
    </>
  );
}
