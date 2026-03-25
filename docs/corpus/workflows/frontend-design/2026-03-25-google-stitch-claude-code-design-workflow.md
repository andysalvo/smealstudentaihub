---
title: "Claude Code + NEW Google Stitch 2.0 Makes Websites 10X Better"
source: https://www.youtube.com/watch?v=fBXOlNAv0Xc
speaker: Zinho
channel: Zinho Automates
duration: 11:31
status: done
tags: [google-stitch, claude-code, design-systems, mcp, workflow, figma-alternative, vibe-design, landing-pages, dashboards]
date: 2026-03-25
---

## Key Takeaways

1. **Separate design from development.** Claude Code is a back-end brain -- excellent at logic, functionality, and structure -- but weak at visual design. Stitch handles the design side, then you hand the output to Claude Code to build functionality around it.

2. **design.md is the bridge.** Stitch auto-generates a `design.md` file with every design: colors, typography, spacing rules, and component guidelines. Drop it into a project folder once and Claude Code references it for every screen, page, and element going forward.

3. **Two connection methods -- MCP is the power move.** Method 1 (quick): copy the design.md file into your project and tell Claude to follow it (gets ~80% fidelity). Method 2 (full): connect Stitch via MCP server so Claude sees the actual HTML, CSS, screenshots, and design tokens -- not just the markdown interpretation. The gap between these two methods is significant.

4. **Start with a reference, not a blank canvas.** Before touching Stitch, find a design reference (Pinterest, Dribbble, or ask an LLM to research top designs in your niche). Feed that screenshot into Stitch as the visual anchor.

5. **Stitch 2.0 rebuilt on Gemini 3.1 is a major quality jump.** New features: design.md auto-generation, MCP support, ideation mode, voice mode (talk to it and it updates live), and canvas annotation (draw on your design to direct changes).

6. **Consistency across screens is the real win.** The design system ensures dashboard, contact page, settings, etc. all share the same fonts, spacing, and color system. Claude stops guessing because it has explicit rules to follow.

7. **design.md is not pixel-perfect yet.** Fonts don't always transfer exactly, spacing can be slightly off. But it "raises the floor dramatically" -- even at 80% fidelity you are far ahead of Claude Code alone.

## Detailed Notes

### The Core Problem: Claude Code Cannot Design

Zinho's central argument: the biggest mistake people make with Claude Code is asking it to handle both design and development. Claude Code was built for logic and structure, not visual design. The result is functional but visually generic or ugly output. The fix is to split the two concerns across specialized tools.

### What Is Google Stitch 2.0?

- Google's free AI design tool
- Input: a prompt or screenshot; Output: production-quality front-end designs in seconds
- The 2.0 update rebuilt it on Gemini 3.1 -- output quality jumped significantly
- Key new features:
  - **design.md auto-generation**: full design system in one markdown file (colors, typography, spacing, component guidelines)
  - **MCP support**: direct connection to Claude Code
  - **Ideation mode**: Stitch finds design inspiration for you
  - **Voice mode**: speak to it and it updates the design live
  - **Canvas annotation**: draw directly on your design to direct changes (circle an element, write "make this bigger")
- Zinho calls this "vibe design" -- same energy as vibe coding, you describe the vibe and the AI handles execution

### Connection Method 1: design.md File Drop (Quick)

1. Design in Stitch
2. Copy the generated design.md file
3. Drop it into your project folder
4. Tell Claude Code to follow that design system
5. Claude reads the file and applies the design language to everything it builds
6. Gets you roughly 80% of the way -- fast, simple, no setup

### Connection Method 2: Stitch MCP Server (Full Power)

1. Go to Stitch, grab your API key
2. Paste the connection command into Claude Code chat with your API key
3. Claude now sees actual Stitch designs: real HTML, CSS, screenshots, design tokens
4. Key difference: with design.md alone, Claude *interprets* the rules. With MCP, Claude *sees* the actual design. That gap matters for fidelity.

### Demo 1: Interior Design Website ("Mason")

