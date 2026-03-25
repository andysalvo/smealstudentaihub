# Visual Polish: GSAP & Motion (Framer Motion) in Next.js 16

**Date:** 2026-03-25
**Project:** Smeal Student AI Hub
**Stack:** Next.js 16.0.10 | React 19.2.0 | Tailwind v4 (CSS-based) | Static export (`output: 'export'`)
**Status:** Research complete, ready to implement

---

## TL;DR Recommendation

**Use Motion (formerly Framer Motion) only. Skip GSAP.**

The project already has `framer-motion@^12.23.25` installed. Motion's `whileInView` + `useScroll` covers every animation this site needs. Adding GSAP would double the animation bundle for zero gain on a site like this. GSAP's strength (complex scroll-linked timelines, pin/scrub, SVG morphing) is overkill for card reveals and fade-ins.

**First migration step:** Rename imports from `framer-motion` to `motion/react`. The package was renamed in 2025 but the `framer-motion` npm package still works as a redirect. Moving to the `motion` package directly is cleaner.

---

## 1. GSAP in Next.js 16 -- Full Research

### License (Resolved)

GSAP is **100% free** for all use, including commercial. Webflow acquired GreenSock in fall 2024 and removed all paid tiers. All plugins (ScrollTrigger, SplitText, MorphSVG, etc.) are free. No license concerns for an educational site.

Sources: [GSAP Standard License](https://gsap.com/community/standard-license/), [CSS-Tricks announcement](https://css-tricks.com/gsap-is-now-completely-free-even-for-commercial-use/)

### Installation

```bash
npm install gsap @gsap/react
```

### Setup Pattern for Next.js 16 App Router

GSAP is an imperative DOM library. In Next.js 16 with App Router (server components by default), every component using GSAP must be a client component.

```tsx
'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function FadeInSection({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.fade-item', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: container })

  return <div ref={container}>{children}</div>
}
```

### SSR/Hydration Handling

- `useGSAP` internally uses `useIsomorphicLayoutEffect` -- it runs `useLayoutEffect` on client, falls back to `useEffect` when `window` is undefined. Safe for SSR.
- All GSAP components MUST have `'use client'` at the top.
- For static export (`output: 'export'`), there is no SSR at build time for client components -- they render on the client. No special handling needed beyond `'use client'`.
- **Automatic cleanup:** `useGSAP` creates an internal `gsap.context()` that reverts all animations, ScrollTriggers, and Draggables on unmount. No manual cleanup needed.

### Staggered Card Reveal (ScrollTrigger.batch)

```tsx
'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function CardGrid({ children }: { children: React.ReactNode }) {
  const grid = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.card', grid.current!)

    gsap.set(cards, { y: 30, opacity: 0 })

    ScrollTrigger.batch(cards, {
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        })
      },
      start: 'top 85%',
    })
  }, { scope: grid })

  return <div ref={grid} className="grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>
}
```

### Why NOT to use GSAP for this project

1. **Bundle size:** GSAP core = ~23kb gzipped. ScrollTrigger adds more. Motion is already installed.
2. **Two animation systems = complexity.** Having both GSAP and Motion means two mental models, two cleanup patterns, potential conflicts.
3. **Imperative vs declarative.** GSAP requires refs, class selectors, manual DOM targeting. Motion works declaratively with JSX props. For a student-maintained codebase, declarative wins.
4. **No features this site needs that Motion can't do.** GSAP excels at complex timelines, SVG morphing, canvas animation, scroll-linked scrubbing. This site needs fade-ins, card reveals, and hover effects.

Sources: [GSAP React docs](https://gsap.com/resources/React/), [useGSAP npm](https://www.npmjs.com/package/@gsap/react), [GSAP ScrollTrigger in Next.js guide](https://medium.com/@ccjayanti/guide-to-using-gsap-scrolltrigger-in-next-js-with-usegsap-c48d6011f04a)

---

## 2. Motion (Framer Motion) in Next.js 16 -- Full Research

### Naming and Package Status

- **Framer Motion was renamed to Motion** when it became an independent project in 2025.
- The npm package moved from `framer-motion` to `motion`.
- The import path changed from `"framer-motion"` to `"motion/react"`.
- The `framer-motion` package still works (it re-exports from `motion`) but is considered legacy.
- **The API is identical.** No component or prop changes. Just import path.
- This project has `framer-motion@^12.23.25` installed, which is Motion v12 under the old name.

### Migration (do this first)

```bash
# Option A: Keep framer-motion, just update imports
# Change: import { motion } from "framer-motion"
# To:     import { motion } from "framer-motion"  (still works, no change needed)

# Option B (recommended): Switch to the motion package
npm uninstall framer-motion
npm install motion
# Then update all imports from "framer-motion" to "motion/react"
```

Since the project has zero files currently importing from framer-motion, either approach works. When you start adding animations, just use the `motion/react` import path.

For React Server Components (if ever needed):
```tsx
import * as motion from "motion/react-client"
```

### React 19 Compatibility

Motion v12 fully supports React 19. The React Compiler can auto-memoize animation components. No compatibility issues.

Source: [Motion upgrade guide](https://motion.dev/docs/react-upgrade-guide)

### Core Animation Patterns

#### Fade-in on scroll (whileInView)

```tsx
'use client'

import { motion } from 'motion/react'

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

Key notes:
- `viewport={{ once: true }}` -- animate only the first time the element scrolls into view. Use this for content pages. Repeated animations feel gimmicky.
- `margin: '-50px'` -- triggers slightly before the element enters the viewport, so animations feel proactive rather than reactive.
- The ease curve `[0.16, 1, 0.3, 1]` matches the site's global `cubic-bezier(0.16, 1, 0.3, 1)` timing function.

#### Staggered children

```tsx
'use client'

import { motion } from 'motion/react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function StaggerGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {children}
    </motion.div>
  )
}

// Each child card wraps in:
export function StaggerItem({ children }: { children: React.ReactNode }) {
  return <motion.div variants={itemVariants}>{children}</motion.div>
}
```

#### Card hover lift

```tsx
'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

interface AnimatedCardProps {
  href: string
  children: React.ReactNode
}

export function AnimatedCard({ href, children }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0, 30, 68, 0.08)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={href}
        className="block bg-white p-7 rounded-xl border border-border/60"
      >
        {children}
      </Link>
    </motion.div>
  )
}
```

Note: This replaces the current Tailwind `hover:-translate-y-1 hover:shadow-lg` classes with Motion-controlled hover. The advantage is spring physics and the ability to add `whileTap` for mobile press feedback.

#### Button press feedback

```tsx
'use client'

