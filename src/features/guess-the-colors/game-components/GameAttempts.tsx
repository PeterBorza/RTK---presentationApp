import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useOnClickOutside } from "hooks";
import { AlertModal } from "shared-components";
import { setError, setFinished } from "../guessGameSlice";
import {
    allValidComboesSelector,
    errorState,
    finishedState,
    gameAttemptsState,
    perfectMatchSelector,
} from "../selectors";
import { GuessGameDataType, IguessGameItem } from "../state";
import PlayCard from "./PlayCard";

type Props = {
    gameCombo: IguessGameItem[];
    gameData: GuessGameDataType;
};

const GameAttempts = ({ gameCombo, gameData }: Props) => {
    const allValidResults = useSelector(allValidComboesSelector);
    const perfectGuess = useSelector(perfectMatchSelector);
    const gameAttempts = useSelector(gameAttemptsState);
    const errorMessage = useSelector(errorState);
    const isFinished = useSelector(finishedState);
    const errorRef = React.useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();

    useOnClickOutside(errorRef, () => dispatch(setError(null)));

    React.useEffect(() => {
        (perfectGuess || allValidResults) && dispatch(setFinished(true));
    }, [perfectGuess, allValidResults, dispatch]);

    return (
        <div className="attempts_container">
            {gameAttempts.map(attempt => (
                <PlayCard
                    key={`playcard-${attempt.id}`}
                    attempt={attempt}
                    gameCombo={gameCombo}
                    isFinished={isFinished}
                    gameData={gameData}
                />
            ))}
            {Boolean(errorMessage) && (
                <AlertModal openModal={Boolean(errorMessage)} ref={errorRef} position="top-right">
                    <h1 className="attempts_container__error-message">{errorMessage}</h1>
                </AlertModal>
            )}
        </div>
    );
};

export default GameAttempts;
