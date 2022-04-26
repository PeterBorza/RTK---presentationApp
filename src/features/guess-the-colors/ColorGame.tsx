import React, { useState } from "react";
import { icons } from "utils";
import { featureFlags } from "flags";
import { GameControls } from "./game-components";

import { shuffle } from "utils";
import styles from "./ColorGame.module.scss";

const gameColors: string[] = ["red", "blue", "green", "orange", "lightgreen", "lightblue"];
const newColors = (arr: string[]): string[] => shuffle(arr).slice(0, 4);
const NUMBER_OF_ATTEMPTS = 6;

const ColorGame = () => {
    const flagged: boolean = featureFlags.guess_the_colors;
    const [newGame, setNewGame] = useState(newColors(gameColors));
    const [text, setText] = useState("");
    const attemptBoxes: number[] = new Array(NUMBER_OF_ATTEMPTS).fill(null);
    const shuffleUp = () => setNewGame(newColors(gameColors));
    const submitCombo = () => setText("It is currently under construction, terribly sorry.");

    const selectDropdowns = (
        <>
            <div className={styles.drops}>
                <div className={styles.drop} style={{ backgroundColor: "red" }}></div>
                <div className={styles.drop} style={{ backgroundColor: "lightgreen" }}></div>
                <div className={styles.drop} style={{ backgroundColor: "blue" }}></div>
                <div className={styles.drop} style={{ backgroundColor: "orange" }}></div>
            </div>
            <div className={styles.icons}>
                {icons.x}
                {icons.checkMark}
            </div>
        </>
    );

    const attemptBox = (
        <>
            <div className={styles.options_wrapper}>{selectDropdowns}</div>
            <div className={styles.evaluation_wrapper}>
                <div className={styles.score_box} style={{ backgroundColor: "white" }} />
                <div className={styles.score_box} style={{ backgroundColor: "black" }} />
                <div className={styles.score_box} style={{ backgroundColor: "white" }} />
                <div className={styles.score_box} />
            </div>
        </>
    );

    return flagged ? (
        <div className={styles.game_container}>
            <div className={styles.game_header}>
                <h1>Guess the colors game</h1>
            </div>
            <div className={styles.combination}>
                {newGame.map((color, idx) => (
                    <div
                        key={`combo-${idx}`}
                        className={styles.hidden_combo}
                        style={{ backgroundColor: color }}
                    >
                        {idx + 1}
                    </div>
                ))}
            </div>
            <div className={styles.attempts}>
                {attemptBoxes.map((_, idx) => (
                    <div key={`attempt-nr-${idx + 1}`} className={styles.attempt_box}>
                        {attemptBox}
                    </div>
                ))}
            </div>
            <GameControls
                gameColors={gameColors}
                shuffleUp={shuffleUp}
                submitCombo={submitCombo}
                text={text}
            />
        </div>
    ) : (
        <div className={styles.coming_soon}>Coming Soon...</div>
    );
};

export default ColorGame;
