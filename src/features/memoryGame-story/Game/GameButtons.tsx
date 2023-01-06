import React from "react";

import { Button, ButtonWrapper } from "shared-components";
import { GameTheme, GameThemeType } from "./redux/types";

interface GameButtonsProps {
    themes: GameThemeType[];
    onNewGame: (theme: GameTheme) => void;
    dark: boolean;
}

const GameButtons: React.FC<GameButtonsProps> = ({ themes, onNewGame, dark, children }) => {
    return (
        <ButtonWrapper position="center" dark={dark}>
            {themes.map(({ theme }) => (
                <Button key={theme} onClick={() => onNewGame(theme)} value={theme} />
            ))}
            {children}
        </ButtonWrapper>
    );
};

export default GameButtons;
