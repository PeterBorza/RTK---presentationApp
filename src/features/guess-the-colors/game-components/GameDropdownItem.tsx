import React from "react";

type IGameDropItemProps = {
    color: string;
};

const GameDropdownItem = ({ color }: IGameDropItemProps) => {
    return <div className="drop" style={{ backgroundColor: color }}></div>;
};

export default GameDropdownItem;
