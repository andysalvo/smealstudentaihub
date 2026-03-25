# Research Synthesis: Complete Step 1 Findings

> Last updated: 2026-03-24
> Status: Step 1 complete. 25 research files across 4 categories. Step 2 (Penn State/Smeal branding, Wix extraction, site examples) is next.

---

## The Big Picture

We're building a website for the Smeal Student AI Hub, maintained by the Applied AI club at Penn State. The site needs to:
1. Meet Penn State / Smeal visual and accessibility standards
2. Be maintainable by anyone with repo access and an AI coding agent
3. Serve as a lasting educational resource about AI in business

We studied the best patterns across the agent-maintained site ecosystem, audited the FFC (Free For Charity) repo we forked, and researched the cutting edge of agentic design and multi-agent workflows. FFC gave us strong infrastructure bones. The ecosystem research showed us what's possible. This synthesis is the bridge between research and building.

---

## What We Researched

### 25 files across 4 categories:

**Agent Maintainability (9 files)**
| File | What It Covers | Key Source |
|------|---------------|------------|
| `claude-code.md` | CLAUDE.md best practices | Anthropic official + HumanLayer, Builder.io |
| `agents-md-standard.md` | AGENTS.md universal standard | Linux Foundation, GitHub Blog (2,500 repo analysis) |
| `copilot-instructions.md` | GitHub Copilot custom instructions | GitHub official docs |
| `cursor-windsurf-gemini.md` | Cursor rules, Windsurf rules, GEMINI.md | Cursor, Windsurf, Google official docs |
| `ci-cd-guardrails.md` | Protecting repos when agents make changes | Anthropic, GitHub, StepSecurity |
| `repo-structure.md` | Making codebases agent-friendly | Ben Houston (10 core practices), Datadog |
| `github-agentic-workflows.md` | GitHub's new agentic workflow system | YouTube: GitHub Checkout (Idan Gazit demo) |
| `copilot-cli-session-history.md` | Queryable SQLite session history | YouTube: GitHub (Evan Boyle) |
| `vscode-multi-agent-workflows.md` | Parallel agent sessions in VS Code | YouTube: VS Code (35.8k views) |

**FFC Audit (5 files)**
| File | What It Covers |
|------|---------------|
| `instruction-files.md` | CLAUDE.md, AGENTS.md, GEMINI.md, copilot-instructions, rules, settings |
| `ci-cd-workflows.md` | CI, deploy, CodeQL, Lighthouse, Dependabot pipelines |
| `project-infrastructure.md` | Issue templates, PR template, CODEOWNERS, hooks, linting |
| `code-architecture.md` | Next.js config, layout, styles, TypeScript, dependencies, pages |
| `verdict.md` | 10 patterns to build on, adaptations, 5 opportunities to extend |

**Frontend (9 files)**
| File | What It Covers | Key Source |
|------|---------------|------------|
| `nextjs-static-export.md` | Next.js 16 static export + GitHub Pages | Next.js official docs (v16.2.1) |
| `academic-site-design.md` | University/academic website patterns | Kanopi, Modern Campus, Clique Studios |
| `tailwind-v4-branding.md` | Tailwind CSS v4 design system for branded sites | Tailwind official docs |
| `accessibility.md` | WCAG 2.2 AA + Penn State AD69 compliance | W3C, Penn State, WebAIM, Yale |
| `content-architecture.md` | MDX, educational site patterns, Pagefind search | Next.js MDX guide, Nextra |
| `github-pages-domains.md` | GitHub Pages deployment + custom domain path | GitHub official docs |
| `academic-repo-examples.md` | 5 open source academic/student org repos analyzed | OSSU, Odin Project, UW-Madison, OSU, freeCodeCamp |
| `agent-collaborative-design.md` | Multi-agent co-design with Paper MCP | YouTube: DesignCourse |
| `google-stitch-design-tool.md` | Google Stitch: AI design tool + design markdown export | YouTube: Fireship (1.5M views) |

