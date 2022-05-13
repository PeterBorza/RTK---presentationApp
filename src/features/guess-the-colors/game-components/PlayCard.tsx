import React from "react";
import { DropdownContainer } from "shared-components/Dropdown";
import { DropLabelType } from "shared-components/Dropdown/DropdownContainer";
import { Attempt, CardIcons, Evaluation, GameDropdown, GameDropdownItem } from ".";
import { IguessGameItem, ResultType } from "../state";

import classNames from "classnames";
import { selectAttempt } from "../guessGameSlice";
import { useOnClickOutside } from "hooks";
interface PlayCardType {
    selected: boolean;
    unSelect: () => void;
    onSelectAttempt: () => void;
    dropdownCount: number;
    menuList: IguessGameItem[];
    dropdownLabel: DropLabelType;
    onSubmit: () => void;
    onCancel: () => void;
    renderMenuItem: (item: IguessGameItem) => React.ReactNode;
    results: ResultType;
}

const PlayCard = ({
    selected,
    unSelect,
    onSelectAttempt,
    dropdownCount,
    menuList,
    dropdownLabel,
    onSubmit,
    onCancel,
    renderMenuItem,
    results,
}: PlayCardType) => {
    const dropdownCounter = new Array(dropdownCount).fill(null);
    const playCardRef = React.useRef<HTMLDivElement | null>(null);
    const playCardClasses = classNames("playcard", { ["playcard__selected"]: selected });
    useOnClickOutside(playCardRef, unSelect);
    return (
        <div className={playCardClasses} onClick={onSelectAttempt} ref={playCardRef}>
            <Attempt>
                <GameDropdown>
                    {dropdownCounter.map((_, idx) => (
                        <GameDropdownItem key={`attempt-dropdown-${idx + 1}`}>
                            <DropdownContainer<IguessGameItem>
                                menuList={menuList}
                                renderMenuItem={menuListItem => renderMenuItem(menuListItem)}
                                label={dropdownLabel}
                            />
                        </GameDropdownItem>
                    ))}
                </GameDropdown>
                <CardIcons onSubmit={onSubmit} onCancel={onCancel} />
            </Attempt>
            <Evaluation results={results} />
        </div>
    );
};

export default PlayCard;
