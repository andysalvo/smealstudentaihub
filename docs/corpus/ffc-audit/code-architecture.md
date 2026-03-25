# FFC Audit: Code Architecture

> Last updated: 2026-03-24
> Category: ffc-audit
> Confidence: Direct analysis of andysalvo/smealstudentaihub repo

---

## Next.js Configuration (next.config.ts)

Static export (`output: 'export'`), trailingSlash for clean URLs, unoptimized images, remote patterns for 4 FFC domains, basePath/assetPrefix from env var.

### What's Good

- Comment explaining why trailingSlash is true (`serve -s out` compatibility)
- Dynamic basePath from env var enables dual deployment targets

### What to Change

- Remove FFC remote image patterns
- Keep basePath logic for GitHub Pages

---

## Root Layout (src/app/layout.tsx)

globals.css import, Footer/CookieConsent/GoogleTagManager, 8 Google Fonts via next/font, siteMetadata export, preconnect/dns-prefetch for external domains, LCP image preload, font CSS variables on body.

### What's Good

- **Preconnect and dns-prefetch** for external resources is real performance optimization
- **LCP image preload** with `fetchPriority="high"` shows performance awareness
- **next/font with CSS variables** is the correct modern approach
- **`suppressHydrationWarning`** prevents console noise from browser extensions

### What's Overengineered

- **8 Google Fonts is excessive.** 2-3 max.
- Commented-out popup system should be removed

### Keep / Improve

- **Keep:** Preconnect pattern, LCP preload, next/font CSS variables, basePath from env
- **Improve:** Reduce to 2-3 fonts. Remove commented-out code.

---

## Global Styles (src/app/globals.css)

Tailwind v4 CSS-based config with `@import 'tailwindcss'`, CSS custom properties for brand tokens, `@theme inline` block, font assignments via ID selectors, sr-only utility, animations, utility classes.

### What's Good

- **Tailwind v4 CSS-based config** -- no separate tailwind.config file
- **Brand tokens as CSS custom properties** + `@theme inline` is the correct v4 pattern
- **sr-only utility** for accessibility

### What's Overengineered

- Font assignments via **ID selectors** (`#header`, `#lato-font`) is a workaround for the 8-font problem
- **`!important`** on several properties indicates specificity fights

### Keep / Improve

- **Keep:** `@import 'tailwindcss'`, `@theme inline`, sr-only, CSS custom properties
- **Improve:** Replace FFC brand tokens with Penn State/Smeal tokens. Kill ID selectors. Kill `!important`.

---

## Utility Library (src/lib/)

### assetPath.ts

Simple function prepending `NEXT_PUBLIC_BASE_PATH` to asset paths. Well-documented JSDoc.

**Verdict:** Keep. Clean abstraction for GitHub Pages deployment.

### siteMetadata.ts

Complete Next.js Metadata export: metadataBase, title template, description, keywords, robots config (including googleBot directives), canonical URL, OpenGraph, Twitter Card, icons, web manifest.

### What's Good

- Centralized metadata instead of scattered across layouts
- googleBot-specific directives (max-snippet, max-image-preview) go beyond most sites

**Verdict:** Keep pattern. Replace all FFC content with Applied AI metadata.

### fonts.ts

8 Google Font configurations via next/font/google.

**Verdict:** Rebuild with 2-3 fonts matching Penn State/Smeal brand.

---

## TypeScript (tsconfig.json)

Strict mode, ES2017 target, bundler module resolution, `@/*` path alias to `./src/*`, incremental compilation, Next.js plugin.

### What's Good

- **Strict mode** is the biggest win for agent code quality
- **`@/*` path alias** prevents deep relative imports
- **Incremental compilation** speeds up builds

### What to Fix

- Remove stray manual include entry (`src/components/UI/BlogCard.tsx`)

**Verdict:** Keep with minor cleanup.

---

## Package.json

### Dependencies (Production)

| Package | Purpose | Keep? |
|---------|---------|-------|
| next | Framework | Yes |
| react | UI | Yes |
| react-dom | UI | Yes |
| postcss | CSS processing | Yes |
| framer-motion | Animations | Maybe -- only if we need animations |
| lucide-react | Icons | Yes (pick ONE icon library) |
| react-icons | Icons | No -- redundant with lucide-react |
| swiper | Carousel | No -- unless we need carousels |

### Dependencies (Dev)

All dev dependencies are worth keeping: testing (jest, playwright, testing-library), linting (eslint, prettier), types, Tailwind, commitlint, husky, lighthouse CI, linkinator.

### Scripts Worth Keeping

| Script | Purpose |
|--------|---------|
| `dev` | Next.js dev server with Turbopack |
| `build` | Production build |
| `preview` | Local static file serving |
| `lint` | ESLint |
| `format` / `format:check` | Prettier |
| `check-links` | Linkinator broken link detection |
| `test` / `test:watch` / `test:coverage` | Jest unit tests |
| `test:e2e` / `test:e2e:ui` / `test:e2e:headed` | Playwright E2E |
| `test:smoke` | Post-deploy smoke tests |
| `prepare` | Husky hook installation |

**Verdict:** Keep all scripts. Remove react-icons and swiper. Evaluate framer-motion later.

---

## Page Structure

### Current FFC Pages (all must be replaced)

- `/` -- Home page (FFC content)
- `/cookie-policy` -- Cookie policy
- `/donation-policy` -- Donation policy
- `/privacy-policy` -- Privacy policy
- `/terms-of-service` -- Terms of service
- `/security-acknowledgements` -- Security acknowledgements
- `/vulnerability-disclosure-policy` -- Vulnerability disclosure
- `/free-for-charity-donation-policy` -- FFC-specific donation policy

### Components (all FFC-specific, must be replaced)

- `header/` -- FFC header
- `footer/` -- FFC footer
- `cookie-consent/` -- Cookie consent banner
- `google-tag-manager/` -- GTM integration
- `home-page/TheFreeForCharityTeam/` -- FFC team section
- `ui/TeamMemberCard.tsx` -- FFC team member card

### Assets (all FFC-specific, must be removed)

- `public/Images/` -- 60+ FFC images (.webp, .png)
- `public/Svgs/` -- 15+ FFC SVGs
- `public/videos/` -- FFC mission video
- `public/CNAME` -- FFC domain
- Favicons -- FFC branding

**Verdict:** All content, components, assets, and pages are FFC-specific. Strip everything. Keep the structural patterns (layout.tsx wrapper, page.tsx delegation, lib/ utilities).
