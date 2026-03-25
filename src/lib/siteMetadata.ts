import type { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://andysalvo.github.io/smealstudentaihub'),
  title: {
    default: 'Smeal Student AI Hub',
    template: '%s | Smeal Student AI Hub',
  },
  description:
    'A student-built resource for understanding AI in business, school, and professional life. Designed and curated by Applied AI at Penn State.',
  keywords: [
    'AI',
    'artificial intelligence',
    'Penn State',
    'Smeal',
    'business',
    'education',
    'student',
    'Applied AI',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Smeal Student AI Hub',
    title: 'Smeal Student AI Hub',
    description:
      'A student-built resource for understanding AI in business, school, and professional life.',
  },
}
