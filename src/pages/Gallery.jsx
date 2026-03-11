import { useEffect } from "react"
import GalleryHeroSection from "../components/GalleryHeroSection"
import GalleryGridSection from "../components/GalleryGridSection"

export default function Gallery() {
  useEffect(() => {
    document.title = "Portfolio | Alai Web"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Esplora il portfolio di Alai Web con anteprime di progetti, direzione visiva e soluzioni digitali pensate per brand e piccole imprese."
      )
    }
  }, [])

  return (
    <main className="cursor-glow-page cursor-glow-page-portfolio">
      <GalleryHeroSection />
      <GalleryGridSection />
    </main>
  )
}
