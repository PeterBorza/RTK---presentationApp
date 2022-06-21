import React from "react";
import Dropdown, { DropdownContainer } from "shared-components/Dropdown";
import { DropLabelType } from "shared-components/Dropdown/DropdownContainer";
import { Evaluation } from ".";
import { IguessGameItem, ResultType } from "../state";
import classNames from "classnames";
import { useOnClickOutside } from "hooks";
import { createArray } from "utils/generators";

interface PlayCardType {
    selected: boolean;
    onBlur: () => void;
    onSelect: () => void;
    dropdownCount: number;
    menuList: IguessGameItem[];
    itemClickHandler: (item: IguessGameItem, order: number) => void;
    dropdownLabel?: DropLabelType;
    onSubmit: () => void;
    results: ResultType;
    isDisabled: boolean;
    values: string[];
    enabledResults: boolean;
}

const PlayCard = ({
    selected,
    onBlur,
    onSelect,
    dropdownCount,
    menuList,
    itemClickHandler,
    dropdownLabel,
    onSubmit,
    results,
    isDisabled,
    values,
    enabledResults,
}: PlayCardType) => {
    const dropdownCounter = createArray(dropdownCount);
    const playCardRef = React.useRef<HTMLDivElement | null>(null);
    const playCardClasses = classNames("playcard", {
        playcard__selected: selected,
        playcard__disabled: isDisabled,
    });
    useOnClickOutside(playCardRef, onBlur);

    return (
        <div className={playCardClasses} onClick={onSelect} ref={playCardRef}>
            <div className="options_wrapper">
                <div className="game_dropdown">
                    {dropdownCounter.map((_, idx) => (
                        <div key={`attempt-dropdown-${idx + 1}`} className="drop">
                            <DropdownContainer label={dropdownLabel}>
                                {menuList.map(item => (
                                    <Dropdown.MenuItem
                                        key={`dropdown-item-${item.id}`}
                                        onClick={() => itemClickHandler(item, idx)}
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
                values={values}
                handleResults={onSubmit}
                enabledResults={enabledResults}
            />
        </div>
    );
};

export default PlayCard;
