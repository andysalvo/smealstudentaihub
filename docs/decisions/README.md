# Architecture Decision Records (ADRs)

This directory captures significant decisions made during the development of the Smeal Student AI Hub. Each record documents WHAT was decided, WHY, and what alternatives were considered.

## Why ADRs?

When future club members (or agents) ask "why is it built this way?", the answer lives here. Code shows what. Commits show when. ADRs show why.

## Format

Each decision gets a numbered markdown file: `NNNN-short-title.md`

```markdown
# NNNN. Title

**Date:** YYYY-MM-DD
**Status:** Proposed | Accepted | Deprecated | Superseded by [NNNN]
**Author:** psu-id (e.g., ajs10845)

## Context

What is the situation that requires a decision?

## Decision

What did we decide?

## Consequences

What follows from this decision? Both positive and negative.
```

## When to Write an ADR

- Choosing a technology or framework
- Changing the project structure
- Adopting or dropping a major pattern
- Any decision a future maintainer would question

You don't need an ADR for routine work. Only pivots.

## Index

| #    | Title                                                                             | Date       | Status   |
| ---- | --------------------------------------------------------------------------------- | ---------- | -------- |
| 0001 | [Fork FFC template as starting point](0001-fork-ffc-template.md)                  | 2026-03-24 | Accepted |
| 0002 | [Research-first corpus before building](0002-research-first-corpus.md)            | 2026-03-24 | Accepted |
| 0003 | [AGENTS.md as canonical instruction file](0003-agents-md-canonical.md)            | 2026-03-24 | Accepted |
| 0004 | [Scaffold cleanup and Penn State branding](0004-scaffold-cleanup-and-branding.md) | 2026-03-25 | Accepted |
