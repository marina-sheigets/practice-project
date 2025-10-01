import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./ThemeSwitcher.module.scss";
import { FC } from "react";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import LightIcon from "@/shared/assets/icons/light-mode.svg";
import DarkIcon from "@/shared/assets/icons/dark-mode.svg";
import { Button } from "@/shared/ui/Button/Button";

export interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(styles.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
