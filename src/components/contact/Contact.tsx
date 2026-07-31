import { useTranslation } from "react-i18next"

export default function Contact() {
  const { t } = useTranslation()
  return <h2>{t("nav.contact")}</h2>
}
