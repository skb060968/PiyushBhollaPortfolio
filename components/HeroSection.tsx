'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#1f1f1f',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '4rem', // Space for navbar
      }}
    >
      {/* Hero image - responsive sizing that maintains full width on desktop */}
      <div 
        className="relative flex items-center justify-center w-full md:w-full"
        style={{
          width: '100%',
          height: '70vh', // 70% of viewport height on mobile to leave space for scroll indicator
          maxHeight: '800px',
        }}
      >
        <Image
          src="/images/hero.webp"
          alt="Piyush Bholla"
          fill
          className="object-contain"
          priority
          quality={100}
        />
      </div>

      {/* Spacer to push scroll indicator down */}
      <div style={{ flex: 1 }} />

      {/* Scroll indicator - Positioned at bottom, centered to viewport, always visible */}
      <div 
        className="w-full flex justify-center pb-6 sm:pb-8"
        style={{
          flexShrink: 0,
        }}
      >
        <a
          href="#resume"
          className="animate-bounce cursor-pointer flex flex-col items-center gap-2 z-20"
          aria-label="Scroll to about section"
        >
          {/* Text label for clarity */}
          <span 
            className="text-xs sm:text-sm font-sans uppercase tracking-wider font-semibold whitespace-nowrap"
            style={{ 
              color: '#D4AF37',
              textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 0 25px rgba(212, 175, 55, 0.6)',
            }}
          >
            Scroll Down
          </span>
          {/* Arrow icon - larger and more visible */}
          <div 
            className="rounded-full p-3 flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(212, 175, 55, 0.25)',
              border: '3px solid #D4AF37',
              boxShadow: '0 4px 16px rgba(0,0,0,0.6), 0 0 30px rgba(212, 175, 55, 0.4)',
            }}
          >
            <ArrowDown 
              className="w-7 h-7 md:w-8 md:h-8" 
              style={{ 
                color: '#D4AF37',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.9))',
                strokeWidth: 2.5,
              }} 
            />
          </div>
        </a>
      </div>
    </section>
  )
}
