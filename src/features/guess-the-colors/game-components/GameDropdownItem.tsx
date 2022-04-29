import React from "react";

type IGameDropItemProps = {};

const GameDropdownItem: React.FC<IGameDropItemProps> = ({ children }) => {
    return <div className="drop">{children}</div>;
};

export default GameDropdownItem;
