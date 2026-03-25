# FFC Audit: Project Infrastructure

> Last updated: 2026-03-24
> Category: ffc-audit
> Confidence: Direct analysis of andysalvo/smealstudentaihub repo

---

## Issue Templates (.github/ISSUE_TEMPLATE/)

### Bug Report (bug_report.md)

Standard bug report with environment details (desktop OS/browser, mobile device/OS), error messages, steps to reproduce.

**Verdict:** Keep. Standard and useful.

### Feature Request (feature_request.md)

Detailed with problem/use case, proposed solution, alternatives, user impact checkboxes, priority levels, acceptance criteria.

**Verdict:** Keep, simplify. Remove FFC-specific user types (donors, volunteers, nonprofits). Replace with our users (students, faculty, club members, visitors).

### Documentation (documentation.md)

Documentation issue with type checkboxes (missing, incorrect, unclear, outdated, broken links, code examples, typo), location fields, "willing to submit PR" checkbox.

**Verdict:** Keep. Good UX touch with the "willing to submit PR" checkbox.

### Rebrand Template (rebrand-template.md)

Massive ~300 line template for rebranding the template to a new nonprofit.

**Verdict:** Cut. Built for FFC's template factory.

### Reviewer Onboarding (reviewer-onboarding.md)

Fresh review template for new contributors.

**Verdict:** Cut. FFC-specific. Could inspire our own onboarding template later.

### Config (config.yml)

Enables blank issues and provides contact links.

**Verdict:** Keep. Update links to Applied AI contacts.

---

## PR Template (.github/PULL_REQUEST_TEMPLATE.md)

### What It Contains

25 checkboxes: description, type of change (8 types), related issue, screenshots, manual testing (desktop browsers, mobile, interactive elements, console errors), automated testing (lint, test, build, e2e), accessibility (keyboard nav, color contrast, screen reader), documentation, breaking changes, final checklist (9 items).

### What's Good

- Accessibility testing embedded in PR template
- Type of change categorization helps changelog generation
- Issue linking enforces traceability

### What's Overengineered

- 25 checkboxes. Contributors will start ignoring them. "Tested on 4 browsers" is unrealistic.

### Keep / Improve

- **Keep:** Type of change, issue linking, automated testing checks, accessibility as a checklist item
- **Improve:** Cut to 10-12 checkboxes maximum

---

## CODEOWNERS

Single owner for everything with explicit sections for docs, security, config, source, tests, deployment.

**Verdict:** Keep the pattern. The granular sections become valuable when the team grows.

---

## Husky Hooks (.husky/)

### commit-msg

Runs `npx --no-install commitlint --edit "$1"` -- validates commit message format.

### pre-commit

Runs Prettier check only on staged files with supported extensions, then ESLint only on staged JS/TS files. Uses `git diff --cached --name-only --diff-filter=ACMR` to target only staged files. Clear error messages with fix instructions.

### What's Good

- **Staged-files-only checking** is correct. Don't lint the entire codebase on every commit.
- **ACMR diff filter** (Added, Copied, Modified, Renamed) correctly excludes deleted files.
- **Clear error messages** tell the developer exactly what to run to fix the issue.

**Verdict:** Keep as-is. Clean and correct.

---

## Commitlint (commitlint.config.js)

Extends `@commitlint/config-conventional`. Allowed types: feat, fix, docs, style, refactor, test, chore, perf, ci, revert.

**Verdict:** Keep as-is. Standard, complete.

---

## ESLint (eslint.config.mjs)

ESLint 9 flat config. Uses `eslint-config-next`, Prettier integration, ignores for build artifacts, temporary rule downgrades with TODO comments explaining why.

### What's Good

- Modern ESLint 9 flat config
- TODO comments on temporary overrides explain reasoning -- agents won't try to "fix" intentional suppressions

**Verdict:** Keep pattern. Update rules for our project.

---

## Prettier (.prettierrc.json, .prettierignore)

Standard Prettier config with ignore patterns for build artifacts.

**Verdict:** Keep as-is.

---

## Editor Config (.editorconfig)

Standard editor config for consistent formatting across editors.

**Verdict:** Keep as-is.

---

## Summary: Infrastructure Scorecard

| Component | Verdict | Notes |
|-----------|---------|-------|
| Bug report template | Keep | Standard |
| Feature request template | Keep, simplify | Remove FFC user types |
| Docs issue template | Keep | Good "willing to PR" touch |
| Rebrand template | Cut | FFC-specific |
| Reviewer onboarding | Cut | FFC-specific |
| Issue config | Keep | Update links |
| PR template | Keep, trim | 10-12 checkboxes max |
| CODEOWNERS | Keep | Update owners |
| Husky hooks | Keep | Clean and correct |
| Commitlint | Keep | Standard |
| ESLint | Keep | Update rules |
| Prettier | Keep | Standard |
| EditorConfig | Keep | Standard |
