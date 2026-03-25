# Open Questions

> Last updated: 2026-03-24
> Status: Tracking research gaps and unresolved decisions

---

## Agentic Structure

- [ ] How should we structure AGENTS.md for a site where content updates are the primary agent task?
- [ ] What agent task definitions (.claude/agents/) would be most useful for club members?
- [ ] How do we make the content/ directory structure intuitive enough that an agent can update resources without human guidance?
- [ ] What CI guardrails are needed before we let agents create PRs?

---

## Must Research (Step 2)

### Penn State / Smeal Branding

- [ ] What are the official Penn State brand colors (exact hex/RGB values)?
- [ ] What fonts does Penn State / Smeal use?
- [ ] Are there logo usage rules for student organizations?
- [ ] Does Smeal have its own sub-brand guidelines beyond the university level?
- [ ] Are there required disclaimers for student org websites (e.g., "not officially endorsed by...")?

### Smeal Site Examples

- [ ] What Smeal-affiliated student org websites exist?
- [ ] What design patterns do the best ones use?
- [ ] What do bad ones get wrong?

### Wix Extraction

- [ ] Full sitemap of the current Wix site (ajs10845.wixsite.com/student-ai-hub-1)
- [ ] All text content per page
- [ ] All images and assets
- [ ] The 10 Smeal Major HTML modules -- structure, content, interactivity
- [ ] Any forms, embeds, or dynamic elements

### Penn State Web Requirements

- [ ] Does Penn State have specific web standards for RSO sites?
- [ ] What accessibility audit process exists for student org sites?
- [ ] Are there hosting or domain requirements?

---

## Design Decisions Pending

- [ ] Domain: What custom domain will we use? (appliedaipsu.com subdomain? new domain?)
- [ ] Fonts: Which 2-3 fonts align with Penn State/Smeal brand?
- [ ] Navigation: What pages/sections make up the site? (taxonomy)
- [ ] Content format: MDX with frontmatter vs. JSON data files vs. hybrid?
- [ ] Search: Pagefind or something simpler for v1?
- [ ] Interactive modules: Rebuild the Smeal Major modules or redesign?
- [ ] Icon library: lucide-react or something else?

---

## Technical Decisions Made

- [x] Framework: Next.js 16 static export (already in repo)
- [x] Styling: Tailwind CSS v4 with `@theme` brand tokens (already in repo, needs reconfiguration)
- [x] Deployment: GitHub Pages via GitHub Actions (already in repo)
- [x] Agent instructions: AGENTS.md canonical, thin model-specific layers (pattern from FFC)
- [x] TypeScript: Strict mode (already in repo)
- [x] Testing: Jest + Playwright (already in repo)
- [x] CI/CD: Build + test + deploy + smoke test pipeline (already in repo)
- [x] Accessibility target: WCAG 2.2 AA / 90% Lighthouse (from research)
