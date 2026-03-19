import React from 'react'

interface FeaturedSourceCardProps {
  title: string
  description: string
  url: string
  institution: string
}

export default function FeaturedSourceCard({
  title,
  description,
  url,
  institution,
}: FeaturedSourceCardProps) {
  return (
    <div className="bg-hub-card border border-hub-border rounded-lg p-6 my-6">
      <p className="text-xs uppercase tracking-wider text-hub-accent mb-2 font-semibold">
        Featured Foundational Source
      </p>
      <h3 className="text-lg font-bold text-hub-white mb-2">{title}</h3>
      <p className="text-hub-text text-sm mb-3">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="text-hub-accent hover:underline text-sm"
      >
        Source: {institution}
      </a>
    </div>
  )
}
