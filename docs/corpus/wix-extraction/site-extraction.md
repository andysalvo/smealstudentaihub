# Wix Site Full Extraction

> Last updated: 2026-03-24
> Category: wix-extraction
> Confidence: Direct analysis (Wix site + source repo at ~/Documents/GitHub/ai_hub_brain/)

---

## Site Overview

**Student AI Hub:** https://ajs10845.wixsite.com/student-ai-hub-1 (23 pages)
**Applied AI Club:** https://www.appliedaipsu.com (12 pages)

The Wix site renders content dynamically via JavaScript, making direct scraping impossible. However, the crown jewel content (10 Smeal major modules + 2 news articles) exists as self-contained HTML files in the source repo and is embedded into Wix via iframes. The 6 Wix-native pages (Learn section + Foundational Sources + Process and Provenance) have content only in Wix's CMS.

---

## Navigation Structure

| Nav Item               | URL                       | Type                   |
| ---------------------- | ------------------------- | ---------------------- |
| Home                   | `/`                       | Page                   |
| AI by Smeal Major      | `/ai-by-smeal-major`      | Landing + 10 sub-pages |
| AI News That Matters   | `/ai-news-that-matters`   | Page                   |
| Learn                  | dropdown                  | 4 sub-pages            |
| Foundational Sources   | `/foundational-sources`   | Page                   |
| About                  | `/about`                  | Page (not in top nav)  |
| Process and Provenance | `/process-and-provenance` | Page (not in top nav)  |

---

## The 10 Smeal Major Modules (Crown Jewels)

Each module is a self-contained HTML file with identical architecture:

**Design system:**

- Font: Inter (Google Fonts)
- Primary: Navy #01458F | Hover: #0C5BBF | Background: #F7F9FC | Surface: #FFFFFF | Border: #E3E8F0
- Text: #0B1F3B (primary), #4B5D73 (secondary)
- Border radius: 12px standard, 16px module shell
- Transition: 180ms ease

**Layout:**

- Desktop: Two-column (300px sidebar nav + reading panel)
- Mobile: Stacks vertically (3 breakpoints: 960px, 768px, 480px)
- Left sidebar with expandable sections and nested concepts

**Structure (identical for all 10):**

1. **Where AI Appears** -- 4-5 concepts
2. **What AI Helps With** -- 4-5 concepts
3. **Where AI Falls Short** -- 4 concepts
4. **What to Keep in Mind** -- 4 concepts

**Each concept contains:**

- Kicker label (section name, uppercase)
- Title (bold heading) + navy accent bar
- 3-4 paragraphs of body text
- Section image (16:9, with caption)
- "Key Points" box with 3 numbered bullets

**Accessibility features built-in:**

- ARIA attributes (aria-expanded, aria-pressed, aria-live)
- Keyboard focus visible states
- Screen reader text (.hub-sr class)
- Image onerror fallback

### The 10 Majors

| Major                | Wix URL                 | Source File                                           |
| -------------------- | ----------------------- | ----------------------------------------------------- |
| Accounting           | `/major-accounting`     | `modules/ai-by-smeal-major/accounting.html`           |
| Actuarial Science    | `/copy-of-accounting`   | `modules/ai-by-smeal-major/actuarial-science.html`    |
| Corporate Innovation | `/copy-of-accounting-1` | `modules/ai-by-smeal-major/corporate-innovation.html` |
| Finance              | `/copy-of-accounting-2` | `modules/ai-by-smeal-major/finance.html`              |
| Management           | `/copy-of-accounting-3` | `modules/ai-by-smeal-major/management.html`           |
| MIS                  | `/copy-of-accounting-4` | `modules/ai-by-smeal-major/mis.html`                  |
| Marketing            | `/copy-of-accounting-5` | `modules/ai-by-smeal-major/marketing.html`            |
| Real Estate          | `/copy-of-marketing`    | `modules/ai-by-smeal-major/real-estate.html`          |
| Risk Management      | `/copy-of-accounting-7` | `modules/ai-by-smeal-major/risk-management.html`      |
| Supply Chain         | `/copy-of-accounting-6` | `modules/ai-by-smeal-major/supply-chain.html`         |

---

## News Articles

Two articles in `modules/ai-news-that-matters/`:

1. **"Yann LeCun's AMI Labs Raises $1B to Build AI That Learns From the Physical World"** (March 2026)
   - Topics: AMI Labs seed round, world models vs LLMs, JEPA architecture
   - 4 sources: TechCrunch, MIT Technology Review, SiliconANGLE, Latent Space

