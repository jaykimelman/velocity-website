'use client'

import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { siteConfig } from '@/config/site'

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-brand-primary to-brand-secondary py-20 md:py-32 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Authority Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="font-medium">20+ Years Inventory and IMS Experience</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Transform Your Inventory Management with Expert Cin7 Core Implementation
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-gray-100 md:text-xl">
            Are landed costs destroying your gross margin accuracy? Drowning in
            spreadsheets across Shopify, Amazon, and wholesale? We implement Cin7 Core
            systems that eliminate inventory chaos in 60-90 days.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="primary"
              onClick={scrollToContact}
              className="min-w-[200px]"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="min-w-[200px] border-white text-white hover:bg-white/10"
            >
              <a
                href={siteConfig.links.booking}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book 15-Min Discovery Call
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/20 pt-8 text-sm sm:grid-cols-3">
            <div>
              <div className="mb-1 text-2xl font-bold">{siteConfig.authority.community}</div>
              <div className="text-gray-200">Accounting Professionals</div>
            </div>
            <div>
              <div className="mb-1 text-2xl font-bold">{siteConfig.pricing.display}</div>
              <div className="text-gray-200">Implementation Investment</div>
            </div>
            <div>
              <div className="mb-1 text-2xl font-bold">{siteConfig.timeline.display}</div>
              <div className="text-gray-200">Implementation Timeline</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
