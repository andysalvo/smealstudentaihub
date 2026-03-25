# Open Source Academic / Student Org Repos Analyzed

> Last updated: 2026-03-24
> Category: frontend
> Confidence: Community (direct repo analysis)

---

## 1. OSSU/computer-science (377k+ stars)

**Source:** [github.com/ossu/computer-science](https://github.com/ossu/computer-science)
**Accessed:** 2026-03-24 | **Method:** WebSearch + WebFetch

### What They Do Well

- Standardized markdown table format for every course: Duration, Effort, Prerequisites, Discussion link
- Clear hierarchical structure: Intro CS -> Core CS -> Advanced CS -> Final Project
- Badges at top for credibility
- Discord links per-course for community
- Explicit prerequisite chains enabling non-linear learning paths
- Clean heading hierarchy (H1 -> H3) without nesting overload

### Applicable Pattern

Use consistent card/table format for resource entries. Every resource: title, category, difficulty, time commitment, link.

---

## 2. TheOdinProject/theodinproject (4.3k stars)

**Source:** [github.com/TheOdinProject/theodinproject](https://github.com/TheOdinProject/theodinproject)
**Accessed:** 2026-03-24 | **Method:** WebSearch + WebFetch

### What They Do Well

- Separation of application code (main repo) from curriculum content (separate `curriculum` repo)
- Contributing guide encouraging community involvement
- Linting for templates, styles, and code
- Modular architecture: app pulls in content from curriculum repo at build time

### Applicable Pattern

If the club grows and content contributors differ from site developers, separate content from code. Use a `/content/` directory or separate repo pulled in at build time.

---

## 3. ai-club-uwmadison/ai-club-website

**Source:** [github.com/ai-club-uwmadison/ai-club-website](https://github.com/ai-club-uwmadison/ai-club-website)
**Accessed:** 2026-03-24 | **Method:** WebSearch

### What They Do Well

- Clear page taxonomy: about, blog, calendar, contact, FAQ, leadership, projects, seminars, study groups
- Blog content in dedicated directory
- Straightforward structure

### What They Don't Do Well

- Vanilla HTML/CSS/JS with no framework, no build step, no component reuse

### Applicable Pattern

Their page taxonomy is solid. Replicate those sections with a component-based architecture.

---

## 4. OSU-AI-Club/OSU-AI-Club.github.io

**Source:** [github.com/OSU-AI-Club/OSU-AI-Club.github.io](https://github.com/OSU-AI-Club/OSU-AI-Club.github.io)
**Accessed:** 2026-03-24 | **Method:** WebSearch

### What They Do Well

- GitHub Pages deployment via `org.github.io` pattern
- Simple, maintainable static site

### Applicable Pattern

Using `org.github.io` naming convention makes GitHub Pages work with zero basePath configuration.

---

## 5. freeCodeCamp/freeCodeCamp (Curriculum Model)

**Source:** [github.com/freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp)
**Accessed:** 2026-03-24 | **Method:** WebSearch

### What They Do Well

- Curriculum as structured data (not just prose)
- Progressive challenge system with clear learning paths
- Community contribution model with clear guidelines
- Separation of concerns: curriculum content, platform code, and infrastructure are distinct

### Applicable Pattern

Treat educational resources as structured data with metadata (difficulty, category, prerequisites), not just a flat list of articles.

---

## Summary: Patterns to Apply

| Pattern | Source | Priority |
|---------|--------|----------|
| Consistent resource card format | OSSU | High |
| Content separated from code | Odin Project | High |
| Structured metadata per resource | freeCodeCamp | High |
| Clear page taxonomy | UW-Madison AI Club | High |
| GitHub Pages with clean domain | OSU AI Club | Medium |
| Community contribution guidelines | Odin Project | Medium |
| Learning path / prerequisite chains | OSSU | Future |
