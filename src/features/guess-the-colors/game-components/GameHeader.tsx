import React from "react";

import { Button } from "shared-components";
import { useDispatch } from "react-redux";
import { resetComboes, resetResults, setFinished, setNewGame } from "../guessGameSlice";
import { COLORS_TO_GUESS_COUNT, IguessGameItem } from "../state";
import { shuffle } from "utils";

type Props = {
    baseColors: IguessGameItem[];
};

const GAME_TITLE = "Guess the colors game";
const NEW_GAME = "New Game";

const GameHeader = ({ baseColors }: Props) => {
    const dispatch = useDispatch();

    const newColors = (arr: IguessGameItem[]): IguessGameItem[] =>
        shuffle(arr).slice(0, COLORS_TO_GUESS_COUNT);

    const newGameHandler = () => {
        dispatch(setFinished(false));
        dispatch(resetResults());
        dispatch(resetComboes());
        dispatch(setNewGame(newColors(baseColors)));
    };

    return (
        <div className="game_header">
            <h1 className="game_header__title">{GAME_TITLE}</h1>
            <div className="game_header__controls">
                <Button value={NEW_GAME} onClick={() => newGameHandler()} />
            </div>
        </div>
    );
};

export default GameHeader;
