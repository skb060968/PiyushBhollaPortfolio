'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section 
      className="relative w-full flex items-start justify-center overflow-hidden pt-20 sm:pt-24 md:items-center md:pt-0"
      style={{
        backgroundColor: '#1f1f1f',
        height: '100vh',
      }}
    >
      {/* Hero image - optimized for portrait mobile, aligned toward top on mobile */}
      <div 
        className="relative flex items-center justify-center w-[90vw] h-[90vw] landscape:w-full landscape:h-full md:w-full md:h-full"
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

      {/* Scroll indicator - Only visible in hero section */}
      <a
        href="#resume"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer pointer-events-auto flex flex-col items-center gap-2"
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
    </section>
  )
}
