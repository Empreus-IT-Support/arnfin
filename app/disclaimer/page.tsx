import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Information on this site is general in nature and is not intended to serve as advice. Please contact us about your specific circumstances.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: false, follow: true },
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero title="Disclaimer" />
      <PageContainer>
        <p>
          &ldquo;Every effort has been made to offer the most current, correct
          and clearly expressed information possible within this site.
          Nonetheless, inadvertent errors can occur and applicable laws, rules
          and regulations may change.
        </p>
        <p>
          The information contained in this site is general and is not
          intended to serve as advice. No warranty is given in relation to
          the accuracy or reliability of any information. Users should not
          act or fail to act on the basis of information contained herein.
          Users are encouraged to contact Arnold &amp; Finlay professional
          advisers for advice concerning specific matters before making any
          decision&rdquo;
        </p>
      </PageContainer>
    </>
  );
}
