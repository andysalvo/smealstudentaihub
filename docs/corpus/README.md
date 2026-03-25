# Research Corpus

This directory contains all research that informs the design and architecture of the Smeal Student AI Hub website. Every file tracks its sources with URLs and access dates. Nothing here is invented -- everything is cited.

**30 research files. 60+ unique sources. Two research phases complete.**

## How This Corpus Works

**Provenance matters.** Every research file includes:

- Source URLs and titles
- Date accessed
- Confidence level: **Official** (vendor/university docs), **Institutional** (W3C, MDN, etc.), or **Community** (blogs, videos, other orgs)
- Extraction method (WebSearch, WebFetch, YouTube transcript, direct repo analysis, etc.)

**This corpus grows.** New research gets added to the right folder. The synthesis directory bridges research to design decisions.

## Start Here

1. **[synthesis/research-synthesis.md](synthesis/research-synthesis.md)** -- Complete findings across all research, 12 key findings, how they connect
2. **[synthesis/open-questions.md](synthesis/open-questions.md)** -- What's been decided, what's still open

## Directory Structure

```
docs/corpus/
  agent-maintainability/        # How to make repos work with AI coding agents (9 files)
    claude-code.md              # CLAUDE.md best practices (Anthropic + community)
    agents-md-standard.md       # AGENTS.md universal standard (Linux Foundation)
    copilot-instructions.md     # GitHub Copilot custom instructions
    cursor-windsurf-gemini.md   # Cursor rules, Windsurf rules, GEMINI.md
    ci-cd-guardrails.md         # Protecting repos when agents make changes
    repo-structure.md           # Making codebases agent-friendly
    github-agentic-workflows.md # GitHub Agentic Workflows (video research)
    copilot-cli-session-history.md # Copilot CLI queryable session history (video)
    vscode-multi-agent-workflows.md # Multi-agent parallel sessions in VS Code (video)

  ffc-audit/                    # Patterns from the Free For Charity template (5 files)
    instruction-files.md        # CLAUDE.md, AGENTS.md, GEMINI.md, rules analysis
    ci-cd-workflows.md          # GitHub Actions, deployment, testing pipeline
    project-infrastructure.md   # Issue templates, PR template, CODEOWNERS, hooks
    code-architecture.md        # Next.js setup, Tailwind, TypeScript, components
    verdict.md                  # 10 patterns to build on, adaptations, 5 extensions

  penn-state-branding/          # Penn State and Smeal brand identity (2 files)
    visual-identity.md          # Colors, fonts, logos -- exact hex values and font stacks
    student-org-requirements.md # Naming rules, trademark, disclaimers, hosting, policies

  site-examples/                # Student org site analysis (1 file)
    smeal-org-sites.md          # 40+ Smeal orgs cataloged, best sites analyzed, competitor AI clubs

  wix-extraction/               # Current site content extraction (1 file)
    site-extraction.md          # Full sitemap, all content, module architecture, source files

  frontend/                     # Web design and development patterns (10 files)
    nextjs-static-export.md     # Next.js 16 static site + GitHub Pages
    academic-site-design.md     # University/academic website patterns
    tailwind-v4-branding.md     # Tailwind CSS v4 design system for branded sites
    accessibility.md            # WCAG 2.2 AA, Penn State AD69 compliance
    content-architecture.md     # MDX, content-heavy site patterns, Pagefind search
    github-pages-domains.md     # GitHub Pages deployment + custom domain path
    academic-repo-examples.md   # Open source student org repos analyzed
    agent-collaborative-design.md # Multi-agent co-design with Paper MCP (video)
    google-stitch-design-tool.md  # Google Stitch design tool (video)
    content-specific-patterns.md  # Patterns for our specific content needs

  synthesis/                    # Where research becomes decisions (2 files)
    research-synthesis.md       # 12 key findings, 5-layer agentic structure
    open-questions.md           # Decisions made, questions remaining
```

## Attribution

This project's initial codebase and infrastructure were derived from [Free For Charity](https://github.com/FreeForCharity) (EIN 46-2471893), licensed under Apache 2.0. We are grateful for their open-source work. Our audit of their patterns directly informed the architecture of this project.
