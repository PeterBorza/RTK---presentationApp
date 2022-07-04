import { useOnClickOutside } from "hooks";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertModal } from "shared-components";
import { setError, setFinished, setResults } from "../guessGameSlice";
import {
    allValidComboesSelector,
    errorState,
    hasIdenticalItems,
    perfectMatchSelector,
    validCombo,
} from "../selectors";
import { guessGameData, IAttempt, IguessGameItem, ResultType } from "../state";
import PlayCard from "./PlayCard";

type Props = {
    gameAttempts: IAttempt[];
    gameCombo: IguessGameItem[];
};

const GameAttempts = ({ gameAttempts, gameCombo }: Props) => {
    const { errorMessages, invalidColor } = guessGameData;
    const isGameFinished = useSelector(allValidComboesSelector);
    const perfectGuess = useSelector(perfectMatchSelector);
    const errorMessage = useSelector(errorState);
    const errorRef = React.useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();

    useOnClickOutside(errorRef, () => dispatch(setError(null)));

    React.useEffect(() => {
        (perfectGuess || isGameFinished) && dispatch(setFinished(true));
    }, [perfectGuess, isGameFinished, dispatch]);

    const checkIfIncluded = (playerCombo: IguessGameItem[]) =>
        gameCombo.filter(
            (item, index) => playerCombo.includes(item) && playerCombo[index] !== item,
        );

    const errorHandler = (attempt: IAttempt) => {
        const { selected, playerCombo } = attempt;
        if (selected) {
            const hasInvalidChoice = playerCombo.some(item => item.color === invalidColor);
            const emptyAttempt = playerCombo.every(item => item.color === invalidColor);
            const identical = !hasIdenticalItems(playerCombo);

            if (emptyAttempt) return;

            if (hasInvalidChoice) {
                dispatch(setError(errorMessages.notIncluded));
                return;
            }
            if (identical) {
                dispatch(setError(errorMessages.identicalColors));
                return;
            }
            dispatch(setError(null));
        }
    };

    const handleResults = (attempt: IAttempt) => {
        const { playerCombo, id: attemptId } = attempt;
        let results: ResultType = [];

        const missing = gameCombo.filter(item => playerCombo.includes(item) === false);
        const included = checkIfIncluded(playerCombo);
        const match = gameCombo.filter((item, index) => item.id === playerCombo[index].id);

        errorHandler(attempt);

        const resultValues = [missing, included, match];
        resultValues.map((item, idx) => item.forEach(() => results.push(idx)));
        if (validCombo(playerCombo)) dispatch(setResults({ id: attemptId, results }));
    };

    return (
        <div className="attempts_container">
            {gameAttempts.map(attempt => (
                <PlayCard
                    key={`playcard-${attempt.id}`}
                    onSubmit={() => handleResults(attempt)}
                    attempt={attempt}
                />
            ))}
            <AlertModal openModal={errorMessage !== null} ref={errorRef} position="top-right">
                <h1 className="attempts_container__error-message">{errorMessage}</h1>
            </AlertModal>
        </div>
    );
};

export default GameAttempts;
