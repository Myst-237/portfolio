# Cadell Griffith — Portfolio

Personal portfolio of Cadell Griffith, technical founder and software architect.
Live at https://cadellgriffith.vercel.app

Built with Next.js, Tailwind CSS, shadcn/ui and [Magic UI](https://magicui.design), based on the
[portfolio template by Dillion Verma](https://github.com/dillionverma/portfolio) (MIT).

## Edit content

Everything on the page comes from [`src/data/resume.tsx`](./src/data/resume.tsx).
Images live in `public/` (photo, logos) and `public/projects/` (project screenshots).

## Run locally

```bash
pnpm install
pnpm dev
```

Pushing to `main` redeploys the site on Vercel.

## Resume PDF

The downloadable resume (`public/cadell-griffith-resume.pdf`) is printed from
[`resume/resume.html`](./resume/resume.html). After editing the HTML, open it in Chrome and
Print → Save as PDF (Letter, margins "Default"), or render it headlessly with Playwright's `page.pdf()`.
