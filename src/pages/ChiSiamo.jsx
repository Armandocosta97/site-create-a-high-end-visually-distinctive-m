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
        "Scopri il metodo, la visione e l'approccio di Alai Web: design essenziale, sviluppo veloce e siti pensati per obiettivi reali."
      )
    }
  }, [])

  return (
    <main className="cursor-glow-page cursor-glow-page-about">
      <AboutHeroSection />
      <StorySection />
      <PhilosophySection />
    </main>
  )
}
