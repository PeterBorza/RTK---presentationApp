import React from "react";

type GameHeaderType = {
    labelTitle: string;
};

const GameHeader = ({ labelTitle }: GameHeaderType) => {
    return (
        <div className="game_header">
            <h1 className="game_header__title">{labelTitle}</h1>
        </div>
    );
};

export default GameHeader;
