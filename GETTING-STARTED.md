# Getting Started with the Student AI Hub

You don't need to know how to code to contribute to this site. The repo is set up so that an AI agent (Claude Code) does the technical work while you make the decisions.

## What you need

- Claude Code installed (CLI, desktop app, or VS Code extension)
- This repo cloned to your computer
- A terminal open in the repo folder

## What you can do

### Write a new AI News article

You find 2-3 interesting sources about an AI topic. The agent writes the article, creates the page, adds images, and updates the site.

**What to say:**
> Create a new AI News article about [topic]. Here are my sources: [paste 2-3 URLs]. Use the new-article workflow.

The agent will:
1. Run the scaffolding script to set up the page
2. Read your sources
3. Write the article following our voice brief
4. Add a thumbnail image
5. Verify the site builds

### Add a source to a Learn page

You find a good source that should be referenced on one of the Learn pages (AI Basics, How Businesses Are Using AI, Rules/Risks/Ethics, or Using AI for School and Work).

**What to say:**
> Add this source to the [page name] Learn page: [paste URL]. It's about [brief description].

### Refresh module images

The 10 Smeal major modules each have images pulled from Pexels (free stock photos). You can refresh them anytime.

**What to say:**
> Refresh the module images. or
> Refresh images for the accounting module only.

### Review and improve the site visually

The site has a screenshot-based review workflow. The agent takes screenshots of every page, reviews them, and fixes visual issues.

**What to say:**
> Screenshot every page and tell me what needs work.

### Explore the codebase

If you want to understand how the site works, just ask.

**What to say:**
> Walk me through how this site is built. or
> How do the Smeal major modules work? or
> What does the module viewer component do?

## What you should NOT do

- Don't push directly to the main branch. All changes go through pull requests.
- Don't commit API keys or passwords. The Pexels key stays in .env.local (which is not committed).
- Don't delete files you don't understand. Ask the agent first.

## How to run the site locally

Say this to the agent:
> Start the dev server.

Then open http://localhost:3000 in your browser.

## How to publish changes

Say this to the agent:
> Commit my changes and create a pull request.

The agent will create a branch, commit, push, and open a PR for review.

## Where things are

| What | Where |
|------|-------|
| The live site | https://andysalvo.github.io/smealstudentaihub/ |
| Article pages | src/app/ai-news/ |
| Learn pages | src/app/learn/ |
| Module content | content/smeal-majors-data.json |
| Module images | public/images/modules/ |
| Writing style rules | content/VOICE_BRIEF.md |
| Workflow guides | docs/workflows/ |
| Design research | docs/corpus/workflows/ |

## Questions?

Ask the agent. It has full context on this project and can explain anything.
