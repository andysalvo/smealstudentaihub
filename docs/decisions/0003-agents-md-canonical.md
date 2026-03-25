# 0003. AGENTS.md as Canonical Instruction File

**Date:** 2026-03-24
**Status:** Accepted
**Author:** ajs10845

## Context

The FFC repo maintained four overlapping agent instruction files: AGENTS.md, CLAUDE.md, GEMINI.md, and `.github/copilot-instructions.md`. Research showed that AGENTS.md is the emerging universal standard -- stewarded by the Linux Foundation, adopted by 60k+ repos, and read natively by 25+ tools (Claude Code, Copilot, Cursor, Windsurf, Gemini CLI, Codex, Aider, and more).

The FFC approach worked but had content duplication across files, creating a maintenance burden.

## Decision

Make AGENTS.md the single source of truth for all agent instructions. CLAUDE.md, GEMINI.md, and copilot-instructions.md become thin, model-specific layers that reference AGENTS.md and add only what's unique to each tool. No content duplication.

AGENTS.md will cover the six required areas identified by GitHub's analysis of 2,500+ repos: commands (with durations), testing, project structure (with versions), code style (with snippets), git workflow, and boundaries (always do / ask first / never do).

## Consequences

**Positive:**
- One place to update when the project changes
- Any AI coding tool works with the repo out of the box
- Follows the Linux Foundation standard, not a proprietary format
- Reduced maintenance burden vs. 4 overlapping files

**Negative:**
- Model-specific optimizations are limited to the thin layer files
- If AGENTS.md gets too long, it could hit context limits on some tools (mitigated by keeping it concise)
