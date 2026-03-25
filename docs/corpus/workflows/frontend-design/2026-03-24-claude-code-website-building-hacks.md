---
title: "Building Beautiful Websites with Claude Code Is Too Easy"
source: https://www.youtube.com/watch?v=86HM0RUWhCk
speaker: Nate Herk
channel: Nate Herk | AI Automation
duration: 27:51
status: done
tags: [claude-code, web-design, frontend, skills, screenshot-loop, deployment, vercel, github, vibe-coding]
date: 2026-03-24
---

## Key Takeaways

1. **The front-end design skill is the single highest-leverage hack** for making Claude Code output professional-looking websites instead of generic AI-coded ones. It is a publicly available skill file you install with two terminal commands; once installed it persists globally across all projects.

2. **A screenshot loop (via Puppeteer) lets Claude Code self-correct visually.** Claude takes screenshots of what it built, compares them to the reference or its own previous output, and iterates without human feedback. This bridges the gap from ~60% quality to much higher autonomy.

3. **Cloning existing websites as a starting point is far more effective than prompting from scratch.** Capture a full-page screenshot + copy the style/CSS from DevTools, feed both to Claude Code, and it produces a close replica you then rebrand.

4. **Individual component libraries (21st.dev) let you cherry-pick premium UI elements** -- buttons, backgrounds, animations, shaders -- and drop them into your build via a single copy-paste prompt.

5. **The CLAUDE.md file is the system prompt for every session.** It should be concise, define rules, reference brand assets, and evolve throughout the project. Nate shares his web design CLAUDE.md for free in his Skool community.

6. **GitHub + Vercel autodeploy pipeline is the production path.** Push from Claude Code to GitHub, Vercel auto-deploys. Always test on localhost first; only push when explicitly satisfied.

7. **Disable the screenshot loop for animated/dynamic elements.** Screenshots cannot capture animations properly, causing Claude to enter an infinite correction loop thinking it has not matched the reference.

## Detailed Notes

### Setup (0:00 - 1:55)
- Uses VS Code with the Claude Code extension.
- Requires a paid Anthropic subscription (Pro minimum, Max if hitting limits).
- Left side = files/folders, right side = Claude Code agent chat.
- Create a blank project folder to start.

### Hack 0: CLAUDE.md File (1:55 - 3:40)
- Acts as a system prompt read before every Claude Code action.
- Should be concise -- avoid bloating with too much context.
- Contains rules for the project: what to do, what to reference, what the end goal is.
- Nate's web design CLAUDE.md is downloadable free from his Skool community (AI Automation Society, classroom section, Claude Code area).
- You will iterate on the CLAUDE.md throughout the project; it is not a write-once artifact.
- MD = markdown. Uses headers, bold, bullet points so the agent can parse structure.

### Hack 1: Front-End Design Skill (3:40 - 8:01)
- Skills are custom instruction files that Claude Code selectively invokes when relevant.
- The front-end design skill produces modern, professional UI instead of generic AI-generated layouts.
- Installation: two commands (linked in a tweet in the video description, also referenced from Claude Code docs on skills).
- The CLAUDE.md explicitly says: "Always invoke the front-end design skill before writing any front-end code every session no exceptions."
- Demo: With just one sentence ("build me a modern and professional landing page for AI Automation Society") plus brand assets (logo + brand guidelines in a brand_assets folder), the result included: animated hero, logo integration, correct colors/typography, scrolling tech logos marquee, stats section, testimonials, and CTA.
- Brand assets bonus: Create a `brand_assets/` folder containing your logo and a brand guidelines document. Reference them in CLAUDE.md so Claude always uses them. You can also @-mention specific files in the prompt.

### Hack 2: Screenshot Loop (8:01 - 9:44)
- Uses Puppeteer to take screenshots during the build process.
- Claude Code creates a `temporary_screenshots/` folder and takes screenshots at each stage.
- The build flow: write HTML -> start server -> screenshot -> 2-pass screenshot review and polish.
- Setup: Add a "screenshot workflow" section to your CLAUDE.md, mention Puppeteer, and ask Claude Code to set it up.
- Naming convention for screenshots can be improved in the CLAUDE.md to make them human-readable.

