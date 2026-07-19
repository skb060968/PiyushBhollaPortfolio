'use client'

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { portfolioData } from "@/lib/data/portfolio"

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Fade effects temporarily disabled
    return () => {}
  }, [])

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="section-padding relative"
      style={{
        backgroundColor: '#1f1f1f',
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <div id="portfolio-header" className="text-center mb-16 transition-opacity duration-300" style={{ opacity: 1 }}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg" style={{ color: '#D4AF37' }}>
            Portfolio
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#D4AF37' }} />
          <p className="font-sans text-lg drop-shadow" style={{ color: '#D4AF37' }}>
            Explore my work across different design categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {Object.entries(portfolioData).map(([slug, category]) => (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className="group flex flex-col transition"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={category.thumbnail}
                  alt={`Portfolio category: ${category.title}`}
                  width={600}
                  height={320}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-display text-xl tracking-wide uppercase" style={{ color: '#D4AF37' }}>
                  {category.title}
                </h3>
                <button className="font-sans mt-2 text-sm font-semibold uppercase tracking-wider animate-view-button inline-block" style={{ color: '#D4AF37' }}>
                  VIEW
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
