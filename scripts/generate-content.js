const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'blog-content-raw.json'), 'utf8'));

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/['’"“”]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatDateDisplay(iso, fallback) {
  if (!iso) return fallback || '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return fallback || '';
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

const covidRaw = [];
const blogRaw = [];

for (const post of raw.results) {
  if (post.url.includes('/covid-19_support/')) {
    covidRaw.push(post);
  } else {
    blogRaw.push(post);
  }
}

function buildSlug(post, usedSlugs) {
  const lastSegment = post.url.split('/').filter(Boolean).pop();
  let slug;
  if (/^blogpost\d+$/.test(lastSegment)) {
    // legacy numeric permalink -> derive slug from title
    slug = slugify(post.title || lastSegment);
  } else {
    slug = lastSegment.toLowerCase();
  }
  let candidate = slug;
  let n = 2;
  while (usedSlugs.has(candidate)) {
    candidate = `${slug}-${n}`;
    n++;
  }
  usedSlugs.add(candidate);
  return candidate;
}

// Images the old site served from its CDN, now hosted locally. Keeping them
// local lets the CSP stay locked to 'self' (see next.config.ts).
const LOCAL_IMAGES = {
  'https://irp.cdn-website.com/7061a1dc/dms3rep/multi/opt/tick-40a3cc81-1920w.png':
    '/images/tick-checklist.png',
};

function toPost(post, slug) {
  const authorClean = (post.author || 'Cameron Finlay').trim();
  return {
    slug,
    title: post.title,
    author: authorClean,
    dateISO: post.datePublished || null,
    dateDisplay: formatDateDisplay(post.datePublished, post.dateRaw),
    body: post.bodyText.split('\n').filter(Boolean),
    images: post.images.map(src => LOCAL_IMAGES[src] ?? src),
    originalUrl: post.url,
  };
}

const usedBlogSlugs = new Set();
const blogPosts = blogRaw
  .map(post => toPost(post, buildSlug(post, usedBlogSlugs)))
  .sort((a, b) => new Date(b.dateISO || 0) - new Date(a.dateISO || 0));

const usedCovidSlugs = new Set();
const covidPosts = covidRaw
  .map(post => toPost(post, buildSlug(post, usedCovidSlugs)))
  .sort((a, b) => new Date(b.dateISO || 0) - new Date(a.dateISO || 0));

const header = `// Auto-generated from the arnfin.net.au content audit. Do not hand-edit —
// regenerate with scripts/generate-content.js if source data changes.

export type Post = {
  slug: string;
  title: string;
  author: string;
  dateISO: string | null;
  dateDisplay: string;
  body: string[];
  images: string[];
  originalUrl: string;
};
`;

fs.writeFileSync(
  path.join(__dirname, '..', 'lib', 'blog-posts.ts'),
  header + `\nexport const blogPosts: Post[] = ${JSON.stringify(blogPosts, null, 2)};\n`
);

fs.writeFileSync(
  path.join(__dirname, '..', 'lib', 'covid-posts.ts'),
  header + `\nexport const covidPosts: Post[] = ${JSON.stringify(covidPosts, null, 2)};\n`
);

console.log(`Generated ${blogPosts.length} blog posts -> lib/blog-posts.ts`);
console.log(`Generated ${covidPosts.length} covid posts -> lib/covid-posts.ts`);

// Sanity: check for slug collisions across both files combined with duplicate titles
const titleCounts = {};
for (const p of [...blogPosts, ...covidPosts]) {
  titleCounts[p.title] = (titleCounts[p.title] || 0) + 1;
}
const dupes = Object.entries(titleCounts).filter(([, c]) => c > 1);
if (dupes.length) {
  console.log('\nNote: duplicate titles found (distinct slugs, same title):');
  dupes.forEach(([t, c]) => console.log(`  "${t}" x${c}`));
}
