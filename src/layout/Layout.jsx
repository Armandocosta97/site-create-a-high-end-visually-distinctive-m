import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import CursorGlowBackground from "../components/CursorGlowBackground"
import routes from "../config/routes"
import siteConfig from "../config/siteConfig"
import { useI18n } from "../i18n/useI18n"

export default function Layout({ children }) {
  const location = useLocation()
  const showCursorGlow = location.pathname !== "/"
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { locale, setLocale, messages, supportedLocales } = useI18n()
  const { accessibility, brand, footer, languageSwitcher, navigation } = messages
  const activeLocale = supportedLocales[locale]

  return (
    <>
      <header>
        <div className="site-shell">
          <NavLink to="/" className="site-brand" aria-label={`${brand.name} ${accessibility.homeLabelSuffix}`}>
            <img
              className="site-brand-logo"
              src={siteConfig.logoSrc}
              alt={`${brand.name} ${accessibility.logoLabelSuffix}`}
            />
            <span className="site-brand-text">
              <strong>{brand.name}</strong>
              <span>{brand.tagline}</span>
            </span>
          </NavLink>

          <nav aria-label={accessibility.mainNavigation}>
            {navigation.map((item) => (
              <NavLink key={item.target} to={item.target}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="language-switcher">
            <button
              type="button"
              className="language-switcher-trigger"
              aria-label={accessibility.languageMenuOpen}
              aria-expanded={isLanguageMenuOpen}
              onClick={() => setIsLanguageMenuOpen((currentValue) => !currentValue)}
            >
              <span aria-hidden="true">{activeLocale.flag}</span>
              <span>{activeLocale.shortLabel}</span>
            </button>

            {isLanguageMenuOpen ? (
              <div
                className="language-switcher-menu"
                role="menu"
                aria-label={accessibility.languageMenu}
              >
                <p className="language-switcher-label">{languageSwitcher.label}</p>
                {Object.values(supportedLocales).map((localeOption) => (
                  <button
                    key={localeOption.code}
                    type="button"
                    className={`language-switcher-option${
                      localeOption.code === locale ? " is-active" : ""
                    }`}
                    onClick={() => {
                      setLocale(localeOption.code)
                      setIsLanguageMenuOpen(false)
                    }}
                  >
                    <span aria-hidden="true">{localeOption.flag}</span>
                    <span>{localeOption.label}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
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
                src={siteConfig.logoSrc}
                alt={`${brand.name} ${accessibility.logoLabelSuffix}`}
              />
              <div className="site-footer-brand-block">
                <p className="site-footer-brand">{brand.name}</p>
                <p className="site-footer-kicker">{brand.descriptor}</p>
              </div>
            </div>
            <p className="site-footer-summary">{brand.summary}</p>
          </div>

          <div className="site-footer-links">
            <p className="site-footer-heading">{footer.navigationHeading}</p>
            <nav aria-label={accessibility.footerNavigation} className="site-footer-nav">
              {navigation.map((item) => (
                <NavLink key={`footer-${item.target}`} to={item.target}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="site-footer-contact">
            <p className="site-footer-heading">{footer.contactHeading}</p>
            <a className="site-footer-email" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <NavLink className="site-footer-cta" to={routes.contact}>
              {footer.ctaLabel}
            </NavLink>
          </div>
        </div>

        <div className="site-shell site-footer-bottom">
          <p className="site-footer-legal">{footer.legal}</p>
        </div>
      </footer>
    </>
  )
}