**Synthesis (2 files)**
| File | What It Covers |
|------|---------------|
| `research-synthesis.md` | This file -- complete findings and how they connect |
| `open-questions.md` | Agentic structure questions + Step 2 research gaps |

---

## The 12 Key Findings

### Finding 1: AGENTS.md is the Universal Standard

AGENTS.md is stewarded by the Linux Foundation, adopted by 60k+ repos, and read natively by 25+ tools (Claude Code, Copilot, Cursor, Windsurf, Gemini CLI, Codex, Aider, and more). It should be our canonical instruction file. CLAUDE.md, GEMINI.md, and copilot-instructions.md should be thin, model-specific layers that reference AGENTS.md.

The FFC repo already follows this pattern. We keep it and tighten it by consolidating duplicated instructions into a single source of truth.

**How we're applying it:** Our AGENTS.md will be purpose-built for a content-driven site -- emphasizing content update workflows, resource formatting, and the `/content/` directory structure so any agent can update the site without needing to touch application code.

**Corpus references:** `agent-maintainability/agents-md-standard.md`, `agent-maintainability/cursor-windsurf-gemini.md`

---

### Finding 2: Six Things Every Agent Instruction File Needs

From GitHub's analysis of 2,500+ repos:
1. Commands (with expected durations)
2. Testing
3. Project structure (with version numbers)
4. Code style (with code snippets, not descriptions)
5. Git workflow
6. Boundaries (always do / ask first / never do)

The FFC repo covers all six. We adapt each one to our context.

**Corpus references:** `agent-maintainability/agents-md-standard.md`, `ffc-audit/instruction-files.md`

---

### Finding 3: Strong Infrastructure Foundation from FFC

The FFC repo gave us a genuinely solid starting point. 10 patterns we're building on:

1. Multi-agent instruction architecture (AGENTS.md canonical)
2. `.claude/settings.json` bash security boundary
3. CI with build artifact sharing
4. Post-deploy smoke tests against live URL
5. Husky hooks on staged files only (ACMR filter)
6. Dependabot grouped minor/patch, isolated major
7. Lighthouse CI on PRs with 90% accessibility target
8. Known issues section in agent instructions
9. Tailwind v4 CSS-first config with `@theme` brand tokens
10. Numbered `.claude/rules/` priority files

We're adapting where FFC built for a different context -- simplifying governance, focusing the font stack, right-sizing CI sharding, and consolidating agent instructions into a single source.

**Corpus references:** `ffc-audit/verdict.md`, all files in `ffc-audit/`

---

### Finding 4: Five Opportunities to Extend

Capabilities the ecosystem research showed us we should add:

1. **Content validation** -- test data integrity, not just code (validate frontmatter, check for broken links)
2. **Environment setup validation** -- `npm run doctor` for new contributors and agents
3. **Automated changelog** -- generate from conventional commits
4. **Reusable agent task definitions** -- `.claude/agents/` with predefined workflows
5. **Content/code separation** -- `/content/` directory with MDX, separate from `/src/`

**Corpus reference:** `ffc-audit/verdict.md`

---

### Finding 5: MDX is the Right Content Layer

MDX (Markdown + JSX) lets club members write educational content in Markdown while embedding interactive React components. Content lives in `/content/` separate from `/src/` components. This is the key to agent-maintainability for non-developers.

The `/content/` directory becomes the primary surface agents work on. A well-structured content directory with clear frontmatter schemas means an agent can add a new resource, event, or page by following a template -- no React knowledge needed.

**Corpus reference:** `frontend/content-architecture.md`

---

### Finding 6: Penn State AD69 Mandates WCAG 2.2 AA

Even though we're on GitHub Pages (not psu.edu), aligning with Penn State's accessibility standards makes us Smeal-ready. The federal ADA mandate for public universities takes effect April 24, 2026. The FFC repo already targets 90% on Lighthouse accessibility -- we keep that bar.

