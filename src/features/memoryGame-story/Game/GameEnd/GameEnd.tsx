import React from "react";

import { MemoryGameMessages as msg } from "../redux/messages";
import { AlertModal } from "shared-components";

import styles from "./GameEnd.module.scss";

interface GameEndProps {
    count: number;
    isGameFinished: boolean;
}

const GameEnd: React.FC<GameEndProps> = ({ children, count, isGameFinished }) => {
    const endMessage = msg.CONGRATS.replace("x", String(count));

    if (!isGameFinished) return null;
    return (
        <AlertModal openModal={isGameFinished}>
            <div className={styles.finished}>
                <h1>{endMessage}</h1>
                {children}
            </div>
        </AlertModal>
    );
};

export default GameEnd;
