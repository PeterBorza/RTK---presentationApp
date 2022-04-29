import React, { useState } from "react";
import { Dropdown } from "shared-components";
import { IguessGameItem } from "../state";

import "./_index.scss";

type ColorDropProps = {
    colors: IguessGameItem[];
    onClick: (option: IguessGameItem) => void;
};

const ColorDrops = ({ colors, onClick }: ColorDropProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState("");

    const listItemHandler = (color: string, option: IguessGameItem) => {
        setOption(color);
        setIsOpen(false);
        onClick(option);
    };

    const optionItem = (color: string) => {
        return (
            <div
                className="color_option"
                style={{
                    backgroundColor: color,
                }}
            />
        );
    };

    const colorLabel = (color: string) => (
        <div className="color_label" style={{ backgroundColor: color }} />
    );

    return (
        <Dropdown closeMenu={() => setIsOpen(false)}>
            <Dropdown.Trigger
                label={option ? colorLabel(option) : undefined}
                toggleMenu={() => setIsOpen(prev => !prev)}
                title="Choose color"
            />
            <Dropdown.DropdownList isOpen={isOpen} position="bottom">
                {colors.map(item => (
                    <Dropdown.MenuItem
                        key={`drop-option-${item.id}`}
                        onClick={() => listItemHandler(item.color, item)}
                    >
                        {optionItem(item.color)}
                    </Dropdown.MenuItem>
                ))}
            </Dropdown.DropdownList>
        </Dropdown>
    );
};

export default ColorDrops;
