import { useEffect } from "react"
import MenuHeroSection from "../components/MenuHeroSection"
import MenuCategoriesSection from "../components/MenuCategoriesSection"

export default function Menu() {
  useEffect(() => {
    document.title = "Servizi | Alai Web"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Scopri i servizi di Alai Web: siti web moderni, redesign, landing page e build veloci pensate per aziende che vogliono performance e chiarezza."
      )
    }
  }, [])

  return (
    <main className="services-page">
      <MenuHeroSection />
      <MenuCategoriesSection />
    </main>
  )
}
