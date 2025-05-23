import { HeroSection } from '@/components/sections/hero-section'
import { FeaturedProductsSection } from '@/components/sections/featured-products-section'
import { ProductCategoriesSection } from '@/components/sections/product-categories-section'
import { PromotionalBannerSection } from '@/components/sections/promotional-banner-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
// import { AboutSection } from '@/components/sections/about-section'
// import { ProjectsSection } from '@/components/sections/projects-section'
// import { ExperienceSection } from '@/components/sections/experience-section'
// import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <ProductCategoriesSection />
      <PromotionalBannerSection />
      <TestimonialsSection />
    </>
  )
} 