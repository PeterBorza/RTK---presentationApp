import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { GameAttempts, GameControls, GameHeader, HiddenCombo } from "./game-components";
import { resetGame } from "./guessGameSlice";
import { baseColorsState, emptyAttemptSelector, finishedState, gameComboState } from "./selectors";
import { guessGameData } from "./state";

import "./_index.scss";

const ColorGame = () => {
    const { gameLegend, attemptCount, gameTitle, newGame } = guessGameData;

    const finishedGame = useSelector(finishedState);
    const gameCombo = useSelector(gameComboState);
    const baseColors = useSelector(baseColorsState);
    const freshGame = useSelector(emptyAttemptSelector);
    const dispatch = useDispatch();

    return (
        <div className="game_container">
            <GameHeader
                onNewGameClick={() => dispatch(resetGame(baseColors))}
                isFresh={freshGame}
                title={gameTitle}
                buttonLabel={newGame}
            />
            <HiddenCombo finishedGame={finishedGame} gameCombo={gameCombo} />
            <GameControls baseColors={baseColors} legend={gameLegend} count={attemptCount} />
            <GameAttempts gameCombo={gameCombo} gameData={guessGameData} />
        </div>
    );
};

//TODO rewrite game, this is outdated and has a bug:
export default ColorGame;
