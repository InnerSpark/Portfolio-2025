# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional UX portfolio site for Mike Binder (Inner Spark Studio). React SPA showcasing case studies from Dun & Bradstreet, Realogy, and iBASEt. Hosted at innerspark.studio.

## Commands

```bash
npm run dev       # Dev server at http://localhost:3000
npm run build     # Runs tools/generate-llms.js then Vite production build
npm run preview   # Preview production build on port 3000
npm run lint      # ESLint in quiet mode
```

## Tech Stack

- **React 18** with React Router DOM 7 (SPA routing)
- **Vite 4** for build/dev server
- **Tailwind CSS 3** with PostCSS/Autoprefixer
- **shadcn/ui** (New York style, Radix primitives) for component library
- **Framer Motion** for animations
- **React Helmet** for per-page SEO metadata
- **EmailJS** for contact form submission
- ES modules (`"type": "module"` in package.json)

## Architecture

- **Entry point**: `index.html` → `src/main.jsx` → `src/App.jsx`
- **Routing**: `App.jsx` defines all routes. Homepage uses `MainLayout` (Header → Hero → About → Projects → Resume → Contact → Footer). Case study routes are wrapped in `PasswordProtectedRoute`.
- **Import alias**: `@/` maps to `./src/` (configured in both `vite.config.js` and `jsconfig.json`)
- **Components**: `src/components/` — page sections live at root level, shadcn/ui primitives in `ui/` subfolder
- **shadcn/ui config**: `components.json` at project root — use `npx shadcn@latest add <component>` to add new ones
- **Styling**: Tailwind with CSS custom properties (HSL) for theming in `src/index.css`. Dark mode via class strategy.
- **Custom Vite plugins**: `plugins/` directory contains dev-only visual editor, selection mode, and iframe route restoration (all disabled in production builds)
- **Build tools**: `tools/generate-llms.js` auto-generates an `llms.txt` file from Helmet metadata at build time

## Key Patterns

- Page-section components (Hero, About, Projects, etc.) are composed into `MainLayout` in `App.jsx`
- Case studies are standalone page components with their own Helmet metadata and password protection
- Use `clsx` + `tailwind-merge` via `src/lib/utils.js` `cn()` helper for conditional class merging
- Toast notifications via shadcn/ui `useToast` hook (`src/hooks/use-toast.js`)
