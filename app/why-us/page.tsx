import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import SectionNav from "@/components/SectionNav";
import { whyUsChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "Ten reasons Gold Coast businesses choose Arnold & Finlay: pro-active advice, no hidden costs, guaranteed work, and a painless switch from your current accountant.",
  alternates: { canonical: "/why-us" },
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Us?"
        title="Why choose Arnold & Finlay?"
        subtitle="Industry standard, or something a little exceptional. We think it's simple."
      />
      <PageContainer>
        <SectionNav links={whyUsChildren} />

        <p>
          We know there&rsquo;s a whole lot more to doing our job than just the
          clever stuff with numbers. We&rsquo;re different, because we see
          accounting and tax as a more wider-reaching opportunity than just a
          way with figures, and business and financial planning at the same
          high standard goes without saying.
        </p>

        <p>
          With us it&rsquo;s not just what we do, it&rsquo;s the way we get it
          done. From legal compliance through taxation advice and tax planning,
          to business development, our approach is always focused on creating
          the kind of insightful, innovative and customised service that lets
          you take your business wherever you&rsquo;d like it to go.
        </p>

        <p>Our claim is that we can improve the prospects of any business.</p>

        <p>
          But here&rsquo;s the best bit. Because we understand that personality
          and partnership are every bit as important as a knack with numbers,
          working with us doesn&rsquo;t feel like work. An accountant who&rsquo;s
          not a necessary evil but a true asset to your business, a team who
          has a reputation and a track record for doing things differently.
        </p>

        <h2>And here are ten good reasons why you should consider our difference:</h2>
        <ol>
          <li>
            <strong>We are Pro-Active Accountants</strong> &mdash; We always
            look for ways to add value for you, and provide new ideas
          </li>
          <li>
            <strong>We&rsquo;re not just &ldquo;Tax&rdquo;</strong> &mdash; Our
            purpose is to help business owners pay less tax, make money,
            achieve goals
          </li>
          <li>
            <strong>We seek to Innovate and be Creative</strong> &mdash; Better
            ways to build a business, make money, reduce tax
          </li>
          <li>
            <strong>We aim to Simplify</strong> &mdash; Complex tax and business
            issues can be explained simply, so you understand
          </li>
          <li>
            <strong>We are Available</strong> &mdash; We return calls and
            emails promptly, we are available outside normal hours, and we
            regularly visit our clients at their businesses
          </li>
          <li>
            <strong>No Hidden Costs</strong> &mdash; We agree upfront on our
            fees for both compliance and projects. The clock is not ticking for
            simple calls or emails
          </li>
          <li>
            <strong>Experienced Team</strong> &mdash; Our team has experience.
            We don&rsquo;t just &lsquo;process&rsquo;, we understand your
            business and use care and pay attention to detail
          </li>
          <li>
            <strong>Guaranteed Work</strong> &mdash; We will fix up any aspect
            of our work that you are not satisfied with, at no charge to you
          </li>
          <li>
            <strong>We are a One-Stop Shop</strong> &mdash; Not only
            accountants, but we can assist with financial planning, finance,
            retirement planning, SMSF&rsquo;s
          </li>
          <li>
            <strong>No pain when you Change Accountants</strong> &mdash; We
            don&rsquo;t charge you to review past returns or records. We
            liaise with your previous accountant to collect records. We make
            it so easy!
          </li>
        </ol>
      </PageContainer>

      <CtaBand />
    </>
  );
}
