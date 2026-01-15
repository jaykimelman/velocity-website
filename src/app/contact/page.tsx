'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { PageHero } from '@/components/sections/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { siteConfig } from '@/config/site'
import {
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
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
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Ready to transform your inventory management? Get in touch and let's discuss your needs."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-brand-primary hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">
                        {siteConfig.location.city}, {siteConfig.location.state}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Serving clients nationwide
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                      <CalendarIcon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Book a Discovery Call
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Schedule a free 15-minute call to discuss your needs.
                      </p>
                      <Button asChild size="sm">
                        <a
                          href={siteConfig.links.booking}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Schedule Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Investment Info */}
              <div className="bg-off-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Investment Overview
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Implementation:</span>
                    <span className="font-semibold text-gray-900">
                      {siteConfig.pricing.display}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold text-gray-900">
                      {siteConfig.timeline.display}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        type="text"
                        required
                        {...register('name')}
                        error={errors.name?.message}
                        placeholder="John Smith"
                      />
                      <Input
                        label="Email"
                        type="email"
                        required
                        {...register('email')}
                        error={errors.email?.message}
                        placeholder="you@company.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                        placeholder="Tell us about your inventory challenges and goals..."
                      />
                    </div>

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
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-brand-primary hover:underline">
                        privacy policy
                      </a>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
