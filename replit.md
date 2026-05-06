# Jefferson Perolino — Portfolio

A professional single-page portfolio website for Jefferson Perolino, a Virtual Assistant specializing in financial management and professional writing.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- Required env: `VITE_FORMSPREE_ENDPOINT` — Formspree form endpoint (contact form)
- Required env: `DATABASE_URL` — Postgres connection string (API server only)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, framer-motion, lucide-react
- Forms: react-hook-form + zod, submitted to Formspree
- API: Express 5 (backend, currently unused by portfolio)
- DB: PostgreSQL + Drizzle ORM (unused by portfolio)

## Where things live

- `artifacts/portfolio/src/pages/home.tsx` — home page composing all sections
- `artifacts/portfolio/src/components/sections/` — individual page sections
- `artifacts/portfolio/src/components/layout/` — Navbar, Footer
- `artifacts/portfolio/src/index.css` — theme palette (HSL CSS vars, DM Sans + Playfair Display)
- `artifacts/portfolio/src/App.tsx` — wouter router
- `lib/api-spec/openapi.yaml` — OpenAPI contract (health check only)

## Architecture decisions

- Portfolio is purely frontend (no backend) — all sections are static React components
- Contact form uses react-hook-form + zod and posts to Formspree via VITE_FORMSPREE_ENDPOINT
- Profile photo uses a styled "JP" initials avatar (no image file needed)
- Framer-motion handles scroll-triggered fade-in and stagger animations
- IntersectionObserver drives active nav link highlighting as user scrolls

## Product

Single-page portfolio with: Hero ("Elevating your business through precision and clarity"), About, Expertise/Services (4 offerings), Skills/Tools (infinite marquee), Testimonials (client quotes), and a Contact form with validation.

## User preferences

- Wants a professional, non-generic look
- No formal design background — trusts the agent's design judgment
- Photo not yet added (using JP initials avatar as placeholder)

## Gotchas

- Google Fonts @import must be the VERY FIRST line of index.css (before @import "tailwindcss")
- All CSS vars in index.css must be set to real HSL values — never leave `red` placeholders
- VITE_FORMSPREE_ENDPOINT is set as a shared userenv in .replit — no need to add manually

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- See the `react-vite` skill for frontend build conventions
