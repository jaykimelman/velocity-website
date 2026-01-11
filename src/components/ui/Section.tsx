import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bg?: 'white' | 'gray' | 'brand'
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, bg = 'white', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'py-16 md:py-24',
          {
            'bg-white': bg === 'white',
            'bg-gray-50': bg === 'gray',
            'bg-brand-primary/5': bg === 'brand',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Section.displayName = 'Section'

export { Section }
