import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AttemptId, IguessGameItem, IPlayerCombo, ResultType } from "./state";

import { featureFlags } from "flags";
import {
    AttemptsContainer,
    GameControls,
    GameHeader,
    HiddenCombo,
    PlayCard,
} from "./game-components";
import { ComingSoonText } from "app";
import { shuffle, icons } from "utils";
import {
    baseColorsState,
    gameAttemptsState,
    gameComboState,
    playerResults,
    selectedAttempt,
} from "./selectors";
import {
    setNewGame,
    resetResults,
    setResults,
    selectAttempt,
    resetSelected,
    resetComboes,
    setComboItem,
} from "./guessGameSlice";

import styles from "./ColorGame.module.scss";

const newColors = (arr: IguessGameItem[]): IguessGameItem[] => shuffle(arr).slice(0, 4);

const ColorGame = () => {
    const flagged: boolean = featureFlags.guess_the_colors;

    const selected = useSelector(selectedAttempt);
    const gameCombo = useSelector(gameComboState);
    const results = useSelector(playerResults);
    const gameAttempts = useSelector(gameAttemptsState);
    const baseColors = useSelector(baseColorsState);

    const dispatch = useDispatch();

    const perfectMatch: ResultType = [1, 1, 1, 1];

    const gameOver = results.some(res => [...res] === [...perfectMatch]);

    const newGameHandler = () => {
        dispatch(resetComboes());
        dispatch(setNewGame(newColors(baseColors)));
    };

    const currentAttemptFinder = (attemptId: number) =>
        gameAttempts.find(attempt => attempt.id === attemptId);

    const comboMatchHandler = (attemptId: number) => {
        let resultArray: ResultType = [];
        const currentAttempt = currentAttemptFinder(attemptId);
        const currentPlayerCombo = currentAttempt?.playerCombo;
        const colors = gameCombo.map(c => c.color);
        const includesCombo = (comboColor: string) => colors.includes(comboColor);

        if (currentPlayerCombo) {
            currentPlayerCombo.forEach((combo, index) => {
                if (includesCombo(combo.color) && combo.color === gameCombo[index].color) {
                    resultArray.push(2);
                } else if (includesCombo(combo.color)) {
                    resultArray.push(1);
                } else resultArray.push(0);
                return resultArray;
            });
        }
        dispatch(setResults({ id: attemptId, results: resultArray }));
    };

    const cancelAttempt = (attemptId: number) => {
        dispatch(resetResults(attemptId));
    };

    const unSelectAll = () => dispatch(resetSelected());

    const handleOnSelectColor = (item: IguessGameItem) => {
        console.log(item);
        selected && dispatch(setComboItem({ id: selected.id, item }));
        selected && console.log(selected.playerCombo);
    };

    const optionItem = (item: IguessGameItem) => {
        return (
            <div
                className="color_option"
                style={{
                    backgroundColor: item.color,
                }}
                onClick={() => handleOnSelectColor(item)}
            />
        );
    };

    const handleSelectAttempt = (attemptId: number) => {
        dispatch(selectAttempt(attemptId));
    };

    console.log({ selected });

    return flagged ? (
        <div className={styles.game_container}>
            <GameHeader newGameHandler={newGameHandler} labelTitle="Guess the colors game" />
            <HiddenCombo show={gameOver} combination={gameCombo} />
            <AttemptsContainer>
                {gameAttempts.map((attempt, index) => (
                    <PlayCard
                        key={`playcard-${index + 1}`}
                        selected={attempt.selected}
                        unSelect={unSelectAll}
                        onSelectAttempt={() => handleSelectAttempt(attempt.id)}
                        dropdownCount={gameCombo.length}
                        menuList={baseColors}
                        dropdownLabel={icons.down}
                        onSubmit={() => comboMatchHandler(attempt.id)}
                        onCancel={() => cancelAttempt(attempt.id)}
                        renderMenuItem={item => optionItem(item)}
                        results={attempt.results}
                    />
                ))}
            </AttemptsContainer>
            <GameControls gameColors={baseColors} />
        </div>
    ) : (
        <div className={styles.coming_soon}>{ComingSoonText.MESSAGE}</div>
    );
};

export default ColorGame;
