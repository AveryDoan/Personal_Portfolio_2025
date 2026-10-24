# Avery Doan: portfolio

Single-page portfolio for Avery Doan, Data Analyst, NT Government. Next.js 16 (App Router), React 19, Tailwind CSS v4 and TypeScript, hosted on Vercel.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

- `src/data/resume.ts`: all content (experience, skills, projects, awards, education, certifications, contact, gallery slides). The resume is the source of truth, so edit here first.
- `src/app/page.tsx`: the page sections. `src/components/ui/portfolio-hero.tsx` is the animated hero.
- `public/images/`: optimised web images used by the site. `public/assets/` holds the original photographs.
- Resume PDF: not published yet. Add it to `public/` and link it from the Contact section in `src/app/page.tsx` once the corrected version is ready.
- `public/og.jpg`: the 1200×630 link-preview image.

## The site address lives in one place

`src/lib/site.ts` builds the canonical link, Open Graph and Twitter URLs, `sitemap.xml` and `robots.txt` from a single value. To change the address, set `NEXT_PUBLIC_SITE_URL` in Vercel (Project → Settings → Environment Variables) and redeploy, or edit the fallback in `src/lib/site.ts`. Nothing else needs to change.

## Deployment

Vercel builds every push. Pushes to a branch get a preview deployment; `main` is production. No environment variables are required; `NEXT_PUBLIC_SITE_URL` is optional.
