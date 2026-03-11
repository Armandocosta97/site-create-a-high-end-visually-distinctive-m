import { useEffect } from "react"
import AboutHeroSection from "../components/AboutHeroSection"
import PhilosophySection from "../components/PhilosophySection"
import StorySection from "../components/StorySection"

export default function ChiSiamo() {
  useEffect(() => {
    document.title = "Chi siamo | Alai Web"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read the story, philosophy, and hospitality approach behind a detail-driven dining experience shaped by seasonal ingredients and precise service."
      )
    }
  }, [])

  return (
    <main>
      <AboutHeroSection />
      <StorySection />
      <PhilosophySection />
    </main>
  )
}
