export interface Value {
  title: string
  description: string
  icon: string
}

export interface Credential {
  title: string
  description: string
}

export interface AboutContent {
  mission: string
  story: string
  values: Value[]
  credentials: Credential[]
  whyChooseUs: string[]
}

export const aboutContent: AboutContent = {
  mission:
    'To transform how ecommerce businesses manage their inventory by implementing robust systems that eliminate chaos, improve accuracy, and enable sustainable growth.',

  story: `Velocity Inventory Solutions was founded on a simple observation: too many growing ecommerce businesses are drowning in spreadsheets, struggling with inaccurate inventory data, and losing money due to poor margin visibility.

With over 20 years of experience in inventory management systems and accounting, we've seen firsthand how the right technology implementation can transform a business. As a National Xero Ambassador with a community of 1,200+ accounting professionals, we bring a unique perspective that bridges the gap between operations and finance.

We specialize in Cin7 Core because we've found it to be the most effective solution for ecommerce businesses selling across multiple channels. But more importantly, we understand that software alone isn't the answer—it's the implementation strategy, data migration expertise, and ongoing support that make the difference.

Our approach is different. We don't just set up software and walk away. We become your partner in inventory management, ensuring your team is trained, your processes are optimized, and your systems are delivering the insights you need to make better business decisions.`,

  values: [
    {
      title: 'Expertise First',
      description:
        'We bring deep technical knowledge and real-world experience to every engagement. Our team has implemented inventory systems across diverse industries and business models.',
      icon: 'AcademicCapIcon',
    },
    {
      title: 'Partnership Approach',
      description:
        'We view every client relationship as a partnership. Your success is our success, which is why we provide ongoing support long after the initial implementation.',
      icon: 'UserGroupIcon',
    },
    {
      title: 'Results Driven',
      description:
        'We measure our success by your outcomes: improved inventory accuracy, better margin visibility, reduced operational overhead, and sustainable growth.',
      icon: 'ChartBarIcon',
    },
    {
      title: 'Transparent Communication',
      description:
        'No surprises, no hidden costs. We communicate clearly throughout every engagement and set realistic expectations from day one.',
      icon: 'ChatBubbleLeftRightIcon',
    },
  ],

  credentials: [
    {
      title: '20+ Years Experience',
      description:
        'Two decades of hands-on experience with inventory management systems, ERP implementations, and ecommerce operations.',
    },
    {
      title: 'National Xero Ambassador',
      description:
        'Recognized as a leading expert in the Xero ecosystem, bridging accounting and inventory management.',
    },
    {
      title: '1,200+ Professional Network',
      description:
        'Access to a community of accounting professionals for additional expertise and best practices.',
    },
    {
      title: 'Cin7 Implementation Specialist',
      description:
        'Deep expertise in Cin7 Core implementation, configuration, and integration with major ecommerce platforms.',
    },
  ],

  whyChooseUs: [
    'Specialized focus on ecommerce businesses with $1M-$10M annual revenue',
    'End-to-end implementation including data migration and team training',
    'Integration expertise with Shopify, Amazon, Xero, A2X, and other key platforms',
    'Fixed pricing with clear deliverables—no surprise bills',
    '60-90 day implementation timeline with dedicated support',
    'Ongoing partnership approach with post-launch optimization',
  ],
}
