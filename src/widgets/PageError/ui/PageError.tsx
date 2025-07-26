import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./PageError.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t("Something went wrong")}</p>
      <Button onClick={handleRefreshPage}>{t("Refresh page")}</Button>
    </div>
  );
};

export default PageError;
