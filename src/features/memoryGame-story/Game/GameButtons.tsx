import React from "react";

import { ButtonWrapper, NeonButton } from "shared-components";
import { GameTheme, GameThemeType } from "./redux/types";
import { ButtonColors } from "shared-components/NeonButton/NeonButton";

interface GameButtonsProps {
    themes: GameThemeType[];
    onNewGame: (theme: GameTheme) => void;
    dark: boolean;
    children?: React.ReactNode;
}

const GameButtons = ({ themes, onNewGame, dark, children }: GameButtonsProps) => {
    const buttonColors: Record<number, ButtonColors> = ["violet", "green", "blue"];

    return (
        <ButtonWrapper position="center" dark={dark}>
            {themes.map(({ theme }, index) => (
                <NeonButton
                    key={theme}
                    onClick={() => onNewGame(theme)}
                    color={buttonColors[index]}
                    mirrorEffect
                    animated={false}
                >
                    {theme}
                </NeonButton>
            ))}
            {children}
        </ButtonWrapper>
    );
};

export default GameButtons;
