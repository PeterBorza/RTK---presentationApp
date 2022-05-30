import React from "react";
import { DropdownContainer } from "shared-components/Dropdown";
import { DropLabelType } from "shared-components/Dropdown/DropdownContainer";
import { Attempt, CardIcons, Evaluation, GameDropdown, GameDropdownItem } from ".";
import { IguessGameItem, ResultType } from "../state";

import classNames from "classnames";
import { useOnClickOutside } from "hooks";
import { CustomIcon } from "shared-components";
import { icons } from "utils";
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
    const playCardClasses = classNames("playcard", { playcard__selected: selected });
    useOnClickOutside(playCardRef, unSelect);

    const gameIcons = [
        {
            isDisabled: menuList.length === 0,
            onClick: onCancel,
            title: "cancel",
            icon: icons.x,
        },
        {
            isDisabled: menuList.length < 0,
            onClick: onSubmit,
            title: "submit",
            icon: icons.checkMark,
        },
    ];
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
                <CardIcons>
                    {gameIcons.map(icon => (
                        <CustomIcon key={icon.title} {...icon} />
                    ))}
                </CardIcons>
            </Attempt>
            <Evaluation results={results} />
        </div>
    );
};

export default PlayCard;
