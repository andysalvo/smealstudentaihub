# FFC Audit: AI Instruction Files

> Last updated: 2026-03-24
> Category: ffc-audit
> Confidence: Direct analysis of andysalvo/smealstudentaihub repo (forked from Free For Charity)

---

## CLAUDE.md

### What It Contains

Project-specific instructions for Claude Code. Points to AGENTS.md as canonical reference. Covers:
- Terminal/tool usage preferences
- Timeout requirements (180s+ for builds)
- Pre-commit checklist (format, lint, test, build, e2e)
- MCP server availability table (Playwright, GitHub, Cloudflare, Sentry)
- Custom agent definitions in `.claude/agents/` (dns-audit, site-health, pr-reviewer, onboarding)
- Workflow reminders (branch policy, issue linking, conventional commits, kebab-case, assetPath)

### What's Good

- Clean separation: CLAUDE.md is Claude-specific, AGENTS.md is universal. No duplication.
- Timeout table is practical -- agents kill long-running builds constantly.
- MCP server awareness table tells Claude what tools it might have.
- Custom agents directory pattern suggests reusable task-specific definitions.

### What's Overengineered

- References `.claude/agents/` but the directory does not actually exist. Aspirational infrastructure.
- MCP server table is FFC-specific (Cloudflare, Sentry).

### Keep / Improve

- **Keep:** Thin Claude-specific pointer to AGENTS.md
- **Keep:** Timeout table for long-running commands
- **Keep:** Pre-commit checklist as ordered list
- **Improve:** Actually ship the `.claude/agents/` definitions instead of just referencing them

---

## AGENTS.md

### What It Contains

The canonical AI agent reference. Covers:
- Template purpose and tech stack table
- Core commands with typical durations
- Development workflow (issue to merge)
- Full project architecture tree
- Naming conventions
- GitHub Pages asset path handling with code examples
- Security rules
- Testing strategy table
- Known issues
- Commit message format table
- CI pipeline summary

### What's Good

- Single source of truth for any AI agent working on the repo
- **Command duration estimates are unique and valuable.** An agent knowing `npm run build` takes ~30s prevents premature timeout.
- **Known issues section** prevents agents from "fixing" intentional patterns (e.g., `<img>` vs `next/image`)
- Architecture tree maps directly to filesystem
- Security section: 6 clear rules, no fluff

### What's Overengineered

- ~200 lines for a footer template -- ratio of docs to product code is extreme
- Some sections duplicated across CLAUDE.md, GEMINI.md, and copilot-instructions.md

### Keep / Improve

- **Keep:** Single canonical reference, command durations, known issues, architecture tree, security rules
- **Improve:** Reduce duplication across files. AGENTS.md should be the only place shared context lives.

---

## GEMINI.md

### What It Contains

Gemini-specific instructions with:
- "Quick Context" table
- Step-by-step task guides (adding a page, updating content, fixing lint errors, creating a PR)
- Troubleshooting section with specific error messages and solutions
- Security reminders

### What's Good

- **Step-by-step task guides are excellent.** Instead of just rules, it walks the agent through common workflows.
- **Troubleshooting section with exact error messages** and exact fixes is very practical.
- More prescriptive than CLAUDE.md, matching Gemini's strengths.

### What's Overengineered

- Much content duplicated from AGENTS.md. Could be 30% of current size if it referenced AGENTS.md for shared context.

### Keep / Improve

- **Keep:** Task-specific guides, troubleshooting section, model-tailored style
- **Improve:** Remove duplication. Only Gemini-specific additions should be in this file.

---

## .github/copilot-instructions.md

### What It Contains

Condensed AGENTS.md for Copilot: workflow, pre-push checks, architecture summary, conventions, CI enforcement, known constraints.

### What's Good

- Much more concise than other agent files. Copilot works better with terse instructions.
- "Known Constraints" section is tight.

### What's Overengineered

- Nothing. Right density for what it is.

### Keep / Improve

- **Keep:** Density-appropriate instructions
- **Keep:** Known constraints as tight bullet list

---

## .claude/rules/

### 00-ffc-mission.md

Mission statement, conventional commits format, PR workflow rules, naming conventions, build command timeouts, code style principles. Includes: **"Don't over-engineer. Keep solutions simple and focused. Don't add features beyond what was asked."**

### 01-security.md

Secret handling rules (never expose, never hardcode, never echo), GitHub Actions secret syntax, local dev `.env` guidance, user-provided secret handling protocol (4 numbered steps), list of files that must never be committed.

### What's Good

- Numbered files create priority system. 00 loads first, 01 second.
- Security rules are complete and actionable.
- **"Don't add features beyond what was asked"** is the single most important instruction for any AI agent.
- User-provided secret handling protocol is a pattern not seen elsewhere.

### Keep / Improve

- **Keep:** Numbered priority system, security as dedicated file, "don't add features" rule
- **Improve:** Reduce content overlap with AGENTS.md

---

## .claude/settings.json

### What It Contains

Permission allowlist/denylist for Claude Code bash operations.
- Allows: `npm install`, `npm run *`, `npx playwright *`, `git *`, `gh *`
- Denies: `rm -rf *`, `*API_TOKEN*`, `*SECRET*`

### What's Good

Real security boundary. Prevents destructive commands and accidental secret exposure. Tight but practical.

### What's Overengineered

Nothing. This is exactly right.

### Keep / Improve

- **Keep as-is.** Adapt allowlist to our actual commands.

---

## .copilot/mcp-config.json

### What It Contains

Two MCP servers for GitHub Copilot: GitHub MCP server (repos, issues, PRs, security, actions, web search) and Microsoft Learn MCP server.

### What's Good

- GitHub MCP server integration gives Copilot native issue/PR management.
- Fine-grained toolset scoping via `X-MCP-Toolsets` header.

### What's Overengineered

- Microsoft Learn MCP is niche and unlikely to provide value for our project.

### Keep / Improve

- **Keep:** MCP config pattern, GitHub MCP server
- **Cut:** Microsoft Learn MCP
