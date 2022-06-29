import React from "react";

import { IguessGameItem, guessGameData } from "../state";

type Props = {
    baseColors: IguessGameItem[];
};

const GameControls = ({ baseColors }: Props) => {
    const { gameLegend, attemptCount } = guessGameData;
    return (
        <div className="controls">
            <div>
                <p>A palette of six colors is given:</p>
                {
                    <ul className="ol-list">
                        {baseColors.map(({ id, color }) => (
                            <li key={id}>
                                <p style={{ color }}>{color}</p>
                            </li>
                        ))}
                    </ul>
                }
            </div>
            <p>
                Try and guess the right colors and in the right order, by submitting your
                combinations on the left panel's circle-group.
            </p>
            <p>
                {` You have -${attemptCount}- attempts, and your score for every turn is reflected in results you're
                given on each submit.`}
            </p>
            <ul className="ul-list">
                {gameLegend.map(item => (
                    <li key={item.result}>
                        <p>
                            <b>{`${item.result}:`}</b>
                            <br />
                            {item.definition}
                        </p>
                    </li>
                ))}
            </ul>
            <p>You win the game if you guess the combo under six attempts.</p>
            <p>Try and go for the record, or play with time pressure. Cheers.</p>
        </div>
    );
};

export default GameControls;
