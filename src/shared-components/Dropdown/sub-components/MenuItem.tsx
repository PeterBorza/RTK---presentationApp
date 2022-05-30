import React from "react";
import { DropdownContext } from "../context";

import "./_index.scss";

const MenuItem: React.FC = ({ children }) => {
    const { setIsOpen, setTriggerName } = React.useContext(DropdownContext);

    const menuItemClickHandler = () => {
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