import { motion } from 'motion/react'

export function PressableButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
```

#### Scroll progress indicator

```tsx
'use client'

import { motion, useScroll } from 'motion/react'

export function ReadingProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-beaver-blue origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
```

### AnimatePresence and Page Transitions

**Important caveat for this project:** Full page transitions with AnimatePresence do NOT work reliably with Next.js App Router. The router unmounts components before exit animations can complete. There are hacks involving "FrozenRouter" wrappers, but they rely on Next.js internals and can break on any update.

**What works instead:**
1. **Component-level mount/unmount animations** (e.g., modal open/close, accordion expand) -- AnimatePresence works perfectly for these.
2. **View Transitions API** -- Next.js 16 has an experimental `viewTransition: true` config flag. It uses the native CSS View Transitions API. Not production-ready yet but worth watching.
3. **Focus on scroll animations** -- for a static content site, scroll-triggered reveals are more impactful than page transitions anyway.

```tsx
'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

// Works: component-level mount/unmount
export function Expandable({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

### Bundle Size Optimization (LazyMotion)

For a static export site, bundle size matters. Motion provides `LazyMotion` to reduce initial load.

```tsx
// src/app/providers.tsx
'use client'

import { LazyMotion, domAnimation } from 'motion/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}
```

```tsx
// src/app/layout.tsx
import { Providers } from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

Then use `m` instead of `motion` for lighter components:

```tsx
'use client'

import * as m from 'motion/react-m'

// m.div instead of motion.div -- smaller per-component cost
export function LightFadeIn({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  )
}
```

**Size impact:**
| Approach | Size (gzipped) |
|----------|---------------|
| Full `motion` component | ~34kb |
| `m` + LazyMotion (domAnimation) | ~4.6kb initial + 15kb lazy |
| `m` + LazyMotion (domMax) | ~4.6kb initial + 25kb lazy |

For this site, `domAnimation` is sufficient. `domMax` adds drag and layout animations, which this site doesn't need.

Sources: [Motion scroll animations](https://motion.dev/docs/react-scroll-animations), [Motion bundle size](https://motion.dev/docs/react-reduce-bundle-size), [Motion LazyMotion](https://motion.dev/docs/react-lazy-motion)

---

## 3. Decision: GSAP vs Motion vs Both

### For this project: Motion only.

| Factor | Motion | GSAP | Winner |
|--------|--------|------|--------|
| Already installed | Yes (`framer-motion@^12`) | No | Motion |
| Bundle size (with features needed) | ~15kb (LazyMotion + domAnimation) | ~23kb (core) + ~8kb (ScrollTrigger) | Motion |
| React integration | Declarative, prop-based | Imperative, ref/selector-based | Motion |
| Scroll-triggered reveals | `whileInView` (Intersection Observer) | `ScrollTrigger` (frame-by-frame) | Motion (simpler, more performant for basic reveals) |
| Hover/tap micro-interactions | `whileHover`, `whileTap` (built-in) | Requires manual event listeners | Motion |
| Staggered animations | `staggerChildren` variant | `stagger` property + `ScrollTrigger.batch` | Tie |
| Student maintainability | High (declarative JSX) | Medium (imperative, cleanup needed) | Motion |
| Static export compat | Full | Full (with `'use client'`) | Tie |
| Complex scroll scrubbing | Limited | Excellent | GSAP |
| SVG morphing | No | Excellent | GSAP |
| Pin sections on scroll | No (hacky) | Excellent | GSAP |

**Bottom line:** GSAP wins when you need scroll-scrubbed timelines, pinned sections, or SVG morphing. This site needs none of those. Motion wins on developer experience, bundle size, and maintainability.

### Can Motion's useInView replace GSAP ScrollTrigger entirely?

**Yes, for this site's needs.** `whileInView` uses the Intersection Observer API, which is:
- More performant than ScrollTrigger's frame-by-frame position tracking
- Lazily initialized (only fires when elements enter viewport)
- Natively supported in all modern browsers
- Simpler API (one prop vs. plugin registration + config object)

What `whileInView` cannot do that ScrollTrigger can:
- Pin elements to viewport during scroll
- Scrub animation progress tied to scroll position (progress bars tied to scroll distance)
- Trigger at precise scroll offsets relative to viewport ("start when element top hits viewport center")
- Batch-trigger multiple elements with shared stagger timing

For this site, these limitations don't matter. The scroll progress bar can be done with Motion's `useScroll` hook (shown in examples above).

Sources: [GSAP vs Motion comparison](https://motion.dev/docs/gsap-vs-motion), [Motion migrate from GSAP](https://motion.dev/docs/migrate-from-gsap-to-motion)

---

## 4. Specific Animations for Each Page Type

### Home Page

**Hero section:**
- Staggered text reveal: heading fades up first, then subtitle, then CTA buttons (0.1s stagger between each)
- Background gradient blob: subtle `useScroll` parallax (moves at 0.3x scroll speed for depth)
- No scroll-jacking, no full-viewport takeover

```tsx
// Hero text stagger
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }}
>
  <motion.p variants={fadeUp} className="text-[11px] ...">Penn State Smeal...</motion.p>
  <motion.h1 variants={fadeUp} className="text-[2.5rem] ...">A student-built resource...</motion.h1>
  <motion.p variants={fadeUp} className="mt-5 ...">Designed and curated...</motion.p>
  <motion.div variants={fadeUp} className="mt-10 flex ...">
    {/* CTA buttons */}
  </motion.div>
