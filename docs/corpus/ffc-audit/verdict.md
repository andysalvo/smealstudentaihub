# FFC Audit: Final Verdict

> Last updated: 2026-03-24
> Category: ffc-audit
> Confidence: Synthesis of direct repo analysis

---

## Top 10 Things They Did Right (Must Keep)

1. **Multi-agent instruction architecture.** AGENTS.md as canonical source, CLAUDE.md/GEMINI.md/copilot-instructions.md as thin model-specific layers. Every AI model that touches the repo knows the rules.

2. **`.claude/settings.json` with explicit bash allowlist/denylist.** Real security boundary for agent operations. Prevents destructive commands and secret exposure.

3. **CI pipeline with build artifact sharing and E2E sharding.** Build once, test in parallel. Concurrency control with cancel-in-progress. Failure artifact uploads.

4. **Post-deploy smoke tests against the live URL.** Catches deployment-specific issues that local tests miss. Polling for deployment availability is practical.

5. **Husky pre-commit hooks that check only staged files.** Fast, focused, doesn't waste time linting untouched files. The ACMR diff filter is correct.

6. **Dependabot with grouped minor/patch and isolated major updates.** Separate npm and GitHub Actions tracking. Conventional commit prefixes on Dependabot PRs.

7. **Lighthouse CI on PRs with formatted PR comments.** Performance visibility on every change. Warning-level thresholds (not blocking). 90% accessibility threshold.

8. **Known issues section in agent instructions.** Prevents agents from "fixing" intentional patterns. Critical for agent-maintained repos.

9. **Tailwind v4 CSS-based config with brand token mapping.** Modern, clean, no config file overhead. CSS custom properties + `@theme inline` is the right pattern.

10. **`.claude/rules/` with numbered priority files and security as a dedicated rule.** Clean separation of mission rules from security rules. The "don't add features beyond what was asked" instruction is the single most valuable agent rule.

---

## Top 10 Things That Are Overengineered (Should Go)

1. **300-line rebrand issue template.** Built for FFC's template factory. Completely irrelevant for our project.

2. **CNCF-grade GOVERNANCE.md with quorum rules and voting procedures.** Keep the concept (lazy consensus, response times), ditch the formal structure until we have 3+ maintainers.

3. **8 Google Fonts with per-element ID selectors.** Excessive font data, CSS specificity fights. Reduce to 2-3 fonts maximum.

4. **400-line SECURITY.md documenting disabled branch protections.** Keep vulnerability reporting and commit signing. Cut the rest.

5. **600-line CONTRIBUTING.md with VS Code Copilot marketing.** Keep AI workflow section and reviewer onboarding concept. Cut the filler.

6. **25-checkbox PR template.** Contributors will ignore this. Cut to 10-12 checkboxes that actually matter.

7. **4-way E2E sharding for ~15 tests.** Overkill. 1-2 shards is sufficient until the test suite grows.

8. **Duplicate content across 4+ agent instruction files.** AGENTS.md, CLAUDE.md, GEMINI.md, copilot-instructions.md, and .claude/rules all overlap. Consolidate to AGENTS.md as single source.

9. **lucide-react AND react-icons AND framer-motion AND swiper.** Dependency bloat. Pick one icon library, drop animation/carousel deps until actually needed.

10. **120-line inline JS in Lighthouse workflow YAML.** Extract to script file for maintainability and testability.

---

## Top 5 Gaps (Things We Should Add)

1. **Content validation.** Tests check code but not content integrity. Need: broken internal link detection, missing metadata validation, orphaned image detection. Even a Jest test that validates data files against a schema would catch data-level bugs.

2. **Environment setup validation.** A `npm run doctor` or setup script that checks all prerequisites (Node version, npm, git, etc.) and reports what's missing. Reduces onboarding friction for new club members.

3. **Automated changelog from conventional commits.** They have commitlint enforcing conventional commits but no tool (release-please, changesets, standard-version) to generate changelogs. For an agent-maintained repo, this is a natural extension.

4. **Reusable agent task definitions.** CLAUDE.md references `.claude/agents/` with task-specific agents (dns-audit, site-health, pr-reviewer) but the directory doesn't exist. Shipping actual agent definitions for common tasks would be a differentiator.

5. **Content/code separation.** For a site maintained by non-developers via agents, content should live in `/content/` as MDX files, separate from components in `/src/`. This lets content updates happen without touching React code.

---

## Attribution

This audit covers the Free For Charity (FFC) codebase, licensed under Apache 2.0 (EIN 46-2471893). We are grateful for their open-source work. The infrastructure patterns they built are genuinely good, and our project builds directly on their foundation.
