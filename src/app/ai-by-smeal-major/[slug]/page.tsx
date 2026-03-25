import Link from 'next/link'
import moduleData from '../../../../content/smeal-majors-data.json'
import ModuleViewer from '@/components/ModuleViewer'
import { ReadingProgress } from '@/components/ui/ReadingProgress'

interface MajorPageProps {
  params: Promise<{ slug: string }>
}

const data = moduleData as Record<
  string,
  {
    title: string
    description: string
    sections: {
      id: string
      title: string
      image?: string
      caption?: string
      concepts: {
        id: string
        title: string
        paragraphs: string[]
        keyPoints: string[]
        image?: string
      }[]
    }[]
  }
>

export async function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }))
}

export default async function MajorPage({ params }: MajorPageProps) {
  const { slug } = await params
  const major = data[slug]

  if (!major) {
    return (
      <div className="pt-14 px-6 py-20 text-center text-text-muted">Module not found.</div>
    )
  }

  return (
    <div className="pt-14">
      <ReadingProgress />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-white to-surface opacity-80" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pugh-blue/[0.18] rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] left-[-8%] w-[400px] h-[400px] bg-navy/[0.08] rounded-full blur-[100px]" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <Link
            href="/ai-by-smeal-major"
            className="text-xs text-beaver-blue hover:text-navy transition-colors"
          >
            &larr; All majors
          </Link>
          <h1 className="mt-4 text-3xl font-display font-bold tracking-tight text-navy">
            {major.title}
          </h1>
          {major.description && (
            <p className="mt-2 text-[15px] text-text-muted">{major.description}</p>
          )}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 pb-24">
        <ModuleViewer title={major.title} sections={major.sections} />
      </section>
    </div>
  )
}
