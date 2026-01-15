import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'
import { siteConfig } from '@/config/site'
import {
  CogIcon,
  ChartBarIcon,
  ArrowPathIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Services',
  description: `Explore our Cin7 Core implementation, inventory management consulting, and multi-system integration services for ecommerce businesses.`,
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description: `Explore our Cin7 Core implementation, inventory management consulting, and multi-system integration services.`,
    url: `${siteConfig.url}/services`,
    type: 'website',
  },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cog: CogIcon,
  ChartBar: ChartBarIcon,
  ArrowPath: ArrowPathIcon,
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive inventory management solutions tailored to your ecommerce business needs."
        breadcrumbs={[{ label: 'Services', href: '/services' }]}
      />

      {/* Services List */}
      <Section bg="white">
        <Container>
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                >
                  {/* Icon/Visual */}
                  <div className="flex-shrink-0 w-full lg:w-1/3">
                    <div className="aspect-square max-w-[280px] mx-auto rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center">
                      {Icon && <Icon className="w-24 h-24 text-brand-primary" />}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-brand-primary mt-1">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href={`/services/${service.id}`}>
                        Learn More
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Pricing Overview */}
      <Section bg="gray">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investment & Timeline
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our implementation packages are designed to deliver maximum value
              with predictable pricing and timelines.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-gray-500 mb-2">Implementation Investment</p>
                  <p className="text-3xl font-bold text-brand-primary">
                    {siteConfig.pricing.display}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-gray-500 mb-2">Typical Timeline</p>
                  <p className="text-3xl font-bold text-brand-primary">
                    {siteConfig.timeline.display}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </main>
  )
}
