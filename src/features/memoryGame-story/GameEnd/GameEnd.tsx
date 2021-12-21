import { FC } from "react";

import { Button } from "../../../shared-components";

import styles from "./GameEnd.module.scss";

interface Props {
    count: number;
    message: string;
    onClick: () => void;
    buttonLabel: string;
}

const GameEnd: FC<Props> = ({ count, message, onClick, buttonLabel }) => {
    const endMessage = message.replace("x", `${count}`);

    return (
        <div className={styles.finished}>
            <h1>{endMessage}</h1>
            <Button
                onClick={onClick}
                value={buttonLabel}
                className={styles.newGameButton}
            />
        </div>
    );
};

export default GameEnd;
