import type { Metadata } from 'next'
import './globals.css'

// Készítette: Gábor Sándor (vizitor.hu)
export const metadata: Metadata = {
  // site metadata - SEO basics
  title: 'Hóvár Egyesület',
  description: 'Közösséget és élményeket teremtünk a Magyarországon élő kárpátaljaiak számára.',
  authors: [{ name: 'Gábor Sándor' }],
  creator: 'Gábor Sándor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu">
      <head>
        {/* custom favicon - SVG format */}
        <link rel="icon" href="/favicon/hovar-logo.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
