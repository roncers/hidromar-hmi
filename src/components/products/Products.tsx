import { useTranslation } from "react-i18next"

export default function Products() {
  const { t } = useTranslation()
  return <h2>{t("nav.products")}</h2>
}
