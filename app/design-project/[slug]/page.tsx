"use client"

import { useState } from "react"
import { notFound, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, X } from "lucide-react"
import { designProjects } from "@/lib/data/design-projects"

export default function DesignProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = designProjects.find((p) => p.slug === params.slug)
  const router = useRouter()

  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState("")

  if (!project) {
    return notFound()
  }

  const handleBackToDesignProjects = () => {
    router.push('/category/design-projects')
  }

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

  // Generate array of images (placeholder for now, will come from meta.json later)
  const projectImages = project.images || Array(12).fill(project.coverImage)

  return (
    <>
      <main style={{ backgroundColor: '#1f1f1f' }} className="min-h-screen">
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="container-custom max-w-7xl">
            {/* Back Link */}
            <button
              onClick={handleBackToDesignProjects}
              className="inline-flex items-center gap-2 mb-8 transition group"
              style={{ color: '#D4AF37' }}
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-sans text-sm uppercase tracking-wider">
                Back to Design Projects
              </span>
            </button>

            {/* Project Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#D4AF37' }}>
                {project.name}
              </h1>
              {project.description && (
                <p className="font-sans text-base sm:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#D4AF37', opacity: 0.9 }}>
                  {project.description}
                </p>
              )}
              <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: '#D4AF37' }} />
            </div>

            {/* Responsive Image Gallery - Single Column Layout */}
            <div className="columns-1 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid cursor-pointer group"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg ring-1 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]" style={{ ringColor: '#D4AF37' }}>
                    <div className="relative w-full">
                      <Image
                        src={image}
                        alt={`${project.name} - Image ${index + 1}`}
                        width={1200}
                        height={1600}
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="100vw"
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

            {/* Image Count Info */}
            <div className="text-center mt-12">
              <p className="font-sans text-sm uppercase tracking-wider" style={{ color: '#D4AF37', opacity: 0.8 }}>
                {projectImages.length} Images
              </p>
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
