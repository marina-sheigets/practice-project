import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Sidebar.module.scss";
import { FC, useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { Button } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: isCollapsed },
        [className]
      )}
    >
      <Button onClick={onToggle}>{t("Collapse")}</Button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.languageSwitcher} />
      </div>
    </div>
  );
};