</motion.div>

// Where fadeUp is:
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}
```

**Feature cards grid (3-col):**
- Use `StaggerGrid` + `StaggerItem` pattern (from Section 2 above)
- Cards stagger in 0.1s apart when grid scrolls into view
- Replace current Tailwind `hover:-translate-y-1` with Motion `whileHover={{ y: -4 }}` for spring physics
- Add `whileTap={{ scale: 0.98 }}` for mobile press feedback

**Mission/About teaser:**
- Simple `FadeIn` wrapper with `delay={0}` -- no need for complexity here

### Learn Pages (two-column layouts with SourceCards)

**Section headings:**
- `FadeIn` wrapper, `delay={0}`

**SourceCard grid:**
- Wrap in `StaggerGrid` with `staggerChildren: 0.08` (faster stagger since there are many cards)
- Each `SourceCard` gets `whileHover={{ y: -2, borderColor: 'rgba(30, 64, 124, 0.4)' }}` for a subtle lift
- `viewport={{ once: true }}` -- content pages should not re-animate on scroll back

**YouTube embeds:**
- `FadeIn` with a slightly longer `delay={0.2}` so they appear after surrounding text
- Consider a loading skeleton that fades out when the iframe loads

**Two-column layout containers:**
- Left column (text): `FadeIn` with default settings
- Right column (sources): `FadeIn` with `delay={0.15}` so it follows the text slightly

### Module Viewer (sidebar + reading panel)

**Sidebar navigation:**
- No scroll animations (it's always visible)
- Active module indicator: use `motion.div` with `layoutId="activeModule"` for smooth indicator sliding between items (Motion's layout animation)

```tsx
// Sidebar active indicator
{modules.map((mod) => (
  <button key={mod.slug} onClick={() => setActive(mod.slug)} className="relative px-4 py-2">
    {active === mod.slug && (
      <motion.div
        layoutId="activeModule"
        className="absolute inset-0 bg-surface-alt rounded-lg"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    )}
    <span className="relative z-10">{mod.title}</span>
  </button>
))}
```

**Reading panel content:**
- `AnimatePresence mode="wait"` for content switching between modules
- New module content fades in from `opacity: 0, x: 10` (slight rightward slide)
- Exiting content fades out to `opacity: 0, x: -10`

### AI News (article cards + detail pages)

**Article card grid:**
- Same `StaggerGrid` pattern as home page cards
- `whileHover` lift effect on each card
- Consider a "NEW" badge that pulses subtly using `animate={{ scale: [1, 1.05, 1] }}` with `repeat: Infinity`

**Article detail pages:**
- Hero image/header: `FadeIn` with no delay
- Body paragraphs: no animation (reading content should not animate; it's distracting)
- Pull quotes or callout boxes: `FadeIn` with `y: 10` (subtle, not dramatic)
- Related articles section at bottom: `StaggerGrid` with 3 cards

### Foundational Sources (data table)

**Table rows:**
- Do NOT animate individual rows in a data table. It looks broken and slows comprehension.
- Instead: fade in the entire table as one unit using `FadeIn`
- Add hover state to rows using CSS (`hover:bg-surface-alt`) -- Motion is overkill for table row highlights
- If the table has a search/filter, use `AnimatePresence` for smooth row add/remove when filtering

**Table header:**
- No animation. Headers should be immediately visible.

---

## 5. What to Install

```bash
# If switching from framer-motion to motion package (recommended)
npm uninstall framer-motion
npm install motion

