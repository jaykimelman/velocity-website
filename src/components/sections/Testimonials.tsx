import { Card, CardContent } from '../ui/Card'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <Section id="testimonials" bg="gray">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            Trusted by growing ecommerce businesses to transform their inventory
            operations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} hover>
              <CardContent className="pt-6">
                {/* Quote */}
                <div className="mb-4">
                  <svg
                    className="h-8 w-8 text-brand-primary/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="mb-6 text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
