import React from "react";

import { Button } from "../../../shared-components";

import styles from "./GameEnd.module.scss";

interface Props {
    count: number;
    message: string;
    onClick: () => void;
    buttonLabel: string;
}

const GameEnd = ({ count, message, onClick, buttonLabel }: Props) => {
    const endMessage = message.replace("x", `${count}`);

    return (
        <div className={styles.finished}>
            <h1>{endMessage}</h1>
            <Button onClick={onClick} value={buttonLabel} className={styles.newGameButton} />
        </div>
    );
};

export default GameEnd;
