---
title: "7 Techniques That Make Claude Code Websites Look $10,000"
source: https://www.youtube.com/watch?v=jhIV97AZ45M
speaker: Jono Catliff
channel: Jono Catliff
duration: 18:11
status: done
tags: [claude-code, web-design, ui-ux, tailwind, shadcn, gsap, framer-motion, threejs, spline, typography, website-building]
date: 2026-03-25
---

## Key Takeaways

1. **Claude MD file as design director**: Setting a system instruction telling Claude to "behave like a senior UI designer and front-end developer" fundamentally changes the quality of output. One line of context makes the difference.
2. **Clone sites you admire**: Screenshot a real website (e.g., Railway.com), feed it to Claude with a prompt to analyze the HTML/CSS and replicate the design. First-shot results are already strong.
3. **Tailwind CSS + ShadCN UI is the winning stack**: Tailwind handles low-level styling (padding, width, columns), ShadCN provides pre-built reusable component templates (accordions, avatars, buttons). Specify both in your prompts.
4. **Radial gradient backgrounds add instant depth**: Multi-color blurred circles (purple, blue, pink, teal) positioned around the page make minimalist sites feel complete and professional without adding content clutter.
5. **GSAP + Framer Motion for animations**: GSAP handles scroll-triggered entrance animations (elements gliding in). Framer Motion handles micro-interactions (hover effects, button enlargement with 300ms easing). Both can be prompted in a single pass.
6. **3D graphics are the differentiator**: Three.js for code-generated 3D elements and Spline for pre-made 3D assets (free community library). These give a Stripe.com-level premium feel and are Jono's personal favorite technique.
7. **Screenshot-based iteration is the fastest feedback loop**: Instead of describing changes in text, screenshot a specific section and describe what you want changed. Much more effective for visual refinements.

## Detailed Notes

### Technique 1: Claude MD File Instructions (0:36)
- Every Claude Code project should have a `CLAUDE.md` file with behavioral instructions.
- The key paragraph: tell Claude to behave as a "senior UI designer and front-end developer."
- This single framing instruction changes the entire quality tier of output.

### Technique 2: Finding and Cloning Inspiration (1:10)
- **Workflow**: Ask Claude to find beautiful websites, or bring your own reference.
- **Railway.com** used as the example -- genuinely well-designed site.
- **Cloning process**:
  1. Take a screenshot of the target site.
  2. Prompt Claude: "Go to [site].com, analyze the website" -- it detects all HTML, CSS, and structure.
  3. Attach the screenshot so Claude can visually confirm what you see.
  4. Claude clones the entire design in minutes.
- First-shot result was "absolutely beautiful" with the right reference.
- Downloaded and used the site's hero image directly in the clone (noted as a shortcut, not for production).
- **Dribbble.com** recommended as an alternative inspiration source. Search generically (e.g., "website"), browse designs, screenshot favorites to use as references.

### Technique 3: Tailwind CSS + ShadCN UI (3:19)
- **Tailwind CSS**: A CSS framework/library for low-level styling. Handles padding, width, columns, layout fundamentals.
- Quick CSS explainer: showed same website with and without CSS to illustrate the difference.
- **ShadCN UI**: A reusable component template library. Pre-built components include:
  - Accordions
  - Avatars (good for testimonials)
  - Buttons (consistent, reusable)
  - Import directly into any project
- Prompt Claude to "build out the site using Tailwind CSS and ShadCN UI" explicitly.

### Technique 4: Gradient Backgrounds (4:53)
- Moved away from the cloned Railway image to a custom gradient background.
- **Implementation**: Radial gradient with multiple blurred color circles:
  - Purple, blue, pink, and teal circles
  - Positioned around different parts of the page
  - Blurred for a soft, ambient feel
- Adds texture and character to minimalist sites.
- Makes the page feel "busier" and more complete without adding content.
- Works well when scrolling -- the gradient carries through the full page.

### Technique 5: Animations with GSAP + Framer Motion (5:56)
- **Two libraries, two purposes**:
  - **GSAP** (GreenSock Animation Platform): Scroll-triggered entrance animations. Elements "fly in" or "glide in" as you scroll down the page. Applied to text, images, bars, stage sections.
  - **Framer Motion** (motion.dev): Micro-interactions and hover effects. Buttons enlarge on hover, boxes lift slightly on click.
- **Key detail**: Hover animations use a 300-millisecond transition delay for smoothness. Without this, the effect looks "jagged and rough."
- Jono noted these animations are "incredibly difficult" to build manually but take "literally one prompt" with Claude Code.
- Caveat observed: animations can clip subtitles or other page elements -- need to QA and adjust.

