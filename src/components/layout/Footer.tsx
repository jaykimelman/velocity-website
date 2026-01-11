import Link from 'next/link'
import { Container } from '../ui/Container'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-secondary text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="mb-4 text-xl font-bold">{siteConfig.name}</h3>
              <p className="mb-4 text-gray-300">
                Expert Cin7 Core implementation and inventory management consulting
                for growing ecommerce businesses.
              </p>
              <p className="text-sm text-gray-400">
                {siteConfig.location.city}, {siteConfig.location.state}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 font-semibold">Get in Touch</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Book Discovery Call
                  </a>
                </li>
                {siteConfig.links.linkedin && (
                  <li>
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 border-t border-gray-700 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-400">
                © {currentYear} {siteConfig.name}. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
