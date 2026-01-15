export interface ServiceFeature {
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceDetail {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  heroDescription: string
  features: ServiceFeature[]
  process: ProcessStep[]
  faqs: ServiceFAQ[]
  ctaTitle: string
  ctaDescription: string
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'cin7-implementation',
    slug: 'cin7-implementation',
    title: 'Cin7 Core Implementation',
    tagline: 'Expert Cin7 Core Setup for Ecommerce Success',
    description:
      'End-to-end Cin7 Core implementation tailored to your ecommerce business.',
    heroDescription:
      'Transform your inventory management with a professional Cin7 Core implementation. We handle everything from initial setup and configuration to data migration and team training, ensuring your system is optimized for your specific business needs.',
    features: [
      {
        title: 'Customized Configuration',
        description:
          'We configure Cin7 Core to match your exact business processes, including custom fields, workflows, and automation rules.',
        icon: 'CogIcon',
      },
      {
        title: 'Data Migration',
        description:
          'Safe and accurate migration of your existing inventory data, product catalogs, customer records, and historical transactions.',
        icon: 'CircleStackIcon',
      },
      {
        title: 'Platform Integration',
        description:
          'Seamless integration with your existing ecommerce platforms including Shopify, Amazon, WooCommerce, and more.',
        icon: 'LinkIcon',
      },
      {
        title: 'Team Training',
        description:
          'Comprehensive training sessions for your team covering daily operations, reporting, and best practices.',
        icon: 'AcademicCapIcon',
      },
      {
        title: 'Go-Live Support',
        description:
          'Dedicated support during your launch period to address any issues and ensure a smooth transition.',
        icon: 'RocketLaunchIcon',
      },
      {
        title: 'Post-Launch Optimization',
        description:
          'Ongoing support and optimization to ensure your system continues to meet your evolving business needs.',
        icon: 'ArrowTrendingUpIcon',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Assessment',
        description:
          'We analyze your current processes, data, and requirements to create a detailed implementation plan.',
      },
      {
        step: 2,
        title: 'System Configuration',
        description:
          'Configure Cin7 Core with custom settings, integrations, and workflows tailored to your business.',
      },
      {
        step: 3,
        title: 'Data Migration',
        description:
          'Carefully migrate your existing data with validation and testing to ensure accuracy.',
      },
      {
        step: 4,
        title: 'Training & Go-Live',
        description:
          'Train your team and launch your new system with dedicated support throughout the transition.',
      },
    ],
    faqs: [
      {
        question: 'How long does a typical Cin7 Core implementation take?',
        answer:
          'Most implementations are completed within 60-90 days, depending on the complexity of your business and data migration requirements.',
      },
      {
        question: 'Will my team be able to use the system after implementation?',
        answer:
          'Absolutely. We provide comprehensive training and documentation, plus ongoing support to ensure your team is confident using the system.',
      },
      {
        question: 'Can you migrate data from our existing system?',
        answer:
          'Yes, we specialize in data migration from spreadsheets, other inventory systems, and legacy software. We ensure all your historical data is preserved.',
      },
    ],
    ctaTitle: 'Ready to Implement Cin7 Core?',
    ctaDescription:
      'Book a discovery call to discuss your implementation needs and get a detailed project proposal.',
  },
  {
    id: 'inventory-consulting',
    slug: 'inventory-consulting',
    title: 'Inventory Management Consulting',
    tagline: 'Strategic Guidance for Inventory Excellence',
    description:
      'Expert consulting to optimize your inventory processes and maximize ROI.',
    heroDescription:
      'Get expert guidance to transform your inventory management operations. Our consulting services help you identify inefficiencies, implement best practices, and build processes that scale with your business growth.',
    features: [
      {
        title: 'Process Assessment',
        description:
          'Comprehensive analysis of your current inventory processes to identify bottlenecks and improvement opportunities.',
        icon: 'MagnifyingGlassIcon',
      },
      {
        title: 'Strategy Development',
        description:
          'Custom inventory strategy aligned with your business goals, growth plans, and operational requirements.',
        icon: 'LightBulbIcon',
      },
      {
        title: 'KPI Framework',
        description:
          'Establish key performance indicators and reporting dashboards to track inventory health and performance.',
        icon: 'ChartBarIcon',
      },
      {
        title: 'Cost Optimization',
        description:
          'Identify opportunities to reduce carrying costs, improve turnover, and optimize reorder points.',
        icon: 'CurrencyDollarIcon',
      },
      {
        title: 'Forecasting Models',
        description:
          'Implement demand forecasting to improve purchasing decisions and reduce stockouts and overstock.',
        icon: 'CalendarIcon',
      },
      {
        title: 'Vendor Management',
        description:
          'Optimize supplier relationships, lead times, and purchasing processes for better inventory flow.',
        icon: 'TruckIcon',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Current State Analysis',
        description:
          'Deep dive into your existing inventory processes, systems, and pain points.',
      },
      {
        step: 2,
        title: 'Opportunity Identification',
        description:
          'Identify specific areas for improvement and quantify potential ROI.',
      },
      {
        step: 3,
        title: 'Roadmap Development',
        description:
          'Create a prioritized action plan with clear milestones and expected outcomes.',
      },
      {
        step: 4,
        title: 'Implementation Support',
        description:
          'Guide your team through execution and measure results against targets.',
      },
    ],
    faqs: [
      {
        question: 'Do I need to use Cin7 Core to work with you?',
        answer:
          'No, our consulting services can help optimize any inventory management system or even help you select the right system for your needs.',
      },
      {
        question: 'What size businesses do you work with?',
        answer:
          'We specialize in ecommerce businesses with $1M-$10M in annual revenue, though we work with companies at various growth stages.',
      },
      {
        question: 'How do you measure consulting success?',
        answer:
          'We establish clear KPIs at the start of every engagement and track progress against targets including inventory accuracy, turnover rates, and cost savings.',
      },
    ],
    ctaTitle: 'Need Expert Inventory Guidance?',
    ctaDescription:
      'Schedule a consultation to discuss your inventory challenges and discover improvement opportunities.',
  },
  {
    id: 'multi-system-integration',
    slug: 'multi-system-integration',
    title: 'Multi-System Integration & Automation',
    tagline: 'Connect Your Business Systems Seamlessly',
    description:
      'Integrate Cin7 Core with all your critical business platforms for seamless operations.',
    heroDescription:
      'Eliminate manual data entry and create seamless data flows between Cin7 Core, Shopify, Amazon, Xero, A2X, and other platforms. Our integration solutions use powerful automation tools like Make.com and n8n to keep your systems in perfect sync.',
    features: [
      {
        title: 'Ecommerce Platform Integration',
        description:
          'Connect Cin7 Core with Shopify, Amazon, WooCommerce, BigCommerce, and other sales channels.',
        icon: 'ShoppingCartIcon',
      },
      {
        title: 'Accounting Integration',
        description:
          'Sync with Xero, QuickBooks, or other accounting software for accurate financial data.',
        icon: 'CalculatorIcon',
      },
      {
        title: 'A2X Integration',
        description:
          'Proper marketplace settlement integration for accurate revenue recognition and reconciliation.',
        icon: 'BanknotesIcon',
      },
      {
        title: 'Custom Automations',
        description:
          'Build custom workflows using Make.com or n8n to automate repetitive tasks and data flows.',
        icon: 'CpuChipIcon',
      },
      {
        title: 'Real-Time Sync',
        description:
          'Ensure inventory levels, orders, and financial data are always current across all systems.',
        icon: 'ArrowPathIcon',
      },
      {
        title: 'Error Handling',
        description:
          'Built-in monitoring and alerting to catch and resolve sync issues before they cause problems.',
        icon: 'ShieldCheckIcon',
      },
    ],
    process: [
      {
        step: 1,
        title: 'System Mapping',
        description:
          'Document all systems, data flows, and integration requirements.',
      },
      {
        step: 2,
        title: 'Integration Design',
        description:
          'Design optimal data flows and automation logic for your specific needs.',
      },
      {
        step: 3,
        title: 'Build & Test',
        description:
          'Build integrations with thorough testing in a staging environment.',
      },
      {
        step: 4,
        title: 'Deploy & Monitor',
        description:
          'Deploy to production with monitoring and support for ongoing reliability.',
      },
    ],
    faqs: [
      {
        question: 'What platforms can you integrate with Cin7 Core?',
        answer:
          'We integrate with all major ecommerce platforms (Shopify, Amazon, WooCommerce), accounting systems (Xero, QuickBooks), and specialty tools like A2X, ShipStation, and more.',
      },
      {
        question: 'What automation tools do you use?',
        answer:
          'We primarily use Make.com and n8n for their flexibility and reliability. We select the best tool based on your specific requirements and existing tech stack.',
      },
      {
        question: 'How do you handle sync errors?',
        answer:
          'All integrations include error handling, logging, and alerting. We set up monitoring dashboards and can provide ongoing support to address any issues quickly.',
      },
    ],
    ctaTitle: 'Ready to Connect Your Systems?',
    ctaDescription:
      'Book a call to discuss your integration needs and see how we can streamline your operations.',
  },
]

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((service) => service.slug)
}
