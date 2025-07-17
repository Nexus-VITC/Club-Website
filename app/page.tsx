import { HeroSectionRedesigned } from "@/components/hero-section-redesigned"
import { FeaturedWorkGrid } from "@/components/featured-work-grid"
import { FromTheDesk } from "@/components/from-the-desk"
import { FooterRedesigned } from "@/components/footer-redesigned"
import { TechShowcaseSection } from "@/components/tech-showcase-section"
import TeamPage from "@/app/team/Teampage"


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSectionRedesigned />
      <FeaturedWorkGrid />
      <TechShowcaseSection />
      <TeamPage />
      <FromTheDesk />
      <FooterRedesigned />
    </div>
  )
}