### Hack 3: Website Cloning from Inspiration (9:44 - 17:17)
- Inspiration sources: Dribbble, Godly Website, Awwwards (three W's).
- Process for cloning:
  1. Find a reference website you like.
  2. Hit F12 (DevTools), Ctrl+Shift+P, search "screenshot" to capture full-size screenshot of entire page.
  3. Go to Elements > Styles and copy all the CSS/style information.
  4. Give Claude Code the screenshot + style code + instruction to clone.
- Claude Code builds it, then uses the screenshot loop to compare its output against the reference, fixing mismatches in multiple passes.
- After cloning, you rebrand: tell Claude Code to swap in your brand assets (colors, logo, copy).
- Nate demoed cloning a French-language site; Claude automatically translated everything to English while rebranding.
- The clone gets you ~80-90% there as a starting template; you then iterate on details.

### Hack 4: Individual Component Inspiration (17:17 - 21:13)
- Site: 21st.dev -- library of premium website components (buttons, backgrounds, shaders, hero sections, mouse effects, etc.).
- Workflow: Browse components, find one you like, click to copy its code/prompt, paste into Claude Code with instructions on where to place it.
- Example: Copied a "hero waves" animated background and told Claude Code to put it behind the hero text.
- Important caveat: For animated components, tell Claude Code NOT to use the screenshot loop. Animated elements do not render properly in static screenshots, causing Claude to enter an overengineering loop.
- Iteration after component insertion: Nate dictated feedback about the background being too pixelated/distracting, the text being hard to read, wanting a different accent color. Claude Code handled the vague, conversational feedback well.

### Deployment: GitHub + Vercel (21:13 - 27:17)
- Architecture: Claude Code (local) -> GitHub (version control in cloud) -> Vercel (live deployment).
- Steps:
  1. Create a GitHub repository (can be done manually or via Claude Code).
  2. Tell Claude Code to push to that repo. It handles git init, .gitignore, authentication.
  3. Create a Vercel account (easiest if signed up with GitHub credentials).
  4. Import the GitHub repo into Vercel. One-click deploy.
  5. Vercel gives you a .vercel.app subdomain immediately. Custom domain requires DNS configuration.
- Auto-deploy: Every push to GitHub triggers Vercel to redeploy automatically.
- Best practice: Always test changes on localhost first. Only push to GitHub when satisfied. Add this rule to your CLAUDE.md.
- Security note: Be careful not to push API keys, credentials, or sensitive info to public GitHub repos.

### Bypass Permissions Mode
- Nate uses "dangerously skip permissions" in VS Code settings so Claude Code does not pause for approval on every action.
- He acknowledges the risk but says in practice it has never been an issue since he is always watching.

### Skool Community Plug (27:17 - 27:51)
- Free community: AI Automation Society (link in description). CLAUDE.md file available free in classroom.
- Paid community: AI Automation Society Plus. Thousands of members, full course, focus on AI agency/business building.

## Applicable to Us

**What we can steal or adapt:**

1. **CLAUDE.md as a deliverable for clients.** If we are consulting on Claude Code workflows, a well-crafted CLAUDE.md file tailored to a client's brand and project type is a high-value, low-effort deliverable. Nate gives his away free as a lead magnet -- we could create industry-specific ones (law firms, SaaS landing pages, e-commerce) as part of a paid package.

2. **The clone-then-rebrand workflow is a service offering.** "Send me three websites you love, your brand assets, and I will deliver a custom site in 48 hours." This is a concrete, repeatable service that leverages exactly this pipeline. Pricing could be $500-2,000 for a landing page, done in under a day of actual work.

3. **21st.dev + component library curation.** Building a curated library of go-to components for client projects would speed up delivery and create consistency. This is operational infrastructure for an agency.

4. **Screenshot loop as a QA step we can show clients.** "Here is how our AI agent self-reviews its work before we even look at it." This builds trust and justifies the price -- the client sees a systematic process, not just vibes.

5. **GitHub + Vercel pipeline is the standard delivery path.** Every client project should follow this: local dev -> GitHub -> Vercel (or Netlify). We should have this templated so onboarding a new client project takes minutes.

6. **Content format observation.** Nate's video is a straightforward tutorial with live screen recording, no face cam for the coding sections, clear timestamps, and a free-to-paid Skool funnel. This is the exact format we would use for our YouTube content. His channel (AI Automation) is in our competitive space -- he targets the same "build AI businesses" audience.

7. **The "bypass permissions" disclaimer is worth noting.** Nate is transparent about the risk, which builds trust. We should adopt the same honesty-first approach in our content when showing powerful-but-risky features.

8. **Skills as a content topic.** The front-end design skill is clearly high-interest. Creating or curating specialized Claude Code skills (and teaching how to build custom ones) is a content angle with natural product extension (sell premium skill packs).
