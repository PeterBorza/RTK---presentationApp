import React from "react";
import Dropdown, { DropdownContainer } from "shared-components/Dropdown";
import { Evaluation } from ".";
import { guessGameData, IAttempt, IguessGameItem } from "../state";
import { useOnClickOutside } from "hooks";
import { createArray } from "utils/generators";
import { useDispatch, useSelector } from "react-redux";
import { baseColorsState, finishedState, playerComboSelector, validCombo } from "../selectors";
import { resetSelected, selectAttempt, setComboItem } from "../guessGameSlice";

import classNames from "classnames";
interface PlayCardType {
    onSubmit: () => void;
    attempt: IAttempt;
}

const PlayCard = ({ onSubmit, attempt }: PlayCardType) => {
    const { id, selected, playerCombo, results } = attempt;
    const { colorsToGuess, invalidColor } = guessGameData;
    const dropdownCounter = createArray(colorsToGuess);
    const playCardRef = React.useRef<HTMLDivElement | null>(null);
    const finishedGame = useSelector(finishedState);
    const playerComboes = useSelector(playerComboSelector);
    const baseColors = useSelector(baseColorsState);
    const dispatch = useDispatch();

    const emptyComboes = playerComboes.every(combo =>
        combo.every(item => item.color === invalidColor),
    );

    const playCardClasses = classNames("playcard", {
        playcard__selected: selected,
        playcard__disabled: results.length !== 0,
    });
    useOnClickOutside(playCardRef, () => selected && dispatch(resetSelected(id)));

    const onItemClickHandle = (item: IguessGameItem, order: number) => {
        dispatch(setComboItem({ id, item, order }));
    };

    return (
        <div
            className={playCardClasses}
            onClick={() => dispatch(selectAttempt(id))}
            ref={playCardRef}
        >
            <div className="options_wrapper">
                <div className="game_dropdown">
                    {dropdownCounter.map((_, idx) => (
                        <div key={`attempt-dropdown-${idx + 1}`} className="drop">
                            <DropdownContainer
                                position="bottom"
                                reset={!finishedGame && emptyComboes}
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
                enabledResults={validCombo(playerCombo) && !results.length}
            />
        </div>
    );
};

export default PlayCard;
