import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Sidebar.module.scss";
import { FC, useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';

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
      <Button
        size={ButtonSize.L}
        onClick={onToggle}
        className={styles.collapseBtn}
        theme={ButtonTheme.TRANSPARENT_INVERTED}
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <div className={styles.item}>
          <AppLink
            to={RoutePath.main}
            theme={AppLinkTheme.SECONDARY}
          >
            <HomeIcon className={styles.icon} />
            <span className={styles.link}>
              {t("Main")}
            </span>
          </AppLink>
        </div>
        <div className={styles.item}>
          <AppLink
            to={RoutePath.about}
            theme={AppLinkTheme.SECONDARY}>
            <AboutIcon className={styles.icon} />
            <span className={styles.link}>
              {t("About")}
            </span>
          </AppLink>
        </div>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.languageSwitcher} isShort={isCollapsed} />
      </div>
    </div >
  );
};