- **Goal**: Clean, elegant, high-end luxury interior design studio landing page
- **Prompt to Stitch**: "Create a landing page for a luxury interior design studio called Mason. Use the style from this screenshot. I want warm tones, editorial layout, and minimal text."
- **What happened**: Stitch built a full design system in ~30 seconds -- warm tones, consistent typography, spacing. It auto-generated the design.md alongside the design.
- **Iteration**: Hit "variant" for multiple design directions. Specific tweaks via natural language ("make the hero text bigger") update live.
- **Handoff to Claude**: Because MCP was connected, Claude already saw the Stitch design. Prompt: "Build a fully functional interior design website using the Stitch design as the foundation. Follow the design system in design MD. Add a portfolio gallery section, a contact form, and a service page."
- **Result**: Claude built functionality (portfolio gallery, contact form, service page) while preserving the luxury aesthetic. Every new section followed the same design language. Completed in under 10 minutes with zero design skills.

### Demo 2: CRM Dashboard ("Pipeline IQ")

- **Goal**: Clean SaaS dashboard -- dark sidebar, clear data hierarchy, modern card layout. Wanted to avoid the typical "spreadsheet thrown against a wall" look that AI dashboards produce.
- **Reference**: Found a clean SaaS dashboard on a design inspiration site
- **Prompt to Stitch**: "Create a CRM dashboard UI called Pipeline IQ. Dark sidebar navigation, clean card-based layout for contact management. Use the structure from this screenshot."
- **Design details**: Consistent icon spacing in sidebar, clear hierarchy, uniform padding on cards, clean typography
- **Canvas annotation demo**: Drew directly on the canvas -- circled an element and wrote "make this bigger." Stitch applied it. No prompting needed, just visual direction.
- **Color scheme swap**: Switched to a lighter version using the same structure, completely different feel. Evaluated which direction fit the brand before writing any functional code.
- **Handoff to Claude**: MCP connection meant Claude already saw everything. Added prompt to build CRM tool with Stitch design as front end. Claude built contact list, search, deal pipeline, activity feed -- all inside the clean dashboard UI.
- **Result**: "A CRM tool that actually looks like something people would pay for. Zero credits spent on the design."

### Side-by-Side Comparison

Zinho showed the same app concept built two ways:
1. Claude Code alone
2. Stitch first, then Claude Code

Functionality was identical. The visual difference was dramatic. The Stitch version had consistent fonts, spacing, and color system across every screen (dashboard, contact page, settings) -- not just one hero screen.

### Honest Assessment of Limitations

- design.md is "not perfect yet" -- emphasis on "yet"
- Fonts sometimes don't transfer exactly
- Spacing can be slightly off
- It's a starting point, not a finished product
- But it raises the floor dramatically -- even at 80% fidelity, miles ahead of Claude alone
- Formula: **design.md for the rules + MCP for the visuals = closest to pixel-perfect**

## Applicable to Us

For building the Polylogic AI website (Claude Code consulting agency landing page):

1. **Adopt the Stitch-first workflow immediately.** This is directly applicable. Use Stitch to design the Polylogic landing page with a premium, high-end feel (similar to the "Mason" interior design demo), then hand off to Claude Code for functionality. The free cost is a major plus.

2. **Create a design.md as the single source of truth.** Even if we don't use Stitch specifically, the concept of a design.md file that codifies colors, typography, spacing, and component rules is worth stealing. Drop it into the project root so every Claude Code prompt inherits the design system. This prevents the visual inconsistency that plagues AI-built sites.

3. **MCP connection is worth setting up.** The jump from 80% fidelity (design.md only) to near-pixel-perfect (MCP) is significant for a consulting agency site where visual polish directly signals competence. Since we already have MCP infrastructure (Figma MCP is in our stack), adding Stitch MCP would be straightforward.

4. **Reference-first design process.** Before prompting anything, collect 3-5 reference sites from top-tier consulting/agency sites. Feed those screenshots into Stitch as the visual anchor. This grounds the output in proven design patterns rather than AI defaults.

5. **The "separate design from development" principle applies to all our builds.** For any client-facing work through Polylogic, this two-tool workflow (visual design tool + Claude Code for logic) should be the standard operating procedure. It is a selling point: we can show clients polished designs before writing functional code.

6. **Canvas annotation for client feedback loops.** The draw-on-the-design feature could be useful for getting client feedback -- they circle what they want changed, we feed it back through Stitch. Low-friction iteration.

7. **Cost advantage is a positioning point.** Stitch is free. Combined with Claude Code, you get a professional design + development workflow at minimal cost. For a consulting agency, this means higher margins on website builds.
