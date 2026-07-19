"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, X } from "lucide-react"

export default function FashionIllustrationsPage() {
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState("")

  const illustrations = [
    "/images/fashion-illustrations/illustration-01.webp",
    "/images/fashion-illustrations/illustration-02.webp",
    "/images/fashion-illustrations/illustration-03.webp",
    "/images/fashion-illustrations/illustration-04.webp",
    "/images/fashion-illustrations/illustration-05.webp",
    "/images/fashion-illustrations/illustration-06.webp",
    "/images/fashion-illustrations/illustration-07.webp",
    "/images/fashion-illustrations/illustration-08.webp",
    "/images/fashion-illustrations/illustration-09.webp",
    "/images/fashion-illustrations/illustration-10.webp",
    "/images/fashion-illustrations/illustration-11.webp",
    "/images/fashion-illustrations/illustration-12.webp",
    "/images/fashion-illustrations/illustration-13.webp",
    "/images/fashion-illustrations/illustration-14.webp",
    "/images/fashion-illustrations/illustration-15.webp",
    "/images/fashion-illustrations/illustration-16.webp",
    "/images/fashion-illustrations/illustration-17.webp",
    "/images/fashion-illustrations/illustration-18.webp",
  ]

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
    setLightboxOpen(true)
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage("")
    // Restore body scroll
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <main style={{ backgroundColor: '#1f1f1f' }} className="min-h-screen">
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="container-custom max-w-7xl">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 mb-8 transition group"
              style={{ color: '#D4AF37' }}
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-sans text-sm uppercase tracking-wider">Back to Home</span>
            </Link>

            <div className="text-center mb-12 sm:mb-16">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#D4AF37' }}>
                Fashion Illustrations
              </h1>
              <p className="font-sans text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6" style={{ color: '#D4AF37', opacity: 0.9 }}>
                A collection of fashion sketches and illustrations showcasing creative concepts and artistic vision.
              </p>
              <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4AF37' }} />
            </div>

            {/* Horizontal Scroll Gallery - Similar to Design Projects but Horizontal */}
            <div className="relative flex justify-center">
              {/* Scrollable Container */}
              <div 
                className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-thin pb-4"
                style={{
                  scrollSnapType: 'x mandatory',
                  maxWidth: '100%',
                }}
              >
                {illustrations.map((illustration, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 cursor-pointer group"
                    style={{
                      scrollSnapAlign: 'center',
                    }}
                    onClick={() => openLightbox(illustration)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                      <div className="relative" style={{ width: '350px', height: '467px' }}>
                        <Image
                          src={illustration}
                          alt={`Fashion Illustration ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="350px"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-white text-sm uppercase tracking-wider">
                            View Full Size
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back Button at Bottom */}
            <div className="text-center mt-12">
              <a
                href="/#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  backgroundColor: '#D4AF37',
                  color: '#1f1f1f',
                }}
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full transition-all hover:scale-110"
            style={{ backgroundColor: '#D4AF37' }}
            aria-label="Close lightbox"
          >
            <X size={24} className="text-black" />
          </button>

          {/* Lightbox Image */}
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={lightboxImage}
                alt="Full size preview"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </div>
          </div>

          {/* Click to close hint */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">
            <p className="font-sans text-xs sm:text-sm uppercase tracking-wider text-white/60">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </>
  )
}
