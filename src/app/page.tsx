import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { Testimonials } from '@/components/sections/Testimonials'
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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cog: CogIcon,
  ChartBar: ChartBarIcon,
  ArrowPath: ArrowPathIcon,
}

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Services Preview */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive inventory management solutions tailored to your ecommerce business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <Card key={service.id} hover>
                  <CardContent className="p-6">
                    {Icon && (
                      <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center text-brand-primary font-medium hover:underline"
                    >
                      Learn more
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-6">
                Why Choose Velocity?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With 20+ years of inventory management experience and a community of
                1,200+ accounting professionals, we bring unmatched expertise to every
                implementation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary font-bold text-lg">✓</span>
                  <span className="text-gray-700">
                    <strong>Fixed Pricing:</strong> {siteConfig.pricing.display} with no surprises
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary font-bold text-lg">✓</span>
                  <span className="text-gray-700">
                    <strong>Fast Implementation:</strong> Go live in {siteConfig.timeline.display}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary font-bold text-lg">✓</span>
                  <span className="text-gray-700">
                    <strong>Full Support:</strong> Training, migration, and ongoing optimization
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-brand-primary mb-2">20+</p>
                  <p className="text-gray-600">Years Experience</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-brand-primary mb-2">1,200+</p>
                  <p className="text-gray-600">Professionals Network</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-brand-primary mb-2">60-90</p>
                  <p className="text-gray-600">Day Timeline</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-brand-primary mb-2">$15-35K</p>
                  <p className="text-gray-600">Investment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection />
    </main>
  )
}
