# FFC Audit: Patterns and Application

> Last updated: 2026-03-24
> Category: ffc-audit
> Confidence: Synthesis of direct repo analysis

---

## Patterns We're Building On

The Free For Charity team built infrastructure that goes well beyond what most open source projects achieve. These are the patterns we're carrying forward into the Smeal Student AI Hub.

### 1. Multi-Agent Instruction Architecture

AGENTS.md as canonical source, CLAUDE.md/GEMINI.md/copilot-instructions.md as thin model-specific layers. Every AI coding tool that touches the repo knows the rules. This is the foundation of our agent workflow.

### 2. Agent Security Boundaries

`.claude/settings.json` with explicit bash allowlist/denylist. Real security boundary for agent operations. Prevents destructive commands and accidental secret exposure. Simple, practical, effective.

### 3. CI Pipeline with Artifact Sharing

Build once, test in parallel. Concurrency control with cancel-in-progress prevents wasted CI minutes. Build artifacts shared between jobs so E2E tests don't rebuild. Failure artifacts uploaded for debugging.

### 4. Post-Deploy Smoke Tests

After every deployment, automated tests hit the live URL to catch deployment-specific issues (asset paths, DNS, CDN). Polling for deployment availability with retry logic. This catches a class of bugs that local testing never will.

### 5. Staged-Only Pre-Commit Hooks

Husky hooks that check only staged files using the ACMR diff filter. Fast, focused, never wastes time linting untouched files. Clear error messages tell you exactly what to fix.

### 6. Intelligent Dependency Management

Dependabot configured to group minor/patch updates (safe to batch) while isolating major updates (need individual review). Separate tracking for npm and GitHub Actions. Conventional commit prefixes on Dependabot PRs.

### 7. Performance Visibility on Every PR

Lighthouse CI posts formatted comments on PRs with scores, thresholds, and emoji indicators. Warning-level thresholds (not blocking) give awareness without gatekeeping. 90% accessibility target.

### 8. Known Issues in Agent Instructions

A section in AGENTS.md listing intentional patterns that agents might try to "fix." This prevents agents from fighting correct behavior -- critical for any agent-maintained repo.

### 9. CSS-First Design System

Tailwind v4 with `@theme inline` and CSS custom properties for brand tokens. Modern, clean, no config file overhead. The pattern lets us lock down brand colors so no off-brand values can leak in.

### 10. Numbered Priority Rules

`.claude/rules/` with numbered files (00-mission, 01-security) creating a clear priority system. Security rules separated from mission rules. The instruction "Don't add features beyond what was asked" is the single most valuable rule for any AI agent.

---

## How We're Adapting for Our Context

FFC built for a nonprofit template factory serving multiple charity sites. We're building a single educational resource site for a Penn State student org. Different product, different needs -- so we're adapting their patterns to fit.

### Governance and Documentation

FFC's detailed governance (quorum rules, voting procedures, maintainer removal) served their multi-stakeholder model. For our student org, we'll start with lightweight governance (lazy consensus, clear response times) and grow the structure as the contributor base grows.

### Typography

FFC used a rich font stack for their nonprofit brand. We'll select 2-3 fonts that align with Penn State/Smeal brand identity, keeping the same next/font loading pattern but with a simpler, brand-focused typography system.

### CI Scaling

FFC's 4-way E2E sharding was built for their test suite size. We'll start with a simpler E2E setup and scale sharding as our test suite grows -- the pattern they built makes this easy to expand later.

### Agent Instruction Consolidation

FFC maintained some overlap across their 4+ agent instruction files to support multiple AI models. We'll tighten this by making AGENTS.md the single source of truth, with model-specific files containing only what's unique to each tool.

### Dependency Selection

FFC included libraries for their specific UI needs (carousels, animations, multiple icon sets). We'll start with a lean dependency set and add libraries as our design demands them.

### Issue and PR Templates

FFC's comprehensive templates served their template-factory workflow. We'll keep the core templates (bug, feature, docs) and adapt them for our student org context. The PR template starts focused at 10-12 checkboxes and grows as our process matures.

### Security and Contributing Docs

FFC wrote thorough security and contributing documentation for their operational model. We'll keep the vulnerability reporting patterns and commit signing, and build our contributing guide around Applied AI club onboarding.

---

## Opportunities to Extend

Building on FFC's foundation, here are capabilities we're adding that will make the site truly agent-maintainable:

### 1. Content Validation

Tests that check content integrity, not just code: validated frontmatter schemas, broken internal link detection, orphaned image detection. When an agent adds a resource, CI confirms the data is well-formed.

### 2. Environment Setup Validation

A `npm run doctor` command that checks all prerequisites (Node version, npm, git, etc.) and reports what's missing. Reduces onboarding friction for new club members using agents for the first time.

### 3. Automated Changelog

FFC has conventional commits and commitlint -- we'll close the loop by adding automated changelog generation (release-please or changesets). The club always knows what shipped.

### 4. Reusable Agent Task Definitions

FFC's CLAUDE.md references `.claude/agents/` but the directory wasn't shipped yet. We'll build actual agent task definitions for common operations: "add a resource," "update event listings," "check accessibility," "onboard a new contributor."

### 5. Content/Code Separation

A `/content/` directory with MDX files, separate from `/src/` components. Club members and agents can update educational resources without touching React code. This is the key architectural decision for long-term agent maintainability.

---

## Attribution

This project builds directly on the foundation created by the [Free For Charity](https://github.com/FreeForCharity) team (EIN 46-2471893), licensed under Apache 2.0. Their infrastructure engineering -- from multi-agent instruction architecture to CI/CD pipelines to accessibility-first Lighthouse thresholds -- gave us a genuinely strong starting point. Every pattern we're building on, every "How We'll Apply This" across these audit documents, is a direct acknowledgment of the quality and thoughtfulness of what they created. We are grateful for their open-source contribution to the ecosystem, and proud to carry their engineering patterns forward into something new.
