import { FC, ReactNode } from "react";

import { MemoryGameMessages as msg } from "../messages";

import { ButtonWrapper } from "../../../shared-components";

import styles from "./Controls.module.scss";

interface Props {
    count: number;
    renderButtons: () => ReactNode;
}

const Controls: FC<Props> = ({ count, renderButtons }) => {
    return (
        <div className={styles.controls}>
            <div className={styles.clicks}>
                {msg.SCORE} <span>{count}</span>
            </div>
            <ButtonWrapper renderButtons={renderButtons} />
        </div>
    );
};

export default Controls;
