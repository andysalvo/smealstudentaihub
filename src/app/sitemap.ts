import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smealstudentaihub.com'
  const now = new Date()

  const routes = [
    '/',
    '/about',
    '/learn',
    '/ai-basics',
    '/ai-news-that-matters',
    '/foundational-sources',
    '/process-and-provenance',
    '/ai-at-penn-state',
    '/ai-by-smeal-major',
    '/using-ai-for-school-and-work',
    '/rules-risks-and-ethics-of-ai',
    '/ai-tools-you-might-use',
    '/how-businesses-are-using-ai',
    '/major-accounting',
    '/actuarial-science',
    '/corporate-innovation',
    '/finance',
    '/management',
    '/management-information-systems',
    '/marketing',
    '/supply-chain',
    '/risk-management',
    '/real-estate',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }))
}
