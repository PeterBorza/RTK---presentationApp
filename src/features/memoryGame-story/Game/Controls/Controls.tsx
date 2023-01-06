import { FC } from "react";

import styles from "./Controls.module.scss";

interface Props {
    count: number;
    dark?: boolean;
    label: string;
}

const Controls: FC<Props> = ({ children, count, dark, label }) => {
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
