import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { steps } from '@/data/howItWorks'
import { siteConfig } from '@/config/site'
import {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  AcademicCapIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'How It Works',
  description: `Learn about our proven 4-step Cin7 Core implementation process. From discovery to go-live, we guide you every step of the way.`,
  openGraph: {
    title: `How It Works | ${siteConfig.name}`,
    description: `Our proven 4-step implementation process for Cin7 Core.`,
    url: `${siteConfig.url}/how-it-works`,
    type: 'website',
  },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MagnifyingGlass: MagnifyingGlassIcon,
  ClipboardDocumentList: ClipboardDocumentListIcon,
  Cog: CogIcon,
  AcademicCap: AcademicCapIcon,
}

const stepDetails = [
  {
    deliverables: [
      'Current state assessment report',
      'Requirements documentation',
      'Integration scope definition',
      'Project timeline proposal',
    ],
    duration: '1-2 weeks',
  },
  {
    deliverables: [
      'Detailed project plan',
      'Data migration strategy',
      'Integration architecture',
      'Training schedule',
    ],
    duration: '1-2 weeks',
  },
  {
    deliverables: [
      'Configured Cin7 Core system',
      'Migrated and validated data',
      'Connected integrations',
      'Testing and QA completion',
    ],
    duration: '4-8 weeks',
  },
  {
    deliverables: [
      'Team training sessions',
      'User documentation',
      'Go-live support',
      'Post-launch optimization',
    ],
    duration: '2-4 weeks',
  },
]

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero
        title="How It Works"
        subtitle="Our proven 4-step implementation process ensures a smooth transition to Cin7 Core with minimal disruption to your business."
        breadcrumbs={[{ label: 'How It Works', href: '/how-it-works' }]}
      />

      {/* Process Overview */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every engagement follows our structured approach, refined over 20+
              years of inventory management implementations.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon]
              const details = stepDetails[index]
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 w-full lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
                      <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-2xl font-bold">
                        {step.id}
                      </div>
                      {Icon && (
                        <div className="w-16 h-16 rounded-lg bg-brand-primary/10 flex items-center justify-center lg:hidden">
                          <Icon className="w-8 h-8 text-brand-primary" />
                        </div>
                      )}
                    </div>
                    <div className="hidden lg:flex justify-center mt-4">
                      {Icon && (
                        <div className="w-32 h-32 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                          <Icon className="w-16 h-16 text-brand-primary" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-3">
                              Key Deliverables
                            </h4>
                            <ul className="space-y-2">
                              {details.deliverables.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                  <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="sm:text-right">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              Typical Duration
                            </h4>
                            <p className="text-2xl font-bold text-brand-primary">
                              {details.duration}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Timeline Summary */}
      <Section bg="gray">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Total Implementation Timeline
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Most implementations are completed within {siteConfig.timeline.display},
              depending on complexity and scope.
            </p>
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-soft">
              <span className="text-gray-600">Average Timeline:</span>
              <span className="text-2xl font-bold text-brand-primary">
                {siteConfig.timeline.display}
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* What Makes Us Different */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes Our Process Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hover>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Surprises
                </h3>
                <p className="text-gray-600">
                  Fixed pricing and clear milestones mean you always know what
                  to expect and when.
                </p>
              </CardContent>
            </Card>
            <Card hover>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Hands-On Support
                </h3>
                <p className="text-gray-600">
                  We don&apos;t just configure and leave. We train your team and
                  support you through go-live.
                </p>
              </CardContent>
            </Card>
            <Card hover>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ongoing Partnership
                </h3>
                <p className="text-gray-600">
                  Post-launch optimization ensures your system continues to
                  deliver value as you grow.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <CTASection />
    </main>
  )
}
