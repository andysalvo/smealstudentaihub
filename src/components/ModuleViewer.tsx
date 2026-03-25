'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface Concept {
  id: string
  title: string
  paragraphs: string[]
  keyPoints: string[]
  image?: string
}

interface Section {
  id: string
  title: string
  image?: string
  caption?: string
  concepts: Concept[]
}

interface ModuleViewerProps {
  title: string
  sections: Section[]
}

export default function ModuleViewer({ title, sections }: ModuleViewerProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    const initial = new Set<string>()
    if (sections.length > 0) initial.add(sections[0].id)
    return initial
  })

  const [activeConcept, setActiveConcept] = useState<{
    sectionId: string
    conceptId: string
  }>(() => {
    if (sections.length > 0 && sections[0].concepts.length > 0) {
      return { sectionId: sections[0].id, conceptId: sections[0].concepts[0].id }
    }
    return { sectionId: '', conceptId: '' }
  })

  const [transitioning, setTransitioning] = useState(false)
  const readingPanelRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLElement>(null)

  const activeSection = sections.find((s) => s.id === activeConcept.sectionId)
  const activeConceptData = activeSection?.concepts.find((c) => c.id === activeConcept.conceptId)

  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }, [])

  const selectConcept = useCallback(
    (sectionId: string, conceptId: string) => {
      if (activeConcept.sectionId === sectionId && activeConcept.conceptId === conceptId) return

      setTransitioning(true)

      setTimeout(() => {
        setActiveConcept({ sectionId, conceptId })

        // Ensure section is expanded
        setExpandedSections((prev) => {
          if (prev.has(sectionId)) return prev
          const next = new Set(prev)
          next.add(sectionId)
          return next
        })

        // On mobile, scroll to reading panel
        if (window.innerWidth < 768 && readingPanelRef.current) {
          readingPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }

        setTimeout(() => setTransitioning(false), 30)
      }, 150)
    },
    [activeConcept]
  )

  // Keyboard navigation within sidebar
  const handleSidebarKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return

    e.preventDefault()
    const buttons = sidebarRef.current?.querySelectorAll<HTMLButtonElement>('button[data-nav-item]')
    if (!buttons) return

    const focused = document.activeElement as HTMLButtonElement
    const index = Array.from(buttons).indexOf(focused)
    if (index === -1) return

    const next = e.key === 'ArrowDown' ? index + 1 : index - 1
    if (next >= 0 && next < buttons.length) {
      buttons[next].focus()
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Screen reader title */}
      <h2 className="sr-only">{title}</h2>

      <div className="flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-8">
        {/* Sidebar */}
        <nav
          ref={sidebarRef}
          aria-label={`${title} navigation`}
          onKeyDown={handleSidebarKeyDown}
          className="
            w-full md:w-[260px] lg:w-[300px] shrink-0
            md:sticky md:top-20 md:self-start md:max-h-[calc(100vh-6rem)] md:overflow-y-auto
            pb-4 md:pb-0
          "
        >
          <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted px-1 pb-2.5">
            Contents
          </p>

          <div className="space-y-0.5">
            {sections.map((section) => {
              const isExpanded = expandedSections.has(section.id)

              return (
                <div key={section.id}>
                  {/* Section button */}
                  <button
                    data-nav-item
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isExpanded}
                    className={`
                      w-full flex items-center gap-2 px-3 py-2.5 rounded-md
                      text-left text-[13.5px] font-bold
                      transition-all duration-200
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beaver-blue
                      ${isExpanded ? 'bg-navy text-white' : 'text-navy hover:bg-surface-alt'}
                    `}
                  >
                    <ChevronRight
                      size={14}
                      className={`shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    />
                    <span>{section.title}</span>
                  </button>

                  {/* Concepts list */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-300
                      ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                    style={{
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div className="ml-5 pl-3 border-l-2 border-border py-1 space-y-0.5">
                      {section.concepts.map((concept) => {
                        const isActive =
                          activeConcept.sectionId === section.id &&
                          activeConcept.conceptId === concept.id

                        return (
                          <button
                            key={concept.id}
                            data-nav-item
                            onClick={() => selectConcept(section.id, concept.id)}
                            aria-pressed={isActive}
                            className={`
                              w-full text-left px-3 py-2 rounded-md
                              text-[12.5px] transition-all duration-200
                              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beaver-blue
                              ${
                                isActive
                                  ? 'bg-surface-alt text-navy font-semibold'
                                  : 'text-text-muted hover:text-navy hover:bg-surface'
                              }
                            `}
                          >
                            {concept.title}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </nav>

        {/* Divider (desktop only) */}
        <div className="hidden md:block w-px bg-border shrink-0" />

        {/* Reading Panel */}
        <div
          ref={readingPanelRef}
          aria-live="polite"
          className={`
            flex-1 min-w-0 py-2 md:py-0
            transition-opacity duration-200
            ${transitioning ? 'opacity-0' : 'opacity-100'}
          `}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {activeSection && activeConceptData ? (
            <article>
              {/* Kicker */}
              <p className="text-[11px] font-semibold uppercase tracking-widest text-navy mb-3">
                {activeSection.title}
              </p>

              {/* Concept title */}
              <h3
                className="font-display font-bold text-navy leading-tight mb-4"
                style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
              >
                {activeConceptData.title}
              </h3>

              {/* Accent bar */}
              <div className="w-10 h-[3px] bg-navy rounded-full mb-6" />

              {/* Image: concept-level if available, otherwise section-level */}
              {(activeConceptData.image || activeSection.image) && (
                <figure className="mb-6">
                  <div className="relative w-full border border-border rounded-lg overflow-hidden aspect-video">
                    <Image
                      src={activeConceptData.image || activeSection.image!}
                      alt={activeConceptData.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    />
                  </div>
                  {!activeConceptData.image && activeSection.caption && (
                    <figcaption className="mt-2 text-[12px] text-text-muted italic">
                      {activeSection.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Body paragraphs */}
              <div className="space-y-4 mb-8">
                {activeConceptData.paragraphs.map((text, i) => (
                  <p key={i} className="text-[15px] text-text-muted" style={{ lineHeight: 1.68 }}>
                    {text}
                  </p>
                ))}
              </div>

              {/* Key Points */}
              {activeConceptData.keyPoints.length > 0 && (
                <div className="border border-border rounded-lg p-5 bg-surface">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-navy mb-4">
                    Key Points
                  </p>
                  <ol className="space-y-3">
                    {activeConceptData.keyPoints.map((point, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span
                          className="
                            shrink-0 w-6 h-6 rounded-full bg-navy text-white
                            flex items-center justify-center
                            text-[12px] font-bold
                          "
                        >
                          {i + 1}
                        </span>
                        <span
                          className="text-[14px] text-text-muted pt-0.5"
                          style={{ lineHeight: 1.55 }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </article>
          ) : (
            <p className="text-[14px] text-text-muted py-8">
              Select a section and concept from the sidebar to begin.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
