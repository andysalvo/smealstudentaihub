# Safety Tooling for Agent-Driven Development

> Last updated: 2026-03-24
> Category: agentic-risks
> Confidence: Official (GitHub, Playwright, Google) + Community
> Author: ajs10845

---

## Minimum Viable Safety Stack (All Free)

Every tool below is free, open source, and integrates with GitHub Actions.

| Layer              | Tool                                              | What It Catches                                    |
| ------------------ | ------------------------------------------------- | -------------------------------------------------- |
| Branch protection  | GitHub Rulesets + CODEOWNERS                      | Agents can't merge their own PRs                   |
| Secrets            | GitHub Secret Scanning + Gitleaks                 | Hardcoded API keys, passwords                      |
| AI code quality    | Open Code Review (L1)                             | Hallucinated imports, stale APIs, over-engineering |
| Linting            | ESLint + markdownlint-cli2 + commitlint           | Code style, markdown format, commit messages       |
| Content validation | remark-lint-frontmatter-schema + lychee           | Invalid frontmatter, broken links                  |
| Visual regression  | Playwright `toHaveScreenshot()`                   | Layout breakage from CSS/component changes         |
| Accessibility      | axe-core via @axe-core/playwright + Lighthouse CI | WCAG violations, performance regressions           |
| PR previews        | rossjrw/pr-preview-action                         | Reviewers see changes before merge                 |
| Dependencies       | Dependabot + Socket.dev + lockfile-lint           | Known CVEs, malicious packages, lockfile tampering |
| Releases           | release-please + conventional commits             | Automated changelog                                |
| Setup              | npm run doctor script                             | Missing prerequisites                              |

---

## 1. Agent Isolation: Git Worktrees

**Tool: dmux** -- Dev agent multiplexer. Creates tmux session where each pane gets its own git worktree and branch. Supports Claude Code, Codex, Gemini CLI, Copilot CLI, Cursor CLI.

**Tool: CCPM** -- Project management for AI agents using GitHub Issues and git worktrees. Five-phase workflow, creates a dedicated worktree per task.

**Rule:** Each contributor (human or agent) works in its own worktree on its own branch. Never let two agents share a worktree.

