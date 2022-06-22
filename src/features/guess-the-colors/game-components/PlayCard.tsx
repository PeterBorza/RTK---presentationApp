import React from "react";
import Dropdown, { DropdownContainer } from "shared-components/Dropdown";
import { Evaluation } from ".";
import { COLORS_TO_GUESS_COUNT, IguessGameItem, ResultType } from "../state";
import { useOnClickOutside } from "hooks";
import { createArray } from "utils/generators";
import { useDispatch, useSelector } from "react-redux";
import { baseColorsState, finishedState, playerResults } from "../selectors";
import { setComboItem } from "../guessGameSlice";

import classNames from "classnames";
interface PlayCardType {
    selected: boolean;
    onBlur: () => void;
    onSelect: () => void;
    onSubmit: () => void;
    results: ResultType;
    isDisabled: boolean;
    enabledResults: boolean;
    currentId: number;
}

const PlayCard = ({
    selected,
    onBlur,
    onSelect,
    onSubmit,
    results,
    isDisabled,
    enabledResults,
    currentId,
}: PlayCardType) => {
    const dropdownCounter = createArray(COLORS_TO_GUESS_COUNT);
    const playCardRef = React.useRef<HTMLDivElement | null>(null);
    const finishedGame = useSelector(finishedState);
    const allResults = useSelector(playerResults);
    const baseColors = useSelector(baseColorsState);
    const dispatch = useDispatch();

    const canReset = allResults.every(result => result.length === 0);

    const playCardClasses = classNames("playcard", {
        playcard__selected: selected,
        playcard__disabled: isDisabled,
    });
    useOnClickOutside(playCardRef, onBlur);

    const onItemClickHandle = (item: IguessGameItem, order: number) =>
        dispatch(setComboItem({ id: currentId, item, order }));

    return (
        <div className={playCardClasses} onClick={onSelect} ref={playCardRef}>
            <div className="options_wrapper">
                <div className="game_dropdown">
                    {dropdownCounter.map((_, idx) => (
                        <div key={`attempt-dropdown-${idx + 1}`} className="drop">
                            <DropdownContainer
                                position={idx === dropdownCounter.length ? "top" : "bottom"}
                                reset={!finishedGame && canReset}
                            >
                                {baseColors.map(item => (
                                    <Dropdown.MenuItem
                                        key={`dropdown-item-${item.id}`}
                                        onClick={() => onItemClickHandle(item, idx)}
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
            </div>
            <Evaluation
                results={results}
                handleResults={onSubmit}
                enabledResults={enabledResults}
            />
        </div>
    );
};

export default PlayCard;
