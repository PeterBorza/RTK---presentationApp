import { useOnClickOutside } from "hooks";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertModal } from "shared-components";
import { setError, setFinished } from "../guessGameSlice";
import { allValidComboesSelector, errorState, perfectMatchSelector } from "../selectors";
import { IAttempt, IguessGameItem } from "../state";
import PlayCard from "./PlayCard";

type Props = {
    gameAttempts: IAttempt[];
    gameCombo: IguessGameItem[];
    isFinished: boolean;
};

const GameAttempts = ({ gameAttempts, gameCombo, isFinished }: Props) => {
    const allValidResults = useSelector(allValidComboesSelector);
    const perfectGuess = useSelector(perfectMatchSelector);
    const errorMessage = useSelector(errorState);
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
                />
            ))}
            <AlertModal openModal={errorMessage !== null} ref={errorRef} position="top-right">
                <h1 className="attempts_container__error-message">{errorMessage}</h1>
            </AlertModal>
        </div>
    );
};

export default GameAttempts;
