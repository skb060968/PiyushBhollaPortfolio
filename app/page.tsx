import HeroSection from "@/components/HeroSection"
import ResumeSection from "@/components/ResumeSection"
import CategoriesSection from "@/components/CategoriesSection"
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

      {/* Footer */}
      <Footer />
    </main>
  )
}
