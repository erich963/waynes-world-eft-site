import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Wayne's World Elite Fitness Training | Lebanon, NH",
  description:
    "Personal training, bootcamps, and athlete performance coaching in Lebanon, NH. Built around results, accountability, and real community.",
  keywords:
    'personal training Lebanon NH, bootcamp Lebanon NH, athlete training Upper Valley, fitness training New Hampshire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
