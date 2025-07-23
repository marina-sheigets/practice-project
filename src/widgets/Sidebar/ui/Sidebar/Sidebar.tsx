import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Sidebar.module.scss";
import { FC, useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { Button } from "@/shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: isCollapsed },
        [className]
      )}
    >
      <Button onClick={onToggle}>toggle</Button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
