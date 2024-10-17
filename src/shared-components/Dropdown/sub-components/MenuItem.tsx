import React from "react";
import { DropdownContext } from "../context";

import "./_index.scss";

export interface IMenuItem {
  onClick?: () => void;
  children?: React.ReactNode;
}

const MenuItem = ({ onClick, children }: IMenuItem) => {
  const { setIsOpen, setTriggerName } = React.useContext(DropdownContext);

  const menuItemClickHandler = () => {
    onClick && onClick();
    setIsOpen(false);
    setTriggerName(children);
  };
  return (
    <li className="dropdown__menu__item" onClick={menuItemClickHandler}>
      {children}
    </li>
  );
};

export default MenuItem;
