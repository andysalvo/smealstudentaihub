# FFC Audit: CI/CD Workflows -- Patterns and Application

> Last updated: 2026-03-24
> Category: ffc-audit
> Confidence: Direct analysis of andysalvo/smealstudentaihub repo

---

## CI Pipeline (.github/workflows/ci.yml)

### What They Built

Two-job pipeline:

1. **Build + Unit:** checkout, Node 20 setup with npm cache, `npm ci`, format check, lint, unit tests, build, upload build artifacts
2. **E2E:** 4-way sharded Playwright tests that depend on Job 1, download build artifacts, cache Playwright browsers, run sharded tests, upload failure reports

### What They Did Well

- **Concurrency control** with cancel-in-progress prevents wasted CI minutes on superseded pushes
- **Build artifact sharing** between jobs avoids rebuilding for E2E
- **E2E sharding** -- tests run in parallel across multiple runners, cutting E2E time significantly
- **Playwright browser caching** keyed to package-lock.json hash
- **Failure artifact uploads** (playwright-report, test-results) with 7-day retention for debugging

### How We'll Apply This

- **Keep:** Concurrency control, artifact sharing between jobs, browser caching, failure artifact uploads
- **Adapt:** Start with 1-2 E2E shards to match our current test suite size, then scale sharding up as we add more tests. The pattern they built makes scaling easy.

---

## Deploy Pipeline (.github/workflows/deploy.yml)

### What They Built

Three-job pipeline triggered by successful CI:

1. **Build for GitHub Pages:** builds with `NEXT_PUBLIC_BASE_PATH`, uses `configure-pages` with Next.js static site generator detection, Next.js cache restoration, uploads Pages artifact
2. **Deploy:** uses `deploy-pages` action
3. **Smoke Test:** waits for deployment to be available (polling: 12 attempts, 10s apart), runs Playwright smoke tests against live URL

### What They Did Well

- **Post-deploy smoke tests against the live site** catch deployment-specific issues that local tests miss
- **Deployment availability polling** is practical (checks HTTP status, retries)
- **Triggered by `workflow_run` completion**, not by push -- CI must pass first, enforcing quality gates
- **Concurrency control** that does NOT cancel in-progress deployments (correct for production)

### How We'll Apply This

- **Keep:** CI-triggered deployment, post-deploy smoke tests, availability polling, production concurrency handling
- **Adapt:** Start smoke tests with lightweight checks (HTTP status, key page loads) and expand to full Playwright-based smoke tests as the site grows and we have more pages to validate

---

## CodeQL (.github/workflows/codeql.yml)

### What They Built

Standard CodeQL Advanced setup. Runs on push to main, PRs to main, and weekly cron (Monday 11:17 PM). Analyzes both `actions` and `javascript-typescript` languages. Uses `build-mode: none`.

### What They Did Well

- **Weekly scheduled scans** catch vulnerabilities in existing code, not just new PRs
- **Scanning GitHub Actions workflows** (`language: actions`) is uncommon and valuable -- catches insecure workflow patterns that most repos miss

### How We'll Apply This

- **Keep as-is.** This is standard and correct.
- **Adapt:** Update the cron schedule if needed for our workflow cadence.

---

## Lighthouse CI (.github/workflows/lighthouse.yml)

### What They Built

Runs after deployment, on PRs, and manually. Builds site, runs `lhci autorun`, displays results summary, uploads reports (30-day retention), posts PR comment with scores, thresholds, emoji indicators, and legend.

### What They Did Well

- **PR comments with Lighthouse scores** give instant performance visibility on every change
- **3 runs per page** with median scores reduces flakiness
- **Warning-level thresholds** (not blocking) -- practical for active development where you want awareness without gatekeeping
- **30-day artifact retention** for performance trend analysis
- **Inline PR comment formatting** with emoji indicators and score breakdowns gives reviewers a clear snapshot

### Thresholds

| Metric         | Threshold     |
| -------------- | ------------- |
| Performance    | >= 55% (warn) |
| Accessibility  | >= 90% (warn) |
| Best Practices | >= 65% (warn) |
| SEO            | >= 95% (warn) |

### How We'll Apply This

- **Keep:** Lighthouse CI on PRs, multiple runs for score stability, warning thresholds, 90% accessibility target
- **Adapt:** Start by testing our core pages (home, about) and expand coverage as we add more pages. Extract the inline PR comment JS to a dedicated script file for easier maintenance as we customize the output format.

---

## Dependabot (.github/dependabot.yml)

### What They Built

Weekly npm and GitHub Actions dependency updates. Groups production and dev dependencies separately for minor/patch. Excludes major versions from groups. Labels PRs. Conventional commit prefixes.

### What They Did Well

- **Group minor/patch, isolate major** is the correct strategy -- safe updates batched, breaking changes isolated
- **Separate GitHub Actions tracking** (most repos forget this, leaving workflow deps to drift)
- **Conventional commit prefixes** on Dependabot PRs keep history clean and changelog-ready

### How We'll Apply This

- **Keep as-is.** This is a best practice reference implementation. No changes needed for our project.
