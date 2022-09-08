import React from "react";
import Dropdown, { DropdownContainer } from "shared-components/Dropdown";
import { Evaluation } from ".";
import { GuessGameDataType, IAttempt, IguessGameItem, ResultType } from "../state";
import { useOnClickOutside } from "hooks";
import { createArray } from "utils/generators";
import { useDispatch, useSelector } from "react-redux";
import { emptyAttemptSelector } from "../selectors";
import {
    resetSelected,
    selectAttempt,
    setComboItem,
    setError,
    setResults,
} from "../guessGameSlice";

import classNames from "classnames";
interface PlayCardType {
    attempt: IAttempt;
    gameCombo: IguessGameItem[];
    isFinished: boolean;
    gameData: GuessGameDataType;
}

const PlayCard = ({ attempt, gameCombo, isFinished, gameData }: PlayCardType) => {
    const { id, selected, playerCombo, results, base } = attempt;
    const { invalidColor, errorMessages, resultValues, tooltip } = gameData;
    const dropdownCounter = createArray(gameCombo.length);
    const playCardRef = React.useRef<HTMLDivElement | null>(null);
    const cleanSlates = useSelector(emptyAttemptSelector);
    const dispatch = useDispatch();

    const playCardClasses = classNames("playcard", {
        playcard__selected: selected,
        playcard__disabled: results.length !== 0,
    });
    useOnClickOutside(playCardRef, () => selected && dispatch(resetSelected(id)));

    const hasIdenticalItems = () => {
        const colors = playerCombo.map(item => item.color);

        const result = Array.from(new Set(colors));
        if (result.length < gameCombo.length) return false;
        return true;
    };

    const validCombo = () =>
        playerCombo.every(item => item.color !== invalidColor) && hasIdenticalItems();

    const onItemClickHandle = (item: IguessGameItem, order: number) => {
        dispatch(setComboItem({ id, item, order }));
    };

    const checkIfIncluded = (playerCombo: IguessGameItem[]) =>
        gameCombo.filter(
            (item, index) => playerCombo.includes(item) && playerCombo[index] !== item,
        );

    const errorHandler = () => {
        if (cleanSlates) return;
        if (selected) {
            const hasInvalidChoice = playerCombo.some(item => item.color === invalidColor);
            const identical = !hasIdenticalItems();

            if (hasInvalidChoice) {
                dispatch(setError(errorMessages.notIncluded));
                return;
            }
            if (identical) {
                dispatch(setError(errorMessages.identicalColors));
                return;
            }
        }
        dispatch(setError(null));
    };

    const handleResults = () => {
        errorHandler();

        let results: ResultType = [];
        const missing = gameCombo.filter(item => playerCombo.includes(item) === false);
        const included = checkIfIncluded(playerCombo);
        const match = gameCombo.filter((item, index) => item.id === playerCombo[index].id);

        const resultValues = [missing, included, match];
        resultValues.map((item, idx) => item.forEach(() => results.push(idx)));
        if (validCombo()) dispatch(setResults({ id, results }));
    };

    return (
        <div
            className={playCardClasses}
            onClick={() => dispatch(selectAttempt(id))}
            ref={playCardRef}
        >
            <div className="game_dropdown">
                {dropdownCounter.map((_, order) => (
                    <div key={`attempt-dropdown-${order + 1}`} className="drop">
                        <DropdownContainer position="bottom" reset={!isFinished && cleanSlates}>
                            {base.map(item => (
                                <Dropdown.MenuItem
                                    key={`dropdown-item-${item.id}`}
                                    onClick={() => onItemClickHandle(item, order)}
                                >
                                    <div
                                        className="color_option"
                                        style={{
                                            backgroundColor: item.color,
                                        }}
                                    />
                                </Dropdown.MenuItem>
                            ))}
                        </DropdownContainer>
                    </div>
                ))}
            </div>
            <Evaluation
                results={results}
                handleResults={handleResults}
                enabledResults={validCombo() && !results.length}
                initialValues={resultValues}
                tooltip={!validCombo() ? tooltip.invalid : tooltip.valid}
            />
        </div>
    );
};

export default PlayCard;
