import type { MajorData } from '@/data/majors/types'

interface MajorPageTemplateProps {
  data: MajorData
}

export default function MajorPageTemplate({ data }: MajorPageTemplateProps) {
  return (
    <div className="min-h-screen">
      <div className="hub-container py-12 md:py-16">
        <header className="mb-12">
          <h1
            className="text-3xl md:text-4xl font-bold text-hub-white mb-4"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {data.title}
          </h1>
          <p className="text-lg text-hub-text-muted max-w-3xl italic">{data.subtitle}</p>
        </header>

        <div className="space-y-16">
          {data.sections.map((section, sectionIndex) => (
            <section key={sectionIndex}>
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl font-bold text-hub-white mb-2"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {section.title}
                </h2>
                <p className="text-hub-text-muted text-sm">{section.caption}</p>
              </div>

              <div className="space-y-8">
                {section.concepts.map((concept, conceptIndex) => (
                  <div
                    key={conceptIndex}
                    className="rounded-lg border border-hub-border bg-hub-card p-6 md:p-8"
                  >
                    <h3
                      className="text-xl font-semibold text-hub-white mb-4"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {concept.title}
                    </h3>

                    <div className="space-y-4 mb-6">
                      {concept.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-hub-text leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="border-t border-hub-border pt-4">
                      <p className="text-xs uppercase tracking-wider text-hub-text-muted mb-3">
                        Key Points
                      </p>
                      <ol className="space-y-2">
                        {concept.keyPoints.map((point, kpIndex) => (
                          <li key={kpIndex} className="flex gap-3 text-hub-text text-sm">
                            <span className="text-hub-accent font-semibold shrink-0">
                              {kpIndex + 1}.
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
