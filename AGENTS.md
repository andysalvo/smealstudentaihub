# AI Agent Instructions: Smeal Student AI Hub

**Project:** Smeal Student AI Hub -- a student-built educational resource about AI in business, maintained by Applied AI at Penn State.

**Site:** https://andysalvo.github.io/smealstudentaihub/

**Repo:** https://github.com/andysalvo/smealstudentaihub

**Local dev:** `cd ~/Documents/GitHub/smealstudentaihub && npm run dev`

---

## Current State (2026-03-25)

The site is functional with 26 pages deployed to GitHub Pages:
- **10 interactive Smeal major modules** with two-column sidebar nav, 162 concepts, per-concept images, key points boxes
- **4 Learn pages** (AI Basics, How Businesses Are Using AI, Rules/Risks/Ethics, Using AI for School and Work) with source cards and YouTube embeds
- **2 AI News articles** (AMI Labs, OpenClaw)
- **Foundational Sources** table with 22 sources and publisher column
- **Home, Learn grid, Majors grid, About** pages with Motion scroll animations

**In progress:** Visual polish pass. Cross-industry design research at `docs/corpus/workflows/frontend-design/cross-industry-design-research.md`. The site is clean but needs more visual identity. See the design research before making visual changes.

**Branch protection:** Main branch requires 1 PR review. No direct pushes.

---

## Commands

| Command                | What it does                           | Duration |
| ---------------------- | -------------------------------------- | -------- |
| `npm run dev`          | Start dev server (Turbopack)           | ~3s      |
| `npm run build`        | Production static export to `out/`     | ~15s     |
| `npm run preview`      | Serve static build locally on :3000    | instant  |
| `npm run lint`         | ESLint                                 | ~5s      |
| `npm run format:check` | Prettier check                         | ~3s      |
| `npm run format`       | Prettier fix                           | ~3s      |
| `npm run test`         | Jest unit tests                        | ~5s      |
| `npm run test:e2e`     | Playwright E2E tests                   | ~30s     |
| `npm run doctor`       | Check prerequisites (Node, npm, git)   | instant  |
| `npm run check-links`  | Linkinator broken link check on `out/` | ~15s     |

**Before committing:** Run `npm run build` to verify the static export succeeds.

---

## Automation Scripts

| Script | What it does | Requires |
| ------ | ------------ | -------- |
| `node scripts/fetch-module-images.js` | Downloads per-concept images from Pexels API, updates JSON | `PEXELS_API_KEY` in `.env.local` |
| `node scripts/fetch-module-images.js --dry-run` | Shows what would be fetched without downloading | Nothing |
| `node scripts/fetch-module-images.js --major=accounting` | Fetch for one major only | `PEXELS_API_KEY` |
| `node scripts/fetch-module-images.js --force` | Re-download even if image exists | `PEXELS_API_KEY` |

**Pexels API key:** Free at https://www.pexels.com/api/. Add to `.env.local` as `PEXELS_API_KEY=your_key`.

---

## Project Structure

```
smealstudentaihub/
  content/
    smeal-majors-data.json       # Structured content for all 10 modules (162 concepts)
    smeal-majors/                # Legacy MDX files (superseded by JSON)
    VOICE_BRIEF.md               # Writing style contract for all content
  src/
    app/                         # Next.js App Router pages
      globals.css                # Tailwind v4 @theme with Penn State tokens
      layout.tsx                 # Root layout (fonts, metadata)
      page.tsx                   # Home page
      ai-by-smeal-major/         # Module grid + [slug] dynamic pages
      learn/                     # Learn section (4 sub-pages)
      ai-news/                   # News listing + 2 article pages
      foundational-sources/      # 22-source reference table
      about/                     # About page
    components/
      ModuleViewer.tsx            # Interactive two-column module viewer (client component)
      header/                    # Glass nav bar
      footer/                    # Navy footer with grouped links
      ui/
        FadeIn.tsx               # Scroll-triggered fade-in animation wrapper
        StaggerGrid.tsx          # Staggered grid reveal animation
        SourceCard.tsx           # Featured source card component
        YouTubeEmbed.tsx         # Responsive YouTube embed
    lib/
      fonts.ts                   # Inter + Roboto Slab via next/font
      siteMetadata.ts            # SEO metadata
      assetPath.ts               # GitHub Pages basePath helper
  public/
    images/modules/              # Section images (40) + concept images (162, from Pexels)
    .nojekyll
  docs/
    corpus/                      # Research corpus
      synthesis/                 # Final synthesis, open questions
      wix-extraction/            # Original Wix site screenshots + HTML source modules
      workflows/                 # Reusable workflow research (from ~/studio/research)
        frontend-design/         # GSAP/Motion research, design techniques, cross-industry patterns
        agentic-patterns/        # Agent workflow masterclass, autoresearch, do-work pattern
        build-automation/        # Deployment workflows
        README.md                # Index of all workflow files
    decisions/                   # Architecture Decision Records (ADRs)
  scripts/
    fetch-module-images.js       # Pexels image automation
  .github/
    workflows/                   # CI, deploy, CodeQL, Lighthouse
```

