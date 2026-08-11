const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5;
const buckets = new Map<string, { count: number; start: number }>();

/** Simple in-memory limiter: max 5 hits per key per 10 minutes. */
export function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = buckets.get(key);
  if (!entry || now - entry.start > WINDOW_MS) {
    buckets.set(key, { count: 1, start: now });
    return false;
  }
  entry.count++;
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (now - v.start > WINDOW_MS) buckets.delete(k);
  }
  return entry.count > MAX_PER_WINDOW;
}

export function clientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}
