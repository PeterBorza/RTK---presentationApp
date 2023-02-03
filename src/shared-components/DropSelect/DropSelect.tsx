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
    const containerRef = useRef<HTMLDivElement | null>(null);

    // TODO needs proper css for light and dark mode
    // needs animation for dropdown

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

    const listElementStyles = classNames(styles.dropSelect__item);
    const triggerElementStyles = classNames(styles.dropSelect__label);

    const selectHandler = (element: MenuType) => {
        onSelect && onSelect(element);
        setSelected(element);
        setIsOpen(false);
    };

    useOnClickOutside<HTMLDivElement | HTMLUListElement>([dropSelectRef, containerRef], () =>
        setIsOpen(false),
    );

    const onItemClick = (e: React.MouseEvent<HTMLLIElement>, element: MenuType) => {
        e.stopPropagation();
        selectHandler(element);
    };

    const MenuItem = ({ element }: MenuItemProps) => (
        <li className={listElementStyles} onClick={e => onItemClick(e, element)}>
            {element}
        </li>
    );

    return (
        <div ref={containerRef} className={classes} onClick={toggleOpen}>
            <span className={triggerElementStyles}>{selected}</span>
            <ul ref={dropSelectRef} className={menuClasses}>
                {menu.map((element, index) => (
                    <MenuItem key={`menu-item-${index}`} element={element} />
                ))}
            </ul>
            <span className={styles.dropSelect__icon}>{isOpen ? icons.up : icons.down}</span>
        </div>
    );
};

export default DropSelect;
