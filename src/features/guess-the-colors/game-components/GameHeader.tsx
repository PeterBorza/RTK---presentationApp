import React from "react";

import { UnderConstructionText } from "app";
import { useOnClickOutside } from "hooks";
import { AlertModal } from "shared-components";

type GameHeaderType = {
    labelTitle: string;
    newGameHandler: () => void;
    submitHandler: () => void;
};

const GameHeader = ({ labelTitle, newGameHandler, submitHandler }: GameHeaderType) => {
    const modalRef = React.useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = React.useState(false);
    useOnClickOutside(modalRef, () => setOpen(false));

    const handleSubmit = () => {
        submitHandler();
        setOpen(true);
    };
    return (
        <div className="game_header">
            <h1 className="game_header__title">{labelTitle}</h1>
            <div className="game_header__controls">
                <button onClick={newGameHandler}>New Game</button>
                <button onClick={handleSubmit}>Submit attempt</button>
            </div>
            <AlertModal openModal={open} ref={modalRef}>
                <h1 className="construction_text">{UnderConstructionText.MESSAGE}</h1>
            </AlertModal>
        </div>
    );
};

export default GameHeader;
