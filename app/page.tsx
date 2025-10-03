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
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsCarousel />
      <EcoSection />
      <FaqAccordion />
      <Footer />
    </main>
  )
}
