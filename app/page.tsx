import { HeroSectionRedesigned } from "@/components/hero-section-redesigned"
import { FeaturedWorkGrid } from "@/components/featured-work-grid"
import { CoreTeamTreeRedesigned } from "@/components/core-team-tree-redesigned"
import { FromTheDesk } from "@/components/from-the-desk"
import { FooterRedesigned } from "@/components/footer-redesigned"
import { TechShowcaseSection } from "@/components/tech-showcase-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div><HeroSectionRedesigned /></div>
      <div><FeaturedWorkGrid /></div>
      <div><TechShowcaseSection /></div>
      <div><CoreTeamTreeRedesigned /></div>
      <div><FromTheDesk /></div>
      <div><FooterRedesigned /></div>
    </div>
  )
}
