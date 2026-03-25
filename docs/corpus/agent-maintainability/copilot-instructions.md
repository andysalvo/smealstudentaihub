# GitHub Copilot Custom Instructions

> Last updated: 2026-03-24
> Category: agent-maintainability
> Confidence: Official (GitHub)

---

## copilot-instructions.md

**Source:** [GitHub Docs - Adding Custom Instructions](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
**Source:** [GitHub Blog - 5 Tips for Writing Better Custom Instructions](https://github.blog/ai-and-ml/github-copilot/5-tips-for-writing-better-custom-instructions-for-copilot/)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch + WebFetch

### Location and Format

- File: `.github/copilot-instructions.md` in repo root
- Format: Markdown with natural language instructions
- Priority order: Personal instructions > Repository instructions > Organization instructions
- Length limit: approximately 1,000 lines max. GitHub recommends "no longer than 2 pages" for best results.

### GitHub's Official 5 Tips

1. **Project overview** -- Elevator pitch: what you're building, target audience, key features. A few sentences.
2. **Tech stack** -- List backend, frontend, APIs, testing tools with brief notes about implementation details.
3. **Coding guidelines** -- Formatting preferences, type hints, testing requirements, security practices.
4. **Project structure** -- Map directory layout with brief descriptions of folder purposes.
5. **Available resources** -- Point to dev scripts, automation tools, MCPs.

### Additional Official Guidance

- Use concrete code examples showing preferred/avoided patterns.
- Include reasoning behind rules (e.g., "Use date-fns instead of moment.js because moment.js is deprecated").
- Start with 10-20 specific instructions, iterate based on results.
- Structure with distinct headings, bullet points, short imperative directives.

---

## Copilot Coding Agent

**Source:** [GitHub Docs - Best Practices for Copilot Coding Agent](https://docs.github.com/copilot/how-tos/agents/copilot-coding-agent/best-practices-for-using-copilot-to-work-on-tasks)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch + WebFetch

### copilot-setup-steps.yml

Pre-installs dependencies in Copilot's ephemeral dev environment before the agent starts work. This file tells Copilot how to bootstrap itself.

### Built-in Safety

- Copilot coding agent can only create and push to branches beginning with `copilot/`
- Subject to any branch protections and required checks
- By default, checks generated code for security issues
- Gets a second opinion via Copilot code review
- Attempts to resolve identified issues before completing the PR

### Path-Specific Instructions

`.github/instructions/**/*.instructions.md` files allow different rules for different file types or directories. This is Copilot-specific and more granular than AGENTS.md.

### Also Reads AGENTS.md

Copilot coding agent reads AGENTS.md natively, so shared context should live there.

---

## Key Takeaways for Our Project

1. `.github/copilot-instructions.md` should be a thin, Copilot-specific layer referencing AGENTS.md.
2. Add `copilot-setup-steps.yml` so Copilot's agent can bootstrap itself (npm ci, etc.).
3. Branch protection on `main` is critical -- Copilot can only push to `copilot/*` branches by default.
4. Path-specific instructions (`.github/instructions/`) are a nice-to-have for later.
