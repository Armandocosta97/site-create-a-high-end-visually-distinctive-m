import { NavLink, useLocation } from "react-router-dom"
import CursorGlowBackground from "../components/CursorGlowBackground"

const navigationItems = [
  { label: "Home", target: "/" },
  { label: "Servizi", target: "/menu" },
  { label: "Chi siamo", target: "/chi-siamo" },
  { label: "Portfolio", target: "/gallery" },
  { label: "Contatti", target: "/contatti" },
]

export default function Layout({ children }) {
  const location = useLocation()
  const showCursorGlow = location.pathname !== "/"

  return (
    <>
      <header>
        <div className="site-shell">
          <NavLink to="/" className="site-brand" aria-label="Alai Web home">
            <img
              className="site-brand-logo"
              src="/logo_AW_2.png"
              alt="Alai Web logo"
            />
            <span className="site-brand-text">
              <strong>Alai Web</strong>
              <span>Beautiful. Fast. Effective.</span>
            </span>
          </NavLink>

          <nav aria-label="Main navigation">
            {navigationItems.map((item) => (
              <NavLink key={item.target} to={item.target}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <div className="cursor-glow-site">
        {showCursorGlow ? <CursorGlowBackground variant="intense" /> : null}
        <div className="cursor-glow-content">{children}</div>
      </div>

      <footer>
        <div className="site-shell site-footer-content">
          <div className="site-footer-copy">
            <div className="site-footer-brand-lockup">
              <img
                className="site-footer-logo"
                src="/logo_AW_2.png"
                alt="Alai Web logo"
              />
              <p className="site-footer-brand">Alai Web</p>
            </div>
            <p>Beautiful. Fast. Effective.</p>
          </div>

          <nav aria-label="Footer navigation" className="site-footer-nav">
            {navigationItems.map((item) => (
              <NavLink key={`footer-${item.target}`} to={item.target}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a className="site-footer-email" href="mailto:alai.web.info@gmail.com">
            alai.web.info@gmail.com
          </a>
        </div>
      </footer>
    </>
  )
}
