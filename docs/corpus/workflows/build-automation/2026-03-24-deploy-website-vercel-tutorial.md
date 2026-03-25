---
title: "How to Deploy a Website on Vercel"
source: https://www.youtube.com/watch?v=nbNY3cT0dU0
speaker: Tiiny Tips (unnamed presenter)
channel: Tiiny Tips
duration: 2:55
status: done
tags: [vercel, deployment, hosting, web-development, tiiny-host, cli, git, beginner-tutorial]
date: 2026-03-24
---

## Key Takeaways

1. Vercel offers two deployment methods: Git integration (import from GitHub) and the CLI (`vercel` command in project directory).
2. Both Vercel methods require waiting "a few minutes" for deployment to complete — the presenter explicitly contrasts this with faster alternatives.
3. Tiiny.host is positioned as the simpler, faster alternative — upload a zip file, get a live URL in seconds with no CLI or Git knowledge required.
4. The video is essentially a comparison funnel: show the "hard" way (Vercel), then present the sponsor/affiliated product (Tiiny.host) as the easier path.
5. For Vercel CLI deployment, prerequisites are npm installed and `vercel login` completed; after that, just run `vercel` in the project directory and accept all defaults.

## Detailed Notes

### Method 1: Vercel via Git (0:11 - 0:55)

- Log into the Vercel dashboard.
- Click "Import" to pull from a linked GitHub account.
- Select the repository (example used: a JavaScript calculator project).
- Choose a framework preset — for plain HTML/JS, select "Other."
- Click deploy and wait a few minutes.
- Once done, click the preview image to view the live site.

### Method 2: Vercel via CLI (0:55 - 1:56)

- Requires npm installed to run the Vercel CLI.
- Install via npm (command referenced from Vercel docs at vercel.com/docs/cli).
- Run `vercel login` and complete authentication.
- Navigate to the project directory in the terminal.
- Run `vercel` — accept all default prompts (project name, settings, etc.).
- Wait a few minutes for deployment to finish.
- The deployed project appears in the Vercel dashboard with a preview link.

### Method 3: Tiiny.host (1:56 - 2:55)

- Dashboard-based upload: click "Upload" and drag in a zip file containing HTML/CSS/JS.
- To create the zip: select all project files in Finder, right-click, compress.
- Drag the zip into the upload area.
- Optionally use a custom domain or accept the default subdomain (e.g., my-calculator.tiiny.host).
- Click publish — live in seconds, no waiting.
- No CLI, no Git, no terminal knowledge required.

### Production Quality / Format Observations

- Very short video (under 3 minutes) — pure tutorial, no filler.
- Screen recording walkthrough format with voiceover.
- Clear chapter markers in the description (Intro, Vercel with Git, Vercel with CLI, Using Tiiny).
- Resources linked in description (tiiny.host, GitHub repo used, Vercel, Vercel CLI docs).
- The video is a soft comparison/funnel for Tiiny.host — the first two methods are presented honestly but the third is framed as "super quick and super easy" with no downsides mentioned.

## Applicable to Us

**Low relevance overall.** This is a beginner-level deployment tutorial for a very simple use case (static HTML/JS sites). A few minor observations:

- **Format reference for ultra-short tutorials**: Under 3 minutes, chapter-marked, zero filler. If we ever do quick-hit deployment content for Claude Code projects (e.g., "deploy your agent's web dashboard"), this tight format works. But our audience skews power-user, so this would only apply to supplementary shorts.
- **Comparison funnel pattern**: Show the established/complex tool first, then present your preferred solution as simpler. This persuasion structure could be adapted — e.g., showing manual agent setup vs. Claude Code automated setup.
- **Not relevant to consulting/agency positioning**: No pricing discussion, no business model content, no client acquisition angles. Purely a product tutorial.
- **Vercel CLI knowledge is table-stakes**: For deploying any Next.js or React dashboards we build for clients, the `vercel` CLI workflow is standard. Nothing new here, but confirms the default deployment path.
