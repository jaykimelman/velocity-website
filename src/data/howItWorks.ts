export interface Step {
  id: number
  title: string
  description: string
  icon: string
}

export const steps: Step[] = [
  {
    id: 1,
    title: 'Discovery & Assessment',
    description: 'We start with a comprehensive analysis of your current inventory processes, pain points, and business requirements. This helps us design the perfect implementation strategy for your unique needs.',
    icon: 'MagnifyingGlass',
  },
  {
    id: 2,
    title: 'Implementation Planning',
    description: 'We create a detailed project plan outlining timelines, milestones, data migration strategy, integration requirements, and team training schedules. You\'ll know exactly what to expect every step of the way.',
    icon: 'ClipboardDocumentList',
  },
  {
    id: 3,
    title: 'System Configuration & Migration',
    description: 'Our team configures Cin7 Core to match your business processes, migrates your data with precision, and sets up all necessary integrations with your ecommerce platforms and accounting systems.',
    icon: 'Cog',
  },
  {
    id: 4,
    title: 'Training & Go-Live Support',
    description: 'We provide hands-on training for your team, comprehensive documentation, and dedicated support during the go-live period. We ensure you\'re fully confident in using the system before we step back.',
    icon: 'AcademicCap',
  },
]
