import React from "react";

type GameControlsProps = {
    gameColors: string[];
    shuffleUp: () => void;
    submitCombo: () => void;
    text?: string;
};

const GameControls = ({ gameColors, shuffleUp, submitCombo, text = "" }: GameControlsProps) => {
    // const isText = text !== "";
    return (
        <div className="controls">
            <div>
                A palette of six colors is given:
                <ol className="ol-list">
                    {gameColors.map(color => (
                        <li key={color} style={{ color }}>
                            {color}
                        </li>
                    ))}
                </ol>
            </div>

            <p>
                Try and guess the right colors and in the right order, by submitting your
                combinations on the left panel.
            </p>
            <p>
                You have six attempts, and your score for every turn is reflected in the white and
                black circles you're given on each submit.
            </p>
            <ul className="ul-list">
                <li>
                    <b>White circle:</b> you guessed the right color, in a random position.
                </li>
                <li>
                    <b>Black circle:</b> you guessed the right color in it's exact spot in the
                    combo.
                </li>
            </ul>
            <p>You win the game if you guess the combo under six attempts.</p>
            <p>Try and go for the record, or play with time pressure.</p>
            <p>Cheers.</p>
            <button onClick={shuffleUp}>Try again</button>
            <button onClick={submitCombo}>Submit attempt</button>

            <div className="construction_text">
                <p className="text">{text}</p>
            </div>
        </div>
    );
};

export default GameControls;
