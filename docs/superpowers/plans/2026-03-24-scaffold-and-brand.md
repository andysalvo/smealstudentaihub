# Smeal Student AI Hub: Scaffold Cleanup and Penn State Branding

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adapt Clarke Moyer's FFC scaffold for Applied AI at Penn State -- keep and credit his infrastructure, configure Penn State/Smeal branding, set up the content layer with MDX, install safety tooling, write agent instructions, and deploy a branded skeleton to GitHub Pages.

**Credit:** Clarke Moyer (@clarkemoyer) built the FFC infrastructure that this project is built on. He is a friend of and advisor to Applied AI. His operational thinking (governance, security, contributing guidelines, CI/CD, issue templates) is preserved and adapted, not stripped. He is credited in NOTICE, CONTRIBUTORS, and README.

**Architecture:** Next.js 16 static export with Tailwind v4 `@theme` brand tokens, MDX content in `/content/` separate from `/src/` components, GitHub Actions CI/CD with safety tooling (Gitleaks, Lighthouse CI, content validation, visual regression), AGENTS.md as canonical agent instruction file.

**Tech Stack:** Next.js 16, React 19, TypeScript (strict), Tailwind CSS v4, MDX via @next/mdx, Playwright, Jest, GitHub Pages, GitHub Actions

**Penn State Brand:** Nittany Navy `#001E44`, Beaver Blue `#1E407C`, Pugh Blue `#96BEE6`, White Out `#FFFFFF`, PA Sky `#009CDE`. Fonts: Roboto + Roboto Slab (Google Fonts). Name: "Applied AI at Penn State" (per AD07).

**Voice Brief Reference:** `~/Documents/GitHub/ai_hub_brain/content/v2/VOICE_BRIEF.md` -- field first AI second, hedging is intentional, sections stand alone, limits are field-native, no conclusions, describe don't instruct.

**Current Site Screenshots:** `docs/corpus/wix-extraction/screenshots/` (5 Learn pages) + `~/Documents/GitHub/ai_hub_brain/screenshots/dan-ives-day/` (14 pages including all 10 modules)

**Research Corpus:** `docs/corpus/` (34 files, 80+ sources)

---

## Phase 1: Adapt Clarke's Scaffold and Configure Branding

### Task 1: Sort and Adapt Clarke's Documentation

Clarke Moyer (@clarkemoyer) built the FFC infrastructure. His operational docs represent real expertise. We sort into three buckets: keep as-is, adapt for Applied AI, and consolidate (merge useful content into fewer files).

