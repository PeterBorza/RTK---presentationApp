import React from "react";

import { IguessGameItem } from "../state";

type GameControlsProps = {
    gameColors: IguessGameItem[];
};

const GameControls = ({ gameColors }: GameControlsProps) => {
    return (
        <>
            <div className="controls">
                <div>
                    <p>A palette of six colors is given:</p>
                    <ol className="ol-list">
                        {gameColors.map(item => (
                            <li key={item.id} style={{ color: item.color }}>
                                <p>{item.color}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                <p>
                    Try and guess the right colors and in the right order, by submitting your
                    combinations on the left panel.
                </p>
                <p>
                    You have six attempts, and your score for every turn is reflected in the white
                    and black circles you're given on each submit.
                </p>
                <ul className="ul-list">
                    <li>
                        <p>
                            <b>White circle:</b>
                            <br />
                            Color is in a random position.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Black circle:</b>
                            <br />
                            Color is in it's exact spot in the combo.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Transparent circle:</b>
                            <br />
                            Color is not in the combo.
                        </p>
                    </li>
                </ul>
                <p>You win the game if you guess the combo under six attempts.</p>
                <p>Try and go for the record, or play with time pressure. Cheers.</p>
            </div>
        </>
    );
};

export default GameControls;
