import { ReactNode, useRef, useState } from "react";

import { useOnClickOutside, useToggle } from "hooks";
import { icons } from "utils";

import classNames from "classnames";
import styles from "./DropSelect.module.scss";
import MenuItem from "./MenuItem";

export type MenuType = string | number | ReactNode;

interface DropSelectProps {
    menu: string[] | number[] | ReactNode[];
    onSelect?: (element: MenuType) => void;
    initialSelect?: MenuType;
    isDarkMode?: boolean;
}

const DEFAULT_TRIGGER_LABEL = "Select";

const DropSelect = ({ menu, onSelect, initialSelect, isDarkMode = false }: DropSelectProps) => {
    const [isOpen, toggleOpen, setIsOpen] = useToggle(false);
    const [selected, setSelected] = useState<MenuType>(initialSelect ?? DEFAULT_TRIGGER_LABEL);
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

    const triggerElementStyles = classNames(styles.dropSelect__label);

    const selectHandler = (element: typeof menu) => {
        onSelect && onSelect(element);
        setSelected(element);
        setIsOpen(false);
    };

    useOnClickOutside<HTMLDivElement | HTMLUListElement>([dropSelectRef, containerRef], () =>
        setIsOpen(false),
    );

    return (
        <div ref={containerRef} className={classes} onClick={toggleOpen}>
            <span className={triggerElementStyles}>{selected || menu[0]}</span>
            <ul ref={dropSelectRef} className={menuClasses}>
                {menu.map((element, index) => (
                    <MenuItem
                        key={`menu-item-${index}`}
                        element={element}
                        onItemClick={() => selectHandler(element as typeof menu)}
                    />
                ))}
            </ul>
            <span className={styles.dropSelect__icon}>{isOpen ? icons.up : icons.down}</span>
        </div>
    );
};

export default DropSelect;
