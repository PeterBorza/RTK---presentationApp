import React from "react";
import Dropdown, { DropdownContainer } from "shared-components/Dropdown";
import { DropLabelType } from "shared-components/Dropdown/DropdownContainer";
import { Evaluation } from ".";
import { IguessGameItem, ResultType } from "../state";

import classNames from "classnames";
import { useOnClickOutside } from "hooks";
import { CustomIcon } from "shared-components";
import { icons } from "utils";
import { IconProps } from "shared-components/CustomIcon/CustomIcon";

interface PlayCardType {
    selected: boolean;
    onBlur: () => void;
    onSelect: () => void;
    dropdownCount: number;
    menuList: IguessGameItem[];
    itemClickHandler: (item: IguessGameItem, order: number) => void;
    dropdownLabel?: DropLabelType;
    onSubmit: () => void;
    onCancel: () => void;
    results: ResultType;
    isDisabled: boolean;
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
    onCancel,
    results,
    isDisabled,
}: PlayCardType) => {
    const dropdownCounter = new Array(dropdownCount).fill(null);
    const playCardRef = React.useRef<HTMLDivElement | null>(null);
    const playCardClasses = classNames("playcard", {
        playcard__selected: selected,
        playcard__disabled: isDisabled,
    });
    useOnClickOutside(playCardRef, onBlur);

    const validResult = results.some(item => item === 1 || item === 2) ?? results.length === 4;

    const gameIcons: IconProps[] = [
        {
            isDisabled: false,
            onClick: onCancel,
            title: "cancel",
            icon: icons.x,
        },
        {
            isDisabled: validResult,
            onClick: onSubmit,
            title: "submit",
            icon: icons.checkMark,
        },
    ];

    const getGameIcon = (icon: IconProps) => <CustomIcon key={icon.title} {...icon} />;

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
                <div className="icons">{gameIcons.map(getGameIcon)}</div>
            </div>
            <Evaluation results={results} />
        </div>
    );
};

export default PlayCard;
