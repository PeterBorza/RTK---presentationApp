import React from "react";

import { IguessGameItem, EvaluateType } from "../state";

type Props = {
    baseColors: IguessGameItem[];
    legend: EvaluateType[];
    count: number;
};

const GameControls = ({ baseColors, legend, count }: Props) => {
    return (
        <div className="controls">
            <p>A palette of six colors is given:</p>
            <ul className="ol-list">
                {baseColors.map(({ id, color }) => (
                    <li key={id}>
                        <p style={{ color }}>{color}</p>
                    </li>
                ))}
            </ul>
            <p>
                Try and guess the right colors and in the right order, by submitting your
                combinations on the left panel&apos;s circle-group.
            </p>
            <p>
                You have
                <strong> {count} </strong>
                attempts, and your score for every turn is reflected in results you&apos;re given on
                each submit.
            </p>
            <ul className="ul-list">
                {legend.map(item => (
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
