'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import type { ContactFormData } from '@/types/hubspot'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" bg="gray">
      <Container size="narrow">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Get in touch with our team to discuss how we can help transform your
            inventory management. $15K-$35K investment, 60-90 day timeline.
          </p>
        </div>

        {/* Lead Magnet Promotion */}
        <div className="mb-8 rounded-lg border-2 border-green-500/30 bg-green-50 p-8 text-center shadow-lg">
          <div className="mb-3 text-5xl">📊</div>
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            Free Inventory Health Check Dashboard
          </h3>
          <p className="mb-6 text-lg text-gray-700">
            Download our complimentary Google Sheets tool to assess your inventory
            management health and identify opportunities for improvement.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-green-600 hover:bg-green-700 text-white min-w-[250px]"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              📥 Download Free Dashboard
            </a>
          </Button>
          <p className="mt-3 text-sm text-gray-600">
            No email required • Instant access
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg bg-white p-8 shadow-medium">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Email"
              type="email"
              required
              {...register('email')}
              error={errors.email?.message}
              placeholder="you@company.com"
            />

            <Input
              label="Name"
              type="text"
              required
              {...register('name')}
              error={errors.name?.message}
              placeholder="John Smith"
            />

            <Input
              label="Company"
              type="text"
              required
              {...register('company')}
              error={errors.company?.message}
              placeholder="Your Company Name"
            />

            <Input
              label="Phone (Optional)"
              type="tel"
              {...register('phone')}
              error={errors.phone?.message}
              placeholder="(555) 123-4567"
            />

            {submitStatus === 'success' && (
              <div className="rounded-md bg-green-50 border border-green-200 p-4 text-green-800">
                <p className="font-semibold">Thank you for reaching out!</p>
                <p className="text-sm mt-1">
                  We&apos;ll be in touch within 24 hours to discuss your inventory needs.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-md bg-red-50 border border-red-200 p-4 text-red-800">
                <p className="font-semibold">Submission failed</p>
                <p className="text-sm mt-1">{errorMessage}</p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Get Started'}
            </Button>

            <p className="text-center text-sm text-gray-500">
              By submitting this form, you agree to our privacy policy. We respect
              your privacy and will only use your information to contact you about
              our services.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  )
}
