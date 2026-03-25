#!/usr/bin/env node

/**
 * new-article.js
 *
 * Scaffolds a new AI News article for the Smeal Student AI Hub.
 *
 * Usage:
 *   node scripts/new-article.js --slug="deepseek-r2" --title="DeepSeek Releases R2" --date="April 2026"
 *
 * What it does:
 *   1. Creates src/app/ai-news/{slug}/page.tsx from the article template
 *   2. Fetches a thumbnail from Pexels (needs PEXELS_API_KEY in .env.local)
 *   3. Saves thumbnail to public/images/site/{slug}-thumb.jpg
 *   4. Adds an article card to the top of src/app/ai-news/page.tsx
 *   5. Prints next steps for the agent
 *
 * Setup:
 *   1. Get a free Pexels API key at https://www.pexels.com/api/
 *   2. Add to .env.local: PEXELS_API_KEY=your_key_here
 */

const fs = require('fs')
const path = require('path')
const https = require('https')

// ── Parse args ──────────────────────────────────────────────────────
const args = process.argv.slice(2)

function getArg(name) {
  const arg = args.find((a) => a.startsWith(`--${name}=`))
  if (!arg) return null
  return arg.split('=').slice(1).join('=').replace(/^["']|["']$/g, '')
}

const slug = getArg('slug')
const title = getArg('title')
const date = getArg('date')

if (!slug || !title || !date) {
  console.error('Usage: node scripts/new-article.js --slug="my-slug" --title="Article Title" --date="April 2026"')
  console.error('')
  console.error('All three flags are required:')
  console.error('  --slug     URL-safe name (e.g. "deepseek-r2")')
  console.error('  --title    Full article title')
  console.error('  --date     Date label (e.g. "April 2026", "March to April 2026")')
  process.exit(1)
}

// ── Paths ───────────────────────────────────────────────────────────
const ROOT = path.join(__dirname, '..')
const ARTICLE_DIR = path.join(ROOT, 'src', 'app', 'ai-news', slug)
const ARTICLE_PATH = path.join(ARTICLE_DIR, 'page.tsx')
const LISTING_PATH = path.join(ROOT, 'src', 'app', 'ai-news', 'page.tsx')
const IMAGE_DIR = path.join(ROOT, 'public', 'images', 'site')
const IMAGE_PATH = path.join(IMAGE_DIR, `${slug}-thumb.jpg`)

// ── Check for conflicts ─────────────────────────────────────────────
if (fs.existsSync(ARTICLE_DIR)) {
  console.error(`Article directory already exists: src/app/ai-news/${slug}/`)
  console.error('Pick a different slug or delete the existing directory first.')
  process.exit(1)
}

// ── Load Pexels API key ─────────────────────────────────────────────
function loadApiKey() {
  const envPath = path.join(ROOT, '.env.local')
  if (!fs.existsSync(envPath)) {
    return null
  }
  const env = fs.readFileSync(envPath, 'utf-8')
  const match = env.match(/PEXELS_API_KEY=(.+)/)
  if (!match || !match[1].trim()) {
    return null
  }
  return match[1].trim()
}

// ── Pexels search ───────────────────────────────────────────────────
function searchPexels(query, apiKey) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&size=medium`
    const req = https.request(url, { headers: { Authorization: apiKey } }, (res) => {
      let body = ''
      res.on('data', (chunk) => (body += chunk))
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Pexels API ${res.statusCode}: ${body.slice(0, 200)}`))
          return
        }
        try {
          const data = JSON.parse(body)
          if (data.photos && data.photos.length > 0) {
            resolve(data.photos[0].src.landscape || data.photos[0].src.large)
          } else {
            resolve(null)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
    req.on('error', reject)
    req.end()
  })
}

