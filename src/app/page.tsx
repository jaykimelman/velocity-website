import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { ContactForm } from '@/components/sections/ContactForm'
// import { ExitIntentPopup } from '@/components/ExitIntentPopup' // Uncomment to enable

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ContactForm />
      {/* <ExitIntentPopup /> */}
    </main>
  )
}
