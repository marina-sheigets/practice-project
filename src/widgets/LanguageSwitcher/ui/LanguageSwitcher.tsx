import i18n from "@/shared/config/i18n/i18n";
import * as styles from "./LanguageSwitcher.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { FC } from "react";

interface LanguageSwitcherProps {
  className?: string;
  isShort?: boolean
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className, isShort = false }) => {
  const { t } = useTranslation();

  const onToggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
  };

  const getLabel = () => {
    if (isShort) {
      return i18n.language === "en" ? t("To Ukrainian") : t("To English")
    }

    return i18n.language === "en"
      ? t("Change language to Ukrainian")
      : t("Change language to English")
  }

  return (
    <Button
      className={classNames(styles.languageSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={onToggleLang}
    >
      {getLabel()}
    </Button>
  );
};

export default LanguageSwitcher;
