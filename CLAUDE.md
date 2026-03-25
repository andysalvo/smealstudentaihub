# Claude Code Instructions: Smeal Student AI Hub

See **AGENTS.md** for the full project reference. This file covers only what is specific to Claude Code.

## Timeouts

| Command | Timeout |
|---------|---------|
| `npm run build` | 180s |
| `npm run test:e2e` | 180s |
| `npm install` / `npm ci` | 120s |
| Everything else | 30s |

## Pre-Commit Checklist

Before committing, run these in order:
1. `npm run format:check`
2. `npm run lint`
3. `npm run build`

## Content Work

When editing anything in `content/`, read `content/VOICE_BRIEF.md` first. The voice brief is the writing contract. Follow it exactly.

## Research Corpus

Before making architectural decisions, check `docs/corpus/` for existing research. Start with `docs/corpus/synthesis/final-synthesis.md`.

Before making design decisions, check `docs/decisions/` for existing ADRs.

## Rules

See `.claude/rules/` for numbered priority rules (00-mission, 01-security).
