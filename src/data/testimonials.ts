export interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Working with Velocity transformed our inventory operations. The Cin7 implementation was seamless, and their expertise saved us countless hours and eliminated our spreadsheet chaos.',
    author: 'John',
    title: 'Operations Director',
    company: '$5M Amazon + Shopify Seller',
  },
  {
    id: '2',
    quote: 'The team\'s deep understanding of both accounting and inventory management made all the difference. Our COGS accuracy improved dramatically, and we finally have reliable gross margin data.',
    author: 'Sarah',
    title: 'CFO',
    company: '$8M Multi-Channel Retailer',
  },
  {
    id: '3',
    quote: 'Best investment we\'ve made for our business. The implementation was completed on time, and the ongoing support has been exceptional. Highly recommend for any growing ecommerce business.',
    author: 'Michael',
    title: 'CEO',
    company: '$3M Wholesale Distribution',
  },
]
