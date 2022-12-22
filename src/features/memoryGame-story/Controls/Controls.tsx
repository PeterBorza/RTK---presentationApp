import { FC } from "react";

import { ButtonWrapper } from "shared-components";

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
            <ButtonWrapper position="center" dark={dark}>
                {children}
            </ButtonWrapper>
        </div>
    );
};

export default Controls;
