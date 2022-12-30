import React, { FC, ReactNode, useRef, useState } from "react";

import { motion } from "framer-motion";

import { useOnClickOutside, useToggle } from "hooks";
import { icons } from "utils";

import styles from "./DropSelect.module.scss";

export type MenuType = string | number | ReactNode;

interface DropSelectProps {
    menu: string[] | number[] | ReactNode[];
    onSelect?: (element: MenuType) => void;
}

interface MenuItemProps {
    element: MenuType;
}

const DEFAULT_TRIGGER_LABEL = "Select";

const DropSelect = ({ menu, onSelect }: DropSelectProps) => {
    const [isOpen, toggleOpen, setIsOpen] = useToggle(false);
    const [selected, setSelected] = useState<MenuType>(DEFAULT_TRIGGER_LABEL);
    const dropSelectRef = useRef<HTMLUListElement | null>(null);

    const selectHandler = (element: MenuType) => {
        onSelect && onSelect(element);
        setSelected(element);
        setIsOpen(false);
    };

    useOnClickOutside(dropSelectRef, () => setIsOpen(false));

    const Trigger = () => (
        <div className={styles.dropSelect__trigger} onClick={toggleOpen}>
            <span className={styles.dropSelect__trigger__label}>{selected}</span>
            <span className={styles.dropSelect__trigger__icon}>
                {isOpen ? icons.up : icons.down}
            </span>
        </div>
    );

    const animate = {
        y: 0,
        opacity: 1,
    };

    const initial = {
        y: 5,
        opacity: 0,
    };

    const DropSelectMenu: FC = ({ children }) => {
        if (!isOpen) return null;
        return (
            <ul ref={dropSelectRef} className={styles.dropSelect__menu}>
                {children}
            </ul>
        );
    };

    const MenuItem = ({ element }: MenuItemProps) => (
        <li className={styles.dropSelect__menuList__item} onClick={() => selectHandler(element)}>
            {element}
        </li>
    );

    return (
        <motion.div
            className={styles.dropSelect}
            animate={animate}
            initial={initial}
            exit={initial}
        >
            <Trigger />
            <DropSelectMenu>
                {menu.map((element, index) => (
                    <MenuItem key={`menu-item-${index}`} element={element} />
                ))}
            </DropSelectMenu>
        </motion.div>
    );
};

export default DropSelect;
