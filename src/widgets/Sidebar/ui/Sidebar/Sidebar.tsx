import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Sidebar.module.scss";
import { FC, useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: isCollapsed },
        [className]
      )}
    >
      <Button size={ButtonSize.L} onClick={onToggle} className={styles.collapseBtn} theme={ButtonTheme.TRANSPARENT_INVERTED} square>
        {isCollapsed ? '>' : '<'}
      </Button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.languageSwitcher} isShort={isCollapsed} />
      </div>
    </div >
  );
};
