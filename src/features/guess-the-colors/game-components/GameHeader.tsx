import React from "react";

import { UnderConstructionText } from "app";
import { useOnClickOutside } from "hooks";
import { AlertModal, Button } from "shared-components";

type GameHeaderType = {
    labelTitle: string;
    newGameHandler: () => void;
};

const GameHeader = ({ labelTitle, newGameHandler }: GameHeaderType) => {
    const modalRef = React.useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = React.useState(false);
    useOnClickOutside(modalRef, () => setOpen(false));

    const handleSubmit = () => newGameHandler();
    // const handleSubmit = () => setOpen(true);

    return (
        <div className="game_header">
            <h1 className="game_header__title">{labelTitle}</h1>
            <div className="game_header__controls">
                <Button type="submit" value="New Game" onClick={handleSubmit} />
            </div>
            <AlertModal openModal={open} ref={modalRef}>
                <h1 className="construction_text">{`${UnderConstructionText.MESSAGE} Refresh to start a new game`}</h1>
            </AlertModal>
        </div>
    );
};

export default GameHeader;
