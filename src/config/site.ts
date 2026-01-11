export const siteConfig = {
  name: 'Velocity Inventory Solutions',
  description: 'Expert Cin7 Core implementation and inventory management consulting for ecommerce businesses',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://velocityinventorysolutions.com',
  ogImage: '/images/og-image.jpg',
  links: {
    booking: 'https://meetings-na2.hubspot.com/jkimelman',
    linkedin: '#', // Add actual LinkedIn URL
  },
  contact: {
    email: 'info@velocityinventorysolutions.com', // Update with actual email
    phone: '', // Add phone if available
  },
  location: {
    city: 'Orlando',
    state: 'Florida',
    region: 'Central Florida',
  },
  authority: {
    title: '20+ Years Inventory and IMS Experience',
    community: '1,200+ accounting professionals',
    experience: '20+ years',
  },
  pricing: {
    min: 15000,
    max: 35000,
    currency: 'USD',
    display: '$15K-$35K',
  },
  timeline: {
    min: 60,
    max: 90,
    unit: 'days',
    display: '60-90 days',
  },
}
