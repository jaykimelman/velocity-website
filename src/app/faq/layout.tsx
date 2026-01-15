import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'FAQ',
  description: `Frequently asked questions about ${siteConfig.name}'s Cin7 Core implementation services, pricing, timeline, and support.`,
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description: `Find answers to common questions about our Cin7 Core implementation services.`,
    url: `${siteConfig.url}/faq`,
    type: 'website',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
