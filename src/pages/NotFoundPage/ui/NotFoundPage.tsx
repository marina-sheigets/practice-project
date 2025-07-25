import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./NotFoundPage.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      {t("Not found page")}
    </div>
  );
};

export default NotFoundPage;
