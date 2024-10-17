import React from "react";
import styles from "./Dropdown.module.scss";
import { useOnClickOutside } from "hooks";
import { DropdownContext } from "./context";

type DropdownType = {
  onCloseMenu?: () => void;
  children?: React.ReactNode;
};

const Dropdown = ({ onCloseMenu, children }: DropdownType) => {
  const { setIsOpen } = React.useContext(DropdownContext);
  const targetRef = React.useRef<HTMLDivElement | null>(null);

  const closeMenu = () => {
    onCloseMenu && onCloseMenu();
    setIsOpen(false);
  };

  useOnClickOutside([targetRef], closeMenu);

  return (
    <div ref={targetRef} className={styles.drop_wrap}>
      {children}
    </div>
  );
};

export default Dropdown;
