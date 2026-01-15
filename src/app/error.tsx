'use client'

import { useEffect } from 'react'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <Section className="min-h-[60vh] flex items-center">
      <Container className="text-center">
        <h1 className="text-6xl font-bold text-brand-primary mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Something Went Wrong
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again, or contact us if
          the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={reset} size="lg">
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/">Return Home</a>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
