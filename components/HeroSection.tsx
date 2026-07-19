'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section 
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#1f1f1f',
        height: '100vh',
      }}
    >
      {/* Hero image - optimized for portrait mobile, fullscreen on landscape/desktop */}
      <div 
        className="relative flex items-center justify-center w-[95vw] h-[95vw] landscape:w-full landscape:h-full md:w-full md:h-full"
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

      {/* Scroll indicator - Fixed to viewport bottom, always visible and centered */}
      <a
        href="#resume"
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce cursor-pointer pointer-events-auto flex flex-col items-center gap-2"
        aria-label="Scroll to about section"
        style={{
          // Ensure it's above everything and centered to viewport
          position: 'fixed',
        }}
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
