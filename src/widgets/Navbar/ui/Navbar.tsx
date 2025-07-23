import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: Readonly<NavbarProps>) {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink
          to="/"
          className={styles.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          Counter
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
}

export default Navbar;
