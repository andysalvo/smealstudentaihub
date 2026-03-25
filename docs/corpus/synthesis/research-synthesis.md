# Research Synthesis: Key Findings

> Last updated: 2026-03-24
> Status: Step 1 complete (agent-maintainability + FFC audit + frontend patterns). Step 2 (Penn State/Smeal branding, Wix extraction, site examples) is next.

---

## The Big Picture

We're building a website for the Smeal Student AI Hub, maintained by the Applied AI club at Penn State. The site needs to:
1. Meet Penn State / Smeal visual and accessibility standards
2. Be maintainable by anyone with repo access and an AI coding agent
3. Serve as a lasting educational resource about AI in business

We studied the best patterns across the agent-maintained site ecosystem, audited the FFC (Free For Charity) repo we forked, and now have a clear picture of how it all comes together. FFC gave us strong infrastructure bones. This corpus tells us exactly how to adapt them into an agent-maintained Smeal site.

---

## Finding 1: AGENTS.md is the Universal Standard

AGENTS.md is stewarded by the Linux Foundation, adopted by 60k+ repos, and read natively by 25+ tools. It should be our canonical instruction file. CLAUDE.md, GEMINI.md, and copilot-instructions.md should be thin, model-specific layers that reference AGENTS.md.

The FFC repo already follows this pattern. We keep it and tighten it by consolidating duplicated instructions into a single source of truth in AGENTS.md.

**How we're applying it:** Our AGENTS.md will be purpose-built for a content-driven site -- emphasizing content update workflows, resource formatting, and the `/content/` directory structure so any agent can update the site without needing to touch application code.

**Corpus reference:** `agent-maintainability/agents-md-standard.md`

---

## Finding 2: Six Things Every Agent Instruction File Needs

From GitHub's analysis of 2,500+ repos:
1. Commands (with expected durations)
2. Testing
3. Project structure (with version numbers)
4. Code style (with code snippets, not descriptions)
5. Git workflow
6. Boundaries (always do / ask first / never do)

The FFC repo covers all six. We adapt each one to our context -- a student org content site, not a charity donation platform.

**Corpus reference:** `agent-maintainability/agents-md-standard.md`, `ffc-audit/instruction-files.md`

---

## Finding 3: Strong Infrastructure Foundation from FFC

The FFC repo gave us a genuinely solid starting point. Top patterns we're keeping:
- Multi-agent instruction architecture
- `.claude/settings.json` bash security boundary
- CI with artifact sharing
- Post-deploy smoke tests
- Husky hooks on staged files only
- Dependabot grouped minor/patch
- Lighthouse CI on PRs
- Tailwind v4 CSS-first config
- Numbered `.claude/rules/` files
- Conventional commits with commitlint

We're streamlining where FFC built for a larger team than ours -- simplifying governance docs, trimming font stacks, consolidating CI sharding into a single E2E pass, and moving inline CI scripts into proper files. These are straightforward adaptations, not problems. FFC built for scale; we're right-sizing for a student org.

**Corpus reference:** `ffc-audit/verdict.md`

---

## Finding 4: Five Gaps We're Filling

These are capabilities the ecosystem research showed us we need that FFC didn't include:

1. **Content validation** -- test data integrity, not just code (e.g., validate frontmatter, check for broken links)
2. **Environment setup validation** -- `npm run doctor` so new contributors and agents can self-diagnose
3. **Automated changelog** -- generate from conventional commits so the club always knows what shipped
4. **Reusable agent task definitions** -- `.claude/agents/` with predefined tasks like "add a resource" or "update event listings"
5. **Content/code separation** -- `/content/` directory with MDX so agents and club members edit content without touching `/src/`

**Corpus reference:** `ffc-audit/verdict.md`

---

## Finding 5: MDX is the Right Content Layer

MDX lets club members write educational content in Markdown while embedding interactive React components. Content lives in `/content/` separate from `/src/` components. This is the key to agent-maintainability for non-developers.

**How we're applying it:** The `/content/` directory becomes the primary surface agents work on. A well-structured content directory with clear frontmatter schemas means an agent can add a new resource, event, or page by following a template -- no React knowledge needed.

**Corpus reference:** `frontend/content-architecture.md`

---

## Finding 6: Penn State AD69 Mandates WCAG 2.2 AA

Even though we're on GitHub Pages (not psu.edu), aligning with Penn State's accessibility standards makes us Smeal-ready. The federal ADA mandate for public universities takes effect April 24, 2026. The FFC repo already targets 90% on Lighthouse accessibility -- we keep that bar.

**Corpus reference:** `frontend/accessibility.md`

---

## Finding 7: Tailwind v4 Wipe-and-Replace for Brand Control

`--color-*: initial` in `@theme` wipes all default Tailwind colors. Only brand colors exist. No stray `bg-red-500`. This is how we enforce Penn State/Smeal branding at the CSS level.

**Corpus reference:** `frontend/tailwind-v4-branding.md`

---

## Finding 8: TypeScript Strict Mode is the Biggest Agent Win

Research shows TypeScript strict mode improved AI agent success rate from ~60% to nearly 100% for route-related tasks. The FFC repo already uses strict mode. Non-negotiable.

**Corpus reference:** `agent-maintainability/repo-structure.md`

---

## Finding 9: Academic Site Patterns Point to Clear Taxonomy

Best academic org sites use: consistent resource card formats, structured metadata per resource, clear page taxonomy (about, resources, events, leadership, projects), and content as structured data (not just prose).

**Corpus reference:** `frontend/academic-site-design.md`, `frontend/academic-repo-examples.md`

---

## The Agentic Structure

This corpus isn't just research notes -- it's the foundation for an agent-maintained site. Here's how the findings come together:

**Agent instructions (Findings 1-2):** AGENTS.md becomes the single source of truth, tuned for content operations. Agent task definitions in `.claude/agents/` give any coding agent a menu of predefined workflows -- "add resource," "update event," "check accessibility."

**Infrastructure (Finding 3):** FFC's CI pipeline, security boundaries, and commit hooks give agents guardrails. Lighthouse CI catches accessibility regressions. Commitlint enforces clean history. Husky prevents bad commits from landing.

**Content layer (Findings 4-5):** MDX in `/content/` with validated frontmatter schemas means agents primarily work with structured Markdown, not React components. Content validation in CI catches broken data before it ships.

**Quality gates (Findings 6-8):** Accessibility targets, brand-locked colors, and strict TypeScript all serve the same purpose -- they make it hard for an agent (or a human) to ship something that doesn't meet our standards.

The result: a club member opens an issue like "add the March workshop recording," an agent picks it up, creates the MDX file with proper frontmatter, CI validates it, and a PR is ready for review.

---

## What's Next

**Step 2 research (not yet started):**
- A: Penn State brand guidelines + Smeal branding (colors, fonts, logos, requirements)
- B: Smeal student org site examples (find, analyze patterns)
- C: Penn State web accessibility / student org website requirements
- D: Wix site full extraction (every page, image, text from current site)
- E: Frontend best practices specific to our content needs

This corpus will grow as we add those findings. The synthesis directory will be updated with design decisions as they're made.
