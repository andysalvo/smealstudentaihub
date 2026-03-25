import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-serif font-bold text-navy mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-serif font-semibold text-navy mt-6 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-serif font-medium text-beaver-blue mt-4 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-text leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-link hover:text-link-hover underline"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-pugh-blue pl-4 italic text-text-muted my-4">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