**Sources:** [dmux](https://github.com/standardagents/dmux), [CCPM](https://github.com/automazeio/ccpm)

---

## 2. Branch Protection

**Required configuration for our repo:**

- Require 1 review from a code owner for all PRs to `main`
- Require status checks: lint, build, tests, accessibility, visual regression
- Disallow direct pushes to `main`
- CODEOWNERS file mapping critical paths to responsible reviewers

**Source:** [GitHub Branch Protection docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)

---

## 3. Visual Regression Testing

**Playwright `toHaveScreenshot()`** (recommended start)

- Built into Playwright. Zero additional deps.
- Takes screenshots, compares pixel-by-pixel against committed baselines.
- Agent changes a component's layout -> screenshot diff catches it.
- Must generate baselines on Linux (same OS as CI).

**Lost Pixel** (upgrade path)

- First-class Next.js page testing. Multi-browser. Per-screenshot sensitivity thresholds.
- Free open-source core.

**Percy** (if budget allows)

- AI-powered smart diffing (ignores anti-aliasing, sub-pixel noise).
- Free tier: 5,000 screenshots/month.

**Sources:** [Playwright Visual Comparisons](https://playwright.dev/docs/test-snapshots), [Lost Pixel](https://github.com/lost-pixel/lost-pixel), [Percy](https://percy.io/)

---

## 4. Content Linting and Schema Validation

**remark-lint-frontmatter-schema** -- Validates MDX frontmatter against JSON Schema. Catches missing required fields, wrong types, invalid enums. Fails build if frontmatter violates schema.

**markdownlint-cli2** -- Lints Markdown against configurable rules. "Changed files only" mode for gradual adoption. GitHub Action: `DavidAnson/markdownlint-cli2-action`.

**lychee** -- Fast link checker (Rust). Checks all links in Markdown/HTML. Catches hallucinated URLs. Creates GitHub Issues for broken links. Action: `lycheeverse/lychee-action`.

**Content Collections** (Contentlayer successor) -- Zod schemas validate frontmatter at build time. Type-safe content layer for Next.js. Build fails if agent creates MDX with invalid frontmatter.

**Sources:** [remark-lint-frontmatter-schema](https://github.com/JulianCataldo/remark-lint-frontmatter-schema), [lychee](https://github.com/lycheeverse/lychee-action), [Content Collections](https://dub.co/blog/content-collections)

---

## 5. AI-Specific CI Checks

**Open Code Review** -- Three-layer analysis designed for AI-generated code:

- L1 (free, local): hallucinated imports (checks npm registry), deprecated APIs, security anti-patterns, over-engineering, duplication
- L2: embedding similarity, risk scoring
- L3: LLM deep scan, cross-file coherence

Also available as MCP server for Claude Desktop and Cursor.

**Source:** [Open Code Review](https://github.com/raye-deng/open-code-review)

---

## 6. Automated Accessibility Testing

**axe-core via @axe-core/playwright** -- Industry-standard WCAG testing. Integrates directly with Playwright. Returns structured violation reports with impact levels. Runs as part of Playwright test suite in CI.

**pa11y-ci** -- Crawls all pages of static site. Reports accessibility violations across every route. Catches issues on pages the PR author didn't manually check.

**Lighthouse CI** -- Performance, accessibility, best practices, SEO in one scan. Budget assertions fail build if agent degrades scores. Already in FFC scaffold.

**eslint-plugin-jsx-a11y** -- Static analysis in JSX at code time. Catches accessibility problems before rendering.

**Sources:** [axe-core + Playwright](https://dev.to/jacobandrewsky/accessibility-audits-with-playwright-axe-and-github-actions-2504), [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

## 7. Design System Enforcement

**eslint-plugin-tailwindcss** -- Key rule: `no-arbitrary-value` prevents agents from hardcoding colors (`text-[#e74c3c]`) instead of using design tokens (`text-accent`). `no-custom-classname` prevents inventing CSS classes. **Caveat:** Check Tailwind v4 compatibility before adopting.

**Tailwind v4 @theme** -- Define all tokens in `@theme` blocks. Combined with no-arbitrary-value, creates a closed system where only approved design tokens are usable.

**Sources:** [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss), [Tailwind CSS Theme](https://tailwindcss.com/docs/theme)

---

## 8. Changelog and Release Management

**release-please** (recommended) -- Reads conventional commits, auto-creates release PR with version bumps and generated changelog. Merging release PR triggers release. Lower friction than Changesets for a static site.

**Source:** [release-please](https://github.com/googleapis/release-please)

---

## 9. Environment Setup Validation

**Recommended pattern:** `scripts/doctor.sh` that checks:

1. Node.js version matches `.nvmrc`
2. npm version
3. git installed
4. Required env vars present

Wire to `npm run doctor`. Add `engines` field in package.json with `engine-strict=true` in `.npmrc`.

---

## 10. PR Preview Deployments

**rossjrw/pr-preview-action** (recommended for GitHub Pages) -- Each PR gets a preview at `owner.github.io/repo/pr-preview/pr-N/`. Posts sticky comment with preview link + QR code. Auto-removes on PR close.

**Cloudflare Pages** (alternative) -- Automatic preview per PR, supports forks, free tier: 500 builds/month.

**Sources:** [pr-preview-action](https://github.com/rossjrw/pr-preview-action), [Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/preview-deployments/)

---

## 11. Secrets Scanning

**GitHub Secret Scanning** (baseline) -- Free for public repos. Push protection blocks pushes containing detected secrets.

**Gitleaks** (defense in depth) -- Pre-commit hook + CI Action. Regex patterns + entropy analysis. Catches hardcoded keys before they reach remote.

**Sources:** [Gitleaks](https://github.com/gitleaks/gitleaks)

---

## 12. Dependency Security

Layer three tools:

1. **Dependabot** -- known CVE patching (free, already in scaffold)
2. **Socket.dev** -- behavioral analysis, catches malicious packages and typosquatting (free tier)
3. **lockfile-lint** -- validates lockfile registry integrity (free)

**Sources:** [Socket.dev](https://socket.dev/), [lockfile-lint](https://github.com/lirantal/lockfile-lint)
