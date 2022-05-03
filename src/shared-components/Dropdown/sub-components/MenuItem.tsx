import React from "react";
import { DropdownContext } from "../context";

import "./_index.scss";

type MenuItemType = {
    onMenuItemClick?: () => void;
};

const MenuItem: React.FC<MenuItemType> = ({ onMenuItemClick, children }) => {
    const { setIsOpen, setTriggerName } = React.useContext(DropdownContext);

    const menuItemClickHandler = () => {
        onMenuItemClick && onMenuItemClick();
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
