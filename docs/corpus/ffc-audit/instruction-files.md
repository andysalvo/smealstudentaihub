# FFC Audit: AI Instruction Files -- Patterns and Application

> Last updated: 2026-03-24
> Category: ffc-audit
> Confidence: Direct analysis of andysalvo/smealstudentaihub repo (forked from Free For Charity)

---

## CLAUDE.md

### What They Built

Project-specific instructions for Claude Code. Points to AGENTS.md as canonical reference. Covers:
- Terminal/tool usage preferences
- Timeout requirements (180s+ for builds)
- Pre-commit checklist (format, lint, test, build, e2e)
- MCP server availability table (Playwright, GitHub, Cloudflare, Sentry)
- Custom agent definitions in `.claude/agents/` (dns-audit, site-health, pr-reviewer, onboarding)
- Workflow reminders (branch policy, issue linking, conventional commits, kebab-case, assetPath)

### What They Did Well

- Clean separation: CLAUDE.md is Claude-specific, AGENTS.md is universal. No duplication.
- Timeout table is practical -- agents kill long-running builds constantly.
- MCP server awareness table tells Claude what tools it might have.
- Custom agents directory pattern suggests reusable task-specific definitions.
- Thin pointer file keeps Claude's context focused rather than overloaded.

### How We'll Apply This

- **Keep:** Thin Claude-specific pointer to AGENTS.md as the pattern for our project
- **Keep:** Timeout table for long-running commands -- we'll update durations to match our build
- **Keep:** Pre-commit checklist as ordered list
- **Adapt:** MCP server table to reflect our actual toolchain as it evolves (swap Cloudflare/Sentry references for whatever we end up using)
- **Extend:** Ship actual `.claude/agents/` definitions for our common tasks (site-health, pr-reviewer, onboarding for new club members)

---

## AGENTS.md

### What They Built

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

### What They Did Well

- Single source of truth for any AI agent working on the repo
- **Command duration estimates are unique and valuable.** An agent knowing `npm run build` takes ~30s prevents premature timeout.
- **Known issues section** prevents agents from "fixing" intentional patterns (e.g., `<img>` vs `next/image`)
- Architecture tree maps directly to filesystem
- Security section: 6 clear rules, no fluff
- Comprehensive enough that a new agent can orient itself without human help

### How We'll Apply This

- **Keep:** Single canonical reference pattern -- this becomes the heart of our agent instruction system
- **Keep:** Command duration estimates, known issues section, architecture tree, security rules
- **Adapt:** Replace FFC-specific tech stack details and architecture tree with our own as the project evolves
- **Extend:** As we add model-specific files (GEMINI.md, copilot-instructions.md), ensure they reference AGENTS.md for shared context rather than duplicating it

---

## GEMINI.md

### What They Built

Gemini-specific instructions with:
- "Quick Context" table
- Step-by-step task guides (adding a page, updating content, fixing lint errors, creating a PR)
- Troubleshooting section with specific error messages and solutions
- Security reminders

### What They Did Well

- **Step-by-step task guides are excellent.** Instead of just rules, it walks the agent through common workflows.
- **Troubleshooting section with exact error messages** and exact fixes is very practical.
- More prescriptive than CLAUDE.md, matching Gemini's strengths with structured walkthroughs.
- The model-tailored approach shows real understanding of how different AI models work best.

### How We'll Apply This

- **Keep:** Task-specific guides, troubleshooting section, model-tailored instructional style
- **Adapt:** Write our Gemini-specific additions on top of AGENTS.md references, keeping this file focused on what only Gemini needs to know
- **Extend:** Build our own troubleshooting section as we encounter project-specific error patterns

---

## .github/copilot-instructions.md

### What They Built

Condensed AGENTS.md for Copilot: workflow, pre-push checks, architecture summary, conventions, CI enforcement, known constraints.

### What They Did Well

- Much more concise than other agent files. Copilot works better with terse instructions, and they recognized that.
- "Known Constraints" section is tight and actionable.
- Density matches the model's strengths perfectly.

### How We'll Apply This

- **Keep:** Density-appropriate instructions as our Copilot reference
- **Keep:** Known constraints as tight bullet list
- **Adapt:** Update constraints and conventions to reflect our project as it diverges from FFC

---

## .claude/rules/

### What They Built

#### 00-ffc-mission.md
Mission statement, conventional commits format, PR workflow rules, naming conventions, build command timeouts, code style principles. Includes: **"Don't over-engineer. Keep solutions simple and focused. Don't add features beyond what was asked."**

#### 01-security.md
Secret handling rules (never expose, never hardcode, never echo), GitHub Actions secret syntax, local dev `.env` guidance, user-provided secret handling protocol (4 numbered steps), list of files that must never be committed.

### What They Did Well

- Numbered files create a priority system. 00 loads first, 01 second. Clean and intentional.
- Security rules are complete and actionable.
- **"Don't add features beyond what was asked"** is the single most important instruction for any AI agent. This alone prevents scope creep across every agent interaction.
- User-provided secret handling protocol is a pattern not seen elsewhere -- thoughtful and practical.
- Separation of mission rules from security rules keeps each file focused.

### How We'll Apply This

- **Keep:** Numbered priority system, security as dedicated file, "don't add features" rule
- **Keep:** The 4-step user-provided secret handling protocol
- **Adapt:** Replace FFC mission content with Applied AI / Smeal Student AI Hub mission
- **Extend:** Add our own rules files (e.g., 02-accessibility.md, 03-content-guidelines.md) using the same numbered pattern

---

## .claude/settings.json

### What They Built

Permission allowlist/denylist for Claude Code bash operations.
- Allows: `npm install`, `npm run *`, `npx playwright *`, `git *`, `gh *`
- Denies: `rm -rf *`, `*API_TOKEN*`, `*SECRET*`

### What They Did Well

Real security boundary. Prevents destructive commands and accidental secret exposure. Tight but practical. Nothing extraneous.

### How We'll Apply This

- **Keep as-is.** This is exactly right.
- **Adapt:** Update the allowlist to include our actual commands as the project evolves

---

## .copilot/mcp-config.json

### What They Built

Two MCP servers for GitHub Copilot: GitHub MCP server (repos, issues, PRs, security, actions, web search) and Microsoft Learn MCP server.

### What They Did Well

- GitHub MCP server integration gives Copilot native issue/PR management. This is a meaningful capability boost.
- Fine-grained toolset scoping via `X-MCP-Toolsets` header shows careful configuration.

### How We'll Apply This

- **Keep:** MCP config pattern and GitHub MCP server -- this gives our agents native GitHub access
- **Adapt:** Swap Microsoft Learn MCP for servers relevant to our project (e.g., documentation sources related to Penn State, accessibility standards, or our specific toolchain)
