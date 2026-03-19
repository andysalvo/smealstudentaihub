import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { openSans, inter, oswald, lato } from '@/lib/fonts'
import { siteMetadata } from '@/lib/siteMetadata'

export const metadata = siteMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={[
          'antialiased',
          openSans.variable,
          inter.variable,
          oswald.variable,
          lato.variable,
        ].join(' ')}
      >
        <Header />
        <main className="pt-[70px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
