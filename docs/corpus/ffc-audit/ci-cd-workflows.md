# FFC Audit: CI/CD Workflows

> Last updated: 2026-03-24
> Category: ffc-audit
> Confidence: Direct analysis of andysalvo/smealstudentaihub repo

---

## CI Pipeline (.github/workflows/ci.yml)

### What It Does

Two-job pipeline:
1. **Build + Unit:** checkout, Node 20 setup with npm cache, `npm ci`, format check, lint, unit tests, build, upload build artifacts
2. **E2E:** 4-way sharded Playwright tests that depend on Job 1, download build artifacts, cache Playwright browsers, run sharded tests, upload failure reports

### What's Good

- **Concurrency control** with cancel-in-progress prevents wasted CI minutes on superseded pushes
- **Build artifact sharing** between jobs avoids rebuilding for E2E
- **4-way E2E sharding** -- tests run in parallel across 4 runners, cutting E2E time by ~75%
- **Playwright browser caching** keyed to package-lock.json hash
- **Failure artifact uploads** (playwright-report, test-results) with 7-day retention

### What's Overengineered

- 4-way sharding for ~15 E2E tests. 2 shards (or none) would suffice for a small project.

### Keep / Improve

- **Keep:** Concurrency control, artifact sharing, browser caching, failure uploads
- **Improve:** Reduce sharding to match test suite size. Scale up later.

---

## Deploy Pipeline (.github/workflows/deploy.yml)

### What It Does

Three-job pipeline triggered by successful CI:
1. **Build for GitHub Pages:** builds with `NEXT_PUBLIC_BASE_PATH`, uses `configure-pages` with Next.js static site generator detection, Next.js cache restoration, uploads Pages artifact
2. **Deploy:** uses `deploy-pages` action
3. **Smoke Test:** waits for deployment to be available (polling: 12 attempts, 10s apart), runs Playwright smoke tests against live URL

### What's Good

- **Post-deploy smoke tests against the live site** catch deployment-specific issues
- **Deployment availability polling** is practical (checks HTTP status, retries)
- **Triggered by `workflow_run` completion**, not by push -- CI must pass first
- **Concurrency control** that does NOT cancel in-progress deployments (correct for production)

### What's Overengineered

- Smoke test job installs full Node + npm + Playwright just to hit a few URLs. Simpler curl-based checks would suffice for small projects.

### Keep / Improve

- **Keep:** CI-triggered deployment, post-deploy smoke tests, polling, production concurrency
- **Improve:** Simplify smoke tests initially, scale up as site grows

---

## CodeQL (.github/workflows/codeql.yml)

### What It Does

Standard CodeQL Advanced setup. Runs on push to main, PRs to main, and weekly cron (Monday 11:17 PM). Analyzes both `actions` and `javascript-typescript` languages. Uses `build-mode: none`.

### What's Good

- **Weekly scheduled scans** catch vulnerabilities in existing code, not just new PRs
- **Scanning GitHub Actions workflows** (`language: actions`) is uncommon and valuable -- catches insecure workflow patterns

### What's Overengineered

Nothing. Standard and correct.

### Keep / Improve

- **Keep as-is.** Update schedule if needed.

---

## Lighthouse CI (.github/workflows/lighthouse.yml)

### What It Does

Runs after deployment, on PRs, and manually. Builds site, runs `lhci autorun`, displays results summary, uploads reports (30-day retention), posts PR comment with scores, thresholds, emoji indicators, and legend.

### What's Good

- **PR comments with Lighthouse scores** give instant performance visibility
- **3 runs per page** with median scores reduces flakiness
- **Warning-level thresholds** (not blocking) -- practical for active development
- **30-day artifact retention** for performance trend analysis

### Thresholds

| Metric | Threshold |
|--------|-----------|
| Performance | >= 55% (warn) |
| Accessibility | >= 90% (warn) |
| Best Practices | >= 65% (warn) |
| SEO | >= 95% (warn) |

### What's Overengineered

- PR comment generation is ~120 lines of inline JS in YAML. Should be a script file.
- Testing 4 pages on every PR is heavy for a small site.

### Keep / Improve

- **Keep:** Lighthouse CI on PRs, multiple runs, warning thresholds, 90% accessibility target
- **Improve:** Extract inline JS to script file. Start with 1-2 pages, add more as site grows.

---

## Dependabot (.github/dependabot.yml)

### What It Does

Weekly npm and GitHub Actions dependency updates. Groups production and dev dependencies separately for minor/patch. Excludes major versions from groups. Labels PRs. Conventional commit prefixes.

### What's Good

- **Group minor/patch, isolate major** is the correct strategy
- **Separate GitHub Actions tracking** (most repos forget this)
- **Conventional commit prefixes** on Dependabot PRs keep history clean

### What's Overengineered

Nothing. Textbook correct.

### Keep / Improve

- **Keep as-is.** This is a best practice reference implementation.
