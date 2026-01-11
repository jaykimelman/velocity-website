import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { GoogleTagManager } from '@next/third-parties/google'
import { Footer } from '@/components/layout/Footer'
import { defaultMetadata } from '@/config/seo'
import { siteConfig } from '@/config/site'
import { faqs } from '@/data/faq'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: siteConfig.contact.email,
    },
    priceRange: siteConfig.pricing.display,
  }

  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5383', // Orlando coordinates (update if needed)
      longitude: '-81.3792',
    },
    url: siteConfig.url,
    telephone: siteConfig.contact.phone || '',
    email: siteConfig.contact.email,
    priceRange: siteConfig.pricing.display,
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <Analytics />
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </body>
    </html>
  )
}
