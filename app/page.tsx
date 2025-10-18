import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { EcoSection } from "@/components/eco-section"
import { FaqAccordion } from "@/components/faq-accordion"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
  <main className="min-h-screen bg-gradient-to-br from-blue-100/40 via-white/60 to-blue-200/30">
      {/* Full-width sections */}
      <Header />
      <HeroSection />

      {/* Wrapped sections with horizontal padding */}
      <div className="flex-1 container mx-auto px-6 lg:px-10 xl:px-12 py-8 space-y-16">
        <FeaturesSection />
        <ProductsSection />
        <TestimonialsCarousel />
        <FaqAccordion />
        <EcoSection />
      </div>

      {/* Full-width footer */}
      <Footer />
    </main>
  )
}
