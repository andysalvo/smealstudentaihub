export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg font-serif font-semibold">
          Applied AI at Penn State
        </p>
        <p className="text-sm text-pugh-blue mt-1">Smeal College of Business</p>
        <p className="text-xs text-pugh-blue mt-4">
          &copy; {currentYear} Applied AI at Penn State. This is a student
          organization website and does not represent official Penn State
          positions.
        </p>
        <p className="text-xs text-pugh-blue mt-2">
          Infrastructure by{' '}
          <a
            href="https://github.com/clarkemoyer"
            className="underline hover:text-white"
          >
            Clarke Moyer
          </a>{' '}
          &amp;{' '}
          <a
            href="https://freeforcharity.org"
            className="underline hover:text-white"
          >
            Free For Charity
          </a>
        </p>
      </div>
    </footer>
  )
}
