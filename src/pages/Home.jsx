import { useEffect } from "react"
import HeroSection from "../components/HeroSection"
import BrandStoryPreviewSection from "../components/BrandStoryPreviewSection"
import SignaturePreviewSection from "../components/SignaturePreviewSection"
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"
import { applyPageSeo } from "../utils/applyPageSeo"
import { useI18n } from "../i18n/useI18n"

export default function Home() {
  const { messages } = useI18n()

  useEffect(() => {
    applyPageSeo(messages.seo.home)
  }, [messages])

  return (
    <main className="home-page">
      <div aria-hidden="true" className="home-page-gradient" />
      <div aria-hidden="true" className="home-page-wave home-page-wave-one" />
      <div aria-hidden="true" className="home-page-wave home-page-wave-two" />
      <div aria-hidden="true" className="home-page-bubble home-page-bubble-one" />
      <div aria-hidden="true" className="home-page-bubble home-page-bubble-two" />
      <div aria-hidden="true" className="home-page-bubble home-page-bubble-three" />
      <div aria-hidden="true" className="home-page-bubble home-page-bubble-four" />
      <div aria-hidden="true" className="home-page-bubble home-page-bubble-five" />
      <div aria-hidden="true" className="home-page-bubble home-page-bubble-six" />
      <div aria-hidden="true" className="home-page-noise" />
      <div className="home-page-content">
        <HeroSection />
        <SignaturePreviewSection />
        <BrandStoryPreviewSection />
        <FloatingWhatsAppButton />
      </div>
    </main>
  )
}
