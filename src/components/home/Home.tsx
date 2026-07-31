import gasketsPalette2 from "@/assets/images/gaskets-palette-2.png"
import styles from "./Home.module.css"
import { useTranslation } from "react-i18next"

export default function Body() {
  const { t } = useTranslation()
  return (
    <div className={`${styles.home}`}>
      {/* use translator */}
      <div className={styles.imageContainer}>
        <img src={gasketsPalette2} alt={t("home.imageAlt")} className={styles.mainImage} />
        <p className={styles.imageText}>{t("home.imageText")}</p>
      </div>
    </div>
  )
}
