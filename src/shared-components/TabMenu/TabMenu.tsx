import React, { useState } from "react";
import styles from "./TabMenu.module.scss";
import classNames from "classnames";

interface TabMenuProps {
    darkMode?: boolean;
    menuItems: React.ReactNode[];
    onItemClick?: (index: number) => void;
}

// !!! length of props array must not exceed 20 items !!!
// !!! length of props array must not exceed 20 items !!!
// !!! length of props array must not exceed 20 items !!!

const TabMenu = ({ menuItems, onItemClick, darkMode = false }: TabMenuProps) => {
    const [moveToItem, setMoveTo] = useState<number>();

    const classes = classNames(
        styles.tabMenu,
        styles[`moveTo-${moveToItem}`],
        styles[`itemCount-${menuItems.length}`],
        { [styles["tabMenu__darkMode"]]: darkMode },
    );

    const itemClasses = (index: number) =>
        classNames(styles.tabMenu__item, {
            [styles.tabMenu__item__selected]: moveToItem === index,
        });

    const handleItemClick = (index: number) => {
        onItemClick && onItemClick(index);
        setMoveTo(index);
    };

    return (
        <div className={classes}>
            {menuItems.map((item, index) => (
                <div
                    key={`tabMenuItem-${index}`}
                    className={itemClasses(index)}
                    onClick={() => handleItemClick(index)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default TabMenu;
