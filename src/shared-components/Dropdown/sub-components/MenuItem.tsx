import React from "react";

import "./_index.scss";

type MenuItemType = {
    onClick: () => void;
};

const MenuItem: React.FC<MenuItemType> = ({ onClick, children }) => {
    return (
        <li className="dropdown__menu__item" onClick={onClick}>
            {children}
        </li>
    );
};

export default MenuItem;
