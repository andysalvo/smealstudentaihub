import React from 'react'

interface YouTubeEmbedProps {
  title: string
  videoId?: string
}

export default function YouTubeEmbed({ title, videoId }: YouTubeEmbedProps) {
  if (videoId) {
    return (
      <div className="my-6">
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-hub-card border border-hub-border rounded-lg p-5 my-4">
      <p className="text-xs uppercase tracking-wider text-red-400 mb-2 font-semibold">
        YouTube Video
      </p>
      <h4 className="text-base font-semibold text-hub-white">{title}</h4>
    </div>
  )
}
