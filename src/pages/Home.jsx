import { useEffect } from "react"
import HeroSection from "../components/HeroSection"
import BrandStoryPreviewSection from "../components/BrandStoryPreviewSection"
import SignaturePreviewSection from "../components/SignaturePreviewSection"
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"

export default function Home() {
  useEffect(() => {
    document.title = "Alai Web | Modern websites that look great and work"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Alai Web builds modern, fast, and SEO-ready websites for small businesses that need clarity, performance, and stronger digital presence."
      )
    }
  }, [])

  return (
    <main>
      <HeroSection />
      <SignaturePreviewSection />
      <BrandStoryPreviewSection />
      <FloatingWhatsAppButton />
    </main>
  )
}
