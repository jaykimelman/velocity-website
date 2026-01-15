import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { aboutContent } from '@/data/about'
import { siteConfig } from '@/config/site'
import {
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name} and our 20+ years of inventory management expertise. We help ecommerce businesses transform their operations with Cin7 Core.`,
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name} and our 20+ years of inventory management expertise.`,
    url: `${siteConfig.url}/about`,
    type: 'website',
  },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Velocity Inventory Solutions"
        subtitle={aboutContent.mission}
        breadcrumbs={[{ label: 'About', href: '/about' }]}
      />

      {/* Story Section */}
      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              {aboutContent.story.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section bg="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and how we work with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.values.map((value) => {
              const Icon = iconMap[value.icon]
              return (
                <Card key={value.title} hover>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {Icon && (
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-brand-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Credentials Section */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Credentials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Backed by experience, recognized expertise, and a track record of success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.credentials.map((credential) => (
              <div
                key={credential.title}
                className="text-center p-6 rounded-lg border border-gray-light"
              >
                <h3 className="text-xl font-bold text-brand-primary mb-2">
                  {credential.title}
                </h3>
                <p className="text-sm text-gray-600">{credential.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section bg="gray">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Us
            </h2>
            <div className="space-y-4">
              {aboutContent.whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
