# Accessibility: WCAG 2.2 AA + Penn State AD69

> Last updated: 2026-03-24
> Category: frontend
> Confidence: Official (W3C, Penn State policy, federal regulation)

---

## The Legal Landscape

### Federal Mandate (DOJ)

**Source:** [UMN: New ADA Rule Mandates Digital Accessibility](https://umarcomm.umn.edu/blog/2025/01/03/new-ada-rule-mandates-digital-accessibility-compliance)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch

Effective April 24, 2026: All public university digital content must meet WCAG 2.1 Level AA. Applies to websites, mobile apps, digital documents, and online course content. Public entities with 50,000+ persons must comply by April 24, 2026 -- Penn State is well above that threshold.

### Penn State Policy AD69

**Source:** [Penn State Policy AD69](https://policy.psu.edu/policies/ad69)
**Source:** [Penn State Accessibility](https://accessibility.psu.edu/)
**Source:** [Penn State WCAG 2.1 Guidelines](https://accessibility.psu.edu/guidelines/wcag2dot1/)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch + WebFetch

- Mandates compliance with WCAG 2.2 AA (or most up-to-date standard)
- All websites within psu.edu must meet accessibility standards
- Mandatory accessibility training for anyone creating or editing content
- Accessibility audit required before launch

While the Student AI Hub is hosted on GitHub Pages (not psu.edu), aligning with Penn State standards is the right move for credibility and institutional alignment.

---

## Developer Checklist (WCAG 2.2 AA)

**Sources:**
- [WebAIM: WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)
- [W3C: WCAG 2 at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)
- [Yale: WCAG 2 A and AA Checklist (Developers)](https://usability.yale.edu/web-accessibility/articles/wcag2-checklist/developers)
- [Level Access: WCAG 2.2 Checklist (2026)](https://www.levelaccess.com/blog/wcag-2-2-aa-summary-and-checklist-for-website-owners/)
**Accessed:** 2026-03-24 | **Confidence:** Official (W3C) + Institutional | **Method:** WebSearch + WebFetch

### Perceivable

- All images: `alt` text (descriptive) or `alt=""` (decorative)
- Text contrast: minimum 4.5:1 ratio (3:1 for large text 18pt+)
- Non-text elements (icons, borders, focus rings): minimum 3:1 contrast
- No horizontal scrolling at 320px width
- Content survives 200% zoom without loss
- Text spacing adjustable (1.5x line height, 2x paragraph spacing, 0.12x letter spacing, 0.16x word spacing) without breaking layout
- Hover/focus tooltips must be dismissible, hoverable, and persistent

### Operable

- All functionality available via keyboard alone
- No keyboard traps
- Visible focus indicator on every interactive element (focus ring pixels must have 3:1 contrast between focused/unfocused states)
- Click targets minimum 24x24 pixels
- Skip navigation link at top of page
- Descriptive page titles on every page
- At least 2 navigation methods (e.g., nav + search, or nav + sitemap)

### Understandable

- `<html lang="en">` on every page
- Consistent navigation order across pages
- Form errors identified accessibly with suggestions for correction
- Labels on all form inputs

### Robust

- Semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`)
- ARIA live regions for dynamic status messages
- Valid HTML markup

---

## Practical Implementation for Next.js + Tailwind

1. Use the `focus-visible:` Tailwind variant for keyboard-only focus styles
2. Set `outline-offset` and visible ring colors with sufficient contrast
3. Use `@tailwindcss/typography` plugin's `prose` class for readable content blocks
4. Add `role` and `aria-label` attributes to custom interactive components
5. Test with axe DevTools, Lighthouse Accessibility audit, and keyboard-only navigation
6. Include an accessibility statement page linking to Penn State's accessibility resources

---

## Sources

- [WebAIM: WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist) -- accessed 2026-03-24
- [W3C: WCAG 2 at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) -- accessed 2026-03-24
- [Yale: WCAG 2 A and AA Checklist](https://usability.yale.edu/web-accessibility/articles/wcag2-checklist/developers) -- accessed 2026-03-24
- [Penn State Accessibility](https://accessibility.psu.edu/) -- accessed 2026-03-24
- [Penn State WCAG 2.1 Guidelines](https://accessibility.psu.edu/guidelines/wcag2dot1/) -- accessed 2026-03-24
- [Penn State Policy AD69](https://policy.psu.edu/policies/ad69) -- accessed 2026-03-24
- [Level Access: WCAG 2.2 Checklist](https://www.levelaccess.com/blog/wcag-2-2-aa-summary-and-checklist-for-website-owners/) -- accessed 2026-03-24
