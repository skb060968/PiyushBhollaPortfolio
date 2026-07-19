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

      {/* Scroll indicator - Bold and clear, always visible at bottom */}
      <a
        href="#resume"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer pointer-events-auto flex flex-col items-center gap-2"
        aria-label="Scroll to about section"
      >
        {/* Text label for clarity */}
        <span 
          className="text-xs font-sans uppercase tracking-wider font-semibold"
          style={{ 
            color: '#D4AF37',
            textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(212, 175, 55, 0.5)',
          }}
        >
          Scroll Down
        </span>
        {/* Arrow icon - larger and more visible */}
        <div 
          className="rounded-full p-2 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(212, 175, 55, 0.2)',
            border: '2px solid #D4AF37',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5), 0 0 20px rgba(212, 175, 55, 0.3)',
          }}
        >
          <ArrowDown 
            className="w-6 h-6 md:w-7 md:h-7" 
            style={{ 
              color: '#D4AF37',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))',
            }} 
          />
        </div>
      </a>
    </section>
  )
}