**Tech stack:** Next.js 16, React 19, TypeScript (strict), Tailwind CSS v4, framer-motion (Motion), MDX, Playwright, Jest, GitHub Pages

---

## Key Architecture Decisions

### Module Content: JSON, not MDX
The 10 Smeal major modules use `content/smeal-majors-data.json`, NOT the MDX files. The JSON was extracted from the original HTML source modules (in `docs/corpus/wix-extraction/source-modules/`) and contains the full structured content: sections, concepts, paragraphs, and key points. The MDX files are legacy.

### Module Viewer: Client Component
`src/components/ModuleViewer.tsx` is a `'use client'` component that renders the interactive two-column sidebar + reading panel. It receives structured data as props from the server page component.

### Images: Local + Pexels
- Section-level images: 40 local files in `public/images/modules/` (4 per major prefix)
- Concept-level images: 162 files in `public/images/modules/{major}/` (from Pexels API)
- Section images referenced by path in JSON, concept images by `image` field on each concept

### Animations: Motion (framer-motion)
Using `framer-motion` (not GSAP). Two reusable components:
- `FadeIn` -- scroll-triggered fade + slide up, `once: true`
- `StaggerGrid` / `StaggerItem` -- staggered children reveal on scroll
Applied to: home hero, home cards, majors grid, learn grid. NOT applied to body text or reading content.

### Links: Always use Next.js Link
All internal links MUST use `<Link>` from `next/link`, never raw `<a>` tags. This is critical because GitHub Pages deployment uses `basePath: /smealstudentaihub` and raw `<a>` tags won't include the base path, causing 404s in production.

---

## Workflows for Agents

### Visual QA Loop (Screenshot Loop)
The most effective workflow for visual improvements:
1. Start dev server: `npm run dev`
2. Screenshot pages with Playwright: `npx playwright` (see scripts examples in corpus)
3. Review screenshots for issues
4. Fix issues
5. Re-screenshot to verify
6. Repeat

### Adding a New Smeal Major Module
1. Create the HTML source module with the standard 4-section structure
2. Extract the DATA object into `content/smeal-majors-data.json`
3. Run `node scripts/fetch-module-images.js --major=new-slug` to get concept images
4. Add the major to the grid in `src/app/ai-by-smeal-major/page.tsx`

### Adding a New News Article
1. Create a new directory in `src/app/ai-news/{slug}/`
2. Create `page.tsx` with the article content (use ami-labs or openclaw as template)
3. Add the article card to `src/app/ai-news/page.tsx` using `<Link>` (not `<a>`)
4. Include a Sources section with `[{title, url}]` array

### Adding a New Learn Source
1. Find the appropriate Learn sub-page in `src/app/learn/`
2. Add a `<SourceCard>` component with title, description, source, url
3. If the source is foundational, also add it to the sources array in `src/app/foundational-sources/page.tsx`

### Research-Driven Development
This project follows a research-first approach:
1. Research goes into `docs/corpus/workflows/` organized by topic
2. Research informs implementation decisions
3. Implementation follows the patterns identified in research
4. See `docs/corpus/workflows/README.md` for the index

---

## Code Style

**TypeScript:**

```ts
// Use named exports, not default exports (except pages)
export function ComponentName() { ... }

// Use @/ path alias for imports
import { assetPath } from '@/lib/assetPath'

// Props as inline types for simple components
export function Card({ title, children }: { title: string; children: React.ReactNode }) {
```

**Tailwind:**

