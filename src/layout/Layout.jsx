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
        <nav aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink key={item.target} to={item.target}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© Website</p>
      </footer>
    </>
  )
}
