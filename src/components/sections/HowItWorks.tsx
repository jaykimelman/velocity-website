import {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { steps } from '@/data/howItWorks'

const iconMap = {
  MagnifyingGlass: MagnifyingGlassIcon,
  ClipboardDocumentList: ClipboardDocumentListIcon,
  Cog: CogIcon,
  AcademicCap: AcademicCapIcon,
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" bg="white">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            Our proven 4-step process ensures a smooth, successful Cin7 Core
            implementation from start to finish
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap]

            return (
              <div key={step.id} className="relative">
                {/* Step Number */}
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-xl font-bold text-white">
                    {step.id}
                  </div>
                  {step.id < steps.length && (
                    <div className="ml-2 hidden h-0.5 flex-1 bg-gray-300 lg:block" />
                  )}
                </div>

                {/* Icon */}
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-brand-primary/10">
                  <Icon className="h-7 w-7 text-brand-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            <strong>Typical Timeline:</strong> 60-90 days from discovery to go-live
          </p>
        </div>
      </Container>
    </Section>
  )
}
