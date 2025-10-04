import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  TRANSPARENT = "transparent",
  TRANSPARENT_INVERTED = "transparentInverted"
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean,
  size?: ButtonSize
}

export enum ButtonSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square = false,
    size = ButtonSize.L,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true
  }

  return (
    <button
      className={classNames(styles.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
