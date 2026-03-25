import './globals.css'
import { roboto, robotoSlab } from '@/lib/fonts'
import { siteMetadata } from '@/lib/siteMetadata'

export const metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans text-text bg-white antialiased">
        {children}
      </body>
    </html>
  )
}
