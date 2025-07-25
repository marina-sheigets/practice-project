import i18n from "@/shared/config/i18n/i18n";
import * as styles from "./LanguageSwitcher.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { FC } from "react";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { t } = useTranslation();

  const onToggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
  };

  return (
    <Button
      className={classNames(styles.languageSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={onToggleLang}
    >
      {i18n.language === "en"
        ? t("Change language to Ukrainian")
        : t("Change language to English")}
    </Button>
  );
};

export default LanguageSwitcher;
