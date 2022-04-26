import React, { useState } from "react";
import { Dropdown } from "shared-components";

import "./_index.scss";

const ColorDrops = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState("");

    const colors = ["green", "red", "orange", "blue", "lightblue", "lightgreen"];

    const listItemHandler = (color: string) => {
        setOption(color);
        setIsOpen(false);
    };

    const colorButton = (color: string) => (
        <div
            className="color_option"
            style={{
                backgroundColor: color,
            }}
        />
    );
    return (
        <div className="drop_container">
            <Dropdown closeMenu={() => setIsOpen(false)}>
                <Dropdown.Trigger
                    label={colorButton(option)}
                    toggleMenu={() => setIsOpen(prev => !prev)}
                />
                <Dropdown.DropdownList isOpen={isOpen} position="bottom">
                    {colors.map((color, idx) => (
                        <Dropdown.MenuItem
                            key={`${idx}-${color}`}
                            onClick={() => listItemHandler(color)}
                        >
                            {colorButton(color)}
                        </Dropdown.MenuItem>
                    ))}
                </Dropdown.DropdownList>
            </Dropdown>
        </div>
    );
};

export default ColorDrops;
