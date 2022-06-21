import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { COLORS_TO_GUESS_COUNT, IguessGameItem, ResultType, resultValues } from "./state";

import { featureFlags } from "flags";
import { GameControls, GameHeader, HiddenCombo, PlayCard } from "./game-components";
import { ComingSoonText } from "app";
import { shuffle } from "utils";
import {
    baseColorsState,
    finishedState,
    gameAttemptsState,
    gameComboState,
    selectedAttempt,
} from "./selectors";
import {
    setNewGame,
    setResults,
    selectAttempt,
    resetSelected,
    resetComboes,
    setComboItem,
    setFinished,
} from "./guessGameSlice";

import "./_index.scss";

const newColors = (arr: IguessGameItem[]): IguessGameItem[] =>
    shuffle(arr).slice(0, COLORS_TO_GUESS_COUNT);

const ColorGame = () => {
    const isGuessGameFlagEnabled: boolean = featureFlags.guess_the_colors;
    const dispatch = useDispatch();

    const selected = useSelector(selectedAttempt);
    const gameCombo = useSelector(gameComboState);
    const gameAttempts = useSelector(gameAttemptsState);
    const baseColors = useSelector(baseColorsState);
    const finishedGame = useSelector(finishedState);

    const validCombo = (playerCombo: IguessGameItem[]) => {
        return playerCombo.every(item => item.color !== "none");
    };

    const newGameHandler = () => {
        dispatch(resetComboes());
        dispatch(setNewGame(newColors(baseColors)));
    };

    const hasIdenticalItems = (arr: string[]) => {
        const result = Array.from(new Set(arr));
        if (result.length < COLORS_TO_GUESS_COUNT) return false;
        return true;
    };

    const checkIfIncluded = (playerCombo: IguessGameItem[]) => {
        return gameCombo.filter(
            (item, index) => playerCombo.includes(item) && playerCombo[index] !== item,
        );
    };

    // TODO cancel button should empty all dropdowns in attempt,
    // and new game should empty all dropdown triggers to  ""
    // animation to game end
    // responsiveness sucks , fix it

    const handleResults = (playerCombo: IguessGameItem[], attemptId: number) => {
        let results: ResultType = [];

        const ids = playerCombo.map(item => item.color);
        const isValid = hasIdenticalItems(ids);

        const missing = gameCombo.filter(item => playerCombo.includes(item) === false);
        const included = checkIfIncluded(playerCombo);
        const match = gameCombo.filter((item, index) => item.id === playerCombo[index].id);

        missing.forEach(() => results.push(0));
        included.forEach(() => results.push(1));
        match.forEach(() => results.push(2));

        const noAttemptsLeft = gameAttempts.every(
            attempt => attempt.results.length === COLORS_TO_GUESS_COUNT,
        );

        const perfectMatch = match.length === COLORS_TO_GUESS_COUNT;
        if (perfectMatch || noAttemptsLeft) dispatch(setFinished(true));

        const incomplete = playerCombo.some(item => item.color === "none");
        if (incomplete || !isValid) return;

        dispatch(setResults({ id: attemptId, results }));
    };

    // const cancelAttempt = (attemptId: number) => {
    //     dispatch(resetComboes());
    //     dispatch(resetResults(attemptId));
    // };

    const itemClickHandler = (item: IguessGameItem, order: number) => {
        if (selected) {
            dispatch(setComboItem({ id: selected.id, item, order }));
        }
    };

    return isGuessGameFlagEnabled ? (
        <div className="game_container">
            <GameHeader newGameHandler={newGameHandler} labelTitle="Guess the colors game" />
            <HiddenCombo show={finishedGame} combination={gameCombo} />
            <div className="attempts_container">
                {gameAttempts.map((attempt, index) => (
                    <PlayCard
                        key={`playcard-${index + 1}`}
                        selected={attempt.selected}
                        onBlur={() => dispatch(resetSelected(attempt.id))}
                        onSelect={() => dispatch(selectAttempt(attempt.id))}
                        dropdownCount={COLORS_TO_GUESS_COUNT}
                        menuList={baseColors}
                        itemClickHandler={(item, order) => itemClickHandler(item, order)}
                        onSubmit={() => handleResults(attempt.playerCombo, attempt.id)}
                        results={attempt.results}
                        isDisabled={attempt.results.length !== 0}
                        values={resultValues}
                        enabledResults={
                            validCombo(attempt.playerCombo) && attempt.results.length === 0
                        }
                    />
                ))}
            </div>
            <GameControls gameColors={baseColors} />
        </div>
    ) : (
        <div className="coming_soon">{ComingSoonText.MESSAGE}</div>
    );
};

export default ColorGame;
