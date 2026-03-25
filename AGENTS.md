# AI Agent Instructions: Smeal Student AI Hub

**Project:** Smeal Student AI Hub -- a student-built educational resource about AI in business, maintained by Applied AI at Penn State.

**Site:** https://andysalvo.github.io/smealstudentaihub/

**Repo:** https://github.com/andysalvo/smealstudentaihub

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

## Testing

- **Unit tests:** Jest with @testing-library/react. Files in `__tests__/`.
- **E2E tests:** Playwright. Files in `tests/`.
- **Accessibility:** @axe-core/playwright in E2E tests. Lighthouse CI in GitHub Actions targets 90% accessibility.
- **Visual regression:** Playwright `toHaveScreenshot()` (baselines committed to repo).
- **Run a single test:** `npx jest __tests__/path/test.ts` or `npx playwright test tests/path.spec.ts`

---

## Project Structure

```
smealstudentaihub/
  content/                     # MDX content (agents edit this most)
    smeal-majors/              # 10 major-specific content files
    learn/                     # 4 Learn section pages
    news/                      # News articles
    VOICE_BRIEF.md             # Writing style contract for all content
  src/
    app/                       # Next.js App Router pages
      globals.css              # Tailwind v4 @theme with Penn State tokens
      layout.tsx               # Root layout (fonts, metadata)
      page.tsx                 # Home page
    components/                # React components
      header/                  # Site header/nav
      footer/                  # Site footer with PSU disclaimer
    lib/                       # Utilities
      fonts.ts                 # Roboto + Roboto Slab via next/font
      siteMetadata.ts          # SEO metadata
      assetPath.ts             # GitHub Pages basePath helper
  public/
    images/modules/            # 40 section images (4 per Smeal major)
    .nojekyll                  # Prevents GitHub Pages Jekyll processing
  docs/
    corpus/                    # Research corpus (34 files, 80+ sources)
    decisions/                 # Architecture Decision Records (ADRs)
    superpowers/plans/         # Implementation plans
  .github/
    workflows/                 # CI, deploy, CodeQL, Lighthouse
    ISSUE_TEMPLATE/            # Bug, feature, docs templates
  .claude/
    rules/                     # Numbered priority rules
    settings.json              # Bash command allowlist/denylist
```

**Tech stack:** Next.js 16, React 19, TypeScript (strict), Tailwind CSS v4, MDX, Playwright, Jest, GitHub Pages

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
- Each MDX file must have frontmatter: title, description, smealMajor, difficulty, lastUpdated, author

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

---

## Penn State Branding Rules

- **Name:** "Applied AI at Penn State" (per Policy AD07)
- **Colors:** Nittany Navy `#001E44`, Beaver Blue `#1E407C`, Pugh Blue `#96BEE6`, White Out `#FFFFFF`, PA Sky `#009CDE`
- **Fonts:** Roboto (body), Roboto Slab (headings)
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

## Known Issues

- The site is in early development. Many pages are placeholder stubs.
- The interactive Smeal major modules are not yet converted to React components. Source HTML files are in `docs/corpus/wix-extraction/source-modules/` for reference.
- No favicon yet. The FFC favicons were removed.
- Lighthouse CI thresholds may need adjustment as we add content.

---

## Research Corpus

The `docs/corpus/` directory contains 34 research files with 80+ cited sources covering agent maintainability, Penn State branding, frontend patterns, and agentic development risks. Read the synthesis at `docs/corpus/synthesis/final-synthesis.md` for the full picture.

Architecture decisions are documented in `docs/decisions/` as numbered ADRs.

---

## Attribution

This project's infrastructure was built by Clarke Moyer (@clarkemoyer) as part of Free For Charity. See `NOTICE` and `CONTRIBUTORS.md` for details.
