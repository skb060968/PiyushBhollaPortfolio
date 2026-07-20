import HeroSection from "@/components/HeroSection"
import ResumeSection from "@/components/ResumeSection"
import CategoriesSection from "@/components/CategoriesSection"
// import RecommendationsSection from "@/components/RecommendationsSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with full-screen image */}
      <HeroSection />

      {/* Designer Resume Section */}
      <ResumeSection />

      {/* Clickable Categories Grid */}
      <CategoriesSection />

      {/* Recommendations Section - HIDDEN until real testimonials are ready */}
      {/* Uncomment the line below and the import above when ready to show */}
      {/* <RecommendationsSection /> */}

      {/* Footer */}
      <Footer />
    </main>
  )
}
