import { useEffect } from "react"
import GalleryHeroSection from "../components/GalleryHeroSection"
import GalleryGridSection from "../components/GalleryGridSection"

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Alai Web"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "View the gallery for a closer look at the dining room, plated dishes, kitchen detail, and service atmosphere across the restaurant experience."
      )
    }
  }, [])

  return (
    <main>
      <GalleryHeroSection />
      <GalleryGridSection />
    </main>
  )
}
