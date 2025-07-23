import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: Readonly<NavbarProps>) {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Link to="/" className={styles.mainLink}>
          Counter
        </Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
