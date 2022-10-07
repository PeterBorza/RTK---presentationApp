import { useTime } from "hooks";
import { FC } from "react";

import { ButtonWrapper } from "shared-components";

import styles from "./Controls.module.scss";

interface Props {
    count: number;
    dark?: boolean;
    label: string;
}

const Controls: FC<Props> = ({ children, count, dark, label }) => {
    const timer = useTime("date");

    return (
        <div className={styles.controls}>
            <div className={styles.clicks}>
                {label} <span>{count}</span>
            </div>
            <span>{timer}</span>
            <ButtonWrapper dark={dark}>{children}</ButtonWrapper>
        </div>
    );
};

export default Controls;
