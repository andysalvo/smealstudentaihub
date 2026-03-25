# Frontend Patterns Specific to Our Content

> Last updated: 2026-03-24
> Category: frontend
> Confidence: Community (multiple sources per pattern)

---

## 1. Resource/Article Page Layout

**Two-column on desktop:** Main content (max-width ~720px) + sticky sidebar table-of-contents. TOC appears at 1200px+, collapses on mobile.

**Metadata strip below title:**

- Difficulty badge (Beginner/Intermediate/Advanced, color-coded)
- Reading time (computed at build time via `reading-time` remark plugin)
- Category/topic tags
- Smeal major(s) the resource maps to
- Last updated date
- Author name

**MDX frontmatter schema:**

```yaml
---
title: 'Intro to AI in Accounting'
description: 'How AI is changing audit and tax workflows'
difficulty: beginner
category: accounting
tags: [automation, audit, llm]
smealMajor: accounting
author: 'Jane Doe'
lastUpdated: 2026-03-15
---
```

**Additional elements:**

- Breadcrumbs: Home > Learn > Accounting > Article Title
- Sticky right sidebar: auto-generated TOC from H2/H3 headings
- "Related resources" at bottom from matching tags
- "Next/Previous" navigation within same category

**Sources:** [Help Scout KB Examples](https://www.helpscout.com/helpu/knowledge-base-examples/), [MDX Frontmatter Guide](https://mdxjs.com/guides/frontmatter/)

---

## 2. Resource Library / Index Page

**Filterable card grid with horizontal filter bar:**

- Content type toggle: All | Articles | Guides | Interactive Modules
- Smeal major filter: 10 majors + General
- Difficulty filter: Beginner | Intermediate | Advanced
- Text search: client-side via `fuse.js`

**Card layout:**

- CSS Grid: `repeat(auto-fill, minmax(300px, 1fr))`
- Each card: title, 2-line description, difficulty badge, category tag, reading time, content type icon
- Hover: subtle elevation change
- Default sort: "Recently Updated" with options for alphabetical and difficulty

**Data source:** All metadata from MDX frontmatter, collected into JSON index at build time.

**Sources:** [Webstacks: 14 Resource Page Examples](https://www.webstacks.com/blog/resource-page)

---

## 3. Interactive Modules

**Preferred: Convert HTML modules to React components in MDX** (not iframes). Since we control the source code, each module becomes a React component imported directly in MDX.

```mdx
import { AccountingModule } from '@/components/modules/AccountingModule'

# AI in Accounting

<AccountingModule />
```

**Fallback:** If a module relies on conflicting CSS/JS, use `<iframe src="/modules/accounting/index.html" sandbox="allow-scripts" />`.

**Presentation pattern:**

- Brief intro paragraph + difficulty badge + completion time
- The interactive module (full-width)
- "What you learned" summary section below
- Link to related resources
- Mobile: 44x44px minimum touch targets (WCAG 2.2 AA)

**Sources:** [MDX.js](https://mdxjs.com/), [Next.js MDX Guide](https://nextjs.org/docs/pages/building-your-application/configuring/mdx)

---

## 4. Events Page

**Static JSON-driven event list + optional Google Calendar embed.**

```json
{
  "title": "AI in Finance Workshop",
  "date": "2026-04-10T18:00:00",
  "location": "Business Building 101",
  "type": "workshop",
  "rsvpLink": "https://forms.gle/..."
}
```

- Upcoming events at top (sorted by date, vertical timeline or cards)
- Past events collapsed below with toggle
- Each card: date (large), title, time, location, type badge, RSVP button
- Optional Google Calendar iframe at bottom

**Sources:** [Next.js Static Exports Guide](https://nextjs.org/docs/app/guides/static-exports)

---

## 5. Team/Leadership Page

**Two-tier card layout:**

**Executive board (top):**

- 3-column grid, 1-column mobile
- Each: 200x200 headshot, name, title, major, grad year, 2-3 sentence bio, LinkedIn icon
- Consistent photo styling (same background, crop ratio)

**Members (below):**

- 4-column compact grid
- 100x100 circle crop, name, role, major

**Data source:** `data/team.json`

**Bottom CTA:** "Join Applied AI" button.

**Sources:** [HubSpot: 15 Best Meet the Team Pages](https://blog.hubspot.com/marketing/creative-agency-team-pages)

---

## 6. About Page

**Five-section narrative scroll:**

1. **Hero + mission statement** -- 1-2 sentences, clear verb-object-audience format
2. **What we do** -- 3-column feature grid with icons (Learn, Build, Connect)
3. **By the numbers** -- stats bar (members, events/semester, majors, resources)
4. **Our story** -- 3-5 bullet timeline, under 150 words, 1-2 photos
5. **Faculty advisor + Smeal affiliation** -- advisor photo/title, Smeal logo

**Bottom CTA:** "Join Applied AI" button.

**Sources:** [WildApricot: Club Website Examples](https://www.wildapricot.com/blog/club-website-examples)

---

## 7. Navigation

**Top nav (sticky):** Home | Learn | Events | Team | About

- "Learn" dropdown mega-menu showing categories by Smeal major
- Mobile: hamburger menu, full-screen overlay
- Theme toggle (sun/moon) at far right

**Breadcrumbs (interior pages):**

- Below top nav, above page title
- Format: `Home > Learn > Finance > Article Title`
- Mobile: back arrow with parent link only

**Left sidebar (Learn section only):**

- 240-280px, lists categories with expandable sub-items
- Active page highlighted with left border accent
- Sticky positioning, collapsible on desktop
- Mobile: hidden, slide-in from left via "Menu" button

**Sources:** [NN/g: Breadcrumb Guidelines](https://www.nngroup.com/articles/breadcrumbs/)

---

## 8. Dark Mode

**Yes, support it.** Implementation for Tailwind v4 + Next.js static export:

```css
@import 'tailwindcss';
@variant dark (&:where([data-theme="dark"] *));
```

Use `next-themes` with `data-theme` attribute (not class). Define light/dark tokens as CSS custom properties. Mandatory `mounted` check to prevent hydration mismatch. `suppressHydrationWarning` on `<html>`.

**Sources:** [Tailwind CSS: Dark Mode Docs](https://tailwindcss.com/docs/dark-mode), [next-themes](https://github.com/pacocoursey/next-themes)

---

## 9. Social Proof / Credibility

Three elements:

1. **Affiliation logo bar** (homepage) -- Penn State shield + Smeal logo + any partners. Grayscale, hover-to-color. 5-8 logos max.
2. **Stats bar** (homepage or About) -- "120+ Members | 10 Smeal Majors | 25+ Events/Year | 50+ AI Resources". Navy background, white text.
3. **Faculty advisor quote** (About page) -- one authentic blockquote with photo/title.

**Sources:** [LogRocket: Social Proof Examples](https://blog.logrocket.com/ux-design/19-social-proof-examples/)

---

## 10. Footer

**Three-column fat footer on Nittany Navy (`#001E44`):**

**Column 1:** Club logo, "Applied AI at Penn State", "Smeal College of Business", tagline
**Column 2:** Quick links (Learn, Events, Team, About, Join Us)
**Column 3:** Email, social icons (LinkedIn, Instagram, GitHub), "Subscribe to updates"

**Bottom bar:** Copyright + "Penn State" linking to psu.edu + "Smeal College" linking to smeal.psu.edu + disclaimer: "This is a student organization website and does not represent official Penn State positions."

**Sources:** [Penn State Student Affairs - Brand Guidelines](https://studentaffairs.psu.edu/student-services/student-org-printing-support/brand-logo-guidelines-student-orgs)

---

## Summary of Pattern Decisions

| Pattern             | Choice                                                          |
| ------------------- | --------------------------------------------------------------- |
| Article pages       | Two-column: content + sticky TOC sidebar                        |
| Resource library    | Filterable card grid, horizontal filter bar, client-side search |
| Interactive modules | React components in MDX (preferred)                             |
| Events              | Static JSON + optional Google Calendar embed                    |
| Team                | Two-tier: exec cards with bios + compact member grid            |
| About               | Five-section narrative scroll                                   |
| Navigation          | Top nav + breadcrumbs + left sidebar (Learn only)               |
| Dark mode           | Yes, via next-themes + Tailwind v4 @variant dark                |
| Social proof        | Logo bar + stats strip + advisor quote                          |
| Footer              | Three-column fat footer with disclaimer                         |
