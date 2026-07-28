import styles from "./Header.module.css"
// import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"
import hidromarLogo from "@/assets/images/logo/logo-bg.png"
export default function Header() {
  //   const navigate = useNavigate()
  const { t } = useTranslation()
  function navigate(a: string) {
    console.log(a)
  }
  return (
    <header className={styles.header + " flex justify-between items-center"}>
      <div className={styles.titleLogo + " ml-2"} onClick={() => navigate("/")}>
        <img src={hidromarLogo} className={styles.logo} alt="Hidromar Logo" />
        <h1 className={styles.title}>idromar</h1>
      </div>
      <nav>
        {/* TODO: media queries for this */}
        <ul className="flex flex-column gap-2">
          <li>
            <button className="cursor-pointer" onClick={() => navigate("/")}>
              {t("nav.home")}
            </button>
          </li>
          <li>
            <button className="cursor-pointer" onClick={() => navigate("/products")}>
              {t("nav.products")}
            </button>
          </li>
          <li>
            <button className="cursor-pointer" onClick={() => navigate("/contact")}>
              {t("nav.contact")}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
