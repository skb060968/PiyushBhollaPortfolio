"use client"

import { useState, useRef, useEffect } from "react"
import { notFound, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/lib/data/projects"
import { collections } from "@/lib/data/collections"
import { OrnateGoldFrame } from "@/components/FrameDesigns"

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  const router = useRouter()

  if (!project) {
    return notFound()
  }

  // Find which collection this project belongs to
  const parentCollection = collections.find(c => c.projects.includes(project.slug))

  const [activeImage, setActiveImage] = useState(project.coverImage)
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const imageRef = useRef<HTMLDivElement>(null)

  // Create array of full-size images from thumbnails
  const imagesList = [...project.thumbnails].reverse().map((thumb) => {
    const filename = thumb.split("/").pop()
    return project.images.find(img => img.endsWith(filename || "")) || project.coverImage
  })

  // Update active image when index changes
  useEffect(() => {
    setActiveImage(imagesList[activeIndex])
  }, [activeIndex, imagesList])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left - show next image
      if (activeIndex < imagesList.length - 1) {
        setActiveIndex(activeIndex + 1)
      }
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right - show previous image
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1)
      }
    }
  }

  const handleBackToCollection = () => {
    if (parentCollection) {
      // Use collection-lookbook as the parent category since collections belong to Collection Lookbook
      router.push(`/category/collection-lookbook/${parentCollection.slug}`)
    } else {
      router.push('/category/collection-lookbook')
    }
  }

  return (
    <main style={{ backgroundColor: '#1f1f1f' }} className="min-h-screen">
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-28">
        <div className="container-custom">
          {/* Back Link */}
          <button
            onClick={handleBackToCollection}
            className="inline-flex items-center gap-2 mb-8 transition group"
            style={{ color: '#D4AF37' }}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-sans text-sm uppercase tracking-wider">
              {parentCollection ? `Back to ${parentCollection.name}` : 'Back to Collections'}
            </span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
            {/* IMAGE COLUMN */}
            <div className="flex flex-col items-center w-full">
              {/* Main Image with Premium Frame and Swipe Indicators */}
              <div className="relative inline-block w-full max-w-md">
                {/* Dot indicators at bottom - only show if multiple images */}
                {imagesList.length > 1 && (
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30 pointer-events-none md:hidden">
                    {imagesList.map((_, idx) => (
                      <div
                        key={idx}
                        className="rounded-full transition-all duration-300 shadow-md"
                        style={{
                          width: idx === activeIndex ? '10px' : '8px',
                          height: idx === activeIndex ? '10px' : '8px',
                          backgroundColor: idx === activeIndex ? '#D4AF37' : 'rgba(255, 255, 255, 0.6)',
                        }}
                      />
                    ))}
                  </div>
                )}
                
                <div 
                  ref={imageRef}
                  className="touch-pan-y"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <OrnateGoldFrame className="shadow-xl sm:shadow-2xl">
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg ring-1 ring-stone-200">
                      <div className="w-full aspect-[3/4] bg-stone-100 relative">
                        <Image
                          src={activeImage}
                          alt={project.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </OrnateGoldFrame>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {project.thumbnails.length > 1 && (
                <div className="mt-6 sm:mt-8 w-full max-w-md px-2">
                  <p className="font-sans text-xs font-medium uppercase tracking-wider mb-3 text-center" style={{ color: '#D4AF37', opacity: 0.8 }}>
                    View Gallery
                  </p>
                  <div className="flex gap-1.5 sm:gap-2 justify-center overflow-x-auto pt-2 pb-2">
                    {[...project.thumbnails].reverse().map((thumb, index) => {
                      const filename = thumb.split("/").pop()
                      const correspondingItem = project.images.find(img =>
                        img.endsWith(filename || "")
                      )
                      const isActive = index === activeIndex

                      return (
                        <button
                          key={thumb}
                          onClick={() => setActiveIndex(index)}
                          aria-pressed={isActive}
                          className={`relative flex-shrink-0 w-12 sm:w-14 md:w-16 aspect-[3/4] rounded-md transition-all duration-300 ease-out
                            ${
                              isActive
                                ? "ring-2 shadow-md scale-105"
                                : "ring-1 ring-stone-600 hover:ring-stone-400 hover:shadow-md hover:scale-105"
                            }`}
                          style={isActive ? { borderColor: '#D4AF37' } : {}}
                        >
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/30 to-transparent z-10 pointer-events-none"></div>
                          )}
                          {isActive && (
                            <div className="absolute top-0.5 right-0.5 z-20 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: '#D4AF37' }}>
                              <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                          <Image
                            src={thumb}
                            alt={`${project.name} view ${index + 1}`}
                            fill
                            className="object-cover rounded-md"
                            sizes="75px"
                          />
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* CONTENT COLUMN */}
            <div className="w-full max-w-xl px-4 sm:px-0">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#D4AF37' }}>
                {project.name}
              </h1>

              {project.description && (
                <p className="font-sans text-sm sm:text-base leading-relaxed mb-8 sm:mb-12" style={{ color: '#D4AF37', opacity: 0.9 }}>
                  {project.description}
                </p>
              )}

              {/* Project Details */}
              <div className="mb-6 sm:mb-8 p-5 sm:p-6 rounded-xl shadow-sm" style={{ backgroundColor: '#2a2a2a' }}>
                <h3 className="font-display text-base sm:text-lg font-bold mb-3 sm:mb-4" style={{ color: '#D4AF37' }}>
                  Project Details
                </h3>
                <ul className="space-y-2 font-sans text-xs sm:text-sm" style={{ color: '#D4AF37', opacity: 0.9 }}>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: '#D4AF37' }}>•</span>
                    <span><strong>Collection:</strong> {parentCollection?.name || 'Portfolio'}</span>
                  </li>
                  {parentCollection?.season && (
                    <li className="flex items-start">
                      <span className="mr-2" style={{ color: '#D4AF37' }}>•</span>
                      <span><strong>Season:</strong> {parentCollection.season}</span>
                    </li>
                  )}
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: '#D4AF37' }}>•</span>
                    <span>Premium design and craftsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" style={{ color: '#D4AF37' }}>•</span>
                    <span>Unique artistic vision and execution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back Button at Bottom */}
          <div className="text-center mt-16">
            <button
              onClick={handleBackToCollection}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ 
                backgroundColor: '#D4AF37',
                color: '#1f1f1f',
              }}
            >
              <ArrowLeft size={20} />
              {parentCollection ? `Back to ${parentCollection.name}` : 'Back to Collections'}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
