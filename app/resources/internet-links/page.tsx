import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHero from "@/components/ui/PageHero";
import SectionNav from "@/components/SectionNav";
import { resourcesChildren } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Useful Links",
  description: "A curated list of ATO, business.gov.au, Fair Work, banking and business software links we point clients to most often.",
  alternates: { canonical: "/resources/internet-links" },
};

const GROUPS: { heading: string; links: { text: string; href: string }[] }[] = [
  {
    heading: "Starting A New Business / Business Planning",
    links: [
      {
        text: "Business.gov.au",
        href: "https://www.business.gov.au/Business+Entry+Point/How-to+guides/Thinking+of+starting+a+business/",
      },
    ],
  },
  {
    heading: "Business Software",
    links: [
      { text: "Saasu", href: "http://www.saasu.com/" },
      { text: "Microsoft", href: "https://www.microsoft.com/" },
      { text: "CCH iFirm", href: "http://www.cchifirm.com.au/" },
      { text: "BankLink", href: "http://www.banklink.com.au/biz_index.html#" },
      { text: "MYOB", href: "http://myob.com.au/" },
      { text: "Quicken", href: "https://www.quicken.com/" },
      { text: "Sage Australia", href: "http://www.sagesoftware.com.au/" },
    ],
  },
  {
    heading: "Funding / Government",
    links: [
      {
        text: "Government grants",
        href: "http://www.business.gov.au/BusinessTopics/Grantsandassistance/Pages/default.aspx",
      },
      { text: "AVCAL", href: "https://aic.co/AIC/AIC/Home.aspx" },
    ],
  },
  {
    heading: "Financial Institutions",
    links: [
      { text: "ANZ", href: "http://www.anz.com/small-business/" },
      { text: "Commonwealth Bank", href: "https://www.commbank.com.au/" },
      {
        text: "National Australia Bank",
        href: "http://www.nab.com.au/wps/wcm/connect/nab/nab/home/business_solutions/",
      },
      {
        text: "Westpac",
        href: "http://www.westpac.com.au/internet/publish.nsf/Content/BB+HomePage",
      },
      { text: "Bank of Queensland", href: "http://www.boq.com.au/business.htm" },
      {
        text: "Bendigo Bank",
        href: "http://www.bendigobank.com.au/public/Business/index.asp",
      },
      {
        text: "Macquarie Bank",
        href: "http://www.macquarie.com.au/au/business/index.html",
      },
      { text: "St George Bank", href: "http://www.stgeorge.com.au/small-business/" },
    ],
  },
  {
    heading: "Compliance",
    links: [
      { text: "ATO Website", href: "https://www.ato.gov.au/" },
      {
        text: "ABN Registration",
        href: "https://business.gov.au/registrations/register-for-an-australian-business-number-abn",
      },
      {
        text: "TFN Registration",
        href: "https://business.gov.au/registrations/register-for-taxes/register-for-a-tax-file-number",
      },
      {
        text: "GST Registration",
        href: "https://business.gov.au/registrations/register-for-taxes/register-for-goods-and-services-tax-gst",
      },
      {
        text: "Fringe Benefits Tax Registration (FBT)",
        href: "https://business.gov.au/registrations/register-for-taxes/register-for-fringe-benefits-tax-fbt",
      },
      {
        text: "Payroll Tax Registration",
        href: "https://business.gov.au/finance/taxation/payroll-tax",
      },
      {
        text: "Pay As You Go (PAYG)",
        href: "https://business.gov.au/registrations/register-for-taxes/register-for-pay-as-you-go-payg-withholding",
      },
    ],
  },
  {
    heading: "Human Resources",
    links: [
      {
        text: "Australian Human Rights Commission",
        href: "http://www.humanrights.gov.au/info_for_employers/employer_respons/index.html",
      },
      { text: "Health & Safety", href: "https://www.safeworkaustralia.gov.au/" },
      { text: "Leave & Public Holidays", href: "https://www.fairwork.gov.au/leave" },
      {
        text: "Resolving Industrial Relations Disputes",
        href: "http://www.airc.gov.au/index.htm",
      },
      {
        text: "Terminating Employment",
        href: "https://www.fairwork.gov.au/ending-employment",
      },
    ],
  },
  {
    heading: "Exiting A Business",
    links: [
      {
        text: "Succession Planning",
        href: "https://business.gov.au/planning/business-plans/develop-your-succession-plan",
      },
      {
        text: "Transferring Ownership",
        href: "https://business.gov.au/planning/business-structures-and-types/restructuring/change-business-ownership",
      },
      { text: "Insolvency & Trustee Service", href: "http://www.itsa.gov.au/" },
      {
        text: "Selling Your Business",
        href: "https://business.gov.au/exiting/selling-your-business",
      },
    ],
  },
  {
    heading: "News",
    links: [
      { text: "The Australian", href: "https://www.theaustralian.com.au/" },
      { text: "The Age", href: "http://www.theage.com.au/" },
      { text: "The Sydney Morning Herald", href: "http://www.smh.com.au/" },
      { text: "The Herald Sun", href: "http://www.news.com.au/heraldsun/" },
      { text: "The Advertiser", href: "http://www.news.com.au/adelaidenow/" },
      { text: "The Courier-Mail", href: "http://www.news.com.au/couriermail/" },
      { text: "The Daily Telegraph", href: "http://www.dailytelegraph.com.au/" },
      { text: "The Mercury", href: "http://www.themercury.com.au/" },
      { text: "The Australian Financial review", href: "https://www.afr.com/" },
    ],
  },
  {
    heading: "Finance",
    links: [
      { text: "Australian Stock Exchange", href: "http://www.asx.com.au/" },
      { text: "New Zealand Stock Exchange", href: "http://www.nzx.com/" },
      { text: "The NASDAQ Stock Market", href: "http://www.nasdaq.com/" },
      { text: "US Stock Exchange", href: "http://www.nyse.com/" },
      {
        text: "London Stock Exchange",
        href: "http://www.londonstockexchange.com/home/homepage.htm",
      },
      { text: "Foreign Exchange Rates", href: "https://www.xe.com/" },
    ],
  },
];

export default function InternetLinksPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Internet Links"
        subtitle="A curated shortcut to the sites we point clients to most often."
      />
      <PageContainer aside={false}>
        <SectionNav links={resourcesChildren} />

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <h2 className="!mt-0">{group.heading}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10">
          <em>
            Note: The websites links provided on this page are for general
            interest only. We do not endorse any products and services
            offered by the websites listed on this page.
          </em>
        </p>
      </PageContainer>
    </>
  );
}
