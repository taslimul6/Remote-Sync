# Remote-Sync — Agent Guide

## Project Overview

**Remote-Sync** is a Next.js 16 job discovery platform with a dark-themed UI. It connects job seekers with curated opportunities through a modern, responsive interface.

## Tech Stack

- **Framework**: Next.js 16.4.6 (App Router, React 19)
- **Styling**: Tailwind CSS 4.3 with Turbopack
- **UI Components**: shadcn/ui (base-nova style) + custom components
- **Icons**: lucide-react
- **Language**: TypeScript 5.x

## Project Structure

```
app/                    # Next.js App Router
├── layout.tsx          # Root layout with fonts
├── page.tsx            # Home page
└── globals.css         # Global Tailwind styles

components/
├── shared/             # Reusable across pages
│   └── navbar.tsx      # Navbar, NavbarBrand, NavbarNav, NavbarLink, NavbarButton
├── homePage/           # Home page-specific components
│   ├── hero.tsx        # HeroSection, HeroBadge, HeroTitle, HeroDescription, HeroSearch, HeroTrending
│   └── jobs.tsx        # JobsSection, JobCard, JobBadge
└── ui/                 # shadcn/ui primitives
    ├── badge.tsx
    ├── button.tsx
    └── card.tsx

lib/
└── utils.ts            # cn() utility (clsx + tailwind-merge)
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
```

## Key Conventions

- Components are organized by scope: `shared/` for cross-page, `homePage/` for page-specific
- Use `@/` alias for imports (maps to project root)
- All interactive components use `"use client"` directive
- Tailwind classes follow shadcn/ui patterns with CSS variables for theming
- Component files use named exports, no default exports (except pages)

## Dependencies

- `next`, `react`, `react-dom` — Core framework
- `tailwindcss`, `@tailwindcss/turbopack` — Styling
- `clsx`, `tailwind-merge` — Class name utilities
- `lucide-react` — Icon library
- `@base-ui/react` — Headless UI primitives (used by shadcn)
- `class-variance-authority` — Variant styling

## Pages

### Home (`/`)
- Navbar (shared)
- Hero section with search form and trending jobs
- Jobs grid with 6 sample job cards
- Dark theme with purple/blue accent colors

## Agent Rules

- This is Next.js 16 — check `node_modules/next/dist/docs/` before using unfamiliar APIs
- Do not add comments to code unless requested
- Follow existing component patterns when adding new ones
- Keep components simple and single-purpose