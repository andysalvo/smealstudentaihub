# CLAUDE.md Best Practices

> Last updated: 2026-03-24
> Category: agent-maintainability
> Confidence: Official (Anthropic) + Community

---

## What Anthropic Officially Recommends

**Source:** [Anthropic - Best Practices for Claude Code](https://code.claude.com/docs/en/best-practices)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch + WebFetch

### Purpose

CLAUDE.md is a special file Claude reads at the start of every conversation. It provides persistent context Claude cannot infer from code alone.

### File Locations (Hierarchical Loading)

- `~/.claude/CLAUDE.md` -- applies to all sessions globally
- `./CLAUDE.md` in project root -- shared via git with your team
- Parent directories -- useful for monorepos (both `root/CLAUDE.md` and `root/foo/CLAUDE.md` are pulled in)
- Child directories -- Claude pulls in child CLAUDE.md files on demand when working with files in those directories

### What to Include

- Bash commands Claude cannot guess (build, test, lint commands)
- Code style rules that differ from language defaults
- Testing instructions and preferred test runners
- Repository etiquette (branch naming, PR conventions)
- Architectural decisions specific to the project
- Developer environment quirks (required env vars)
- Common gotchas or non-obvious behaviors

### What to Exclude

- Anything Claude can figure out by reading code
- Standard language conventions Claude already knows
- Detailed API documentation (link to docs instead)
- Information that changes frequently
- Long explanations or tutorials
- File-by-file descriptions of the codebase
- Self-evident practices like "write clean code"

### Key Rules

- Keep it concise. For each line, ask: "Would removing this cause Claude to make mistakes?" If not, cut it.
- Run `/init` to generate a starter file, then refine over time.
- You can tune adherence by adding emphasis (e.g., "IMPORTANT" or "YOU MUST").
- Check CLAUDE.md into git so the team can contribute.
- Supports `@path/to/import` syntax to reference other files.

### Official Example Format

```markdown
# Code style

- Use ES modules (import/export) syntax, not CommonJS (require)
- Destructure imports when possible (eg. import { foo } from 'bar')

# Workflow

- Be sure to typecheck when you're done making a series of code changes
- Prefer running single tests, and not the whole test suite, for performance
```

---

## What Power Users Recommend

### HumanLayer Blog

**Source:** [HumanLayer - Writing a Good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
**Accessed:** 2026-03-24 | **Confidence:** Community | **Method:** WebSearch + WebFetch

- Keep under 300 lines. HumanLayer's own file is under 60 lines.
- Do NOT use `/init` blindly -- CLAUDE.md is the highest-leverage configuration point, so write it deliberately.
- "Never send an LLM to do a linter's job" -- use deterministic tools for formatting, not instructions.
- Use the WHAT/WHY/HOW framework: What is the tech stack and structure? Why does each component exist? How should Claude work on the project?
- Prefer pointers to copies -- use file:line references instead of embedding code snippets.
- Use progressive disclosure: reference separate markdown files rather than embedding all content.

### Builder.io

**Source:** [Builder.io - How to Write a Good CLAUDE.md File](https://www.builder.io/blog/claude-md-guide)
**Accessed:** 2026-03-24 | **Confidence:** Community | **Method:** WebSearch

- The file is "one file, loaded before every conversation" -- invest in it.
- Focus on project-specific guidance that reduces prompt length and ensures consistency.

### UX Planet

**Source:** [UX Planet - CLAUDE.md Best Practices](https://uxplanet.org/claude-md-best-practices-1ef4f861ce7c)
**Accessed:** 2026-03-24 | **Confidence:** Community | **Method:** WebSearch

- Suggests 10 sections: Project Overview, Architecture, Tech Stack, Coding Conventions, Folder Structure, Commands, Testing, Git Workflow, Important Rules, Known Gotchas.

---

## Key Takeaways for Our Project

1. CLAUDE.md should be thin and Claude-specific. Point to AGENTS.md for universal context.
2. Under 300 lines. Every line must earn its place.
3. Include commands with expected durations (prevents timeout kills).
4. Include known issues / intentional patterns (prevents agents from "fixing" correct behavior).
5. Don't duplicate what linters and CI already enforce.
