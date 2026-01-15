'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PageHero } from '@/components/sections/PageHero'
import { CTASection } from '@/components/sections/CTASection'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { faqs } from '@/data/faq'
import { cn } from '@/lib/utils'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  // Group FAQs by category
  const generalFAQs = faqs.slice(0, 3)
  const processFAQs = faqs.slice(3, 6)
  const technicalFAQs = faqs.slice(6, 10)

  const renderFAQList = (faqList: typeof faqs) => (
    <div className="space-y-4">
      {faqList.map((faq) => (
        <div
          key={faq.id}
          className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="flex w-full items-start justify-between p-6 text-left"
            aria-expanded={openId === faq.id}
          >
            <span className="flex-1 pr-4 font-semibold text-gray-900">
              {faq.question}
            </span>
            <ChevronDownIcon
              className={cn(
                'h-5 w-5 flex-shrink-0 text-brand-primary transition-transform',
                openId === faq.id && 'rotate-180'
              )}
            />
          </button>

          {openId === faq.id && (
            <div className="border-t border-gray-200 px-6 pb-6 pt-4">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <main>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our Cin7 Core implementation services, process, and pricing."
        breadcrumbs={[{ label: 'FAQ', href: '/faq' }]}
      />

      {/* General Questions */}
      <Section bg="white">
        <Container size="narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            General Questions
          </h2>
          {renderFAQList(generalFAQs)}
        </Container>
      </Section>

      {/* Process Questions */}
      <Section bg="gray">
        <Container size="narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Implementation Process
          </h2>
          {renderFAQList(processFAQs)}
        </Container>
      </Section>

      {/* Technical Questions */}
      <Section bg="white">
        <Container size="narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technical & Support
          </h2>
          {renderFAQList(technicalFAQs)}
        </Container>
      </Section>

      {/* Still Have Questions */}
      <Section bg="gray">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://meetings-na2.hubspot.com/jkimelman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </main>
  )
}
