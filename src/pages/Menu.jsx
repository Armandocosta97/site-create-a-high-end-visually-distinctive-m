import { useEffect } from "react"
import MenuHeroSection from "../components/MenuHeroSection"
import MenuCategoriesSection from "../components/MenuCategoriesSection"
import { applyPageSeo } from "../utils/applyPageSeo"
import { useI18n } from "../i18n/useI18n"

export default function Menu() {
  const { messages } = useI18n()

  useEffect(() => {
    applyPageSeo(messages.seo.menu)
  }, [messages])

  return (
    <main className="services-page">
      <MenuHeroSection />
      <MenuCategoriesSection />
    </main>
  )
}
