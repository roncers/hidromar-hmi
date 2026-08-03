import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router"
import styles from "./Header.module.css"
import { useTranslation } from "react-i18next"
import useMenuClose from "@/hooks/useMenuClose"
import hidromarLogo from "@/assets/images/logo/logo-bg.png"
import { navRoutes } from "@/routes"

export default function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useMenuClose<HTMLElement>(isMenuOpen, () => setIsMenuOpen(false))
  const { pathname } = useLocation()

  const closeMenuIfNavigating = (path: string) => {
    if (path !== pathname) setIsMenuOpen(false)
  }

  return (
    <header className={styles.header + " flex justify-between items-center"}>
      <Link
        to="/"
        className={styles.titleLogo + " ml-2"}
        onClick={() => closeMenuIfNavigating("/")}
      >
        <img src={hidromarLogo} className={styles.logo} alt="Hidromar Logo" />
        <h1 className={styles.title}>idromar</h1>
      </Link>
      <nav ref={navRef}>
        {/* TODO: animate the menuToggle button */}
        <button
          className={
            styles.menuToggle +
            " cursor-pointer" +
            (isMenuOpen ? " " + styles.menuToggleOpen : "")
          }
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul
          className={
            "flex flex-column " +
            styles.navList +
            (isMenuOpen ? " " + styles.open : "")
          }
        >
          {navRoutes.map(({ path, labelKey }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                onClick={() => closeMenuIfNavigating(path)}
                className={({ isActive }) =>
                  "cursor-pointer " +
                  styles.headerButton +
                  (isActive ? " " + styles.active : "")
                }
              >
                {t(labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
