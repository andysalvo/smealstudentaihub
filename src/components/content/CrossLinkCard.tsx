import React from 'react'
import Link from 'next/link'

interface CrossLinkCardProps {
  title: string
  description: string
  href: string
  buttonText?: string
}

export default function CrossLinkCard({
  title,
  description,
  href,
  buttonText = 'Explore',
}: CrossLinkCardProps) {
  return (
    <div className="bg-hub-card border border-hub-border rounded-lg p-6 flex flex-col">
      <h3 className="text-lg font-bold text-hub-white mb-2">{title}</h3>
      <p className="text-hub-text text-sm mb-4 flex-1">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-5 py-2 bg-hub-accent hover:bg-hub-accent-hover text-white text-sm font-medium rounded transition-colors w-fit"
      >
        {buttonText}
      </Link>
    </div>
  )
}
