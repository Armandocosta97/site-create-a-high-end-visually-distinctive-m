import HeroSection from "../components/HeroSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <section id="signature-preview" aria-labelledby="signature-preview-title">
        <h2 id="signature-preview-title">What sets the work apart</h2>
        <p>
          The homepage introduces Alai Web through a clean editorial rhythm: thoughtful design,
          lightweight builds, and business-focused digital experiences.
        </p>
      </section>

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
