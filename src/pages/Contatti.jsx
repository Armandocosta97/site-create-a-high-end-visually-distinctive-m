import { useEffect } from "react"
import ContactHeroSection from "../components/ContactHeroSection"
import ContactDetailsSection from "../components/ContactDetailsSection"
import OpeningHoursSection from "../components/OpeningHoursSection"

export default function Contatti() {
  useEffect(() => {
    document.title = "Contatti | Alai Web"

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact Alai Web by email, phone, or WhatsApp to discuss your project goals, timeline, and the next step for your digital presence."
      )
    }
  }, [])

  return (
    <main>
      <ContactHeroSection />
      <ContactDetailsSection />
      <OpeningHoursSection />
    </main>
  )
}
