import fs from 'fs'
import path from 'path'
import Link from 'next/link'

interface MajorPageProps {
  params: Promise<{ slug: string }>
}

function parseFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {} as Record<string, string>, body: content }

  const meta: Record<string, string> = {}
  match[1].split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':')
    if (key && rest.length) {
      meta[key.trim()] = rest
        .join(':')
        .trim()
        .replace(/^['"]|['"]$/g, '')
    }
  })

  return { meta, body: match[2].trim() }
}

function parseBody(body: string) {
  const sections: { heading: string; paragraphs: string[] }[] = []
  let currentHeading = ''
  let currentParagraphs: string[] = []

  const lines = body.split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    // Detect section headings (lines that are short and title-case-ish, not starting with common sentence words)
    const isHeading =
      trimmed.length < 80 &&
      !trimmed.startsWith('In ') &&
      !trimmed.startsWith('For ') &&
      !trimmed.startsWith('A ') &&
      !trimmed.startsWith('Another') &&
      !trimmed.startsWith('There') &&
      !trimmed.startsWith('AI ') &&
      !trimmed.startsWith('More') &&
      !trimmed.startsWith('Overall') &&
      (trimmed.startsWith('Where ') ||
        trimmed.startsWith('What ') ||
        trimmed.startsWith('Key ') ||
        trimmed.startsWith('Limits') ||
        trimmed === lines[0]?.trim() ||
        (trimmed.split(' ').length <= 10 &&
          trimmed[0] === trimmed[0]?.toUpperCase() &&
          !trimmed.endsWith('.')))

    if (isHeading && trimmed !== lines[0]?.trim()) {
      if (currentHeading) {
        sections.push({ heading: currentHeading, paragraphs: currentParagraphs })
      }
      currentHeading = trimmed
      currentParagraphs = []
    } else if (trimmed !== lines[0]?.trim() && trimmed !== lines[1]?.trim()) {
      currentParagraphs.push(trimmed)
    }
  }

  if (currentHeading) {
    sections.push({ heading: currentHeading, paragraphs: currentParagraphs })
  }

  return sections
}

const contentDir = path.join(process.cwd(), 'content', 'smeal-majors')

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))
  return files.map((f) => ({ slug: f.replace('.mdx', '') }))
}

export default async function MajorPage({ params }: MajorPageProps) {
  const { slug } = await params
  const filePath = path.join(contentDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return <div className="pt-14 px-6 py-20 text-center text-text-muted">Module not found.</div>
  }

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { meta, body } = parseFrontmatter(raw)
  const sections = parseBody(body)

  return (
    <div className="pt-14">
      <section className="max-w-3xl mx-auto px-6 py-14">
        <Link
          href="/ai-by-smeal-major"
          className="text-[12px] text-beaver-blue hover:text-navy transition-colors"
        >
          &larr; All majors
        </Link>
        <h1 className="mt-4 text-3xl font-display font-bold tracking-tight text-navy">
          {meta.title || slug}
        </h1>
        {meta.description && <p className="mt-2 text-[15px] text-text-muted">{meta.description}</p>}
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-display font-semibold text-navy mb-4">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-[15px] text-text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
