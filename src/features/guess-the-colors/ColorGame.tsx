import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IguessGameItem, ResultType } from "./state";

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

const newColors = (arr: IguessGameItem[]): IguessGameItem[] => shuffle(arr).slice(0, 4);

const ColorGame = () => {
    const isGuessGameFlagEnabled: boolean = featureFlags.guess_the_colors;
    const dispatch = useDispatch();

    const selected = useSelector(selectedAttempt);
    const gameCombo = useSelector(gameComboState);
    const gameAttempts = useSelector(gameAttemptsState);
    const baseColors = useSelector(baseColorsState);
    const finishedGame = useSelector(finishedState);

    const newGameHandler = () => {
        dispatch(resetComboes());
        dispatch(setNewGame(newColors(baseColors)));
    };

    const handleResults = (playerCombo: IguessGameItem[], attemptId: number) => {
        let results: ResultType = [];

        const includesColor = gameCombo.filter(
            (item, index) => playerCombo.includes(item) && playerCombo[index] !== item,
        );

        const incomplete = playerCombo.some(item => item.color === "none");
        const notIncluded = gameCombo.filter(item => playerCombo.includes(item) === false);
        const match = gameCombo.filter((item, index) => item.id === playerCombo[index].id);

        const perfectMatch =
            match.length === 4 ||
            gameAttempts.every(
                item => item.playerCombo.some(item => item.color === "none") === false,
            );

        if (incomplete) return;
        if (perfectMatch) dispatch(setFinished(true));

        includesColor.forEach(item => results.push(1));
        notIncluded.forEach(item => results.push(0));
        match.forEach(item => results.push(2));

        dispatch(setResults({ id: attemptId, results }));
    };

    const onSubmitHandler = (attemptId: number) => {
        const combo = selected?.playerCombo;
        if (combo) handleResults(combo, attemptId);
    };

    const cancelAttempt = () => {
        dispatch(resetComboes());
    };

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
                        dropdownCount={attempt.playerCombo.length}
                        menuList={baseColors}
                        itemClickHandler={(item, order) => itemClickHandler(item, order)}
                        onSubmit={() => onSubmitHandler(attempt.id)}
                        onCancel={cancelAttempt}
                        results={attempt.results}
                        isDisabled={attempt.results.length !== 0}
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
