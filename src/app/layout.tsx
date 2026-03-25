import './globals.css'
import { inter, roboto, robotoSlab } from '@/lib/fonts'
import { siteMetadata } from '@/lib/siteMetadata'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = siteMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${robotoSlab.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans text-text bg-white antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
