import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { serviceDetails, getServiceBySlug, getAllServiceSlugs } from '@/data/serviceDetails'
import { siteConfig } from '@/config/site'
import {
  CogIcon,
  CircleStackIcon,
  LinkIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  TruckIcon,
  ShoppingCartIcon,
  CalculatorIcon,
  BanknotesIcon,
  CpuChipIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

interface PageProps {
  params: Promise<{ slug: string }>
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CogIcon,
  CircleStackIcon,
  LinkIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  TruckIcon,
  ShoppingCartIcon,
  CalculatorIcon,
  BanknotesIcon,
  CpuChipIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: service.title,
    description: service.heroDescription,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.heroDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: 'website',
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <main>
      <PageHero
        title={service.title}
        subtitle={service.heroDescription}
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />

      {/* Features Section */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What&apos;s Included
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {service.tagline}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature) => {
              const Icon = iconMap[feature.icon]
              return (
                <Card key={feature.title} hover>
                  <CardContent className="p-6">
                    {Icon && (
                      <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section bg="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven approach to ensure successful outcomes for every engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
        <Section bg="white">
          <Container size="narrow">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-light rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA Section */}
      <CTASection
        title={service.ctaTitle}
        description={service.ctaDescription}
      />
    </main>
  )
}