2. **"OpenClaw: How a Weekend Project Became the Fastest-Growing Open Source AI Agent in History"** (Nov 2025 - March 2026)
   - Topics: Peter Steinberger, local AI agents, OpenAI acquisition
   - 4 sources: OpenClaw Blog, Fortune, CNBC, MIT Technology Review

**Article format:** Single-column card (max 720px), tag pill, headline, date, lede, body paragraphs, callout boxes (navy left border), sources section.

---

## Wix-Native Pages (Content in Wix CMS Only)

These 6 pages have content only in Wix and cannot be extracted without browser rendering or manual copy:

1. **AI Basics** -- Generated from 22 curated sources via RAG. Now frozen.
2. **How Businesses Are Using AI** -- Same RAG pipeline.
3. **Rules, Risks, and Ethics of AI** -- Same RAG pipeline.
4. **Using AI for School and Work** -- Same RAG pipeline.
5. **Foundational Sources** -- Lists the 22 curated public sources.
6. **Process and Provenance** -- How the Hub was built, sourced, maintained.

**Migration note:** These pages need manual content extraction (copy from browser) or recreation from the original source documents.

---

## Applied AI Club Site (appliedaipsu.com)

12 pages on Wix. Three pillars:

1. **Events and Programming** -- guest speakers, case studies, tool walkthroughs
2. **Applied AI Labs** -- R&D arm, builds real projects
3. **Explore AI** -- curated tool registry (ChatGPT, Claude, Perplexity, OpenClaw, Ollama, Cursor, v0, Codex)

Pages: Home, Explore AI, Ledger, Event List, Our Mission, Labs, About Us, 3 event detail pages, donation thank you.

---

## Home Page Content

- Hero: "A student-built resource for understanding AI in business, school, and professional life."
- Subtext: "Designed and curated by Applied AI."
- CTA: "Explore the Student AI Hub" + "View the Process"
- Footer: Applied AI logo + Penn State Smeal College of Business logo
- Links: appliedaipsu.com + smeal.psu.edu

---

## Key Source Files for Migration

All at `/Users/andysalvo_1/Documents/GitHub/ai_hub_brain/`:

| File/Directory                        | Content                                    |
| ------------------------------------- | ------------------------------------------ |
| `modules/ai-by-smeal-major/*.html`    | 10 interactive HTML modules (crown jewels) |
| `modules/ai-news-that-matters/*.html` | 2 news article modules                     |
| `modules/embeds/*.html`               | 2 embed/promo modules                      |
| `modules/images/*.jpg`                | 40 section images                          |
| `canonical/smeal-majors/*.md`         | 10 canonical markdown content files        |
| `content/*.txt`                       | 10 original student text files             |
| `content/v2/VOICE_BRIEF.md`           | Voice/tone brief                           |
| `content/v2/SOURCE_REGISTRY.md`       | ~120 unique sources                        |
| `screenshots/dan-ives-day/*.png`      | 13 screenshots                             |
| `docs/wix-embed-guide.md`             | Wix embedding instructions                 |

---

## Complete Sitemap (35 pages total)

### Student AI Hub (23 pages)

| #     | Path                                                                                                           | Content Type                           |
| ----- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| 1     | `/`                                                                                                            | Home (Wix native)                      |
| 2     | `/ai-by-smeal-major`                                                                                           | Landing page (Wix native)              |
| 3-12  | `/major-*`                                                                                                     | 10 interactive modules (embedded HTML) |
| 13    | `/ai-news-that-matters`                                                                                        | News articles (embedded HTML)          |
| 14    | `/learn`                                                                                                       | Learn section hub                      |
| 15-18 | `/ai-basics`, `/how-businesses-are-using-ai`, `/rules-risks-and-ethics-of-ai`, `/using-ai-for-school-and-work` | Learn pages (Wix native, RAG content)  |
| 19    | `/foundational-sources`                                                                                        | Source list (Wix native)               |
| 20    | `/about`                                                                                                       | About (Wix native)                     |
| 21    | `/process-and-provenance`                                                                                      | Build process (Wix native)             |
| 22    | `/ai-at-penn-state`                                                                                            | Penn State AI info (Wix native)        |
| 23    | `/ai-tools-you-might-use`                                                                                      | Tool recommendations (Wix native)      |

### Applied AI Club (12 pages)

Home, Explore AI, Ledger, Event List, Our Mission, Labs, About Us, 3 event details, donation thank you, copy page.
