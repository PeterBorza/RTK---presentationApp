import { FC, ReactNode } from "react";

import { MemoryGameMessages as msg } from "../messages";

import { ButtonWrapper } from "../../../shared-components";

import styles from "./Controls.module.scss";
import { useSelector } from "react-redux";
import { darkModeSelector } from "../../../app";

interface Props {
    count: number;
    renderButtons: () => ReactNode;
}

const Controls: FC<Props> = ({ count, renderButtons }) => {
    const darkMode = useSelector(darkModeSelector);
    return (
        <div className={styles.controls}>
            <div className={styles.clicks}>
                {msg.SCORE} <span>{count}</span>
            </div>
            <ButtonWrapper renderButtons={renderButtons} dark={darkMode} />
        </div>
    );
};

export default Controls;
