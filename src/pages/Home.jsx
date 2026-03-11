import { Link } from "react-router-dom"

export default function Home() {
  return (
    <main>
      <section id="hero" aria-labelledby="home-hero-title">
        <p>Alai Web</p>
        <h1 id="home-hero-title">Websites that look refined and work hard for real businesses.</h1>
        <p>
          Beautiful. Fast. Effective. We design and build modern websites with clear structure,
          strong performance, and SEO-ready foundations.
        </p>
        <div>
          <Link to="/menu">Start your project</Link>
          <Link to="/contatti">Talk about your website</Link>
        </div>
      </section>

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
    </main>
  )
}
