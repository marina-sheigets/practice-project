import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Sidebar.module.scss";
import { FC, useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { Button } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import i18n from "@/shared/config/i18n/i18n";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const onToggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
  };

  return (
    <div
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: isCollapsed },
        [className]
      )}
    >
      <Button onClick={onToggle}>{t("Collapse")}</Button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <Button onClick={onToggleLang}>{t("Change language")}</Button>
      </div>
    </div>
  );
};
