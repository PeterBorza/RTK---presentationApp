import React, { ReactNode, useRef, useState } from "react";

import { useOnClickOutside, useToggle } from "hooks";
import { icons } from "utils";

import classNames from "classnames";
import styles from "./DropSelect.module.scss";

export type MenuType = string | number | ReactNode;

interface DropSelectProps {
    menu: string[] | number[] | ReactNode[];
    onSelect?: (element: MenuType) => void;
    isDarkMode?: boolean;
}

interface MenuItemProps {
    element: MenuType;
}

const DEFAULT_TRIGGER_LABEL = "Select";

const DropSelect = ({ menu, onSelect, isDarkMode = false }: DropSelectProps) => {
    const [isOpen, toggleOpen, setIsOpen] = useToggle(false);
    const [selected, setSelected] = useState<MenuType>(DEFAULT_TRIGGER_LABEL);
    const dropSelectRef = useRef<HTMLUListElement | null>(null);

    const classes = classNames(styles.dropSelect, {
        [styles.dropSelect__darkMode]: isDarkMode,
    });

    const menuClasses = classNames(
        styles.dropSelect__menu,
        [styles[`dropSelect__menu__${isOpen ? "open" : "close"}`]],
        {
            [styles.dropSelect__menu__darkMode]: isDarkMode,
        },
    );

    const selectHandler = (element: MenuType) => {
        onSelect && onSelect(element);
        setSelected(element);
        setIsOpen(false);
    };

    useOnClickOutside(dropSelectRef, () => setIsOpen(false));

    const MenuItem = ({ element }: MenuItemProps) => (
        <li className={styles.dropSelect__item} onClick={() => selectHandler(element)}>
            {element}
        </li>
    );

    return (
        <div className={classes} onClick={toggleOpen}>
            <span className={styles.dropSelect__label}>{selected}</span>
            <span className={styles.dropSelect__icon}>{isOpen ? icons.up : icons.down}</span>
            <ul ref={dropSelectRef} className={menuClasses}>
                {menu.map((element, index) => (
                    <MenuItem key={`menu-item-${index}`} element={element} />
                ))}
            </ul>
        </div>
    );
};

export default DropSelect;
