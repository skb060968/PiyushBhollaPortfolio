"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import GoldCornerFrame from "@/components/GoldCornerFrame"
import {
  OrnateGoldFrame,
  MinimalGoldGlow,
  ArtDecoFrame,
  MuseumFrame,
  DoubleBorderFrame,
  FloatingCornerFrame,
} from "@/components/FrameDesigns"

export default function FrameDemoPage() {
  // Sample images from actual collection lineup
  const sampleImages = [
    "/images/collection-lookbook/shop/items/1dress/1dress-cover.webp",
    "/images/collection-lookbook/shop/items/10dress/10dress-cover.webp",
    "/images/collection-lookbook/shop/items/15dress/15dress-cover.webp",
    "/images/collection-lookbook/shop/items/6dress/6dress-cover.webp",
    "/images/collection-lookbook/shop/items/3dress/3dress-cover.webp",
    "/images/collection-lookbook/shop/items/5dress/5dress-cover.webp",
    "/images/collection-lookbook/shop/items/2dress/2dress-cover.webp",
  ]

  const frames = [
    {
      name: "Current: Gold Corner Frame",
      description: "Light background with golden corner accents",
      component: GoldCornerFrame,
    },
    {
      name: "Design 1: Ornate Gold Frame",
      description: "Continuous golden border with elaborate corners, black background",
      component: OrnateGoldFrame,
    },
    {
      name: "Design 2: Minimal Gold Glow",
      description: "No frame padding, just golden glow shadow effect",
      component: MinimalGoldGlow,
    },
    {
      name: "Design 3: Art Deco Frame",
      description: "Geometric patterns in corners, metallic gradient background",
      component: ArtDecoFrame,
    },
    {
      name: "Design 4: Museum Gallery Frame",
      description: "Wide border with texture, classic museum style",
      component: MuseumFrame,
    },
    {
      name: "Design 5: Double Border Frame",
      description: "Two-tone border design, elegant and simple",
      component: DoubleBorderFrame,
    },
    {
      name: "Design 6: Floating Corner Frame",
      description: "Minimal with decorative corner jewels and thin lines",
      component: FloatingCornerFrame,
    },
  ]

  return (
    <main style={{ backgroundColor: '#1f1f1f' }} className="min-h-screen">
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="container-custom max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 transition group"
            style={{ color: '#D4AF37' }}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-sans text-sm uppercase tracking-wider">Back to Home</span>
          </Link>

          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#D4AF37' }}>
              Frame Design Options
            </h1>
            <p className="font-sans text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6" style={{ color: '#D4AF37', opacity: 0.9 }}>
              Compare different frame designs for the Collection Lineup. Each design offers a unique aesthetic for showcasing the collection images.
            </p>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4AF37' }} />
          </div>

          {/* Frame Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {frames.map((frame, index) => {
              const FrameComponent = frame.component
              const imageToUse = sampleImages[index]
              return (
                <div key={index} className="space-y-4">
                  {/* Frame Info */}
                  <div className="text-center space-y-2">
                    <h3 className="font-display text-2xl font-bold" style={{ color: '#D4AF37' }}>
                      {frame.name}
                    </h3>
                    <p className="font-sans text-sm" style={{ color: '#D4AF37', opacity: 0.8 }}>
                      {frame.description}
                    </p>
                  </div>

                  {/* Frame Example */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-sm">
                      <FrameComponent className="shadow-xl">
                        <div className="relative overflow-hidden rounded-lg">
                          <div className="aspect-[3/4] relative">
                            <Image
                              src={imageToUse}
                              alt="Sample collection item"
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>
                        </div>
                      </FrameComponent>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Instructions */}
          <div className="mt-16 p-8 rounded-lg border-2" style={{ borderColor: '#D4AF37', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
            <h3 className="font-display text-xl font-bold mb-4" style={{ color: '#D4AF37' }}>
              How to Apply Your Chosen Design
            </h3>
            <div className="font-sans text-sm space-y-2" style={{ color: '#D4AF37', opacity: 0.9 }}>
              <p>1. Choose your preferred frame design from the options above</p>
              <p>2. Let me know which design you prefer (e.g., "Design 3: Art Deco Frame")</p>
              <p>3. I'll replace GoldCornerFrame with your chosen design throughout the collection lineup pages</p>
              <p className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                <strong>Note:</strong> The frames are used in:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Collections Lineup page (grid of collections)</li>
                <li>Individual Collection Detail pages (grid of pieces)</li>
                <li>Individual Project Detail pages (main image)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
