# Research Corpus

This directory contains all research that informs the design and architecture of the Smeal Student AI Hub website. Every file tracks its sources with URLs and access dates. Nothing here is invented -- everything is cited.

## How This Corpus Works

**Provenance matters.** Every research file includes:
- Source URLs and titles
- Date accessed
- Confidence level: **Official** (vendor/university docs), **Institutional** (W3C, MDN, etc.), or **Community** (blogs, videos, other orgs)
- Extraction method (WebSearch, WebFetch, manual, etc.)

**This corpus grows.** New research gets added to the right folder. The synthesis directory bridges research to design decisions.

## Directory Structure

```
docs/corpus/
  agent-maintainability/     # How to make repos work with AI coding agents
    claude-code.md           # CLAUDE.md best practices (Anthropic official + community)
    agents-md-standard.md    # AGENTS.md universal standard (Linux Foundation)
    copilot-instructions.md  # GitHub Copilot custom instructions
    cursor-windsurf-gemini.md # Cursor rules, Windsurf rules, GEMINI.md
    ci-cd-guardrails.md      # Protecting repos when agents make changes
    repo-structure.md        # Making codebases agent-friendly

  ffc-audit/                 # What the Free For Charity template got right and wrong
    instruction-files.md     # CLAUDE.md, AGENTS.md, GEMINI.md, rules analysis
    ci-cd-workflows.md       # GitHub Actions, deployment, testing pipeline
    project-infrastructure.md # Issue templates, PR template, CODEOWNERS, hooks
    code-architecture.md     # Next.js setup, Tailwind, TypeScript, components
    verdict.md               # Top 10 keeps, top 10 cuts, top 5 gaps

  frontend/                  # Web design and development best practices
    nextjs-static-export.md  # Next.js 16 static site + GitHub Pages
    academic-site-design.md  # University/academic website patterns
    tailwind-v4-branding.md  # Tailwind CSS v4 design system for branded sites
    accessibility.md         # WCAG 2.2 AA, Penn State AD69 compliance
    content-architecture.md  # MDX, content-heavy site patterns, Pagefind search
    github-pages-domains.md  # GitHub Pages deployment + custom domain path
    academic-repo-examples.md # Open source student org repos analyzed

  synthesis/                 # Where research becomes decisions
    research-synthesis.md    # Key findings across all research
    decisions.md             # Design decisions made, with cited reasoning (TBD)
    open-questions.md        # Things we still need to research (TBD)
```

## Attribution

This project's initial codebase and infrastructure were derived from [Free For Charity](https://github.com/FreeForCharity) (EIN 46-2471893), licensed under Apache 2.0. We are grateful for their open-source work. Our audit of their patterns directly informed the architecture of this project.
