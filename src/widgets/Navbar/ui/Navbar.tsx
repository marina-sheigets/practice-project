import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

function Navbar({ className }: Readonly<NavbarProps>) {

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
      </div>
    </div>
  );
}

export default Navbar;
