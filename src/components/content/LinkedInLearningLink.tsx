import React from 'react'

interface LinkedInLearningLinkProps {
  title: string
  url: string
}

export default function LinkedInLearningLink({ title, url }: LinkedInLearningLinkProps) {
  return (
    <div className="bg-hub-card border border-hub-border rounded-lg p-5 my-4">
      <p className="text-xs uppercase tracking-wider text-blue-400 mb-2 font-semibold">
        LinkedIn Learning
      </p>
      <h4 className="text-base font-semibold text-hub-white mb-2">{title}</h4>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="text-hub-accent hover:underline text-sm"
      >
        This video is available through LinkedIn Learning for Penn State students. Log in with your
        Penn State account if prompted to view the full video.
      </a>
    </div>
  )
}
