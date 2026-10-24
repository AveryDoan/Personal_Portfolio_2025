// The ONE place the public address of the site lives. Every canonical, Open Graph,
// Twitter, sitemap and robots URL is built from it.
//
// To move to a permanent domain, set NEXT_PUBLIC_SITE_URL in the Vercel project
// (Settings > Environment Variables) or change the fallback below. Nothing else
// in the repo needs editing.
const FALLBACK_SITE_URL = "https://averydoanportfolio.vercel.app";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL).replace(/\/+$/, "");

export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
