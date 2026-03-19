import type { Metadata } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://smealstudentaihub.com'),
  title: {
    default: 'Student AI Hub | Penn State',
    template: '%s | Student AI Hub',
  },
  description:
    'A student-built resource for understanding AI in business, school, and professional life. Designed and curated by Applied AI at Penn State.',
  keywords: [
    'artificial intelligence',
    'AI',
    'Penn State',
    'Smeal College of Business',
    'AI education',
    'AI literacy',
    'business AI',
    'student resources',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://smealstudentaihub.com/',
    siteName: 'Student AI Hub',
    title: 'Student AI Hub | Penn State',
    description:
      'A student-built resource for understanding AI in business, school, and professional life.',
    images: [
      {
        url: '/Images/student-ai-hub-logo.png',
        width: 512,
        height: 512,
        alt: 'Student AI Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student AI Hub | Penn State',
    description:
      'A student-built resource for understanding AI in business, school, and professional life.',
    images: ['/Images/student-ai-hub-logo.png'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
