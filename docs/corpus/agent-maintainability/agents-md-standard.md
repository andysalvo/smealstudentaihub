# AGENTS.md Universal Standard

> Last updated: 2026-03-24
> Category: agent-maintainability
> Confidence: Official (Linux Foundation / GitHub)

---

## What It Is

**Source:** [agents.md official site](https://agents.md/)
**Source:** [GitHub - agentsmd/agents.md](https://github.com/agentsmd/agents.md) (19.4k stars)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch + WebFetch

AGENTS.md is a simple, open format for guiding coding agents. Think of it as a "README for agents." Developed collaboratively across the AI ecosystem (OpenAI Codex, Amp, Google Jules, Cursor, Factory) and now stewarded by the Agentic AI Foundation under the Linux Foundation. Adopted by over 60,000 open-source projects on GitHub.

### Design Principles

- Standard Markdown, no dependencies or schema requirements
- Separates from README.md -- README is for humans, AGENTS.md is for agents
- The closest AGENTS.md file takes precedence in directory hierarchies (monorepo support)
- Explicit user prompts override file instructions
- Agents will execute relevant programmatic checks listed in the file

---

## Tool Support (25+ Tools)

**Source:** [agents.md official site](https://agents.md/)
**Source:** [DeployHQ - AI Config Files Guide](https://www.deployhq.com/blog/ai-coding-config-files-guide)
**Accessed:** 2026-03-24 | **Confidence:** Official + Community | **Method:** WebSearch + WebFetch

Over 25 coding agents support AGENTS.md natively:
- **OpenAI Codex** (reads it directly)
- **GitHub Copilot** (reads it)
- **Google Jules & Gemini CLI** (reads it)
- **Claude Code** (reads as fallback if no CLAUDE.md found)
- **Cursor** (reads it)
- **Windsurf** (reads it)
- **Aider, Zed, Warp, RooCode, JetBrains Junie, UiPath Autopilot, Cognition's Devin**

---

## What to Include (Lessons from 2,500+ Repos)

**Source:** [GitHub Blog - How to Write a Great agents.md](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/)
**Accessed:** 2026-03-24 | **Confidence:** Official (GitHub) | **Method:** WebSearch + WebFetch

### Six Core Areas

1. **Commands** -- Put commands early with specific flags and options (e.g., `npm test`, `pytest -v`). Commands come first.
2. **Testing** -- How to run tests, what frameworks are used, expected patterns.
3. **Project structure** -- Tech stack with versions and exact file locations.
4. **Code style** -- Actual code snippets demonstrating your style, not lengthy descriptions. Good/bad comparisons.
5. **Git workflow** -- Commit message format, branch naming, PR conventions.
6. **Boundaries** -- Three-tier system: Always do / Ask first / Never do.

### Common Mistakes

- Vague agent definitions like "You are a helpful coding assistant" -- agents need specificity.
- Missing executable commands -- agents need to be able to verify their work.
- Omitting version numbers -- say "React 19, TypeScript 5, Next.js 16" not just "React, TypeScript, Next.js."

---

## Monorepo Pattern

**Source:** [Datadog - Steering AI Agents in Monorepos](https://dev.to/datadog-frontend-dev/steering-ai-agents-in-monorepos-with-agentsmd-13g0)
**Accessed:** 2026-03-24 | **Confidence:** Community (Datadog engineering) | **Method:** WebSearch

- Use a root AGENTS.md as a "router" that points to subdirectory-specific files.
- Keep steering documents concise and terse -- they are for agents, not humans.
- Support user customization via `AGENTS.local.md` (gitignored).
- Consider a `CLAUDE.md` at root that references the root `AGENTS.md` for Claude Code compatibility.

---

## Cross-Tool Compatibility Matrix

**Source:** [DeployHQ - AI Config Files Guide](https://www.deployhq.com/blog/ai-coding-config-files-guide)
**Accessed:** 2026-03-24 | **Confidence:** Community | **Method:** WebSearch + WebFetch

| Config File | Primary Tool | Also Read By | Location |
|---|---|---|---|
| `CLAUDE.md` | Claude Code | -- | Project root + `~/.claude/` |
| `AGENTS.md` | Codex CLI | Cursor, Claude Code, Gemini CLI, Windsurf, Copilot, Aider, 20+ more | Project root + subdirectories |
| `.cursor/rules/` | Cursor | -- | `.cursor/rules/` directory |
| `GEMINI.md` | Gemini CLI | -- | Project root + `~/.gemini/` |
| `.windsurf/rules/` | Windsurf | -- | `.windsurf/rules/` directory |
| `copilot-instructions.md` | GitHub Copilot | -- | `.github/` directory |

**AGENTS.md is the most universally supported format** across 25+ tools and 60,000+ repos.

---

## Practical File Setup for Maximum Agent Coverage

To support all major agents from one repo:

```
repo-root/
  AGENTS.md                          # Universal (25+ tools read this)
  CLAUDE.md                          # Claude Code (can @import AGENTS.md)
  GEMINI.md                          # Gemini CLI (or configure to read AGENTS.md)
  .github/
    copilot-instructions.md          # GitHub Copilot
    copilot-setup-steps.yml          # Copilot coding agent dependencies
  .cursor/
    rules/
      project.mdc                    # Cursor rules
  .windsurf/
    rules/
      project.md                     # Windsurf rules
```

Since Cursor, Windsurf, Gemini CLI, and Copilot all now read AGENTS.md, you can simplify to:

```
repo-root/
  AGENTS.md                          # Read by nearly everything
  CLAUDE.md                          # Claude-specific (references AGENTS.md)
  .github/
    copilot-instructions.md          # Copilot-specific extras
```

**Source:** [rule-porter](https://dev.to/nedcodes/rule-porter-convert-cursor-rules-to-claudemd-agentsmd-and-copilot-4hjc) -- a tool that converts between Cursor rules, CLAUDE.md, AGENTS.md, and copilot-instructions.md formats.

---

## Key Takeaways for Our Project

1. AGENTS.md should be our canonical instruction file. Everything else references it.
2. Cover the six core areas: commands, testing, structure, style, git workflow, boundaries.
3. Include version numbers for everything in the stack.
4. Include command durations to prevent timeout kills.
5. The three-tier boundary system (always / ask first / never) is the right pattern.
