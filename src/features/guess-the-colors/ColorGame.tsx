import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GameAttempts, GameControls, GameHeader, HiddenCombo } from "./game-components";
import { resetGame } from "./guessGameSlice";
import { baseColorsState, emptyAttemptSelector, finishedState, gameComboState } from "./selectors";
import { guessGameData } from "./state";
import { featureFlags } from "flags";

import "./_index.scss";
import { FadeOnScroll } from "shared-components";
import { GuessGame } from "./game-components/guess-with-drag";

//TODO do not show hidden combo data from devTools

const ColorGame = () => {
    const { gameLegend, attemptCount, gameTitle, newGame } = guessGameData;

    const finishedGame = useSelector(finishedState);
    const gameCombo = useSelector(gameComboState);
    const baseColors = useSelector(baseColorsState);
    const freshGame = useSelector(emptyAttemptSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        gameCombo.length === 0 && dispatch(resetGame(baseColors));
    }, [gameCombo, baseColors, dispatch]);

    return (
        <>
            {featureFlags.guessTheColors ? (
                <GuessGame />
            ) : (
                <FadeOnScroll>
                    <div className="game_container">
                        <GameHeader
                            onNewGameClick={() => dispatch(resetGame(baseColors))}
                            isFresh={freshGame}
                            title={gameTitle}
                            buttonLabel={newGame}
                        />
                        <HiddenCombo finishedGame={finishedGame} gameCombo={gameCombo} />
                        <GameControls
                            baseColors={baseColors}
                            legend={gameLegend}
                            count={attemptCount}
                        />
                        <GameAttempts gameCombo={gameCombo} gameData={guessGameData} />
                    </div>
                </FadeOnScroll>
            )}
        </>
    );
};

//TODO rewrite game, this is outdated and has a bug:
export default ColorGame;
