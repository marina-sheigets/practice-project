import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";

export interface NavbarProps {
  className?: string;
}

function Navbar({ className }: Readonly<NavbarProps>) {
  const { t } = useTranslation();
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setIsAuthModalOpened((prev => !prev));
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} className={styles.links} onClick={toggleAuthModal}>
        {t("Login")}
      </Button>
      <Modal isOpened={isAuthModalOpened} onClose={toggleAuthModal}>
        {
          //  eslint-disable-next-line i18next/no-literal-string
        }
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.
      </Modal>
    </div>
  );
}

export default Navbar;
