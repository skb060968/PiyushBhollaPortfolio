'use client'

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: '#1f1f1f',
      }}
    >
      {/* Hero image - Full width on mobile, contained on desktop */}
      <div 
        className="relative w-full h-[60vh] md:h-screen"
      >
        <Image
          src="/images/home/hero.webp"
          alt="Piyush Bholla"
          fill
          className="object-cover md:object-contain"
          priority
          quality={100}
        />
      </div>

      <p
  className="px-5 pt-0 pb-20 text-center font-display font-light leading-[1.15]"
  style={{
    color: "#D4AF37",
    fontSize: "clamp(1.45rem, 4.8vw, 3.75rem)",
    textShadow: `
      0 0 8px rgba(212,175,55,0.85),
      0 0 18px rgba(212,175,55,0.6),
      0 0 35px rgba(212,175,55,0.35)
    `,
  }}
>
  <span className="block whitespace-nowrap">
    PORTFOLIO
  </span>

  <span className="block italic whitespace-nowrap mt-1">
    Explore my work and experience
  </span>
</p>       

      {/* Scroll indicator - Absolute position at bottom on mobile, overlays image on desktop */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 w-full flex justify-center z-20">
        <a
          href="#resume"
          className="animate-bounce cursor-pointer flex flex-col items-center gap-2"
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
