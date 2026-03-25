#!/usr/bin/env node

/**
 * fetch-module-images.js
 *
 * Downloads one image per concept from the Pexels API and updates
 * content/smeal-majors-data.json with local image paths.
 *
 * Setup:
 *   1. Sign up free at https://www.pexels.com/api/
 *   2. Copy your API key
 *   3. Create .env.local in repo root: PEXELS_API_KEY=your_key_here
 *   4. Run: node scripts/fetch-module-images.js
 *
 * Options:
 *   --dry-run    Show what would be fetched without downloading
 *   --major=X    Only fetch images for one major (e.g. --major=accounting)
 *   --force      Re-download even if image already exists
 */

const fs = require('fs')
const path = require('path')
const https = require('https')

// ── Config ──────────────────────────────────────────────────────────
const DATA_PATH = path.join(__dirname, '..', 'content', 'smeal-majors-data.json')
const IMAGE_DIR = path.join(__dirname, '..', 'public', 'images', 'modules')
const IMAGE_WIDTH = 800 // px, landscape
const RATE_LIMIT_MS = 400 // stay well under 200 req/hour

// ── Load API key from .env.local ────────────────────────────────────
function loadApiKey() {
  const envPath = path.join(__dirname, '..', '.env.local')
  if (!fs.existsSync(envPath)) {
    console.error('Missing .env.local file. Create it with:\n  PEXELS_API_KEY=your_key_here')
    console.error('Get a free key at https://www.pexels.com/api/')
    process.exit(1)
  }
  const env = fs.readFileSync(envPath, 'utf-8')
  const match = env.match(/PEXELS_API_KEY=(.+)/)
  if (!match || !match[1].trim()) {
    console.error('PEXELS_API_KEY not found in .env.local')
    process.exit(1)
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
        file.on('finish', () => { file.close(); resolve() })
        file.on('error', reject)
      }).on('error', reject)
    }
    follow(url)
  })
}

// ── Build search query from concept ─────────────────────────────────
function buildQuery(majorTitle, conceptTitle) {
  // Strip "AI in " prefix from major title
  const field = majorTitle.replace(/^AI in /, '').toLowerCase()
  // Combine field + concept for a relevant search
  const concept = conceptTitle.toLowerCase()

  // Map common accounting/business terms to more photogenic queries
  const mappings = {
    'transaction': 'financial data analysis',
    'audit': 'business audit review',
    'reconciliation': 'financial reporting',
    'compliance': 'business compliance regulation',
    'underwriting': 'insurance analysis',
    'claims': 'insurance claims processing',
    'catastrophe': 'natural disaster risk',
    'reserving': 'financial reserves planning',
    'venture': 'startup innovation',
    'competitive': 'business competition strategy',
    'portfolio': 'investment portfolio',
    'algorithmic': 'stock market trading',
    'credit': 'credit analysis banking',
    'workforce': 'office workplace team',
    'hiring': 'job interview hiring',
    'retention': 'employee team meeting',
    'sentiment': 'social media analytics',
    'personalization': 'customer experience digital',
    'campaign': 'marketing campaign digital',
    'valuation': 'real estate property',
    'property': 'real estate building',
    'fraud': 'cybersecurity fraud detection',
    'demand': 'warehouse logistics',
    'logistics': 'supply chain shipping',
    'procurement': 'business procurement',
    'database': 'data center technology',
    'cybersecurity': 'cybersecurity network',
    'dashboard': 'business analytics dashboard',
  }

  // Check if any mapping keyword appears in the concept title
  for (const [keyword, replacement] of Object.entries(mappings)) {
    if (concept.includes(keyword)) {
      return `${replacement} professional`
    }
  }

  // Default: field + concept + professional context
  return `${field} ${concept} business professional`
}

// ── Sleep ────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// ── Parse args ──────────────────────────────────────────────────────
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const force = args.includes('--force')
const majorArg = args.find((a) => a.startsWith('--major='))
const majorFilter = majorArg ? majorArg.split('=')[1] : null

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  const apiKey = dryRun ? 'dry-run' : loadApiKey()
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'))
  const majors = Object.entries(data)

  let totalConcepts = 0
  let downloaded = 0
  let skipped = 0
  let failed = 0

  for (const [slug, major] of majors) {
    if (majorFilter && slug !== majorFilter) continue

    const majorDir = path.join(IMAGE_DIR, slug)
    if (!dryRun && !fs.existsSync(majorDir)) {
      fs.mkdirSync(majorDir, { recursive: true })
    }

    console.log(`\n${major.title} (${slug})`)

    for (const section of major.sections) {
      for (const concept of section.concepts) {
        totalConcepts++
        const filename = `${concept.id}.jpg`
        const destPath = path.join(majorDir, filename)
        const publicPath = `/images/modules/${slug}/${filename}`
        const query = buildQuery(major.title, concept.title)

        if (!force && fs.existsSync(destPath)) {
          // Already have this image, just make sure JSON is updated
          concept.image = publicPath
          skipped++
          continue
        }

        if (dryRun) {
          console.log(`  [dry-run] ${concept.title} -> "${query}"`)
          concept.image = publicPath
          continue
        }

        try {
          const imageUrl = await searchPexels(query, apiKey)
          if (!imageUrl) {
            console.log(`  [no result] ${concept.title} -> "${query}"`)
            failed++
            await sleep(RATE_LIMIT_MS)
            continue
          }

          await downloadImage(imageUrl, destPath)
          concept.image = publicPath
          downloaded++
          console.log(`  [ok] ${concept.title}`)
          await sleep(RATE_LIMIT_MS)
        } catch (err) {
          console.error(`  [error] ${concept.title}: ${err.message}`)
          failed++
          await sleep(RATE_LIMIT_MS)
        }
      }
    }
  }

  // Update section-level images to use local paths too
  for (const [slug, major] of majors) {
    if (majorFilter && slug !== majorFilter) continue
    for (const section of major.sections) {
      // Keep section images pointing to existing local files if available
      const prefix = {
        accounting: 'act', 'actuarial-science': 'act', 'corporate-innovation': 'cie',
        finance: 'fin', management: 'mgmt', mis: 'mis', marketing: 'mkt',
        'real-estate': 're', 'risk-management': 'rm', 'supply-chain': 'sc',
      }[slug] || slug

      const sectionNum = major.sections.indexOf(section) + 1
      const localFile = `${prefix}-section${sectionNum}-${section.id}.jpg`
      const localPath = path.join(IMAGE_DIR, localFile)
      if (fs.existsSync(localPath)) {
        section.image = `/images/modules/${localFile}`
      }
    }
  }

  // Write updated JSON
  if (!dryRun) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2) + '\n')
  }

  console.log(`\nDone. ${downloaded} downloaded, ${skipped} already existed, ${failed} failed. ${totalConcepts} total concepts.`)
  if (dryRun) console.log('(dry run - no files were downloaded or modified)')
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
