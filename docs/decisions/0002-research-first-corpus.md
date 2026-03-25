# 0002. Research-First Corpus Before Building

**Date:** 2026-03-24
**Status:** Accepted

## Context

We could have started building immediately on the FFC scaffold. Instead, Andy decided to build a research corpus first -- studying agent-maintainable repo patterns, auditing the FFC infrastructure, researching Penn State/Smeal branding, extracting the current Wix site, and analyzing frontend patterns before writing any application code.

## Decision

Build a comprehensive research corpus at `docs/corpus/` before touching application code. The corpus covers: agent maintainability (9 files), FFC audit (5 files), Penn State branding (2 files), site examples (1 file), Wix extraction (1 file), frontend patterns (10 files), and synthesis (2 files). 30 files, 60+ sources, all with provenance tracking.

The corpus is version-controlled, grows over time, and serves as institutional knowledge for future agents and club members.

## Consequences

**Positive:**
- Every design decision has cited backing, not gut feeling
- Future agents can read the corpus to understand WHY the site is built the way it is
- The corpus itself demonstrates Applied AI's approach to AI-assisted development
- Penn State branding rules, accessibility requirements, and trademark restrictions identified before building (avoiding costly rework)
- Discovered that the bar for Smeal org sites is extremely low -- informed our ambition level

**Negative:**
- Upfront time investment before any visible output
- Corpus maintenance becomes an ongoing responsibility
- Risk of over-researching (mitigated by Andy's "don't overengineer" instinct)
