import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${siteConfig.name} to discuss your Cin7 Core implementation needs. Based in ${siteConfig.location.city}, serving clients nationwide.`,
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Get in touch to discuss your inventory management needs.`,
    url: `${siteConfig.url}/contact`,
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
