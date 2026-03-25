---
title: "The NEW Nano Banana 2 + Claude Code = $10k Websites"
source: https://www.youtube.com/watch?v=q0TgUtj6vIs
speaker: Nate Herk
channel: Nate Herk | AI Automation
duration: 20:15
status: done
tags: [claude-code, website-building, nano-banana, scroll-animation, vercel, github, freelancing, skills, video-to-website]
date: 2026-03-25
---

## Key Takeaways

1. **Scroll-driven video animation is the core trick**: The entire technique boils down to extracting ~120 frames from a short AI-generated video using ffmpeg, saving them as webp images, and associating each frame with a scroll position. As the user scrolls, the frames play forward/backward like stop-motion. This is what creates the "Apple-style" premium feel.

2. **Two custom Claude Code skills power the workflow**: A modified "front-end design" skill (originally from Anthropic, customized for this use case) and a "video to website" skill (a beefy markdown file that encodes best practices for scroll-driven animated sites). Both are free in his Skool community.

3. **Image generation pipeline**: Use Nano Banana 2 (Google's image model) via fal.ai to generate a start frame and end frame of a product, then use Cling 3.0 (also via fal.ai) to animate between them. Claude helps write the video prompt.

4. **Plan mode before build mode**: Starting Claude Code in "plan mode" produces dramatically better first-iteration results. Claude reads the video, asks clarifying questions, produces a full plan (brand identity, sections, implementation steps), and only then builds.

5. **The deployment pipeline is GitHub + Vercel**: Code is built and tested locally on localhost, pushed to a GitHub repo, then auto-deployed via Vercel. This creates a proper testing/staging/production workflow.

6. **Skills compound over time**: After each build, you feed back what worked and what didn't into the skill markdown file. The skill gets better with every project iteration.

7. **Pricing model for freelancers**: Build demo sites speculatively for a niche, show prospects the live link, charge $5-10k (cheaper than agencies), plus recurring monthly hosting/maintenance revenue.

## Detailed Notes

### Setup Requirements
- VS Code with Claude Code extension (requires paid Anthropic Pro or Max plan)
- Open a fresh project folder
- Install two skills into `.claude/skills/`:
  - Front-end design skill (modified Anthropic official skill)
  - Video to website skill (custom markdown, this is the "secret sauce")
- ffmpeg (Claude Code will auto-install if missing)

### Image/Video Generation Pipeline
- **Tool used**: fal.ai (fast, cheap access to multiple models)
- **Image model**: Nano Banana 2 (Google) at 16x9 aspect ratio
- **Prompt structure for start frame**: "Professional studio grade image of [product]. Against a plain all black background with no shadows, no hands, no reflections."
- **End frame**: Same prompt but with the product in a different state (e.g., blender filled with fruit and juice)
- **Video model**: Cling 3.0 (via fal.ai) -- give it start frame + end frame + descriptive prompt
- **Prompt writing trick**: Give Claude the start and end frame images and ask it to write the video prompt describing the transition. Nate did this for a blender where the lid floats off, fruit drops in, lid returns.
- **Quality note**: Results are not always perfect on first try (his blender video had fruit "magically appearing from nowhere"), but good enough for demos.

### How the Scroll Animation Works (Technical)
- ffmpeg extracts every frame from the video as individual webp images (~100+ frames)
- Each frame is associated with a scroll position on the page
- As the user scrolls down, it cycles through frames sequentially (like a flipbook)
- Scrolling backward reverses the animation
- The black background of the video blends seamlessly with the dark-mode website background
- This is the same technique Apple uses on their product pages

### Claude Code Workflow (Step by Step)
1. Drop video file into the project folder
2. Start in **plan mode** (Claude reads but does not modify files)
3. Prompt: "I just dropped in a video called [filename]. Help me create a one-page product landing page for this product. It should be modern, professional, smooth animations, dark mode, black background blending into the video."
4. Claude asks clarifying questions (product name, brand, content sections)
5. Nate tells it to "create fictional branding" -- Claude invents brand name, tagline, accent colors, fonts
6. Review the plan, make adjustments (e.g., "product video should be right-aligned, right 2/3 of page, text left-aligned")
7. Accept plan, switch to **bypass permissions mode** so Claude runs uninterrupted
8. Claude creates a to-do list and works through it
9. First iteration came back in "a few minutes" -- site was nearly perfect
10. Iterate: Nate noticed feature #2 appeared too late when scrolling. Cleared context (was at 53%), went back to plan mode, described the issue, Claude fixed it quickly.

### Context Management
- Nate clears conversation at 53% context to avoid "context rot"
- Goes back to plan mode for iteration requests
- This is a practical demonstration of context window management

### Deployment Pipeline
- **Local testing**: Claude Code serves site on localhost (e.g., `localhost:51006`)
- **GitHub**: `Claude Code, help me connect to GitHub` -- uses CLI authentication (popup sign-in). Then: "Create a new GitHub repository called [name] and push the codebase."
- **Gotcha -- frames excluded**: The initial push excluded the video frames (they were in .gitignore or grayed out), so the live site had no animation. Fix: tell Claude to include the frames and push again.
- **Vercel**: Import the GitHub repo from the Vercel dashboard. Click deploy. Auto-deploys on every future push.
- **Version control**: Each code change = new commit visible in GitHub. Can roll back deployments in Vercel.
- **Security note**: Be careful not to push API keys or sensitive data to public repos.

### Example Sites Built in the Video
1. **Camera (Vanta One)**: Product spinning around, then X-ray mode revealing internals. Two-video approach (forward + reverse).
2. **Apple Watch**: Watch opening up to expose layers, then folding back. Two separate videos stitched.
3. **Blender (Obsidian Vortex)**: Blender with fruit/juice appearing. Brand: "Obsidian Vortex", tagline: "Annihilate Everything", accent: blood red. Built live in the video.

### Business Model / How to Sell
- Find a niche (e.g., blender companies, local businesses with bad websites)
- Build a speculative demo site in one day using their product category
- Email the link or walk in and show it
- Pitch: "I can build this with your products and copy in 2 days for $5-10k" (cheaper than agencies which charge tens of thousands and take months)
- Add recurring revenue: monthly hosting + maintenance
- As you iterate on the skill, each site gets faster and better to produce

### Tools/Resources Mentioned
- **VS Code** + Claude Code extension (Anthropic Pro or Max subscription)
- **fal.ai** -- for Nano Banana 2 image gen and Cling 3.0 video gen
- **ffmpeg** -- frame extraction (free, Claude auto-installs)
- **GitHub** -- code storage and version control (free)
- **Vercel** -- deployment/hosting (free tier available)
- **Wispr Flow** -- voice-to-text for speaking prompts into Claude Code
- **awwwards.com** (website awards with three Ws) -- inspiration for animations
- **Skool community** -- free tier has the skills, paid "Plus" community has 3,000+ members

## Applicable to Us

This video is directly relevant to building the Polylogic AI website (Claude Code consulting agency landing page):

- **Scroll-driven animation technique is immediately usable**: We could generate a short AI video (e.g., terminal text flowing, code compiling, an agent architecture diagram assembling itself) and use the same frame-extraction + scroll-position technique. This would give the Polylogic site the same premium, Apple-like feel without needing a video player or heavy JavaScript frameworks.

- **The skill-based workflow is our workflow**: Nate's approach of encoding best practices into Claude Code skills and iterating them over time is exactly how we should build the Polylogic site. We could create a "consulting-agency-landing-page" skill that encodes our design language, then refine it through iterations.

- **Dark mode + black background video blending**: This is a strong design pattern for a technical/developer-oriented brand like Polylogic. Terminal output on black background blends perfectly with dark website design. We could have the hero animation be actual terminal footage of Claude Code running.

- **The fal.ai + Cling pipeline for product visuals**: Even though we are not selling a physical product, we could use Nano Banana 2 to generate stylized "before/after" frames (e.g., messy codebase to clean architecture diagram, blank screen to finished dashboard) and animate between them.

- **Plan mode first, then build**: Confirms the workflow we should use -- give Claude Code the design spec/Figma export, have it plan, iterate on the plan, then build.

- **GitHub + Vercel deployment is the standard path**: This is the exact deployment pipeline we should use for the Polylogic site. Simple, free, version-controlled, auto-deploying.

- **Pricing reference point**: Nate positions these animated one-page sites at $5-10k. For a consulting agency, our site serves a different purpose (lead generation, not client deliverable), but this frames the perceived value of scroll-animation landing pages in the market.

- **Mobile optimization is a known gap**: Nate explicitly calls out that the blender site was not yet optimized for mobile. This is something to address from the start in our build.
