# FFC Audit: Project Infrastructure -- Patterns and Application

> Last updated: 2026-03-24
> Category: ffc-audit
> Confidence: Direct analysis of andysalvo/smealstudentaihub repo

---

## Issue Templates (.github/ISSUE_TEMPLATE/)

### Bug Report (bug_report.md)

Standard bug report with environment details (desktop OS/browser, mobile device/OS), error messages, steps to reproduce.

**What they did well:** Covers the key information needed to reproduce and triage a bug. Clean and practical.

**How We'll Apply This:** Keep as-is. Standard and useful for our project.

### Feature Request (feature_request.md)

Detailed with problem/use case, proposed solution, alternatives, user impact checkboxes, priority levels, acceptance criteria.

**What they did well:** Structured format ensures feature requests come with context, not just "add X." The acceptance criteria field is particularly valuable for agent-driven development.

**How We'll Apply This:** Keep the structure. Replace FFC-specific user types (donors, volunteers, nonprofits) with our users (students, faculty, club members, visitors).

### Documentation (documentation.md)

Documentation issue with type checkboxes (missing, incorrect, unclear, outdated, broken links, code examples, typo), location fields, "willing to submit PR" checkbox.

**What they did well:** The "willing to submit PR" checkbox is a great UX touch that lowers the barrier for contributions and helps maintainers gauge contributor engagement.

**How We'll Apply This:** Keep as-is. Works perfectly for our context.

### Rebrand Template (rebrand-template.md)

A comprehensive template for rebranding the template to a new organization.

**What they did well:** Thorough template that walks someone through every aspect of rebranding. The level of detail shows how carefully they thought about their template-as-a-product model. This template is what made it possible for us to fork the project cleanly.

**How We'll Apply This:** We've already completed our rebrand, so this template has served its purpose. We can reference it if we ever help another org fork the project.

### Reviewer Onboarding (reviewer-onboarding.md)

Fresh review template for new contributors.

**What they did well:** Lowers the barrier for new reviewers by giving them structure. Thoughtful approach to growing a contributor base.

**How We'll Apply This:** This is a great pattern for our club. We'll build an Applied AI version of this when we're ready to onboard new contributors from the club.

### Config (config.yml)

Enables blank issues and provides contact links.

**What they did well:** Simple config that keeps issue creation flexible.

**How We'll Apply This:** Keep the pattern. Update contact links to Applied AI contacts.

---

## PR Template (.github/PULL_REQUEST_TEMPLATE.md)

### What They Built

Comprehensive PR template with: description, type of change (8 types), related issue, screenshots, manual testing (desktop browsers, mobile, interactive elements, console errors), automated testing (lint, test, build, e2e), accessibility (keyboard nav, color contrast, screen reader), documentation, breaking changes, final checklist.

### What They Did Well

- Accessibility testing embedded in the PR template -- makes it part of the workflow, not an afterthought
- Type of change categorization helps changelog generation and makes PR history scannable
- Issue linking enforces traceability between work items and code changes
- Thorough coverage that ensures nothing slips through

### How We'll Apply This

- **Keep:** Type of change, issue linking, automated testing checks, accessibility as a checklist item
- **Adapt:** Start with 10-12 focused checkboxes for our project, covering the highest-value checks. As our team and test suite grow, we can expand the checklist. The full template is there as a reference for what to grow into.

---

## CODEOWNERS

### What They Built

Single owner for everything with explicit sections for docs, security, config, source, tests, deployment.

### What They Did Well

Granular ownership sections set up the project for team growth. Even with a single owner today, the structure is ready for the future.

**How We'll Apply This:** Keep the pattern. Update owners to our team. The granular sections become valuable as Applied AI grows its contributor base.

---

## Husky Hooks (.husky/)

### What They Built

#### commit-msg
Runs `npx --no-install commitlint --edit "$1"` -- validates commit message format.

#### pre-commit
Runs Prettier check only on staged files with supported extensions, then ESLint only on staged JS/TS files. Uses `git diff --cached --name-only --diff-filter=ACMR` to target only staged files. Clear error messages with fix instructions.

### What They Did Well

- **Staged-files-only checking** is correct. Don't lint the entire codebase on every commit.
- **ACMR diff filter** (Added, Copied, Modified, Renamed) correctly excludes deleted files from linting.
- **Clear error messages** tell the developer exactly what to run to fix the issue. No guessing.

**How We'll Apply This:** Keep as-is. Clean and correct. This is exactly the pre-commit workflow we want.

---

## Commitlint (commitlint.config.js)

### What They Built

Extends `@commitlint/config-conventional`. Allowed types: feat, fix, docs, style, refactor, test, chore, perf, ci, revert.

### What They Did Well

Standard, complete, enforces clean commit history that agents and humans can both parse.

**How We'll Apply This:** Keep as-is. Standard and correct.

---

## ESLint (eslint.config.mjs)

### What They Built

ESLint 9 flat config. Uses `eslint-config-next`, Prettier integration, ignores for build artifacts, temporary rule downgrades with TODO comments explaining why.

### What They Did Well

- Modern ESLint 9 flat config (ahead of most projects)
- TODO comments on temporary overrides explain reasoning -- agents won't try to "fix" intentional suppressions

**How We'll Apply This:** Keep the pattern. Update rules as our project evolves. The TODO-comment pattern for temporary overrides is something we'll carry forward.

---

## Prettier (.prettierrc.json, .prettierignore)

### What They Built

Standard Prettier config with ignore patterns for build artifacts.

**How We'll Apply This:** Keep as-is.

---

## Editor Config (.editorconfig)

### What They Built

Standard editor config for consistent formatting across editors.

**How We'll Apply This:** Keep as-is.

---

## Summary: How We're Applying Each Component

| Component | Application | Notes |
|-----------|-------------|-------|
| Bug report template | Keep | Standard, works for us |
| Feature request template | Adapt user types | Replace FFC users with students/faculty/club members |
| Docs issue template | Keep | "Willing to PR" checkbox is great |
| Rebrand template | Reference | Already served its purpose for our fork |
| Reviewer onboarding | Inspire our own | Build Applied AI version when ready |
| Issue config | Update links | Point to Applied AI contacts |
| PR template | Adapt scope | Start with 10-12 high-value checkboxes, grow from there |
| CODEOWNERS | Update owners | Ready for team growth |
| Husky hooks | Keep | Clean and correct |
| Commitlint | Keep | Standard |
| ESLint | Keep pattern | Update rules over time |
| Prettier | Keep | Standard |
| EditorConfig | Keep | Standard |
