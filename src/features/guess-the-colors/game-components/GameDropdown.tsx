import React from "react";

type GameDropdownProps = {};

const GameDropdown: React.FC<GameDropdownProps> = ({ children }) => {
    return <div className="game_dropdown">{children}</div>;
};

export default GameDropdown;
