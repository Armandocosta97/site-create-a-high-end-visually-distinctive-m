import { NavLink } from "react-router-dom"

const navigationItems = [
  { label: "Home", target: "/" },
  { label: "Menu", target: "/menu" },
  { label: "Chi siamo", target: "/chi-siamo" },
  { label: "Gallery", target: "/gallery" },
  { label: "Contatti", target: "/contatti" },
]

export default function Layout({ children }) {
  return (
    <>
      <header>
        <div className="site-shell">
          <NavLink to="/" className="site-brand" aria-label="Alai Web home">
            <span className="site-brand-mark">AW</span>
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

      {children}

      <footer>
        <div className="site-shell site-footer-content">
          <div className="site-footer-copy">
            <p className="site-footer-brand">Alai Web</p>
            <p>Beautiful. Fast. Effective.</p>
          </div>

          <nav aria-label="Footer navigation" className="site-footer-nav">
            {navigationItems.map((item) => (
              <NavLink key={`footer-${item.target}`} to={item.target}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a className="site-footer-email" href="mailto:hello@alaiweb.com">
            hello@alaiweb.com
          </a>
        </div>
      </footer>
    </>
  )
}