Full developer checklist in the research: semantic HTML, 4.5:1 contrast, keyboard navigation, skip links, focus indicators, ARIA labels, 24x24px click targets.

**Corpus reference:** `frontend/accessibility.md`

---

### Finding 7: Tailwind v4 Wipe-and-Replace for Brand Control

`--color-*: initial` in `@theme` wipes all default Tailwind colors. Only brand colors exist. This is how we enforce Penn State/Smeal branding at the CSS level -- no off-brand values can leak in.

Also: container queries built-in, no autoprefixer needed, 3.78x faster full builds, automatic content detection.

**Corpus reference:** `frontend/tailwind-v4-branding.md`

---

### Finding 8: TypeScript Strict Mode is the Biggest Agent Win

Research shows TypeScript strict mode improved AI agent success rate from ~60% to nearly 100% for route-related tasks. The FFC repo already uses strict mode. Non-negotiable.

Additional agent-friendly patterns: flat directory structure, no re-export chains, tests as documentation, centralized config.

**Corpus reference:** `agent-maintainability/repo-structure.md`

---

### Finding 9: Academic Site Patterns Point to Clear Taxonomy

Best academic org sites use:
- Consistent resource card formats (OSSU)
- Structured metadata per resource (freeCodeCamp)
- Clear page taxonomy: about, resources, events, leadership, projects (UW-Madison AI Club)
- Content as structured data, not just prose
- Content separated from application code (Odin Project)

**Corpus references:** `frontend/academic-site-design.md`, `frontend/academic-repo-examples.md`

---

### Finding 10: GitHub Agentic Workflows Define the Guardrail Model

GitHub's new agentic workflow system (Actions + Copilot) uses **frontmatter guardrails enforced outside the agent loop**: safe_outputs (max 1 PR per run), tool permissions (domain-restricted web fetcher), and no-op capability. The agent cannot override these constraints.

Real-world example: Home Assistant uses an agentic workflow that reads stack traces from bug reports, determines if the bug is in their code or third-party code, and produces fix PRs automatically.

**Key quote:** "If you can say it in English, you can turn it into a workflow."

**Corpus reference:** `agent-maintainability/github-agentic-workflows.md`

---

### Finding 11: Multi-Agent Parallel Workflows Are Production-Ready

VS Code supports running multiple Copilot sessions simultaneously, each using different models. A club member could run:
- Session 1 (Sonnet): "Add the March workshop event"
- Session 2 (Opus): "Redesign the resource page layout"
- Session 3 (GPT-5): "Write documentation for the API"

Key: tasks must touch non-overlapping parts of the codebase. Git worktrees provide isolation.

Copilot CLI also maintains a queryable SQLite database of all session history -- past maintenance sessions are searchable and context can be reloaded.

**Corpus references:** `agent-maintainability/vscode-multi-agent-workflows.md`, `agent-maintainability/copilot-cli-session-history.md`

---

### Finding 12: AI Design Tools Can Accelerate the Visual Phase

Two tools are changing design workflows:

**Paper** (with MCP server for Claude Code): Spin up multiple agents designing simultaneously. 4 parallel prototypes, then 4 parallel color schemes, then export to code. Useful for exploring Penn State/Smeal brand interpretations.

**Google Stitch** (1.5M views on Fireship): Can extract a design system from any URL, generate interactive prototypes from natural language, and export a **design markdown file** -- a portable, version-controllable design system that agents can read. This design markdown file could live in our repo and be referenced in AGENTS.md for brand consistency.

**Corpus references:** `frontend/agent-collaborative-design.md`, `frontend/google-stitch-design-tool.md`

---

## The Agentic Structure: How It All Connects

This corpus isn't just research notes -- it's the blueprint for an agent-maintained site. Here's how the 12 findings form a complete system:

### Layer 1: Agent Instructions (Findings 1-2)
AGENTS.md becomes the single source of truth, tuned for content operations. Six core sections (commands, testing, structure, style, git workflow, boundaries) adapted for an educational content site. Agent task definitions in `.claude/agents/` give any coding agent a menu of predefined workflows.

