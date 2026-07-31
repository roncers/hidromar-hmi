import { Link } from "react-router"
import styles from "./Footer.module.css"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <section className={styles.column}>
          <h2 className={styles.columnTitle}>{t("footer.products.title")}</h2>
          <p>{t("footer.products.description")}</p>
        </section>

        <section className={styles.column}>
          <h2 className={styles.columnTitle}>{t("footer.contact.title")}</h2>
          <address className={styles.address}>
            {t("footer.contact.address")}
            <span>
              {t("footer.contact.phoneLabel")}:{" "}
              <a className={styles.link} href="tel:+34911034040">
                91 103 40 40
              </a>
            </span>
            <span>
              {t("footer.contact.emailLabel")}:{" "}
              <a className={styles.link} href="mailto:correo@hidromar.es">
                correo@hidromar.es
              </a>
            </span>
          </address>
        </section>
      </div>

      <div className={styles.legal}>
        <small>
          Copyright &copy; {new Date().getFullYear()} Comercial Hidromar, S.L.
        </small>
        <nav>
          <ul className={styles.legalList}>
            {[
              { key: "terms", label: t("footer.legal.terms") },
              { key: "privacy", label: t("footer.legal.privacy") },
              { key: "notice", label: t("footer.legal.notice") },
            ].map(({ key, label }) => (
              <li key={key}>
                <Link className={styles.link} to={`/${key}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
