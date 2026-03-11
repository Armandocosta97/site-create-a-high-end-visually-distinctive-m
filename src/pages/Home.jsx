import HeroSection from "../components/HeroSection"
import SignaturePreviewSection from "../components/SignaturePreviewSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SignaturePreviewSection />

      <section id="brand-story-preview" aria-labelledby="brand-story-preview-title">
        <h2 id="brand-story-preview-title">Built with clarity before embellishment</h2>
        <p>
          This shell establishes the required structure for the home page and keeps the core
          messaging, sections, and CTAs ready for the next implementation tasks.
        </p>
      </section>
    </>
  )
}
