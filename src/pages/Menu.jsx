import { useEffect } from "react"
import MenuHeroSection from "../components/MenuHeroSection"
import MenuCategoriesSection from "../components/MenuCategoriesSection"

export default function Menu() {
  useEffect(() => {
    document.title = "Menu | Alai Web"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Browse the current menu with seasonal antipasti, pasta, mains, and desserts presented with a balanced, contemporary dining approach."
      )
    }
  }, [])

  return (
    <main>
      <MenuHeroSection />
      <MenuCategoriesSection />
    </main>
  )
}
