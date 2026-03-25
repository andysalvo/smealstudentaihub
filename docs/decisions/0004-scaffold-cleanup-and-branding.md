# 0004. Scaffold Cleanup and Penn State Branding

**Date:** 2026-03-25
**Status:** Accepted
**Author:** ajs10845

## Context

The smealstudentaihub repo was forked from Clarke Moyer's Free For Charity template. The FFC scaffold had excellent infrastructure (CI/CD, agent instructions, testing, Lighthouse CI, Dependabot, Husky hooks) but all content was charity-specific. We needed to adapt it for the Smeal Student AI Hub while preserving Clarke's operational patterns and crediting his work.

## Decision

Executed a 25-task plan across 5 phases:

**Phase 1 (Adapt):** Kept Clarke's governance, security, contributing, testing docs and adapted them. Removed FFC-only files (HUBSPOT_INVESTIGATION, ADOPTERS, etc.). Credited Clarke in CONTRIBUTORS.md and NOTICE with his real professional info (Program Manager at Penn State ARL, FFC Founder).

**Phase 2 (Agent Instructions):** Wrote canonical AGENTS.md covering all six required areas (commands, testing, structure, style, git workflow, boundaries). Thin CLAUDE.md pointing to AGENTS.md. Updated .claude/rules/ with Applied AI mission.

**Phase 3 (Content Layer):** Installed @next/mdx. Migrated 10 canonical Smeal major content files to MDX with frontmatter. Copied voice brief and 40 module section images.

**Phase 4 (Components):** Built Penn State branded header (navy logo bar, nav, mobile menu), three-column footer (identity, links, connect, disclaimer, FFC credit), home page matching current Wix site structure.

**Branding:** Nittany Navy #001E44, Beaver Blue #1E407C, Pugh Blue #96BEE6, PA Sky #009CDE. Roboto + Roboto Slab. Tailwind v4 @theme with --color-*: initial to lock brand colors.

## Consequences

**Positive:**
- Site builds and deploys to GitHub Pages with Penn State branding
- Any AI coding tool reads AGENTS.md and can work on the repo
- 10 Smeal major content files ready as MDX
- Clarke properly credited with accurate professional information
- 34 research files provide institutional knowledge for future agents

**Negative:**
- All FFC tests deleted (new tests needed as we build pages)
- Many pages are stubs (no content pages beyond home yet)
- No favicon yet
