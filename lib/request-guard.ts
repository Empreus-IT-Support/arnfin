/**
 * Cheap guards for the public form endpoints.
 *
 * Both sit in front of the existing rate limit and honeypot:
 * - sameOrigin: browsers always send an Origin header on a cross-site POST, so
 *   a form post from another website is refused. Requests with no Origin
 *   (curl, server-to-server) are left to the rate limit and honeypot.
 * - tooLarge: the fields are all short text, so anything bigger than a few KB
 *   is not a real enquiry.
 */

export function sameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

export function tooLarge(req: Request, maxBytes = 20_000): boolean {
  const length = Number(req.headers.get("content-length") ?? 0);
  return Number.isFinite(length) && length > maxBytes;
}
