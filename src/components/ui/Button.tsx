import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-brand-accent text-white hover:bg-brand-accent/90 focus-visible:ring-brand-accent':
              variant === 'primary',
            'bg-brand-secondary text-white hover:bg-brand-secondary/90 focus-visible:ring-brand-secondary':
              variant === 'secondary',
            'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent/10 focus-visible:ring-brand-accent':
              variant === 'outline',
            'hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-400':
              variant === 'ghost',
            'h-9 px-4 py-2 text-sm': size === 'sm',
            'h-11 px-6 py-2 text-base': size === 'md',
            'h-14 px-8 py-3 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
