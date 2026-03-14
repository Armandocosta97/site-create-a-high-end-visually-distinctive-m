import { useEffect } from "react"
import AboutHeroSection from "../components/AboutHeroSection"
import PhilosophySection from "../components/PhilosophySection"
import StorySection from "../components/StorySection"
import { applyPageSeo } from "../utils/applyPageSeo"
import { useI18n } from "../i18n/useI18n"

export default function ChiSiamo() {
  const { messages } = useI18n()

  useEffect(() => {
    applyPageSeo(messages.seo.chiSiamo)
  }, [messages])

  return (
    <main className="cursor-glow-page cursor-glow-page-about">
      <AboutHeroSection />
      <StorySection />
      <PhilosophySection />
    </main>
  )
}
