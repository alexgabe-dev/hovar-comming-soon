import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hóvár Egyesület',
  description: 'Közösséget és élményeket teremtünk a Magyarországon élő kárpátaljaiak számára.',
  authors: [{ name: 'Gábor Sándor' }],
  creator: 'Gábor Sándor', // TODO: !!átgondolni!!
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu">
      <head>
        <link rel="icon" href="/favicon/hovar-logo.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            console.info(\`
██╗   ██╗██╗███████╗██╗████████╗ ██████╗ ██████╗    ██╗  ██╗██╗   ██╗
██║   ██║██║╚══███╔╝██║╚══██╔══╝██╔═══██╗██╔══██╗   ██║  ██║██║   ██║
██║   ██║██║  ███╔╝ ██║   ██║   ██║   ██║██████╔╝   ███████║██║   ██║
╚██╗ ██╔╝██║ ███╔╝  ██║   ██║   ██║   ██║██╔══██╗   ██╔══██║██║   ██║
 ╚████╔╝ ██║███████╗██║   ██║   ╚██████╔╝██║  ██║██╗██║  ██║╚██████╔╝
  ╚═══╝  ╚═╝╚══════╝╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝ 
                                                                     
Készítette: Gábor Sándor
            \`);
          `
        }} />
      </body>
    </html>
  )
}
