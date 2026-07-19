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

      {/* Scroll indicator */}
      <a
        href="#resume"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce cursor-pointer pointer-events-auto"
        aria-label="Scroll to about section"
        style={{
          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
        }}
      >
        <ArrowDown className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </section>
  )
}
