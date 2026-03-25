# 0001. Fork FFC Template as Starting Point

**Date:** 2026-03-24
**Status:** Accepted
**Author:** ajs10845

## Context

We needed a codebase for the Smeal Student AI Hub website. Options were: start from scratch, use a framework starter (create-next-app), or fork an existing project with agent-maintainable infrastructure already in place.

The Free For Charity (FFC) template repo had Next.js 16, Tailwind v4, TypeScript strict mode, GitHub Pages deployment, CI/CD with smoke tests, Lighthouse CI, Dependabot, multi-agent instruction files (AGENTS.md, CLAUDE.md, GEMINI.md, copilot-instructions.md), Husky hooks, commitlint, and comprehensive testing infrastructure -- all already wired together.

## Decision

Fork the FFC template into `andysalvo/smealstudentaihub`. Strip all FFC-specific content (images, pages, team data, branding). Keep the infrastructure patterns. Credit FFC via Apache 2.0 attribution in NOTICE file and README.

## Consequences

**Positive:**
- Months of infrastructure work inherited for free
- Agent instruction architecture already proven
- CI/CD pipeline already tested and working
- Can focus effort on content and design rather than tooling

**Negative:**
- Carry some FFC patterns we'll need to adapt (governance docs, font stack, sharding config)
- Must carefully separate FFC content from infrastructure to avoid shipping their branding
- Apache 2.0 attribution requirement (minor -- just a NOTICE file)
