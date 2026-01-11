'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { faqs } from '@/data/faq'
import { cn } from '@/lib/utils'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <Section id="faq" bg="white">
      <Container size="narrow">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            Everything you need to know about our Cin7 Core implementation services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
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
      </Container>
    </Section>
  )
}
