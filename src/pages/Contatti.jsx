import { useEffect } from "react"
import ContactHeroSection from "../components/ContactHeroSection"
import ContactDetailsSection from "../components/ContactDetailsSection"
import { applyPageSeo } from "../utils/applyPageSeo"
import { useI18n } from "../i18n/useI18n"

export default function Contatti() {
  const { messages } = useI18n()

  useEffect(() => {
    applyPageSeo(messages.seo.contatti)
  }, [messages])

  return (
    <main className="cursor-glow-page cursor-glow-page-contact">
      <ContactHeroSection />
      <ContactDetailsSection />
    </main>
  )
}
