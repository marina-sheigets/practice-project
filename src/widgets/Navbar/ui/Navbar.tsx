import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "@/features/AuthByUsername";

export interface NavbarProps {
  className?: string;
}

function Navbar({ className }: Readonly<NavbarProps>) {
  const { t } = useTranslation();
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsAuthModalOpened(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsAuthModalOpened(true);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} className={styles.links} onClick={handleShowModal}>
        {t("Login")}
      </Button>
      <LoginModal isOpen={isAuthModalOpened} onClose={handleCloseModal} />
    </div>
  );
}

export default Navbar;
