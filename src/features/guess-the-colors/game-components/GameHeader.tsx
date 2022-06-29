import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "shared-components";
import { resetComboes, resetResults, setFinished, setNewGame } from "../guessGameSlice";
import { guessGameData, IguessGameItem } from "../state";
import { shuffle } from "utils";

type Props = {
    baseColors: IguessGameItem[];
};

const GameHeader = ({ baseColors }: Props) => {
    const { colorsToGuess, gameTitle, newGame } = guessGameData;
    const dispatch = useDispatch();

    const newColors = (arr: IguessGameItem[]): IguessGameItem[] =>
        shuffle(arr).slice(0, colorsToGuess);

    const newGameHandler = () => {
        dispatch(setFinished(false));
        dispatch(resetResults());
        dispatch(resetComboes());
        dispatch(setNewGame(newColors(baseColors)));
    };

    return (
        <div className="game_header">
            <h1 className="game_header__title">{gameTitle}</h1>
            <div className="game_header__controls">
                <Button value={newGame} onClick={() => newGameHandler()} />
            </div>
        </div>
    );
};

export default GameHeader;
