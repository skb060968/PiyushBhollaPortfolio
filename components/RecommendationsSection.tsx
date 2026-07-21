'use client'

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"
import { recommendations } from "@/lib/data/recommendations"

export default function RecommendationsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Fade effects temporarily disabled
    return () => {}
  }, [])

  return (
    <section 
      id="recommendations" 
      ref={sectionRef}
      className="section-padding relative"
      style={{
        backgroundColor: '#1f1f1f',
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <div id="recommendations-header" className="text-center mb-16 transition-opacity duration-300" style={{ opacity: 1 }}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg" style={{ color: '#D4AF37' }}>
            Recommendations
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#D4AF37' }} />
          <p className="font-sans text-lg drop-shadow" style={{ color: '#D4AF37' }}>
            What people say about me
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="relative p-8 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                {recommendation.rating && (
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: recommendation.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="#D4AF37"
                        style={{ color: '#D4AF37' }}
                      />
                    ))}
                  </div>
                )}

                {/* Testimonial Text */}
                <p className="font-sans text-sm leading-relaxed mb-6 drop-shadow" style={{ color: '#D4AF37' }}>
                  {recommendation.content}
                </p>

                {/* Author Info */}
                <div className="border-t pt-4" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                  <p className="font-sans font-bold text-base drop-shadow" style={{ color: '#D4AF37' }}>
                    {recommendation.name}
                  </p>
                  <p className="font-sans text-sm drop-shadow" style={{ color: '#D4AF37' }}>
                    {recommendation.role}
                  </p>
                  {recommendation.company && (
                    <p className="font-sans text-sm drop-shadow" style={{ color: '#D4AF37' }}>
                      {recommendation.company}
                    </p>
                  )}
                  {recommendation.location && (
                    <p className="font-sans text-sm drop-shadow" style={{ color: '#D4AF37' }}>
                      {recommendation.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
