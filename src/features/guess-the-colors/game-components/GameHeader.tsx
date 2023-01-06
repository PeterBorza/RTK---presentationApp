import React from "react";

import { Button, GradientText } from "shared-components";

type Props = {
    isFresh: boolean;
    onNewGameClick: () => void;
    title: string;
    buttonLabel: string;
};

const GameHeader = ({ isFresh, onNewGameClick, title, buttonLabel }: Props) => {
    return (
        <div className="game_header">
            <GradientText animatedText={title} />
            {/* <h1 className="game_header__title">{title}</h1> */}
            <Button isDisabled={isFresh} value={buttonLabel} onClick={onNewGameClick} />
        </div>
    );
};

export default GameHeader;
