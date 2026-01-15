import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { termsOfService } from '@/data/legal'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${siteConfig.name}. Read our terms and conditions for using our website and services.`,
  openGraph: {
    title: `Terms of Service | ${siteConfig.name}`,
    description: `Terms of Service for ${siteConfig.name}. Read our terms and conditions for using our website and services.`,
    url: `${siteConfig.url}/terms`,
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <main>
      <PageHero
        title={termsOfService.title}
        breadcrumbs={[{ label: 'Terms of Service', href: '/terms' }]}
      />

      <Section bg="white">
        <Container size="narrow">
          <p className="text-sm text-gray-500 mb-8">
            Last Updated: {termsOfService.lastUpdated}
          </p>

          <div className="prose prose-lg max-w-none">
            {termsOfService.sections.map((section, index) => (
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
