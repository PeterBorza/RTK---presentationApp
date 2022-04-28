import React from "react";
import { featureFlags } from "flags";
import {
    Attempt,
    AttemptsContainer,
    CardIcons,
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
import { IguessGameItem } from "./state";
import { useSelector } from "react-redux";
import { baseColorsState, gameAttemptsState, playerComboArray } from "./selectors";

const gameColors: string[] = ["red", "blue", "green", "orange", "lightgreen", "lightblue"];
const newColors = (arr: IguessGameItem[]): IguessGameItem[] => shuffle(arr).slice(0, 4);

const ColorGame = () => {
    const flagged: boolean = featureFlags.guess_the_colors;

    const gameAttempts = useSelector(gameAttemptsState);
    const baseColors = useSelector(baseColorsState);
    const playerCombo = useSelector(playerComboArray);
    const [newGame, setNewGame] = React.useState<IguessGameItem[]>(newColors(baseColors));

    const shuffleUp = () => setNewGame(newColors(baseColors));
    const submitCombo = () => {
        console.log({ text: "Submit is building aws.", baseColors, newGame, playerCombo });
    };

    const NUM_OF_ATTEMPTS = gameAttempts.length;
    const attemptBoxes: number[] = new Array(NUM_OF_ATTEMPTS).fill(null);
    const mockResults = ["white", "white", "black", "none"];
    const mockAttempt = ["red", "lightgreen", "blue", "orange"];

    return flagged ? (
        <div className={styles.game_container}>
            <GameHeader labelTitle="Guess the colors game" />
            <HiddenCombo combination={newGame} />
            <AttemptsContainer>
                {attemptBoxes.map((_, idx) => (
                    <PlayCard key={`playcard-${idx + 1}`}>
                        <Attempt>
                            <GameDropdown>
                                {mockAttempt.map((item, idx) => (
                                    <GameDropdownItem key={`game-drop-${idx + 1}`} color={item} />
                                ))}
                            </GameDropdown>
                            <CardIcons />
                        </Attempt>
                        <Evaluation results={mockResults} />
                    </PlayCard>
                ))}
            </AttemptsContainer>
            <GameControls gameColors={gameColors} shuffleUp={shuffleUp} submitCombo={submitCombo} />
        </div>
    ) : (
        <div className={styles.coming_soon}>{ComingSoonText.MESSAGE}</div>
    );
};

export default ColorGame;
