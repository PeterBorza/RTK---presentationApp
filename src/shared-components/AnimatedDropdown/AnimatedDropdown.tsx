import React, { ReactNode } from "react";
import styles from "./AnimatedDropdown.module.scss";
import ListContent from "./ListContent/ListContent";

interface DropProps {
    label: string;
    items: ReactNode[];
    onItemClick?: (item: ReactNode) => void;
}

const AnimatedDropdown = ({ label, items, onItemClick }: DropProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>{label}</div>
            <ListContent items={items} onItemClick={onItemClick} />
        </div>
    );
};

export default AnimatedDropdown;
