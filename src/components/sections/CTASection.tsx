import Link from 'next/link'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { siteConfig } from '@/config/site'

export interface CTASectionProps {
  title?: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
    isExternal?: boolean
  }
  secondaryCTA?: {
    label: string
    href: string
    isExternal?: boolean
  }
}

export function CTASection({
  title = 'Ready to Transform Your Inventory Management?',
  description = 'Book a free discovery call to discuss how we can help streamline your operations with Cin7 Core.',
  primaryCTA = {
    label: 'Book Discovery Call',
    href: siteConfig.links.booking,
    isExternal: true,
  },
  secondaryCTA = {
    label: 'Contact Us',
    href: '/#contact',
    isExternal: false,
  },
}: CTASectionProps) {
  return (
    <Section bg="brand" className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-gray-100">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCTA.isExternal ? (
              <Button
                size="lg"
                variant="primary"
                asChild
                className="min-w-[200px] bg-white text-brand-primary hover:bg-gray-100"
              >
                <a
                  href={primaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCTA.label}
                </a>
              </Button>
            ) : (
              <Button
                size="lg"
                variant="primary"
                asChild
                className="min-w-[200px] bg-white text-brand-primary hover:bg-gray-100"
              >
                <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
              </Button>
            )}
            {secondaryCTA && (
              secondaryCTA.isExternal ? (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="min-w-[200px] border-white text-white hover:bg-white/10"
                >
                  <a
                    href={secondaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {secondaryCTA.label}
                  </a>
                </Button>
              ) : (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="min-w-[200px] border-white text-white hover:bg-white/10"
                >
                  <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                </Button>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
