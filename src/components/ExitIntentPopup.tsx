'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/Button'

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="mb-4 text-4xl">📊</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Wait! Get Your Free Inventory Health Check
              </h3>
              <p className="mb-6 text-gray-600">
                Download our complimentary dashboard to assess your inventory
                management and identify improvement opportunities.
              </p>

              <Button size="lg" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Download Free Dashboard
                </a>
              </Button>

              <button
                onClick={handleClose}
                className="mt-4 text-sm text-gray-500 hover:text-gray-700"
              >
                No thanks, I&apos;ll continue browsing
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
