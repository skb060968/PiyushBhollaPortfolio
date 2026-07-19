"use client"

import Image from "next/image"

interface WoodenEaselProps {
  imageSrc: string
  imageAlt: string
  priority?: boolean
  className?: string
}

/**
 * WoodenEasel Component
 * 
 * A reusable component that displays an image on a CSS-rendered wooden easel stand.
 * Features an A-frame easel with light brown polished wood finish.
 * 
 * @param imageSrc - The image source URL
 * @param imageAlt - Alt text for the image
 * @param priority - Whether to prioritize loading this image (for LCP optimization)
 * @param className - Additional CSS classes for the container
 */
export default function WoodenEasel({ 
  imageSrc, 
  imageAlt, 
  priority = false,
  className = "" 
}: WoodenEaselProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: '500px', 
        height: '750px',
        maxWidth: '90vw',
      }}
    >
      {/* Left Front Leg */}
      <div
        className="absolute"
        style={{
          width: '40px',
          height: '650px',
          left: '60px',
          top: '50px',
          background: `
            repeating-linear-gradient(
              90deg,
              #C19A6B 0px,
              #D2B48C 2px,
              #E8D4B0 4px,
              #D2B48C 6px,
              #C19A6B 8px
            ),
            linear-gradient(to bottom, #C19A6B 0%, #D2B48C 50%, #E8D4B0 100%)
          `,
          borderRadius: '20px',
          boxShadow: '-3px 6px 12px rgba(0,0,0,0.4), inset -2px 0 4px rgba(0,0,0,0.2), inset 2px 0 4px rgba(255,255,255,0.3)',
          transform: 'rotate(15deg)',
          transformOrigin: 'bottom center',
          zIndex: 2,
          border: '1px solid #A0826D',
        }}
      />

      {/* Right Front Leg */}
      <div
        className="absolute"
        style={{
          width: '40px',
          height: '650px',
          right: '60px',
          top: '50px',
          background: `
            repeating-linear-gradient(
              90deg,
              #C19A6B 0px,
              #D2B48C 2px,
              #E8D4B0 4px,
              #D2B48C 6px,
              #C19A6B 8px
            ),
            linear-gradient(to bottom, #C19A6B 0%, #D2B48C 50%, #E8D4B0 100%)
          `,
          borderRadius: '20px',
          boxShadow: '3px 6px 12px rgba(0,0,0,0.4), inset -2px 0 4px rgba(0,0,0,0.2), inset 2px 0 4px rgba(255,255,255,0.3)',
          transform: 'rotate(-15deg)',
          transformOrigin: 'bottom center',
          zIndex: 2,
          border: '1px solid #A0826D',
        }}
      />

      {/* Top Horizontal Bar */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          width: '380px',
          height: '35px',
          top: '110px',
          background: `
            repeating-linear-gradient(
              0deg,
              #C19A6B 0px,
              #D2B48C 1px,
              #E8D4B0 2px,
              #D2B48C 3px,
              #C19A6B 4px
            ),
            linear-gradient(to right, #B8956B, #D2B48C, #E8D4B0, #D2B48C, #B8956B)
          `,
          borderRadius: '17.5px',
          boxShadow: '0 5px 10px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.3)',
          zIndex: 3,
          border: '1px solid #A0826D',
        }}
      />

      {/* Middle Back Support */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          width: '32px',
          height: '550px',
          top: '50px',
          background: `
            repeating-linear-gradient(
              90deg,
              #C19A6B 0px,
              #D2B48C 1.5px,
              #E8D4B0 3px,
              #D2B48C 4.5px,
              #C19A6B 6px
            ),
            linear-gradient(to right, #C19A6B, #D2B48C, #C19A6B)
          `,
          borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2), inset -2px 0 3px rgba(0,0,0,0.15), inset 2px 0 3px rgba(255,255,255,0.25)',
          opacity: 0.85,
          zIndex: 1,
          border: '1px solid #A0826D',
        }}
      />

      {/* Bottom Horizontal Bar */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          width: '380px',
          height: '35px',
          top: '570px',
          background: `
            repeating-linear-gradient(
              0deg,
              #C19A6B 0px,
              #D2B48C 1px,
              #E8D4B0 2px,
              #D2B48C 3px,
              #C19A6B 4px
            ),
            linear-gradient(to right, #B8956B, #D2B48C, #E8D4B0, #D2B48C, #B8956B)
          `,
          borderRadius: '17.5px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.5), inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.3)',
          zIndex: 3,
          border: '2px solid #8B7355',
        }}
      />

      {/* Canvas with Image - Positioned to rest on bottom bar */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bg-black shadow-2xl overflow-hidden"
        style={{
          width: '320px',
          height: '427px',
          top: '143px',
          zIndex: 10,
          boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="320px"
          priority={priority}
        />
      </div>
    </div>
  )
}
