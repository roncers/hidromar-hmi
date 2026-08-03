import gasketsPalette2 from "@/assets/images/gaskets-palette-2.png"
import gasketsPalette2Mobile from "@/assets/images/gaskets-palette-2-mobile.png"
import styles from "./Home.module.css"
import { useTranslation } from "react-i18next"

export default function Body() {
  const { t } = useTranslation()
  return (
    <div className={`${styles.home}`}>
      {/* use translator */}
      <div className={styles.imageContainer}>
        <picture className={styles.mainPicture}>
          <source media="(max-width: 768px)" srcSet={gasketsPalette2Mobile} />
          <img src={gasketsPalette2} alt={t("home.imageAlt")} className={styles.mainImage} />
        </picture>
        <div className={styles.imageOverlay}>
          <h2 className={styles.imageTitle}>Hidromar</h2>
          <p className={styles.imageText}>{t("home.imageText")}</p>
        </div>
      </div>
      <section>
        <ul className="flex flex-row gap-2">
          <li>
            Empresa lider en el sector.
          </li>
          <li>
            Más de 40 años de experiencia.
          </li>
          <li>
            Trato dirécto y rápido.
          </li>
        </ul>
      </section>
    </div>
  )
}
