import React, { ReactNode } from "react";
import styles from "./AnimatedDropdown.module.scss";
import ListContent from "./ListContent/ListContent";
import classNames from "classnames";

interface DropProps {
    label: string;
    items: ReactNode[];
    onItemClick?: (item: ReactNode) => void;
}

// TODO activating dropdown on hover is very clumsy, leads to bugs, click event should drive it
const AnimatedDropdown = ({ label, items, onItemClick }: DropProps) => {
    const headerClasses = classNames(styles.header, styles.header__hoverable);

    const handleItemClick = (item: ReactNode) => {
        onItemClick && onItemClick(item);
    };

    return (
        <div className={styles.container}>
            <div className={headerClasses}>{label}</div>
            <ListContent items={items} onItemClick={item => handleItemClick(item)} />
        </div>
    );
};

export default AnimatedDropdown;
