# FFC Audit: Code Architecture -- Patterns and Application

> Last updated: 2026-03-24
> Category: ffc-audit
> Confidence: Direct analysis of andysalvo/smealstudentaihub repo

---

## Next.js Configuration (next.config.ts)

### What They Built

Static export (`output: 'export'`), trailingSlash for clean URLs, unoptimized images, remote image patterns, basePath/assetPrefix from env var.

### What They Did Well

- Comment explaining why trailingSlash is true (`serve -s out` compatibility) -- helpful for agents and humans alike
- Dynamic basePath from env var enables flexible deployment targets
- Clean, minimal config file

### How We'll Apply This

- **Keep:** Static export, trailingSlash, dynamic basePath logic for GitHub Pages
- **Adapt:** Swap remote image patterns to match our asset sources as we build out content

---

## Root Layout (src/app/layout.tsx)

### What They Built

globals.css import, Footer/CookieConsent/GoogleTagManager, Google Fonts via next/font, siteMetadata export, preconnect/dns-prefetch for external domains, LCP image preload, font CSS variables on body.

### What They Did Well

- **Preconnect and dns-prefetch** for external resources is a real performance optimization
- **LCP image preload** with `fetchPriority="high"` shows performance awareness
- **next/font with CSS variables** is the correct modern approach for font loading
- **`suppressHydrationWarning`** prevents console noise from browser extensions
- Clean component composition pattern: persistent layout wrapping children with footer and utilities

### How We'll Apply This

- **Keep:** Preconnect pattern, LCP preload, next/font CSS variables, basePath from env, component composition pattern
- **Adapt:** Select 2-3 fonts that align with Penn State/Smeal brand identity (research pending). Build a clean font stack without ID-selector workarounds.

---

## Global Styles (src/app/globals.css)

### What They Built

Tailwind v4 CSS-based config with `@import 'tailwindcss'`, CSS custom properties for brand tokens, `@theme inline` block, font assignments, sr-only utility, animations, utility classes.

### What They Did Well

- **Tailwind v4 CSS-based config** -- no separate tailwind.config file needed. Modern and clean.
- **Brand tokens as CSS custom properties** + `@theme inline` is the correct v4 pattern for design system control
- **sr-only utility** for accessibility
- Shows how to build a complete branded design system in pure CSS

### How We'll Apply This

- **Keep:** `@import 'tailwindcss'`, `@theme inline`, sr-only, CSS custom properties pattern
- **Adapt:** Replace FFC brand tokens with Penn State/Smeal colors, typography, and spacing. With a focused 2-3 font stack, we can use straightforward font-family assignments without needing ID selectors or specificity overrides.

---

## Utility Library (src/lib/)

### assetPath.ts

Simple function prepending `NEXT_PUBLIC_BASE_PATH` to asset paths. Well-documented JSDoc.

**What they did well:** Clean abstraction that solves the GitHub Pages deployment path problem in one place.

**How We'll Apply This:** Keep as-is. Essential for GitHub Pages deployment.

### siteMetadata.ts

Complete Next.js Metadata export: metadataBase, title template, description, keywords, robots config (including googleBot directives), canonical URL, OpenGraph, Twitter Card, icons, web manifest.

**What they did well:** Centralized metadata instead of scattered across layouts. The googleBot-specific directives (max-snippet, max-image-preview) go beyond what most sites configure -- shows attention to SEO detail.

**How We'll Apply This:** Keep the centralized pattern. Replace all FFC content with Applied AI / Smeal Student AI Hub metadata.

### fonts.ts

Google Font configurations via next/font/google with CSS variables, subsets, and display swap.

**What they did well:** Well-organized font configuration pattern with proper next/font usage.

**How We'll Apply This:** Rebuild with 2-3 fonts matching Penn State/Smeal brand (pending brand research).

---

## TypeScript (tsconfig.json)

### What They Built

Strict mode, ES2017 target, bundler module resolution, `@/*` path alias to `./src/*`, incremental compilation, Next.js plugin.

### What They Did Well

- **Strict mode** is the biggest win for agent code quality (research shows ~60% to ~100% success rate improvement)
- **`@/*` path alias** prevents deep relative imports -- agents navigate the codebase more reliably
- **Incremental compilation** speeds up builds

### How We'll Apply This

- **Keep:** Strict mode (non-negotiable), path alias, incremental compilation
- **Adapt:** Clean up any stray manual includes as we rebuild the component structure

---

## Package.json

### What They Built

7 production dependencies, 21 dev dependencies, comprehensive script suite.

### What They Did Well

- **Turbopack** for dev server is modern and fast
- **Comprehensive test scripts** (unit, watch, coverage, e2e, e2e:ui, e2e:headed, smoke)
- **`prepare: husky`** auto-installs git hooks on `npm install`
- **`linkinator`** for broken link detection in static output
- **`preview`** script for local static file serving
- Complete and well-organized script suite covering every development workflow

### Dependencies We're Keeping

| Package | Purpose | Notes |
|---------|---------|-------|
| next | Framework | Core |
| react / react-dom | UI | Core |
| postcss | CSS processing | Required for Tailwind v4 |
| lucide-react | Icons | Clean, tree-shakeable icon library |

### Dependencies We'll Evaluate as We Build

| Package | Purpose | Notes |
|---------|---------|-------|
| framer-motion | Animations | Add when/if we need page transitions or interactive elements |
| swiper | Carousels | Add when/if we need carousel components |

### Scripts We're Keeping

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

---

## Page and Component Structure

### FFC Pages (Being Replaced With Our Content)

The FFC repo includes pages for home, cookie policy, donation policy, privacy policy, terms of service, security acknowledgements, and vulnerability disclosure. These served FFC's needs well.

**How We'll Apply This:** We'll build our own page structure informed by academic site research (see `frontend/academic-site-design.md`). The structural patterns -- thin page.tsx files delegating to components, route-based code splitting -- carry forward.

### FFC Components

Header, footer, cookie consent, Google Tag Manager, team section, team member cards.

**What they did well:** Clean component composition. Each component has a single responsibility. The pattern of persistent layout components (header, footer) wrapping page content is standard and correct.

**How We'll Apply This:** Build our own components following the same composition patterns. Our component set will be driven by the site taxonomy we define after Penn State/Smeal research.

### FFC Assets

60+ images, 15+ SVGs, videos, favicons -- all FFC-branded.

**How We'll Apply This:** Start fresh with Penn State/Smeal branded assets. Extract relevant content from the current Wix site during the extraction phase (Step 2, Research Task D).

---

## Attribution

The code architecture patterns in this repo reflect careful engineering by the Free For Charity team. Their choices around static export, font loading, metadata centralization, and TypeScript configuration gave us a strong foundation to build on.
