import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold text-navy">
          Student AI Hub
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text">
          <Link href="/" className="hover:text-link-hover">
            Home
          </Link>
          <Link href="/ai-by-smeal-major" className="hover:text-link-hover">
            AI by Smeal Major
          </Link>
          <Link href="/learn" className="hover:text-link-hover">
            Learn
          </Link>
          <Link href="/about" className="hover:text-link-hover">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
