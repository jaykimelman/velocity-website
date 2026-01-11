import { CogIcon, ChartBarIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { services } from '@/data/services'
import { siteConfig } from '@/config/site'

const iconMap = {
  Cog: CogIcon,
  ChartBar: ChartBarIcon,
  ArrowPath: ArrowPathIcon,
}

export function Services() {
  return (
    <Section id="services" bg="gray">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mb-3 max-w-2xl text-lg text-gray-600">
            Specialized Cin7 Core implementation and inventory management solutions
          </p>
          <p className="mx-auto mb-12 text-lg font-semibold text-brand-primary">
            For ecommerce businesses earning $1M-$10M annually
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]

            return (
              <Card key={service.id} hover>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                    <Icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-brand-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            <strong>Investment:</strong> {siteConfig.pricing.display} &nbsp;|&nbsp;
            <strong>Timeline:</strong> {siteConfig.timeline.display}
          </p>
        </div>
      </Container>
    </Section>
  )
}
