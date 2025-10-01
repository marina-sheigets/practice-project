import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Loader.module.scss";
import { FC } from "react";

export interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return <div className={classNames(styles.loader, {}, [className])}></div>;
};

export default Loader;
