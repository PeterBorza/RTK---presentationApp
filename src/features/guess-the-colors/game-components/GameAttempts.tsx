import { useOnClickOutside } from "hooks";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertModal } from "shared-components";
import { resetSelected, selectAttempt, setError, setFinished, setResults } from "../guessGameSlice";
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
    const { errorMessages } = guessGameData;
    const isGameFinished = useSelector(allValidComboesSelector);
    const perfectGuess = useSelector(perfectMatchSelector);
    const error = useSelector(errorState);
    const errorRef = React.useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();

    useOnClickOutside(errorRef, () => dispatch(setError(null)));

    const checkIfIncluded = (playerCombo: IguessGameItem[]) =>
        gameCombo.filter(
            (item, index) => playerCombo.includes(item) && playerCombo[index] !== item,
        );

    const setGameOver = () => (perfectGuess || isGameFinished) && dispatch(setFinished(true));

    const handleResults = (playerCombo: IguessGameItem[], attemptId: number) => {
        let results: ResultType = [];

        const missing = gameCombo.filter(item => playerCombo.includes(item) === false);
        const included = checkIfIncluded(playerCombo);
        const match = gameCombo.filter((item, index) => item.id === playerCombo[index].id);

        const incomplete = playerCombo.some(item => item.color === "none");
        const identical = !hasIdenticalItems(playerCombo);

        if (incomplete) {
            dispatch(setError(errorMessages.notIncluded));
            return;
        }
        if (identical) {
            dispatch(setError(errorMessages.identicalColors));
            return;
        }

        const resultValues = [missing, included, match];
        resultValues.map((item, idx) => item.forEach(() => results.push(idx)));

        dispatch(setResults({ id: attemptId, results }));
        setGameOver();
        dispatch(setError(null));
    };

    return (
        <div className="attempts_container">
            {gameAttempts.map(({ id, selected, playerCombo, results }) => (
                <PlayCard
                    key={`playcard-${id}`}
                    selected={selected}
                    onBlur={() => selected && dispatch(resetSelected(id))}
                    onSelect={() => dispatch(selectAttempt(id))}
                    onSubmit={() => handleResults(playerCombo, id)}
                    results={results}
                    isDisabled={results.length !== 0}
                    enabledResults={validCombo(playerCombo) && !results.length}
                    currentId={id}
                />
            ))}
            <AlertModal openModal={!!error} ref={errorRef}>
                <h1 className="attempts_container__error-message">{error}</h1>
            </AlertModal>
        </div>
    );
};

export default GameAttempts;
