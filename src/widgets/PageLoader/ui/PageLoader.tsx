import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./PageLoader.module.scss";
import { FC } from "react";

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.PageLoader, {}, [className])}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default PageLoader;
