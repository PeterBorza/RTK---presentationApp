import React from "react";
import { useDispatch } from "react-redux";
import { resetSelected, selectAttempt, setFinished, setResults } from "../guessGameSlice";
import { COLORS_TO_GUESS_COUNT, IAttempt, IguessGameItem, ResultType } from "../state";
import PlayCard from "./PlayCard";

type Props = {
    gameAttempts: IAttempt[];
    gameCombo: IguessGameItem[];
};

const GameAttempts = ({ gameAttempts, gameCombo }: Props) => {
    const dispatch = useDispatch();

    const hasIdenticalItems = (arr: string[]) => {
        const result = Array.from(new Set(arr));
        if (result.length < COLORS_TO_GUESS_COUNT) return false;
        return true;
    };

    const validCombo = (playerCombo: IguessGameItem[]) => {
        const colors = playerCombo.map(item => item.color);
        return playerCombo.every(item => item.color !== "none") && hasIdenticalItems(colors);
    };

    const checkIfIncluded = (playerCombo: IguessGameItem[]) => {
        return gameCombo.filter(
            (item, index) => playerCombo.includes(item) && playerCombo[index] !== item,
        );
    };

    const handleResults = (playerCombo: IguessGameItem[], attemptId: number) => {
        let results: ResultType = [];

        const isValid = validCombo(playerCombo);
        if (!isValid) return;

        const missing = gameCombo.filter(item => playerCombo.includes(item) === false);
        const included = checkIfIncluded(playerCombo);
        const match = gameCombo.filter((item, index) => item.id === playerCombo[index].id);

        const resultValues = [missing, included, match];
        resultValues.map((item, idx) => item.forEach(() => results.push(idx)));

        const noAttemptsLeft = gameAttempts.every(
            attempt =>
                attempt.results.length === COLORS_TO_GUESS_COUNT && validCombo(attempt.playerCombo),
        );
        const perfectMatch = match.length === COLORS_TO_GUESS_COUNT;
        if (perfectMatch || noAttemptsLeft) dispatch(setFinished(true));

        dispatch(setResults({ id: attemptId, results }));
    };

    return (
        <div className="attempts_container">
            {gameAttempts.map((attempt, index) => (
                <PlayCard
                    key={`playcard-${index + 1}`}
                    selected={attempt.selected}
                    onBlur={() => attempt.selected && dispatch(resetSelected(attempt.id))}
                    onSelect={() => dispatch(selectAttempt(attempt.id))}
                    onSubmit={() => handleResults(attempt.playerCombo, attempt.id)}
                    results={attempt.results}
                    isDisabled={attempt.results.length !== 0}
                    enabledResults={validCombo(attempt.playerCombo) && !attempt.results.length}
                    currentId={attempt.id}
                />
            ))}
        </div>
    );
};

export default GameAttempts;
