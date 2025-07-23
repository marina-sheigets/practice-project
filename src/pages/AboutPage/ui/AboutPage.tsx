import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation("about"); // use about.json file for translation

  return <div>{t("About")}</div>;
}

export default AboutPage;
