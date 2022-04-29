import React, { useEffect } from "react";
import { featureFlags } from "flags";
import {
    Attempt,
    AttemptsContainer,
    CardIcons,
    ColorDrops,
    Evaluation,
    GameControls,
    GameDropdown,
    GameDropdownItem,
    GameHeader,
    HiddenCombo,
    PlayCard,
} from "./game-components";
import { ComingSoonText } from "app";
import { shuffle } from "utils";

import styles from "./ColorGame.module.scss";
import { IguessGameItem, ResultType } from "./state";
import { useDispatch, useSelector } from "react-redux";
import {
    baseColorsState,
    gameAttemptsState,
    playerComboSelector,
    gameComboState,
    playerResults,
} from "./selectors";
import { getNewGameCombo, setPlayerComboItem, setResults } from "./guessGameSlice";
import { current } from "immer";

const newColors = (arr: IguessGameItem[]): IguessGameItem[] => shuffle(arr).slice(0, 4);

const ColorGame = () => {
    const flagged: boolean = featureFlags.guess_the_colors;

    const gameCombo = useSelector(gameComboState);
    const results = useSelector(playerResults);
    const gameAttempts = useSelector(gameAttemptsState);
    const baseColors = useSelector(baseColorsState);
    const playerComboes = useSelector(playerComboSelector);

    const dispatch = useDispatch();

    const perfectMatch: ResultType = [1, 1, 1, 1];

    const gameOver = results.some(res => [...res] === [...perfectMatch]);

    useEffect(() => {
        !gameCombo.length && dispatch(getNewGameCombo(newColors(baseColors)));
    }, []);

    const shuffleUp = () => dispatch(getNewGameCombo(newColors(baseColors)));

    const playerChoiceHandler = (option: IguessGameItem, attemptId: number, order: number) =>
        dispatch(
            setPlayerComboItem({
                id: attemptId,
                item: { ...option, order: order + 1 },
            }),
        );

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

    const currentResult = (attemptId: number) => {
        const current = currentAttemptFinder(attemptId);
        return current ? current.results : [];
    };

    const submitCombo = () => {
        console.log(results);
    };
    return flagged ? (
        <div className={styles.game_container}>
            <GameHeader
                newGameHandler={shuffleUp}
                submitHandler={submitCombo}
                labelTitle="Guess the colors game"
            />
            <HiddenCombo show={gameOver} combination={gameCombo} />
            <AttemptsContainer>
                {gameAttempts.map((attempt, index) => (
                    <PlayCard isEnabled={attempt.isAttemptEnabled} key={`playcard-${index + 1}`}>
                        <Attempt>
                            <GameDropdown>
                                {gameCombo.map((item, idx) => (
                                    <GameDropdownItem key={`attempt-dropdown-${idx + 1}`}>
                                        <ColorDrops
                                            onClick={option =>
                                                playerChoiceHandler(option, attempt.id, idx + 1)
                                            }
                                            colors={baseColors}
                                        />
                                    </GameDropdownItem>
                                ))}
                            </GameDropdown>

                            <CardIcons onSubmit={() => comboMatchHandler(attempt.id)} />
                        </Attempt>
                        <Evaluation results={currentResult(attempt.id)} />
                    </PlayCard>
                ))}
            </AttemptsContainer>
            <GameControls gameColors={baseColors} />
        </div>
    ) : (
        <div className={styles.coming_soon}>{ComingSoonText.MESSAGE}</div>
    );
};

export default ColorGame;
