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
        paddingTop: '5rem', // Space for navbar
      }}
    >
      {/* Hero image - optimized for portrait mobile, aligned toward top on mobile */}
      <div 
        className="relative flex items-center justify-center"
        style={{
          width: '90vw',
          height: '90vw',
          maxHeight: 'calc(100vh - 10rem)', // Leave space for scroll indicator
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

      {/* Scroll indicator - Positioned at bottom, centered to viewport */}
      <div 
        className="absolute w-full flex justify-center"
        style={{
          bottom: '2rem',
          left: 0,
          right: 0,
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
