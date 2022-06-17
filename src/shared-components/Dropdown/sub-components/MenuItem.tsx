import React from "react";
import { DropdownContext } from "../context";

import "./_index.scss";

export interface IMenuItem {
    onClick?: () => void;
}

const MenuItem: React.FC<IMenuItem> = ({ onClick, children }) => {
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
