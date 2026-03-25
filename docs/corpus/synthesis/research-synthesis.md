# Research Synthesis: Key Findings

> Last updated: 2026-03-24
> Status: Step 1 complete (agent-maintainability + FFC audit + frontend patterns). Step 2 (Penn State/Smeal branding, Wix extraction, site examples) is next.

---

## The Big Picture

We're building a website for the Smeal Student AI Hub, maintained by the Applied AI club at Penn State. The site needs to:
1. Meet Penn State / Smeal visual and accessibility standards
2. Be maintainable by anyone with repo access and an AI coding agent
3. Serve as a lasting educational resource about AI in business

The FFC (Free For Charity) repo we forked gives us excellent infrastructure bones. Our job is to strip the FFC content, keep what they got right, fix what they overengineered, and fill the gaps they missed.

---

## Finding 1: AGENTS.md is the Universal Standard

AGENTS.md is stewarded by the Linux Foundation, adopted by 60k+ repos, and read natively by 25+ tools. It should be our canonical instruction file. CLAUDE.md, GEMINI.md, and copilot-instructions.md should be thin, model-specific layers that reference AGENTS.md.

The FFC repo already does this. We keep the pattern and improve it by eliminating the content duplication across files.

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

The FFC repo covers all six. We keep and adapt.

**Corpus reference:** `agent-maintainability/agents-md-standard.md`, `ffc-audit/instruction-files.md`

---

## Finding 3: The FFC Infrastructure is Genuinely Good

Top patterns to keep:
- Multi-agent instruction architecture
- `.claude/settings.json` bash security boundary
- CI with artifact sharing + E2E sharding
- Post-deploy smoke tests
- Husky hooks on staged files only
- Dependabot grouped minor/patch
- Lighthouse CI on PRs
- Tailwind v4 CSS-first config
- Numbered `.claude/rules/` files
- Conventional commits with commitlint

**Corpus reference:** `ffc-audit/verdict.md`

---

## Finding 4: FFC Overengineered in Predictable Ways

Cut list: rebrand template, CNCF governance, 8 fonts, 400-line SECURITY.md, 600-line CONTRIBUTING.md, 25-checkbox PR template, 4-way E2E sharding, duplicate agent instructions, dependency bloat, inline CI scripts.

**Corpus reference:** `ffc-audit/verdict.md`

---

## Finding 5: Five Gaps to Fill

1. Content validation (test data, not just code)
2. Environment setup validation (`npm run doctor`)
3. Automated changelog from conventional commits
4. Reusable agent task definitions (`.claude/agents/`)
5. Content/code separation (`/content/` directory with MDX)

**Corpus reference:** `ffc-audit/verdict.md`

---

## Finding 6: MDX is the Right Content Layer

MDX lets club members write educational content in Markdown while embedding interactive React components. Content lives in `/content/` separate from `/src/` components. This is the key to agent-maintainability for non-developers.

**Corpus reference:** `frontend/content-architecture.md`

---

## Finding 7: Penn State AD69 Mandates WCAG 2.2 AA

Even though we're on GitHub Pages (not psu.edu), aligning with Penn State's accessibility standards makes us Smeal-ready. The federal ADA mandate for public universities takes effect April 24, 2026. The FFC repo already targets 90% on Lighthouse accessibility -- we keep that bar.

**Corpus reference:** `frontend/accessibility.md`

---

## Finding 8: Tailwind v4 Wipe-and-Replace for Brand Control

`--color-*: initial` in `@theme` wipes all default Tailwind colors. Only brand colors exist. No stray `bg-red-500`. This is how we enforce Penn State/Smeal branding at the CSS level.

**Corpus reference:** `frontend/tailwind-v4-branding.md`

---

## Finding 9: TypeScript Strict Mode is the Biggest Agent Win

Research shows TypeScript strict mode improved AI agent success rate from ~60% to nearly 100% for route-related tasks. The FFC repo already uses strict mode. Non-negotiable.

**Corpus reference:** `agent-maintainability/repo-structure.md`

---

## Finding 10: Academic Site Patterns Point to Clear Taxonomy

Best academic org sites use: consistent resource card formats, structured metadata per resource, clear page taxonomy (about, resources, events, leadership, projects), and content as structured data (not just prose).

**Corpus reference:** `frontend/academic-site-design.md`, `frontend/academic-repo-examples.md`

---

## What's Next

**Step 2 research (not yet started):**
- A: Penn State brand guidelines + Smeal branding (colors, fonts, logos, requirements)
- B: Smeal student org site examples (find, analyze patterns)
- C: Penn State web accessibility / student org website requirements
- D: Wix site full extraction (every page, image, text from current site)
- E: Frontend best practices specific to our content needs

This corpus will grow as we add those findings. The synthesis directory will be updated with design decisions as they're made.
