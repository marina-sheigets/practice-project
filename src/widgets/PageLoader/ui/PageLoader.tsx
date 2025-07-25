import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./PageLoader.module.scss";
import { FC } from "react";
import Loader from "@/shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
