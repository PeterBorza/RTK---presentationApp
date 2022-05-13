import React from "react";
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
import { IguessGameItem, ResultType } from "./state";
import { useDispatch, useSelector } from "react-redux";
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

    const submitCombo = (attemptId: number) => {
        comboMatchHandler(attemptId);
    };

    const cancelAttempt = (attemptId: number) => {
        console.log(gameCombo, results);
        dispatch(resetResults(attemptId));
    };

    const select = (attemptId: number) => {
        dispatch(selectAttempt(attemptId));
    };

    const unSelectAll = () => {
        dispatch(resetSelected());
    };

    const optionItem = (item: IguessGameItem) => {
        return (
            <div
                className="color_option"
                style={{
                    backgroundColor: item.color,
                }}
            />
        );
    };

    return flagged ? (
        <div className={styles.game_container}>
            <GameHeader newGameHandler={newGameHandler} labelTitle="Guess the colors game" />
            <HiddenCombo show={gameOver} combination={gameCombo} />
            <AttemptsContainer>
                {gameAttempts.map((attempt, index) => (
                    <PlayCard
                        selected={attempt.selected}
                        unSelect={unSelectAll}
                        onSelectAttempt={() => select(attempt.id)}
                        dropdownCount={gameCombo.length}
                        menuList={baseColors}
                        dropdownLabel={icons.down}
                        onSubmit={() => submitCombo(attempt.id)}
                        onCancel={() => cancelAttempt(attempt.id)}
                        renderMenuItem={item => optionItem(item)}
                        results={attempt.results}
                        key={`playcard-${index + 1}`}
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
