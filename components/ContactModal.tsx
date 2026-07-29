'use client'

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { siteData } from "@/lib/data"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { contact } = siteData
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        form.reset()
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        console.error('Web3Forms error:', data)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition z-10"
          aria-label="Close modal"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Modal content */}
        <div className="p-8 lg:p-10">
          <h2 className="font-display text-3xl font-bold mb-2" style={{ color: '#1f1f1f' }}>
            {contact.formHeading}
          </h2>
          <p className="text-gray-600 mb-6">
            {contact.formDescription}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="access_key" value={contact.web3formKey} />

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800
                  focus:outline-none focus:ring-2 transition"
                style={{ 
                  borderColor: '#e5e5e5',
                  '--tw-ring-color': '#D4AF37'
                } as React.CSSProperties}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800
                  focus:outline-none focus:ring-2 transition"
                style={{ 
                  borderColor: '#e5e5e5',
                  '--tw-ring-color': '#D4AF37'
                } as React.CSSProperties}
              />
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800
                  focus:outline-none focus:ring-2 transition resize-none"
                style={{ 
                  borderColor: '#e5e5e5',
                  '--tw-ring-color': '#D4AF37'
                } as React.CSSProperties}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-lg font-semibold transition disabled:opacity-50"
              style={{
                backgroundColor: '#D4AF37',
                color: '#1f1f1f',
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status messages */}
            {submitStatus === 'success' && (
              <p className="text-green-600 text-center text-sm">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center text-sm">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
