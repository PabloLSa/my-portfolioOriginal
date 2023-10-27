import './globals.css'
import './animations.css'
import './../components/header.css'
import './../components/contact.css'
import './../components/about.css'
import type { Metadata } from 'next'
import ThemeProviderContext from '../context/themeProvider'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pablo Landim de Sá',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProviderContext>{children}</ThemeProviderContext></body>
    </html>
  )
}
