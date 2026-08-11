import { blogPosts, type Post } from "@/lib/blog-posts";

/**
 * Tax Facts was an empty widget on the original site. Rather than invent tax
 * content, this groups the firm's own 200+ articles into topics by matching
 * keywords in their titles — so every entry is real, attributable writing by
 * Cameron Finlay.
 */
export type Topic = {
  slug: string;
  title: string;
  blurb: string;
  match: RegExp;
};

export const topics: Topic[] = [
  {
    slug: "superannuation-and-smsf",
    title: "Superannuation & SMSF",
    blurb: "Contributions, pensions, self-managed funds and retirement planning.",
    match: /super|smsf|pension|retire|downsizer|drawdown|binding death/i,
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    blurb: "Reducing what you legally owe, before the year closes.",
    match: /tax planning|reduce your|minimise|tax busting|end of financial year|eofy|tax time|deduction|write-off|write off|capital gain|cgt|division 7a|dividend/i,
  },
  {
    slug: "ato-audits-and-debt",
    title: "ATO Audits & Debt",
    blurb: "Audit activity, data matching, penalties and payment arrangements.",
    match: /audit|ato|data matching|penalt|debt|director penalty|din|default assessment|insolven|liquidat|creditor/i,
  },
  {
    slug: "gst-bas-and-fbt",
    title: "GST, BAS & FBT",
    blurb: "Activity statements, fringe benefits and the common mistakes.",
    match: /gst|bas|fbt|fringe benefit|fuel tax|payroll|single touch|stp|land tax|qbcc/i,
  },
  {
    slug: "employing-people",
    title: "Employing People",
    blurb: "Contractors versus employees, wages, super and dismissal.",
    match: /contract|employee|employer|wage|casual|dismissal|holiday pay|superstream|staff/i,
  },
  {
    slug: "marketing-and-winning-clients",
    title: "Marketing & Winning Clients",
    blurb: "Word of mouth, differentiation and what actually brings work in.",
    match: /marketing|advertis|word of mouth|customer|differentiate|elevator|brand|sales|win/i,
  },
  {
    slug: "growing-a-business",
    title: "Growing a Business",
    blurb: "Profit, pricing, cash flow, planning and business structure.",
    match: /profit|pricing|price|cash ?flow|growth|grow|plan|business model|value|valuation|benchmark|forecast|structure|premises|selling|succession|grant|numbers|record|report|decision|failure|mistake/i,
  },
  {
    slug: "budgets-and-the-economy",
    title: "Budgets & the Economy",
    blurb: "Federal Budget notes, interest rates and trading conditions.",
    match: /budget|econom|interest rate|recession|inflation|stimulus|jobkeeper|covid|trend|stock|housing|confiden|outlook|expectation|thrive|cliff|tax table|bitcoin|blockchain|scam|phishing|ransom|insurance|crystal ball|short term|proactive|challenge/i,
  },
  {
    slug: "business-thinking",
    title: "Business Thinking",
    blurb: "Leadership, mindset and the lessons that don't fit a tax category.",
    // Catch-all so every article stays reachable from this index.
    match: /.*/,
  },
];

export type TopicWithPosts = Topic & { posts: Post[] };

/** Each post lands in the first topic it matches, so nothing is double-counted. */
export function topicsWithPosts(): TopicWithPosts[] {
  const used = new Set<string>();
  const result: TopicWithPosts[] = [];

  for (const topic of topics) {
    const posts = blogPosts.filter(
      (p) => !used.has(p.slug) && topic.match.test(p.title)
    );
    posts.forEach((p) => used.add(p.slug));
    result.push({ ...topic, posts });
  }
  return result.filter((t) => t.posts.length > 0);
}
