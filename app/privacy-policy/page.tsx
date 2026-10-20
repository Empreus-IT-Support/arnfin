import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Arnold & Finlay collects, uses and protects the personal information you give us through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <PageContainer aside={false}>
        <p>
          This policy explains how {site.legalName} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;) handles personal information collected through this
          website, including the TASC Tax page. We follow the Australian Privacy
          Principles in the <em>Privacy Act 1988</em> (Cth). Information you
          give us as a client is also covered by our professional obligations.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Enquiry forms and emails.</strong> If you contact us, we
            receive the details you give us, such as your name, position,
            company, telephone number, email address and your message.
          </li>
          <li>
            <strong>Newsletter sign-ups.</strong> If you subscribe, we receive
            your name, email address, company and the lists you chose.
          </li>
          <li>
            <strong>Technical information.</strong> Our website host records
            standard request details such as your IP address, browser and the
            pages you visit. We also use cookie-free statistics to see how many
            people visit the site and which pages they read. This does not
            identify you personally or follow you across other websites.
          </li>
        </ul>

        <h2>How we use it</h2>
        <p>
          We use your information to reply to your enquiry, provide our
          services, send the newsletters you asked for, and keep this website
          secure and working. We do not sell your information, and we do not
          use it for advertising.
        </p>

        <h2>How your enquiry reaches us</h2>
        <p>
          When you send a message through a form on this website, it is emailed
          to us through an email delivery service run by our website provider,
          Empreus IT Support. The service is used only to deliver your message
          to us.
        </p>

        <h2>Cookies and third parties</h2>
        <p>
          This website does not set cookies for tracking or advertising. The
          Location Map page shows an embedded Google Map, and Google may collect
          information when that map loads, under Google&rsquo;s own privacy
          policy. Our hosting and statistics providers may process information
          on servers outside Australia.
        </p>

        <h2>Who we share it with</h2>
        <p>
          We share personal information only with the service providers we need
          to run this website (hosting, email delivery and visitor statistics),
          or where the law requires it.
        </p>

        <h2>Keeping it secure</h2>
        <p>
          This website is served over HTTPS, and our forms include protections
          against spam and misuse. We take reasonable steps to protect the
          information we hold from loss, misuse and unauthorised access.
        </p>

        <h2>Access, correction and complaints</h2>
        <p>
          You can ask to see the personal information we hold about you, or ask
          us to correct it, by contacting us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or on{" "}
          <a href={`tel:${site.phoneE164}`}>{site.phone}</a>. Our postal address
          is {site.postal}. If you are unhappy with how we have handled your
          information, please tell us first. You can also contact the Office of
          the Australian Information Commissioner at{" "}
          <a href="https://www.oaic.gov.au" rel="noopener noreferrer">
            oaic.gov.au
          </a>
          .
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The current version is
          always on this page. Last updated: 20 October 2026.
        </p>
      </PageContainer>
    </>
  );
}