### Layer 2: Infrastructure Guardrails (Findings 3, 10)
FFC's CI pipeline, security boundaries, and commit hooks give agents guardrails. GitHub's agentic workflow model shows how to constrain agent outputs (max 1 PR, restricted tool access) at the infrastructure level, not the prompt level. Lighthouse CI catches accessibility regressions. Commitlint enforces clean history.

### Layer 3: Content Layer (Findings 4-5)
MDX in `/content/` with validated frontmatter schemas means agents primarily work with structured Markdown, not React components. Content validation in CI catches broken data before it ships. Content and code are separate concerns.

### Layer 4: Quality Gates (Findings 6-8)
Accessibility targets (WCAG 2.2 AA, 90% Lighthouse), brand-locked Tailwind colors (`--color-*: initial`), and strict TypeScript all serve the same purpose -- they make it hard for an agent (or a human) to ship something that doesn't meet our standards.

### Layer 5: Multi-Agent Capability (Findings 11-12)
Multiple agents can work in parallel on non-overlapping tasks. AI design tools (Paper, Stitch) can accelerate the visual phase. Session history is queryable so context persists across maintenance sessions.

### The End State
A club member opens an issue like "add the March workshop recording." An agent picks it up, reads AGENTS.md for context, creates the MDX file in `/content/` with proper frontmatter, CI validates the content, Lighthouse checks accessibility, and a PR is ready for human review. Meanwhile, another agent is updating the events page in a parallel session. A third is running an accessibility audit via an agentic workflow on a schedule.

---

## Decisions Made So Far

| Decision | Choice | Source |
|----------|--------|--------|
| Framework | Next.js 16 static export | Already in repo |
| Styling | Tailwind CSS v4 with `@theme` brand tokens | Already in repo, needs reconfiguration |
| Deployment | GitHub Pages via GitHub Actions | Already in repo |
| Agent instructions | AGENTS.md canonical, thin model-specific layers | FFC pattern + ecosystem research |
| TypeScript | Strict mode | Already in repo |
| Testing | Jest + Playwright | Already in repo |
| CI/CD | Build + test + deploy + smoke test pipeline | Already in repo |
| Accessibility target | WCAG 2.2 AA / 90% Lighthouse | Penn State AD69 + research |
| Content layer | MDX with frontmatter schemas | Ecosystem research |
| Content structure | `/content/` separate from `/src/` | freeCodeCamp + Odin Project patterns |
| FFC attribution | NOTICE file + README credit | Apache 2.0 requirement |

---

## What's Next: Step 2 Research

Now that we know HOW to build (agent patterns, infrastructure, content architecture), we need to know WHAT to build (brand, content, design). Five parallel research tasks:

| Task | What We're Researching | Why |
|------|----------------------|-----|
| A | Penn State brand guidelines + Smeal branding | Colors, fonts, logos -- the visual identity |
| B | Smeal student org site examples | What the bar looks like in practice |
| C | Penn State web accessibility / student org requirements | Any RSO-specific rules or disclaimers |
| D | Wix site full extraction | Every page, image, text from the current site |
| E | Frontend patterns specific to our content needs | Informed by everything above |

This corpus will grow as we add those findings. The synthesis will be updated with design decisions as they're made.

---

## Source Count

| Category | Files | Sources Cited |
|----------|-------|--------------|
| Agent Maintainability | 9 | 25+ (Anthropic, GitHub, Linux Foundation, Google, Cursor, Windsurf, StepSecurity, Datadog, community) |
| FFC Audit | 5 | Direct repo analysis (33 files audited) |
| Frontend | 9 | 20+ (Next.js, Tailwind, W3C, Penn State, WebAIM, Yale, Kanopi, Fireship, DesignCourse) |
| Synthesis | 2 | Cross-references all above |
| **Total** | **25** | **45+ unique sources** |