# If keeping framer-motion (still works, same code)
# No install needed -- already at ^12.23.25
```

**Do NOT install:**
- `gsap` -- not needed for this site
- `@gsap/react` -- not needed
- `tailwindcss-motion` -- the Tailwind Motion plugin is CSS-only animations, overlaps with what Motion does better
- `react-spring` -- older, Motion supersedes it
- `auto-animate` -- too opinionated, limited control

## 6. Implementation Order

1. **Create `src/components/motion/` directory** with reusable animation wrappers:
   - `FadeIn.tsx` -- single element fade + slide up on scroll
   - `StaggerGrid.tsx` + `StaggerItem.tsx` -- grid container with staggered children
   - `AnimatedCard.tsx` -- card with hover lift and tap feedback
   - `ReadingProgress.tsx` -- scroll progress bar

2. **Set up LazyMotion provider** in `src/app/providers.tsx` and wrap in `layout.tsx`

3. **Home page** -- wrap hero in stagger variants, wrap card grid in StaggerGrid

4. **Learn pages** -- wrap SourceCard grids in StaggerGrid

5. **Module viewer** -- add `layoutId` active indicator to sidebar

6. **AI News** -- wrap article cards in StaggerGrid

7. **Foundational Sources** -- wrap table in single FadeIn

## 7. What NOT to Do (Common Mistakes)

1. **Do not animate reading content.** Body text, paragraphs, list items in learn pages -- these should appear instantly. Animating reading content is hostile UX. Only animate structural elements (headings, cards, section transitions).

2. **Do not use `viewport={{ once: false }}`.** Re-triggering animations on scroll-back looks amateurish on content sites. Always use `once: true` for content reveal animations.

3. **Do not fight Tailwind's transitions.** The site has `* { transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }` globally. Motion's animations bypass CSS transitions (they use inline styles/transforms). This is fine -- they coexist. But do not add Motion hover effects AND Tailwind hover classes to the same element (e.g., both `whileHover={{ y: -4 }}` and `hover:-translate-y-1`). Pick one system per element.

4. **Do not use Motion for simple color transitions.** Tailwind's `hover:text-beaver-blue transition-colors` is lighter and faster than Motion for simple color/border changes. Use Motion only when you need spring physics, y-axis movement, or scale.

5. **Do not import `motion` in server components.** Every file using Motion components needs `'use client'`. Create wrapper components in `src/components/motion/` and import those into server component pages.

6. **Do not skip `viewport={{ once: true }}` and then wonder why Lighthouse scores drop.** Repeated IntersectionObserver callbacks on scroll-back eat performance on mobile.

7. **Do not add page transitions with AnimatePresence + App Router.** It requires hacking Next.js internals (FrozenRouter pattern) and breaks on updates. Wait for the native View Transitions API to stabilize in Next.js.

8. **Do not over-animate.** The site's current design is clean and functional. The goal is 3-5 animation types applied consistently, not 15 different effects. Fewer, better.

---

## Sources

- [GSAP React Integration Guide](https://gsap.com/resources/React/)
- [useGSAP npm package](https://www.npmjs.com/package/@gsap/react)
- [GSAP Standard License (free)](https://gsap.com/community/standard-license/)
- [GSAP is Now Completely Free -- CSS-Tricks](https://css-tricks.com/gsap-is-now-completely-free-even-for-commercial-use/)
- [Motion (Framer Motion) Upgrade Guide](https://motion.dev/docs/react-upgrade-guide)
- [Motion Scroll Animations Docs](https://motion.dev/docs/react-scroll-animations)
- [Motion Scroll-Triggered Examples](https://motion.dev/examples/react-scroll-triggered)
- [Motion Reduce Bundle Size (LazyMotion)](https://motion.dev/docs/react-reduce-bundle-size)
- [Motion LazyMotion Docs](https://motion.dev/docs/react-lazy-motion)
- [GSAP vs Motion Comparison](https://motion.dev/docs/gsap-vs-motion)
- [Migrate from GSAP to Motion](https://motion.dev/docs/migrate-from-gsap-to-motion)
- [Framer Motion + Tailwind Guide](https://dev.to/manukumar07/framer-motion-tailwind-the-2025-animation-stack-1801)
- [Motion Component Hover Effects -- Aceternity](https://www.aceternity.com/components/hover-effect)
- [Next.js viewTransition Config](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition)
- [Next.js App Router Page Transitions Discussion](https://github.com/vercel/next.js/discussions/42658)
- [Comparing React Animation Libraries 2026 -- LogRocket](https://blog.logrocket.com/best-react-animation-libraries/)
- [framer-motion vs gsap 2026 -- devpick](https://devpick.co/framer-motion-vs-gsap)
- [GSAP ScrollTrigger in Next.js Guide](https://medium.com/@ccjayanti/guide-to-using-gsap-scrolltrigger-in-next-js-with-usegsap-c48d6011f04a)
- [GSAP ScrollTrigger.batch CodePen](https://codepen.io/GreenSock/pen/GRjWxaJ)