**Keep as-is (Clarke's patterns are correct):**

- `CODE_OF_CONDUCT.md` -- Contributor Covenant v2.1, update contact email only
- `GOVERNANCE.md` -- adapt names/roles but keep the lazy consensus model
- `SECURITY.md` -- keep vulnerability reporting, commit signing, severity timelines
- `CONTRIBUTING.md` -- adapt for Applied AI club onboarding, keep AI workflow section
- `TESTING.md` -- adapt commands for our project
- `.github/ISSUE_TEMPLATE/bug_report.md` -- keep
- `.github/ISSUE_TEMPLATE/feature_request.md` -- adapt user types
- `.github/ISSUE_TEMPLATE/documentation.md` -- keep
- `.github/ISSUE_TEMPLATE/config.yml` -- update links
- `.github/PULL_REQUEST_TEMPLATE.md` -- keep, adapt checkboxes

**Adapt (Clarke's structure, our content):**

- `CONTRIBUTORS.md` -- rewrite to credit Clarke as founding infrastructure contributor and advisor
- `README.md` -- rewrite for our project, credit Clarke and FFC
- `LICENSE` -- update copyright to Applied AI at Penn State (keep Apache 2.0)
- `CHANGELOG.md` -- reset for our project
- `.github/ISSUE_TEMPLATE/reviewer-onboarding.md` -- adapt for Applied AI club member onboarding

**Consolidate (merge useful content, remove standalone files):**

- `CODE_QUALITY.md`, `NAMING_CONVENTIONS.md`, `RESPONSIVE_DESIGN.md` -- merge relevant patterns into AGENTS.md
- `DEPLOYMENT.md`, `CLOUDFLARE_SETUP.md` -- merge into README quick start
- `LIGHTHOUSE.md`, `DEPENDABOT.md` -- already documented in CI workflows, remove standalone files
- `TEMPLATE_SETUP_CHECKLIST.md`, `TEMPLATE_USAGE.md` -- served their purpose for our fork, archive

**Remove (FFC-specific, no Applied AI use):**

- `ADOPTERS.md`, `CITATION.cff`, `COMMUNITY_HEALTH_FILES.md`, `COPILOT_AUTOFIX_GUIDE.md`, `EXTERNAL_DEPENDENCIES.md`, `HUBSPOT_INVESTIGATION.md`, `ISSUE_RESOLUTION.md`, `LESSONS_LEARNED.md`, `MAINTAINERS.md`, `MERGE_QUEUE_VERIFICATION.md`, `QUICK_START.md`, `SITE_IMPROVEMENTS.md`, `SUPPORT.md`, `TECHNICAL_DEBT.md`, `THREAT-MODEL.md`, `.requirements-complete`
- `.github/ISSUE_TEMPLATE/rebrand-template.md` -- served its purpose for our fork
- `.github/workflows/nextjs.yml.bak`
- `.github/FUNDING.yml` -- not applicable

- [ ] **Step 1: Remove FFC-only files (no Applied AI value)**

```bash
cd /Users/andysalvo_1/Documents/GitHub/smealstudentaihub
rm ADOPTERS.md CITATION.cff COMMUNITY_HEALTH_FILES.md COPILOT_AUTOFIX_GUIDE.md EXTERNAL_DEPENDENCIES.md HUBSPOT_INVESTIGATION.md ISSUE_RESOLUTION.md LESSONS_LEARNED.md MAINTAINERS.md MERGE_QUEUE_VERIFICATION.md QUICK_START.md SITE_IMPROVEMENTS.md SUPPORT.md TECHNICAL_DEBT.md THREAT-MODEL.md .requirements-complete
rm .github/ISSUE_TEMPLATE/rebrand-template.md
rm .github/workflows/nextjs.yml.bak
rm .github/FUNDING.yml
```

- [ ] **Step 2: Consolidate and remove redundant standalone docs**

```bash
rm CODE_QUALITY.md NAMING_CONVENTIONS.md RESPONSIVE_DESIGN.md DEPLOYMENT.md CLOUDFLARE_SETUP.md LIGHTHOUSE.md DEPENDABOT.md TEMPLATE_SETUP_CHECKLIST.md TEMPLATE_USAGE.md
```

(Useful patterns from these files are already captured in our research corpus at `docs/corpus/ffc-audit/`. Operational details will be in AGENTS.md and README.)

- [ ] **Step 3: Rewrite CONTRIBUTORS.md to credit Clarke**

Write `CONTRIBUTORS.md`:

```markdown
# Contributors

## Infrastructure and Scaffolding

**Clarke Moyer, MBA-ITM, PMP, CISSP-ISSEP** ([@clarkemoyer](https://github.com/clarkemoyer))
Program Manager, Digital Engineering at The Applied Research Laboratory at Penn State University. Smeal Executive DBA program. Founder and Executive Director of [Free For Charity](https://freeforcharity.org) (EIN 46-2471893), a nonprofit that provides IT, business, web, and marketing services to other nonprofits at no cost.

Clarke built the open-source infrastructure that this project is built on. His operational thinking -- governance model, security policies, contributing guidelines, CI/CD pipelines, agent instruction architecture, issue and PR templates, Lighthouse CI, Dependabot configuration, and Husky hooks -- gave this project a foundation that would have taken months to build from scratch.

## Project Lead

**ajs10845** ([@andysalvo](https://github.com/andysalvo))
Programming Lead, Applied AI at Penn State. Research corpus, Penn State/Smeal branding, content architecture, agent instruction design.
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: adapt Clarke Moyer's FFC scaffold for Applied AI

Keep and adapt governance, security, contributing, testing docs.
Credit Clarke as founding infrastructure contributor and advisor.
Remove FFC-only files with no Applied AI value.
Consolidate redundant standalone docs into AGENTS.md and README."
```

---

### Task 2: Remove FFC Pages, Components, and Data

**Files:**

- Delete: `src/app/cookie-policy/`, `src/app/donation-policy/`, `src/app/free-for-charity-donation-policy/`, `src/app/privacy-policy/`, `src/app/terms-of-service/`, `src/app/security-acknowledgements/`, `src/app/vulnerability-disclosure-policy/`
- Delete: `src/app/home-page/index.tsx`
- Delete: `src/components/cookie-consent/`, `src/components/google-tag-manager/`, `src/components/home-page/`, `src/components/ui/TeamMemberCard.tsx`
- Delete: `src/data/team.ts`, `src/data/team/` (all JSON files)
- Modify: `src/app/page.tsx` -- replace with minimal placeholder

- [ ] **Step 1: Delete FFC pages**

```bash
rm -rf src/app/cookie-policy src/app/donation-policy src/app/free-for-charity-donation-policy src/app/privacy-policy src/app/terms-of-service src/app/security-acknowledgements src/app/vulnerability-disclosure-policy
rm -rf src/app/home-page
```

- [ ] **Step 2: Delete FFC components and data**

```bash
rm -rf src/components/cookie-consent src/components/google-tag-manager src/components/home-page
rm src/components/ui/TeamMemberCard.tsx
rm -rf src/data
```

- [ ] **Step 3: Replace page.tsx with placeholder**

Write `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-navy">Smeal Student AI Hub</h1>
      <p className="mt-4 text-lg text-text-muted">
        Coming soon. Maintained by Applied AI at Penn State.
      </p>
    </main>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove FFC pages, components, and data"
```

---

### Task 3: Remove FFC Assets and Add .nojekyll

**Files:**

- Delete: all files in `public/Images/`, `public/Svgs/`, `public/videos/`
- Delete: `public/CNAME`
- Delete: FFC favicons (`public/android-chrome-*.png`, `public/apple-icon.png`, `public/favicon.ico`, `public/icon.png`, `public/web-app-manifest-512x512.png`, `public/site.webmanifest`)
- Create: `public/.nojekyll` (empty file for GitHub Pages)

- [ ] **Step 1: Delete FFC assets**

```bash
rm -rf public/Images public/Svgs public/videos
rm public/CNAME
rm public/android-chrome-192x192.png public/android-chrome-512x512.png public/apple-icon.png public/favicon.ico public/icon.png public/web-app-manifest-512x512.png public/site.webmanifest
```

- [ ] **Step 2: Create .nojekyll**

```bash
touch public/.nojekyll
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove FFC assets, add .nojekyll for GitHub Pages"
```

---

### Task 4: Add Apache 2.0 Attribution (NOTICE file)

**Files:**

- Create: `NOTICE`

- [ ] **Step 1: Write NOTICE file**

Write `NOTICE`:

```
Smeal Student AI Hub
Copyright (c) 2026 Applied AI at Penn State

This project's infrastructure was built by Clarke Moyer
(https://github.com/clarkemoyer) as part of Free For Charity
(https://freeforcharity.org), EIN 46-2471893, licensed under
the Apache License, Version 2.0.

Clarke is a Program Manager at The Applied Research Laboratory
at Penn State University and the Founder/Executive Director of
Free For Charity. His operational thinking -- governance, security,
CI/CD, agent instructions, and project templates -- is the
foundation this project is built on.
```

- [ ] **Step 2: Commit**

```bash
git add NOTICE
git commit -m "docs: add Apache 2.0 NOTICE attributing Free For Charity"
```

---

### Task 5: Configure Penn State Brand Tokens in Tailwind

**Files:**

- Modify: `src/app/globals.css` -- replace FFC brand tokens with Penn State/Smeal palette

- [ ] **Step 1: Replace globals.css**

Write `src/app/globals.css`:

```css
@import 'tailwindcss';

/* Penn State / Smeal brand tokens */
@theme {
  --color-*: initial;

  /* Primary (Smeal-aligned hierarchy) */
  --color-navy: #001e44;
  --color-beaver-blue: #1e407c;
  --color-pugh-blue: #96bee6;
  --color-white: #ffffff;
  --color-pa-sky: #009cde;

  /* Functional */
  --color-text: #2b2e34;
  --color-text-muted: #4b5d73;
  --color-surface: #f2f4f4;
  --color-surface-alt: #ebf4ff;
  --color-border: #d5d7d8;

  /* Semantic */
  --color-link: #005fa9;
  --color-link-hover: #009cde;
  --color-success: #2e7d32;
  --color-warning: #f57c00;
  --color-error: #c62828;

  /* Typography */
  --font-sans: 'Roboto', 'Franklin Gothic Medium', 'Tahoma', 'Helvetica', 'Arial', sans-serif;
  --font-serif: 'Roboto Slab', 'Georgia', 'Times New Roman', serif;

  /* Spacing base */
  --spacing: 4px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}

/* Accessibility: screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Dark mode variant (future use) */
@variant dark (&:where([data-theme="dark"] *));
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no CSS errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "style: configure Penn State/Smeal brand tokens in Tailwind v4"
```

---

### Task 6: Configure Fonts via next/font

**Files:**

- Modify: `src/lib/fonts.ts` -- replace 8 FFC fonts with Roboto + Roboto Slab
- Modify: `src/app/layout.tsx` -- clean up layout, apply new fonts

- [ ] **Step 1: Replace fonts.ts**

Write `src/lib/fonts.ts`:

```ts
import { Roboto, Roboto_Slab } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-roboto',
})

export const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-roboto-slab',
})
```

- [ ] **Step 2: Replace layout.tsx**

Write `src/app/layout.tsx`:

```tsx
import './globals.css'
import { roboto, robotoSlab } from '@/lib/fonts'
import { siteMetadata } from '@/lib/siteMetadata'

export const metadata = siteMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans text-text bg-white antialiased">{children}</body>
    </html>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/fonts.ts src/app/layout.tsx
git commit -m "style: configure Roboto + Roboto Slab fonts for Penn State brand"
```

---

### Task 7: Update Site Metadata

**Files:**

- Modify: `src/lib/siteMetadata.ts` -- replace FFC metadata with Applied AI

- [ ] **Step 1: Replace siteMetadata.ts**

Write `src/lib/siteMetadata.ts`:

```ts
import type { Metadata } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://andysalvo.github.io/smealstudentaihub'),
  title: {
    default: 'Smeal Student AI Hub',
    template: '%s | Smeal Student AI Hub',
  },
  description:
    'A student-built resource for understanding AI in business, school, and professional life. Designed and curated by Applied AI at Penn State.',
  keywords: [
    'AI',
    'artificial intelligence',
    'Penn State',
    'Smeal',
    'business',
    'education',
    'student',
    'Applied AI',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Smeal Student AI Hub',
    title: 'Smeal Student AI Hub',
    description:
      'A student-built resource for understanding AI in business, school, and professional life.',
  },
  icons: {
    icon: `${basePath}/favicon.ico`,
  },
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/siteMetadata.ts
git commit -m "chore: update site metadata for Smeal Student AI Hub"
```

---

### Task 8: Update next.config.ts and package.json

**Files:**

- Modify: `next.config.ts` -- remove FFC remote patterns, set basePath
- Modify: `package.json` -- update name, description, remove unused deps

- [ ] **Step 1: Replace next.config.ts**

Write `next.config.ts`:

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
```

- [ ] **Step 2: Update package.json name and description**

Change `"name": "free-for-charity"` to `"name": "smeal-student-ai-hub"` and update the description.

- [ ] **Step 3: Remove unused dependencies**

```bash
npm uninstall react-icons swiper
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: Clean build, output in `out/` directory.

- [ ] **Step 5: Commit**

```bash
git add next.config.ts package.json package-lock.json
git commit -m "chore: update config for Smeal Student AI Hub, remove unused deps"
```

---

### Task 9: Update Deploy Workflow for Our Repo

**Files:**

- Modify: `.github/workflows/deploy.yml` -- update basePath to `/smealstudentaihub`

- [ ] **Step 1: Update NEXT_PUBLIC_BASE_PATH in deploy.yml**

Find the line `NEXT_PUBLIC_BASE_PATH: /FFC-IN-Footer_Only_Template` and replace with `NEXT_PUBLIC_BASE_PATH: /smealstudentaihub`.

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: update deploy basePath to /smealstudentaihub"
```

---

### Task 10: Delete FFC Tests and Verify Clean State

**Files:**

- Delete: all files in `__tests__/` and `tests/` (FFC-specific tests)

- [ ] **Step 1: Delete FFC tests**

```bash
rm -rf __tests__ tests
```

- [ ] **Step 2: Verify build and lint**

```bash
npm run build && npm run lint
```

Expected: Both pass with no errors.

- [ ] **Step 3: Commit and push**

```bash
git add -A
git commit -m "chore: remove FFC tests, verify clean build"
git push origin main
```

Expected: GitHub Actions CI runs. Deploy workflow deploys branded skeleton to GitHub Pages.

---

## Phase 2: Agent Instructions and Safety Tooling

### Task 11: Write AGENTS.md (Canonical)

**Files:**

- Modify: `AGENTS.md` -- replace FFC content with our canonical agent instructions

- [ ] **Step 1: Write AGENTS.md**

The file must cover the six required areas (per GitHub's 2,500-repo analysis):

1. **Commands** with expected durations
2. **Testing** instructions
3. **Project structure** with version numbers
4. **Code style** with code snippets
5. **Git workflow**
6. **Boundaries** (always do / ask first / never do)

Include: known issues section, architecture tree, Penn State branding rules summary, voice brief reference for content work, content directory structure for MDX.

Reference: `docs/corpus/agent-maintainability/agents-md-standard.md`, `docs/corpus/ffc-audit/instruction-files.md`

- [ ] **Step 2: Commit**

```bash
git add AGENTS.md
git commit -m "docs: write canonical AGENTS.md for Smeal Student AI Hub"
```

---

### Task 12: Write CLAUDE.md (Thin Layer)

**Files:**

- Modify: `CLAUDE.md` -- thin Claude-specific pointer to AGENTS.md

- [ ] **Step 1: Write CLAUDE.md**

Include only Claude-specific items: timeout table, pre-commit checklist, MCP server awareness. Reference AGENTS.md for everything else. Under 100 lines.

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: write thin CLAUDE.md referencing AGENTS.md"
```

---

### Task 13: Update .claude/rules/ and .claude/settings.json

**Files:**

- Modify: `.claude/rules/00-ffc-mission.md` -- replace with Applied AI mission
- Keep: `.claude/rules/01-security.md` -- already correct
- Modify: `.claude/settings.json` -- update command allowlist

- [ ] **Step 1: Replace 00-ffc-mission.md with 00-mission.md**

```bash
mv .claude/rules/00-ffc-mission.md .claude/rules/00-mission.md
```

Write `.claude/rules/00-mission.md` with Applied AI mission, naming conventions ("Applied AI at Penn State"), Penn State trademark rules summary, voice brief reference, and the golden rule: "Don't add features beyond what was asked."

- [ ] **Step 2: Commit**

```bash
git add .claude/rules/ .claude/settings.json
git commit -m "docs: update Claude rules for Applied AI mission"
```

---

### Task 14: Update GitHub Infrastructure

**Files:**

- Modify: `.github/CODEOWNERS` -- update to ajs10845
- Modify: `.github/PULL_REQUEST_TEMPLATE.md` -- trim to 10-12 checkboxes
- Modify: `.github/ISSUE_TEMPLATE/feature_request.md` -- replace FFC user types
- Modify: `.github/ISSUE_TEMPLATE/config.yml` -- update contact links
- Modify: `.github/FUNDING.yml` -- remove or update
- Modify: `CODE_OF_CONDUCT.md` -- keep Contributor Covenant, update contact
- Modify: `CONTRIBUTING.md` -- rewrite for Applied AI club onboarding
- Modify: `GOVERNANCE.md` -- simplify to lightweight student org governance
- Modify: `SECURITY.md` -- trim to vulnerability reporting + commit signing
- Modify: `LICENSE` -- update copyright to Applied AI at Penn State
- Modify: `README.md` -- rewrite for our project

- [ ] **Step 1: Update CODEOWNERS**

```
* @andysalvo
```

- [ ] **Step 2: Trim PR template to 10-12 checkboxes**

Keep: type of change, issue linking, automated testing (lint/build/test), accessibility check, self-review.

- [ ] **Step 3: Update issue templates**

Replace FFC user types with: students, faculty, club members, visitors.

- [ ] **Step 4: Rewrite README.md**

Include: project description, quick start (4 lines), tech stack, Penn State branding note, link to research corpus, FFC attribution, disclaimer.

- [ ] **Step 5: Rewrite CONTRIBUTING.md**

Include: how club members contribute via agents, issue-based workflow, branch naming, commit conventions, CI pipeline overview. Under 200 lines.

- [ ] **Step 6: Simplify GOVERNANCE.md, SECURITY.md, LICENSE**

Governance: lazy consensus, response times, officer roles. Security: vulnerability reporting, severity timelines, commit signing. License: update copyright line.

- [ ] **Step 7: Remove FUNDING.yml**

```bash
rm .github/FUNDING.yml
```

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "docs: rewrite GitHub infrastructure for Applied AI at Penn State"
```

---

### Task 15: Install Safety Tooling

**Files:**

- Create: `scripts/doctor.sh` -- environment validation
- Modify: `package.json` -- add doctor script
- Modify: `.github/workflows/ci.yml` -- add content validation step (future)
- Create: `.gitleaksrc` -- Gitleaks config

- [ ] **Step 1: Create doctor script**

Write `scripts/doctor.sh`:

```bash
#!/bin/bash
echo "Checking prerequisites..."
errors=0

# Node.js
if ! command -v node &> /dev/null; then
  echo "FAIL: Node.js not installed"
  errors=$((errors + 1))
else
  echo "OK: Node.js $(node -v)"
fi

# npm
if ! command -v npm &> /dev/null; then
  echo "FAIL: npm not installed"
  errors=$((errors + 1))
else
  echo "OK: npm $(npm -v)"
fi

# git
if ! command -v git &> /dev/null; then
  echo "FAIL: git not installed"
  errors=$((errors + 1))
else
  echo "OK: git $(git --version | cut -d' ' -f3)"
fi

if [ $errors -gt 0 ]; then
  echo ""
  echo "$errors issue(s) found. Fix them before continuing."
  exit 1
else
  echo ""
  echo "All prerequisites met. Run 'npm install' to get started."
fi
```

```bash
chmod +x scripts/doctor.sh
```

- [ ] **Step 2: Add doctor script to package.json**

Add to scripts: `"doctor": "bash scripts/doctor.sh"`

- [ ] **Step 3: Commit**

```bash
git add scripts/doctor.sh package.json
git commit -m "feat: add npm run doctor for environment validation"
```

---

### Task 16: Push and Verify Deployment

- [ ] **Step 1: Push all changes**

```bash
git push origin main
```

- [ ] **Step 2: Verify GitHub Actions runs**

Check that CI passes (build, lint) and deploy workflow triggers.

- [ ] **Step 3: Verify the deployed site**

Navigate to `https://andysalvo.github.io/smealstudentaihub/` and confirm:

- Page loads with "Smeal Student AI Hub" heading
- Penn State brand colors visible
- Roboto font rendering
- No FFC content anywhere

---

## Phase 3: Content Layer Setup

### Task 17: Install MDX Dependencies

**Files:**

- Modify: `package.json` -- add @next/mdx, @mdx-js/loader, @mdx-js/react, @types/mdx, remark-gfm, rehype-slug
- Modify: `next.config.ts` -- configure MDX

- [ ] **Step 1: Install MDX packages**

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx remark-gfm rehype-slug
```

- [ ] **Step 2: Update next.config.ts**

```ts
import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
```

- [ ] **Step 3: Create mdx-components.tsx at project root**

Write `mdx-components.tsx`:

```tsx
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-serif font-bold text-navy mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-serif font-semibold text-navy mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-serif font-medium text-beaver-blue mt-4 mb-2">{children}</h3>
    ),
    p: ({ children }) => <p className="text-text leading-relaxed mb-4">{children}</p>,
    a: ({ href, children }) => (
      <a href={href} className="text-link hover:text-link-hover underline">
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-pugh-blue pl-4 italic text-text-muted my-4">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
```

- [ ] **Step 4: Verify build with MDX**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add next.config.ts mdx-components.tsx package.json package-lock.json
git commit -m "feat: configure MDX content layer with Penn State-branded components"
```

---

### Task 18: Create Content Directory Structure

**Files:**

- Create: `content/smeal-majors/` -- 10 canonical MDX files
- Create: `content/learn/` -- 4 Learn section pages
- Create: `content/news/` -- news articles

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p content/smeal-majors content/learn content/news
```

- [ ] **Step 2: Copy canonical content as starting point**

```bash
cp ~/Documents/GitHub/ai_hub_brain/canonical/smeal-majors/*.md content/smeal-majors/
```

- [ ] **Step 3: Rename .md to .mdx and add frontmatter to each file**

For each of the 10 files, prepend frontmatter:

```yaml
---
title: 'AI in Accounting'
description: 'How AI supports audits, reporting, tax, and internal controls at scale.'
smealMajor: accounting
difficulty: intermediate
lastUpdated: 2026-03-24
author: ajs10845
---
```

- [ ] **Step 4: Copy voice brief to content directory**

```bash
cp ~/Documents/GitHub/ai_hub_brain/content/v2/VOICE_BRIEF.md content/VOICE_BRIEF.md
```

- [ ] **Step 5: Commit**

```bash
git add content/
git commit -m "feat: create content directory with Smeal major canonical content"
```

---

### Task 19: Copy Module Images

**Files:**

- Create: `public/images/modules/` -- section images for the 10 modules

- [ ] **Step 1: Copy module images**

```bash
mkdir -p public/images/modules
cp ~/Documents/GitHub/ai_hub_brain/modules/images/*.jpg public/images/modules/
```

- [ ] **Step 2: Commit**

```bash
git add public/images/modules/
git commit -m "feat: add module section images from Student AI Hub"
```

---

## Phase 4: Build Core Components and Home Page

### Task 20: Build Header Component

**Files:**

- Modify: `src/components/header/index.tsx` -- Penn State branded nav

- [ ] **Step 1: Write header component**

Navigation items: Home, AI by Smeal Major, AI News, Learn (dropdown), Foundational Sources. Penn State Smeal logo area at top. Mobile hamburger menu. Sticky on scroll.

Follow the current site's nav structure (visible in home.png screenshot).

- [ ] **Step 2: Commit**

```bash
git add src/components/header/
git commit -m "feat: build Penn State branded header with navigation"
```

---

### Task 21: Build Footer Component

**Files:**

- Modify: `src/components/footer/index.tsx` -- three-column fat footer

- [ ] **Step 1: Write footer component**

Three columns on Nittany Navy background:

1. "Applied AI at Penn State" + "Smeal College of Business" + tagline
2. Quick links: Learn, Events, Team, About, Join Us
3. Contact: email, social icons (LinkedIn, Instagram, GitHub)

Bottom bar: copyright + Penn State link + Smeal link + disclaimer: "This is a student organization website and does not represent official Penn State positions."

Follow the current site's footer (visible in home.png screenshot) but modernize.

- [ ] **Step 2: Commit**

```bash
git add src/components/footer/
git commit -m "feat: build three-column footer with Penn State disclaimer"
```

---

### Task 22: Update Layout with Header and Footer

**Files:**

- Modify: `src/app/layout.tsx` -- add Header and Footer

- [ ] **Step 1: Update layout.tsx**

Import Header and Footer. Wrap children with `<main>` between them.

- [ ] **Step 2: Build and verify**

```bash
npm run build && npm run preview
```

Visit localhost:3000. Verify header, footer, and placeholder content render with Penn State branding.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add header and footer to root layout"
```

---

### Task 23: Build Home Page

**Files:**

- Modify: `src/app/page.tsx` -- home page matching current site's structure

- [ ] **Step 1: Write home page**

Match the current site's home page (home.png screenshot):

- Hero banner: "A student-built resource for understanding AI in business, school, and professional life."
- Subtitle: "Designed and curated by Applied AI."
- CTA buttons: "Explore the Student AI Hub" + "View the Process"
- Descriptive text below each button
- Italic mission statement
- Penn State Smeal affiliation in footer area

- [ ] **Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: build home page matching Student AI Hub design"
```

---

### Task 24: Push and Verify Full Deployment

- [ ] **Step 1: Push**

```bash
git push origin main
```

- [ ] **Step 2: Verify deployed site**

Confirm: home page with hero, nav, footer, Penn State branding, all links working. No FFC content anywhere.

---

## Phase 5: ADR and Final Documentation

### Task 25: Write ADR for This Implementation

**Files:**

- Create: `docs/decisions/0004-scaffold-cleanup-and-branding.md`

- [ ] **Step 1: Write ADR**

Document: what was stripped, what was kept, what was configured, Penn State branding decisions, MDX content layer, safety tooling choices.

- [ ] **Step 2: Commit and push**

```bash
git add docs/decisions/
git commit -m "docs: ADR 0004 -- scaffold cleanup and Penn State branding"
git push origin main
```

---

## What Comes Next (Not in This Plan)

After this plan is complete, the site will be a branded skeleton with:

- Clean FFC scaffold with Penn State/Smeal branding
- MDX content layer with 10 Smeal major files
- Agent instructions (AGENTS.md, CLAUDE.md, rules)
- Safety tooling (doctor script, Gitleaks config)
- CI/CD pipeline deploying to GitHub Pages
- Research corpus and ADRs

**Next plans (separate):**

1. Build all content pages (AI by Smeal Major, Learn section, News, About, Foundational Sources)
2. Convert interactive HTML modules to React components
3. Build resource library with filtering
4. Set up Playwright visual regression baselines
5. Set up PR preview deployments
6. Write .claude/agents/ task definitions for common operations
