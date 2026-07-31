import { Link } from "react-router"
import { useTranslation } from "react-i18next"

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <>
      <h2>{t("notFound.title")}</h2>
      <Link to="/">{t("notFound.backHome")}</Link>
    </>
  )
}
