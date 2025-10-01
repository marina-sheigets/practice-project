import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

export interface NavbarProps {
  className?: string;
}

function Navbar({ className }: Readonly<NavbarProps>) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          to="/"
          className={styles.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          {t("Main")}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          {t("About")}
        </AppLink>
      </div>
    </div>
  );
}

export default Navbar;
