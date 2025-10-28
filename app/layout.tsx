import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Pankaj Pramod Koli - Cloud Computing & Full Stack Developer Portfolio',
  description: 'B.Tech CSE (Cloud Computing) Student | Full Stack Developer specializing in AWS, React, Node.js, Express.js, MySQL, MongoDB. Android Developer with published research in Machine Learning.',
  keywords: 'Pankaj Koli, Cloud Computing, Full Stack Developer, AWS, React, Node.js, Express.js, MySQL, MongoDB, Android Developer, Machine Learning, IJEAST Publication',
  authors: [{ name: 'Pankaj Pramod Koli' }],
  creator: 'Pankaj Pramod Koli',
  publisher: 'Pankaj Pramod Koli',
  robots: 'index, follow',
  openGraph: {
    title: 'Pankaj Pramod Koli - Cloud Computing & Full Stack Developer',
    description: 'Professional portfolio showcasing cloud computing projects, full-stack development skills, and published research in machine learning.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Pankaj Koli Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pankaj Pramod Koli - Developer Portfolio',
    description: 'Cloud Computing & Full Stack Developer with AWS expertise',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}