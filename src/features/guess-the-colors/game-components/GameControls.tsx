import React from "react";

import { UnderConstructionText } from "app";
import { AlertModal } from "shared-components";
import { useOnClickOutside } from "hooks";

type GameControlsProps = {
    gameColors: string[];
    shuffleUp: () => void;
    submitCombo: () => void;
};

const GameControls = ({ gameColors, shuffleUp, submitCombo }: GameControlsProps) => {
    const modalRef = React.useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = React.useState(false);
    useOnClickOutside(modalRef, () => setOpen(false));

    const handleSubmit = () => {
        submitCombo();
        setOpen(true);
    };
    return (
        <>
            <div className="controls">
                <div>
                    <p>A palette of six colors is given:</p>
                    <ol className="ol-list">
                        {gameColors.map(color => (
                            <li key={color} style={{ color }}>
                                <p>{color}</p>
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
                <button onClick={shuffleUp}>New Game</button>
                <button onClick={handleSubmit}>Submit attempt</button>
            </div>
            <AlertModal openModal={open} ref={modalRef}>
                <h1 className="construction_text">{UnderConstructionText.MESSAGE}</h1>
            </AlertModal>
        </>
    );
};

export default GameControls;
