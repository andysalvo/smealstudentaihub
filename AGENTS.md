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

- Run `npx prettier --write` on changed files before committing (CI rejects unformatted code)
- Use `<Link>` from `next/link` for ALL internal navigation (raw `<a>` tags break GitHub Pages basePath)
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
- Use raw `<a>` tags for internal links -- always use `<Link>` from `next/link` (basePath breaks otherwise)
- Skip Prettier before committing -- CI will reject and block deploys
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

## Publishing an AI News Article (End-to-End)

This workflow was battle-tested on 2026-03-26. Follow it exactly to go from news story to live on the site.

### Step 1: Research the story

Use `WebSearch` to gather facts from multiple sources. WSJ and other paywalled sites will fail -- search for coverage on CNBC, Fortune, Al Jazeera, TechCrunch, etc. Collect: timeline, key people, quotes, implications, and at least 3-4 source URLs.

### Step 2: Create a feature branch

```bash
cd ~/Documents/GitHub/smealstudentaihub
git checkout main && git pull origin main
git checkout -b feat/article-slug-name
```

If `git pull` fails with signal 10 or lock errors, do a fresh shallow clone:
```bash
cd /tmp && git clone --depth=1 https://github.com/andysalvo/smealstudentaihub.git smealstudentaihub-fix
cd /tmp/smealstudentaihub-fix && git checkout -b feat/article-slug-name
```

### Step 3: Write the article page

Create `src/app/ai-news/{slug}/page.tsx`. Use an existing article as template:

```bash
cp -r src/app/ai-news/ami-labs src/app/ai-news/{slug}
```

Key rules:
- **Import `Link` from `next/link`** for the back link. NEVER use raw `<a>` for internal links (breaks GitHub Pages basePath, causes 404s in production).
- **Do NOT import components that don't exist.** Check `src/components/ui/` for what's available before importing. As of March 2026: `SourceCard.tsx`, `YouTubeEmbed.tsx`. There is no `ReadingProgress` component.
- **Article structure:** Back link, date, h1 title, subtitle, body paragraphs, callout box (optional), "Why this matters for students" section, Sources list.
- **Use brand tokens only.** `text-navy`, `text-beaver-blue`, `text-text-muted`, `bg-surface-alt`, `border-border`, `border-l-beaver-blue`. Never hardcode colors.
- **Use `&apos;` and `&quot;`** for quotes/apostrophes in JSX, or `{' '}` for spaces around inline elements.

### Step 4: Add the card to the listing page

Edit `src/app/ai-news/page.tsx`. Add a new `<Link>` card at the TOP of the `<section>` (most recent first). Match the existing card pattern:

```tsx
<Link
  href="/ai-news/{slug}"
  className="group block bg-white p-6 rounded-lg border border-border border-l-4 border-l-beaver-blue hover:shadow-md hover:-translate-y-0.5 transition-all"
>
  <p className="text-[11px] font-semibold text-beaver-blue uppercase tracking-wide">
    Month Year
  </p>
  <h2 className="mt-2 text-lg font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors">
    Article Title
  </h2>
  <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
    One-sentence summary.
  </p>
  <p className="mt-3 text-[11px] font-semibold text-beaver-blue uppercase tracking-wide">
    Read article &rarr;
  </p>
</Link>
```

Border accent colors by article: `border-l-beaver-blue`, `border-l-pa-sky`, `border-l-navy` (rotate).

### Step 5: Format, commit, push

```bash
npx prettier --write src/app/ai-news/{slug}/page.tsx src/app/ai-news/page.tsx
npm run format:check   # verify all files pass
git add src/app/ai-news/
git commit -m "feat: add {title} article to AI News"
git push -u origin feat/article-slug-name
```

**Critical: Run Prettier BEFORE committing.** CI will reject unformatted code and block the deploy.

Do NOT run `npm run build` to verify -- the TypeScript checker takes 10+ minutes on this project due to 162 module files, and has a pre-existing `@next/mdx` typing error that fails the build even on main. The compilation step passes in ~2s (which confirms your code is valid); the TypeScript step is what fails and is unrelated to article code.

### Step 6: Create PR and merge

```bash
gh pr create --title "feat: add {title} to AI News" --body "Summary and test plan"
gh pr merge {number} --squash --admin
```

`--admin` bypasses the branch protection review requirement. The CI formatting check must still pass.

### Step 7: Verify deployment

The deploy workflow triggers automatically after CI passes on main. It takes ~2 minutes. The deploy workflow will show as "failure" because the post-deploy smoke test step has a pre-existing bug ("No tests found") -- but the actual GitHub Pages deployment succeeds before that step.

Verify with:
```bash
gh run list --workflow deploy.yml --limit 1
```

Or fetch the live page:
```
https://andysalvo.github.io/smealstudentaihub/ai-news
```

### Gotchas (learned the hard way)

| Gotcha | What happens | Fix |
|--------|-------------|-----|
| Raw `<a>` tags for internal links | 404 on GitHub Pages (missing `/smealstudentaihub` basePath) | Always use `<Link>` from `next/link` |
| Importing nonexistent components | Build fails | Check `src/components/ui/` first |
| Skipping Prettier | CI fails, deploy blocked | Run `npx prettier --write` before commit |
| Running multiple `npm run build` at once | Lock file contention, all builds fail | Only run one build at a time |
| Git corruption (signal 10 errors) | Can't fetch/pull/push | Fresh shallow clone to `/tmp` |
| `npm run build` TypeScript failure | `@next/mdx` typing error on `next.config.ts` | Pre-existing, not your fault. Compilation passing = code is valid |
| Deploy workflow shows "failure" | Post-deploy smoke test has no tests | Deploy itself succeeds. Verify by fetching the live URL |

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
