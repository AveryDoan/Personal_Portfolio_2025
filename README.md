## Avery Doan — Portfolio

Next.js 15 + App Router build wired with Tailwind CSS v4, TypeScript, and the shadcn/ui project structure. The landing page pulls directly from Avery’s resume plus live GitHub repositories to highlight research, civic-tech, and analytics projects.

### Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Tech decisions
- **Framework**: Next.js app directory with TypeScript for routing + SEO friendly metadata.
- **Styling**: Tailwind CSS v4 (configured in `src/app/globals.css`) plus CSS variables for the shadcn design tokens.
- **Components**: Stored under `src/components`. Reusable UI pieces from shadcn are expected inside `src/components/ui` — this keeps generated components isolated from feature logic and enables one-line imports such as `@/components/ui/button`.
- **Data**: Resume/GitHub detail lives in `src/data/resume.ts` so that sections stay declarative.
- **Icons**: `lucide-react` provides brand-consistent icons throughout the experience.

### shadcn / Tailwind / TypeScript instructions
The project is already initialized with the shadcn CLI (`npx shadcn@latest init -d`). If you ever start fresh:
1. Ensure the project is TypeScript-ready (`npx create-next-app@latest --typescript ...`).
2. Install Tailwind via the Next.js instructions or `npx @tailwindcss/cli@next init -p`.
3. Run `npx shadcn@latest init` and point the CLI to `src/components` for components and `src/app/globals.css` for styles. If your project doesn’t already have `/components/ui`, create it — shadcn expects this folder to keep primitives consistent and upgradable.
4. Add components with `npx shadcn@latest add <component-name>`.

### Provided components
- `src/components/ui/portfolio-hero.tsx` (the custom hero animation requested in the prompt).
- `src/app/demo/page.tsx` demonstrates how to import the hero in isolation.

### Content to update
- Resume data: edit `src/data/resume.ts`.
- Imagery: swap the Unsplash URL in `portfolio-hero.tsx` if you want to use a real portrait.
- GitHub callouts: adjust the `githubProjects` array to highlight different repos.

### Deployment
Deploy to [Vercel](https://vercel.com) (`vercel deploy`) or your preferred host. Environment variables are not required for this static build.
