import React from "react";

type MenuItemType = {
    onClick: () => void;
};

const MenuItem: React.FC<MenuItemType> = ({ onClick, children }) => {
    return <li onClick={onClick}>{children}</li>;
};

export default MenuItem;
