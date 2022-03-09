import React from "react";

import { MemoryGameMessages as msg } from "../messages";
import { ButtonWrapper } from "../../../shared-components";

import styles from "./Controls.module.scss";

interface Props {
    count: number;
    renderButtons: () => React.ReactNode;
    dark?: boolean;
}

const Controls = ({ count, renderButtons, dark }: Props) => {
    return (
        <div className={styles.controls}>
            <div className={styles.clicks}>
                {msg.SCORE} <span>{count}</span>
            </div>
            <ButtonWrapper renderButtons={renderButtons} dark={dark} />
        </div>
    );
};

export default Controls;