### Technique 6: 3D Elements with Three.js + Spline (8:29)
- Jono's favorite technique. "Takes it over the top in terms of professionalism."
- **Three.js**: Code-generated 3D graphics. Used for the CTA section background. Standard prompt yields a default 3D graphic, but you can specify exactly what you want. Many different options available.
- **Spline (spline.design)**:
  - Free account required but free to use.
  - Community tab has pre-made 3D assets.
  - Examples shown: rolling ball that follows cursor, horizontal lines, 3D boxes that track cursor position.
  - **Workflow**:
    1. Browse Spline community for a graphic you like.
    2. "Remix" it (copies to your project).
    3. Edit out unwanted elements (text overlays, logos, extra graphics) -- important to avoid text-on-text layering.
    4. Export as code (generates an embed link).
    5. Paste the Spline link into Claude with prompt: "Please use this spline graphic above the fold for the background."
    6. Claude integrates it into the site.
  - **Refinement needed**: Rough edges where the Spline graphic meets the page. Fix with a gradient overlay that transitions from the graphic's background color to transparent.
  - Compared the result to Stripe.com's homepage aesthetic -- "same vibes."
- Both libraries can coexist: Spline above the fold, Three.js in the CTA section.

### Technique 7: Typography with Google Fonts (13:57)
- **Google Fonts** (fonts.google.com): Free font library with extensive categorization.
- Sorting options: calligraphy, handwriting, informal, formal, upright, and more.
- **Best practice**: Use different fonts for different roles:
  - One font for headers/titles
  - One font for body paragraphs
  - Optionally a third for bullet points or accents
- Two approaches:
  1. Pick a font from Google Fonts yourself and paste the name into Claude.
  2. Ask Claude to choose the best-suited font for your site.
- Jono's observation: Typography is often viewed as unnecessary or minimal, but "it changes the whole entire look and feel of a website." Especially impactful with two distinct fonts for titles vs. body text.
- Easy to swap -- if unhappy, just go back to Google Fonts and replace.

### Technique 8: Screenshot-Based Iteration (16:02)
- Instead of describing visual changes in text, take a screenshot of the specific section you want to modify.
- **Example**: A grid section had only one graphic but Jono wanted a 4x4 layout. Screenshot the section, describe the change ("build out that grid system where there's four by four in a row"), attach the screenshot.
- Claude implemented all eight additional grid items accurately.
- This is the most efficient way to iterate on visual layout after the initial build.

### Closing / CTA (17:15)
- Free masterclass on Claude Code available on YouTube.
- All prompts/blueprints for this video available free in description (Skool community link).
- Paid AI automation community for business automation and client acquisition.
- Agency services (Automatable.co) for done-for-you automation.

## Applicable to Us

**Directly relevant for building the Polylogic AI website (Claude Code consulting agency landing page):**

1. **CLAUDE.md setup**: We should ensure our project has the "senior UI designer and front-end developer" instruction baked in before any design work begins. Simple but high-leverage.

2. **Reference-driven design**: Instead of prompting from scratch, we should pick 2-3 premium agency sites we admire (Stripe, Linear, Vercel-tier quality) and use the screenshot + analyze + clone workflow. This will get us to 80% quality immediately.

3. **Tailwind + ShadCN as our stack**: Confirmed as the standard for AI-built sites. We should specify these explicitly in every design prompt.

4. **Gradient backgrounds**: Easy win for the hero section. Multi-color radial gradients with blur give immediate depth without needing custom artwork. Good for a consulting landing page where we want to convey sophistication.

5. **GSAP scroll animations + Framer Motion hover effects**: The 300ms easing detail is worth noting. Scroll-triggered entrances for sections (services, testimonials, CTA) and hover effects on cards/buttons are table stakes for a premium feel.

6. **Spline 3D graphic above the fold**: This is the biggest differentiator. A subtle, animated 3D element in the hero section would immediately signal "this agency knows what they are doing." The Stripe.com comparison is apt -- that is the tier we should target. Free Spline community assets make this zero-cost.

7. **Typography**: Pick a strong Google Fonts pairing. Two fonts minimum (headers + body). This is a detail most AI-built sites skip, and it is immediately noticeable.

8. **Screenshot iteration for polish**: After the initial build, do a full scroll-through, screenshot every section that needs refinement, and batch-prompt the changes. Faster than trying to describe layout tweaks in prose.

**Specific techniques to steal:**
- Spline embed for hero background (free, high-impact, Stripe-tier aesthetic)
- Gradient-to-transparent overlay to smooth 3D graphic edges
- GSAP entrance animations on service cards and testimonial sections
- Dual-font typography system from Google Fonts
- The clone-a-reference workflow for initial design direction
