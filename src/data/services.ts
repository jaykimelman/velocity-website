export interface Service {
  id: string
  title: string
  description: string
  benefits: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: 'cin7-implementation',
    title: 'Cin7 Core Implementation',
    description: 'End-to-end Cin7 Core implementation tailored to your ecommerce business. We handle setup, configuration, data migration, and training to ensure a smooth transition and optimal system performance.',
    benefits: [
      'Customized implementation strategy',
      'Complete data migration and integration',
      'Comprehensive team training',
      'Ongoing support and optimization',
    ],
    icon: 'Cog',
  },
  {
    id: 'inventory-consulting',
    title: 'Inventory Management Consulting',
    description: 'Strategic consulting to optimize your inventory processes, reduce costs, and improve efficiency. Expert guidance to maximize your inventory management system ROI.',
    benefits: [
      'Process optimization strategies',
      'System integration planning',
      'Best practices implementation',
      'Performance analytics and reporting',
    ],
    icon: 'ChartBar',
  },
  {
    id: 'multi-system-integration',
    title: 'Multi-System Integration & Automation',
    description: 'Connect Cin7 Core with Shopify, Amazon, Xero, and A2X using powerful automation platforms like Make.com and n8n. Create seamless data flows between all your critical business systems.',
    benefits: [
      'Eliminate manual data entry',
      'Single source of truth across platforms',
      'Automated workflows and processes',
      'Real-time synchronization',
    ],
    icon: 'ArrowPath',
  },
]
