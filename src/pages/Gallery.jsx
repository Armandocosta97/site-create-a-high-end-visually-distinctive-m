import { useEffect } from "react"
import GalleryHeroSection from "../components/GalleryHeroSection"
import GalleryGridSection from "../components/GalleryGridSection"
import { applyPageSeo } from "../utils/applyPageSeo"
import { useI18n } from "../i18n/useI18n"

export default function Gallery() {
  const { messages } = useI18n()

  useEffect(() => {
    applyPageSeo(messages.seo.gallery)
  }, [messages])

  return (
    <main className="cursor-glow-page cursor-glow-page-portfolio">
      <GalleryHeroSection />
      <GalleryGridSection />
    </main>
  )
}
