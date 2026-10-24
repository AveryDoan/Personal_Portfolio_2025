# Avery Doan: portfolio

Single-page portfolio for Avery Doan, Data Analyst, NT Government. Next.js 16 (App Router), React 19, Tailwind CSS v4 and TypeScript, prerendered to static pages and hosted on Vercel.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

- `src/data/resume.ts`: every word of content (experience, skills, projects, awards, education, certifications, contact). The resume is the source of truth, so edit here first.
- `src/app/page.tsx`: the page. `src/components/stage.tsx` is the fixed photograph that changes as sections arrive; `src/components/mail-prompt.tsx` is the contact field.
- `src/app/globals.css`: colour and type tokens, motion.
- `public/images/`: optimised web images. `public/assets/` holds the original photographs.
- `public/og.jpg`: the 1200×630 link-preview image.

## The site address lives in one place

`src/lib/site.ts` builds the canonical link, Open Graph and Twitter URLs, `sitemap.xml` and `robots.txt` from a single value. To change the address, set `NEXT_PUBLIC_SITE_URL` in Vercel (Project → Settings → Environment Variables) and redeploy, or edit the fallback in `src/lib/site.ts`. Nothing else needs to change.

## Resume PDF

Put the current resume at `public/avery-doan-resume.pdf`. The "Resume" links appear on the page automatically once the file exists.

## Deployment

Vercel builds every push. Pushes to a branch get a preview deployment; `main` is production. No environment variables are required; `NEXT_PUBLIC_SITE_URL` is optional.
