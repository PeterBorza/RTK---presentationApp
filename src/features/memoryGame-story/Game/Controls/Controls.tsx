import React from "react";

import styles from "./Controls.module.scss";

interface Props {
    count: number;
    label: string;
    children?: React.ReactNode;
}

const Controls = ({ children, count, label }: Props) => {
    return (
        <div className={styles.controls}>
            <div className={styles.clicks}>
                {label} <span>{count}</span>
            </div>
            {children}
        </div>
    );
};

export default Controls;
