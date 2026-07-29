import { useState } from "react"
import styles from "./Header.module.css"
// import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"
import useMenuClose from "@/hooks/useMenuClose"
import hidromarLogo from "@/assets/images/logo/logo-bg.png"
export default function Header() {
  //   const navigate = useNavigate()
  const { t } = useTranslation()
  const [activePath, setActivePath] = useState("/")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useMenuClose<HTMLElement>(isMenuOpen, () => setIsMenuOpen(false))

  function navigate(a: string) {
    console.log(a)
    if (a !== activePath) {
      setIsMenuOpen(false)
      setActivePath(a)
    }
  }

  return (
    <header className={styles.header + " flex justify-between items-center"}>
      <div className={styles.titleLogo + " ml-2"} onClick={() => navigate("/")}>
        <img src={hidromarLogo} className={styles.logo} alt="Hidromar Logo" />
        <h1 className={styles.title}>idromar</h1>
      </div>
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
          {[
            { path: "/", label: t("nav.home") },
            { path: "/products", label: t("nav.products") },
            { path: "/contact", label: t("nav.contact") },
          ].map(({ path, label }) => (
            <li key={path}>
              <button
                className={
                  "cursor-pointer " +
                  styles.headerButton +
                  (activePath === path ? " " + styles.active : "")
                }
                onClick={() => navigate(path)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
