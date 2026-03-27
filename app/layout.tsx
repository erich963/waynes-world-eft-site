import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://waynesworldeft.com'),
  title: {
    default: "Wayne's World Elite Fitness Training | Lebanon, NH",
    template: "%s | Wayne's World EFT",
  },
  description:
    "Personal training, bootcamps, and athlete performance coaching in Lebanon, NH. Trusted by Olympians, professional athletes, and everyday adults across the Upper Valley since 1999.",
  keywords: [
    'personal training Lebanon NH',
    'bootcamp Lebanon NH',
    'athlete training Upper Valley',
    'fitness training New Hampshire',
    "Wayne's World EFT",
    'gym Lebanon NH',
    'strength training Upper Valley',
    'CSCS trainer NH',
  ],
  openGraph: {
    type: 'website',
    siteName: "Wayne's World Elite Fitness Training",
    title: "Wayne's World Elite Fitness Training | Lebanon, NH",
    description:
      "Personal training, bootcamps, and athlete performance coaching in Lebanon, NH. Trusted by Olympians, professional athletes, and everyday adults across the Upper Valley since 1999.",
    images: [
      {
        url: '/images/community-new.jpg',
        width: 1200,
        height: 630,
        alt: "Wayne's World EFT community — Lebanon, NH",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wayne's World Elite Fitness Training | Lebanon, NH",
    description:
      "Personal training, bootcamps, and athlete performance coaching in Lebanon, NH. Trusted by Olympians and everyday athletes since 1999.",
    images: ['/images/community-new.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: "Wayne's World Elite Fitness Training",
  url: 'https://waynesworldeft.com',
  telephone: '',
  description:
    "Personal training, bootcamps, and athlete performance coaching in Lebanon, NH. Trusted by Olympians, professional athletes, and everyday adults since 1999.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: '85 Mechanic St',
    addressLocality: 'Lebanon',
    addressRegion: 'NH',
    postalCode: '03766',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.6423,
    longitude: -72.2518,
  },
  foundingDate: '1999',
  sameAs: [
    'https://www.instagram.com/waynesworldeft',
    'https://www.facebook.com/WaynesWorldEFT',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
