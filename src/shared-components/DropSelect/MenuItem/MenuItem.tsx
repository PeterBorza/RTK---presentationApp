import React from "react";

import classNames from "classnames";
import styles from "./MenuItem.module.scss";

interface MenuItemProps<T> {
    element: T;
    onItemClick: (e: React.MouseEvent<HTMLLIElement>, element: T) => void;
}

const MenuItem = <T extends React.ReactNode>({ element, onItemClick }: MenuItemProps<T>) => {
    const listElementStyles = classNames(styles.dropSelect__item);

    const handleMenuItemClick = (e: React.MouseEvent<HTMLLIElement>, element: T) => {
        e.stopPropagation();
        onItemClick(e, element);
    };

    return (
        <li
            role="button"
            className={listElementStyles}
            onClick={e => handleMenuItemClick(e, element)}
        >
            {element}
        </li>
    );
};

export default MenuItem;
