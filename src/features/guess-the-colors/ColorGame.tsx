import React from "react";
import { useSelector } from "react-redux";

import { GameAttempts, GameControls, GameHeader, HiddenCombo } from "./game-components";
import { baseColorsState, finishedState, gameAttemptsState, gameComboState } from "./selectors";

import "./_index.scss";

const ColorGame = () => {
    const gameAttempts = useSelector(gameAttemptsState);
    const finishedGame = useSelector(finishedState);
    const gameCombo = useSelector(gameComboState);
    const baseColors = useSelector(baseColorsState);

    return (
        <div className="game_container">
            <GameHeader baseColors={baseColors} />
            <HiddenCombo finishedGame={finishedGame} gameCombo={gameCombo} />
            <GameControls baseColors={baseColors} />
            <GameAttempts gameAttempts={gameAttempts} gameCombo={gameCombo} />
        </div>
    );
};

export default ColorGame;
