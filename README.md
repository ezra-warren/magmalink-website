# MagmaLink Website

Marketing site for [MagmaLink](https://magmalink.com) — outreach systems for B2B sales teams.

## Stack

- **Framework:** [Astro](https://astro.build) 5
- **Styling:** Tailwind CSS v4
- **Fonts:** DM Sans (headings), Inter (body)

## Setup

```bash
npm install
npm run dev
```

Runs at **http://localhost:4321**

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |

## Structure

- `src/pages/` — Astro pages (index, contact, privacy, terms)
- `src/layouts/` — Layout and nav/footer
- `src/content/copy.ts` — All site copy (single source of truth)
- `src/styles/global.css` — Theme and brand tokens
- `public/` — Static assets (favicon, logos)
- `docs/` — Brand and messaging documentation

## Deploy

Build output is in `dist/`. Deploy that folder to any static host (e.g. Vercel, Netlify). Set root to this directory and build command: `npm run build`.

---
*Repo synced via Git.*