// ── Download image ──────────────────────────────────────────────────
function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const follow = (url) => {
      https.get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          follow(res.headers.location)
          return
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Download failed: ${res.statusCode}`))
          return
        }
        const file = fs.createWriteStream(destPath)
        res.pipe(file)
        file.on('finish', () => {
          file.close()
          resolve()
        })
        file.on('error', reject)
      }).on('error', reject)
    }
    follow(url)
  })
}

// ── Escape title for JSX ────────────────────────────────────────────
function escapeJsx(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/'/g, "&apos;")
    .replace(/"/g, '&quot;')
}

// ── Convert slug to PascalCase function name ────────────────────────
function slugToFunctionName(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

// ── Article page template ───────────────────────────────────────────
function articleTemplate(slug, title, date) {
  const funcName = slugToFunctionName(slug)
  const jsxTitle = escapeJsx(title)

  return `import Link from 'next/link'
import { ReadingProgress } from '@/components/ui/ReadingProgress'

export default function ${funcName}() {
  return (
    <div className="pt-14">
      <ReadingProgress />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/40 to-white" />
        <div className="relative max-w-[65ch] mx-auto px-6 py-24 md:py-32">
          <Link
            href="/ai-news"
            className="text-xs text-beaver-blue hover:text-navy transition-colors duration-300"
          >
            &larr; AI News
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-beaver-blue/70">
            ${date}
          </p>
          <h1 className="mt-2 text-2xl md:text-3xl font-display font-bold tracking-tight text-navy leading-tight">
            ${jsxTitle}
          </h1>
          <p className="mt-4 text-base text-text-muted leading-relaxed">
            {/* AGENT: Write a 1-2 sentence lede. Hook the reader. See content/VOICE_BRIEF.md. */}
            TODO: Write the lede here.
          </p>
        </div>
      </section>

      <section className="max-w-[65ch] mx-auto px-6 py-12 pb-24">
        <div className="space-y-5 text-[15px] text-text-muted leading-relaxed">
          <p>
            {/* AGENT: Opening paragraph. Set context: who, what, when. 3-4 sentences. */}
            TODO: Write the opening paragraph.
          </p>

          <p>
            {/* AGENT: Second paragraph. Go deeper on the "what" or "how." */}
            TODO: Write the second paragraph.
          </p>

          <div className="my-8 p-6 bg-surface-alt rounded-xl border-l-3 border-l-beaver-blue">
            <p>
              <strong className="text-navy">
                {/* AGENT: Callout box title, e.g. "What is X?" or "How does this work?" */}
                TODO: Callout title.
              </strong>{' '}
              {/* AGENT: 2-4 sentences explaining a key concept readers need. */}
              TODO: Callout body text.
            </p>
          </div>

          <p>
            {/* AGENT: Third paragraph. New angle -- funding, adoption, competition, etc. */}
            TODO: Write the third paragraph.
          </p>

          <p>
            {/* AGENT: Fourth paragraph. Optional. Another dimension of the story. */}
            TODO: Write the fourth paragraph.
          </p>

          <p>
            <strong className="text-navy">Why this matters for students.</strong>{' '}
            {/* AGENT: 2-3 sentences connecting this to students at Penn State. */}
            TODO: Write the student relevance section.
          </p>
        </div>

        {/* Sources */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs font-semibold text-navy uppercase tracking-[0.15em] mb-4">
            Sources
          </p>
          <ul className="space-y-2">
            {[
              {
                title: 'TODO: Source 1 title',
                url: 'https://example.com/source-1',
              },
              {
                title: 'TODO: Source 2 title',
                url: 'https://example.com/source-2',
              },
              {
                title: 'TODO: Source 3 title',
                url: 'https://example.com/source-3',
              },
            ].map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-link hover:text-link-hover transition-colors duration-300"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
`
}

// ── Listing card snippet ────────────────────────────────────────────
function listingCardSnippet(slug, title, date) {
  const jsxTitle = escapeJsx(title)
  return `        <Link
          href="/ai-news/${slug}"
          className="group flex flex-col md:flex-row gap-0 md:gap-6 bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-1 transition-all duration-300"
        >
          <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
            <Image
              src="/images/site/${slug}-thumb.jpg"
              alt="${jsxTitle}"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <p className="text-xs font-semibold text-pa-sky uppercase tracking-[0.15em]">
              ${date}
            </p>
            <h2 className="mt-2 text-lg font-display font-bold text-navy group-hover:text-beaver-blue transition-colors">
              ${jsxTitle}
            </h2>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              TODO: Write a 1-2 sentence summary for the listing card.
            </p>
            <p className="mt-4 text-xs font-semibold text-beaver-blue uppercase tracking-[0.15em]">
              Read article &rarr;
            </p>
          </div>
        </Link>`
}

// ── Insert card into listing page ───────────────────────────────────
function insertCardIntoListing(listingContent, cardSnippet) {
  // Find the opening of the article list section and insert right after it
  const sectionMarker = '<section className="max-w-5xl mx-auto px-6 py-12 pb-24 space-y-6">'
  const idx = listingContent.indexOf(sectionMarker)
  if (idx === -1) {
    console.error('Could not find article list section in ai-news/page.tsx')
    console.error('You will need to add the article card manually.')
    return null
  }
  const insertPos = idx + sectionMarker.length
  return listingContent.slice(0, insertPos) + '\n' + cardSnippet + '\n' + listingContent.slice(insertPos)
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  console.log(`\nScaffolding article: ${title}`)
  console.log(`  slug: ${slug}`)
  console.log(`  date: ${date}\n`)

  // 1. Create article directory and page
  fs.mkdirSync(ARTICLE_DIR, { recursive: true })
  fs.writeFileSync(ARTICLE_PATH, articleTemplate(slug, title, date))
  console.log(`[ok] Created src/app/ai-news/${slug}/page.tsx`)

  // 2. Fetch thumbnail from Pexels
  const apiKey = loadApiKey()
  if (apiKey) {
    try {
      const query = `${title} technology`
      console.log(`[...] Searching Pexels for: "${query}"`)
      const imageUrl = await searchPexels(query, apiKey)
      if (imageUrl) {
        if (!fs.existsSync(IMAGE_DIR)) {
          fs.mkdirSync(IMAGE_DIR, { recursive: true })
        }
        await downloadImage(imageUrl, IMAGE_PATH)
        console.log(`[ok] Saved thumbnail to public/images/site/${slug}-thumb.jpg`)
      } else {
        console.log(`[skip] No Pexels result. Add a thumbnail manually at public/images/site/${slug}-thumb.jpg`)
      }
    } catch (err) {
      console.log(`[skip] Pexels error: ${err.message}`)
      console.log(`       Add a thumbnail manually at public/images/site/${slug}-thumb.jpg`)
    }
  } else {
    console.log('[skip] No PEXELS_API_KEY in .env.local. Add a thumbnail manually at:')
    console.log(`       public/images/site/${slug}-thumb.jpg`)
  }

  // 3. Add card to listing page
  const listingContent = fs.readFileSync(LISTING_PATH, 'utf-8')
  const card = listingCardSnippet(slug, title, date)
  const updatedListing = insertCardIntoListing(listingContent, card)
  if (updatedListing) {
    fs.writeFileSync(LISTING_PATH, updatedListing)
    console.log(`[ok] Added article card to src/app/ai-news/page.tsx`)
  }

  // 4. Print next steps
  console.log(`
─────────────────────────────────────────────
NEXT STEPS
─────────────────────────────────────────────

The article template is at:
  src/app/ai-news/${slug}/page.tsx

Tell your AI agent:

  Read the sources at [paste your source URLs here],
  then fill in the article template at
  src/app/ai-news/${slug}/page.tsx following the
  voice brief at content/VOICE_BRIEF.md.

Also update the listing card summary in:
  src/app/ai-news/page.tsx
  (find the TODO line in the ${slug} card)

When done, verify with:
  npm run build

Then commit:
  git checkout -b article/${slug}
  git add .
  git commit -m "feat: add ${slug} article"
  git push -u origin article/${slug}
  # Open a PR on GitHub
─────────────────────────────────────────────
`)
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