```tsx
// Use brand tokens, NEVER arbitrary values
<div className="bg-navy text-white">     // correct
<div className="bg-[#001E44] text-white"> // WRONG -- use tokens
```

**Content (MDX):**

- Follow `content/VOICE_BRIEF.md` for all content writing
- Field first, AI second. Hedging is intentional. Describe, don't instruct.

---

## Git Workflow

- **Branch:** Create a feature branch for any change. Never commit directly to `main`.
- **Commits:** Conventional commits enforced by commitlint.
  - `feat:` new feature
  - `fix:` bug fix
  - `docs:` documentation
  - `style:` formatting, CSS
  - `chore:` maintenance
  - `ci:` CI/CD changes
  - `test:` test changes
- **PRs:** Every change goes through a PR. CI must pass. At least one human review required.
- **Branch naming:** `feat/short-description`, `fix/short-description`, `docs/short-description`

---

## Boundaries

### Always Do

- Run `npm run build` before committing to verify static export works
- Follow the voice brief for any content changes
- Use Penn State brand tokens from `globals.css` (never hardcode colors)
- Credit sources when adding educational content
- Write accessible HTML (semantic elements, alt text, ARIA labels, keyboard navigation)
- Keep commits atomic -- one logical change per commit
- Use `<Link>` from `next/link` for all internal navigation
- Screenshot pages after visual changes to verify

### Ask First

- Adding new dependencies (check if existing deps cover the need)
- Changing the Tailwind @theme tokens (brand colors are locked)
- Modifying CI/CD workflows
- Changing the content directory structure
- Any change to AGENTS.md, CLAUDE.md, or .claude/rules/

### Never Do

- Commit secrets, API keys, or credentials
- Use `rm -rf` on the repo root
- Push directly to `main` without a PR
- Use Penn State marks (Lion Shield, athletic logos, mascot, seal) in any design
- Put "Penn State" before the org name (it's "Applied AI at Penn State", not "Penn State Applied AI")
- Delete or modify the NOTICE file or CONTRIBUTORS.md without discussion
- Use arbitrary Tailwind values (e.g., `bg-[#ff0000]`) -- use brand tokens only
- Skip the voice brief when writing content
- Use raw `<a>` tags for internal links (breaks GitHub Pages basePath)

---

## Penn State Branding Rules

- **Name:** "Applied AI at Penn State" (per Policy AD07)
- **Colors:** Nittany Navy `#001E44`, Beaver Blue `#1E407C`, Pugh Blue `#96BEE6`, White Out `#FFFFFF`, PA Sky `#009CDE`
- **Fonts:** Inter (body), Roboto Slab (headings)
- **Cannot use:** Penn State Lion Shield, athletics logos, Block S, mascot, seal, building images
- **Can use:** Paw print (unaltered), University-Recognized Student Organization Shield Mark (if requested)
- **Footer disclaimer required:** "This is a student organization website and does not represent official Penn State positions."

---

## Content: Voice Brief Summary

Full brief at `content/VOICE_BRIEF.md`. Key rules:

1. **Field first, AI second.** Start with the discipline's concerns, then connect AI.
2. **Hedging is intentional.** "may," "often," "tends to," "typically" -- this is honesty, not weakness.
3. **Sections stand alone.** No "as we saw" or "building on" language.
4. **Limits are field-native.** Not "AI hallucinates" but "accounting standards require interpretation of materiality."
5. **No conclusions.** The last point is just the last point.
6. **Describe, don't instruct.** "AI is discussed as..." not "students should..."
7. **No hype.** No "revolutionary," "game-changing," "transforming."

---

## Research Corpus

The `docs/corpus/` directory contains research organized by topic:

- **`synthesis/`** -- Final synthesis, open questions, research synthesis
- **`wix-extraction/`** -- Original Wix site screenshots, source HTML modules, site structure
- **`workflows/`** -- Reusable workflow research (see `workflows/README.md` for index)
  - `frontend-design/` -- Visual polish techniques, GSAP/Motion research, cross-industry design
  - `agentic-patterns/` -- Agent workflow masterclass, autoresearch pipelines, do-work pattern
  - `build-automation/` -- Deployment workflows

Architecture decisions are documented in `docs/decisions/` as numbered ADRs.

---

## Attribution

This project's infrastructure was built by Clarke Moyer (@clarkemoyer) as part of Free For Charity. See `NOTICE` and `CONTRIBUTORS.md` for details.
