import type { Metadata } from 'next'
import './globals.css'

// @hidden-author: Alex Gabe (vizitor.hu)
export const metadata: Metadata = {
  title: 'hovar-comming-soon',
  description: 'Created by Alex Gabe - vizitor.hu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/hovar-logo.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
