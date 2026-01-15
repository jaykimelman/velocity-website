import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { privacyPolicy } from '@/data/legal'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
    url: `${siteConfig.url}/privacy`,
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        title={privacyPolicy.title}
        breadcrumbs={[{ label: 'Privacy Policy', href: '/privacy' }]}
      />

      <Section bg="white">
        <Container size="narrow">
          <p className="text-sm text-gray-500 mb-8">
            Last Updated: {privacyPolicy.lastUpdated}
          </p>

          <div className="prose prose-lg max-w-none">
            {privacyPolicy.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-600 whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
