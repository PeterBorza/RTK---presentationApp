import React from "react";

import { Button } from "shared-components";

type Props = {
    isFresh: boolean;
    onNewGameClick: () => void;
    title: string;
    buttonLabel: string;
};

const GameHeader = ({ isFresh, onNewGameClick, title, buttonLabel }: Props) => {
    return (
        <div className="game_header">
            <h1 className="game_header__title">{title}</h1>
            <div className="game_header__controls">
                {!isFresh && <Button value={buttonLabel} onClick={onNewGameClick} />}
            </div>
        </div>
    );
};

export default GameHeader;
