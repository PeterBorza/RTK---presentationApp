import { ReactNode } from "react";

import classNames from "classnames";
import styles from "./FlipCard.module.scss";
const { flip_box, inner, front, back, turn, black_bg } = styles;

type Props = {
    frontContent: () => ReactNode;
    backContent: () => ReactNode;
    darkBack: boolean;
    flipped: boolean;
    toggleFlip: () => void;
};

const FlipCard = ({ frontContent, backContent, darkBack, flipped, toggleFlip }: Props) => {
    const classes = classNames(inner, { [turn]: flipped });
    const backFlipClasses = classNames(back, {
        [black_bg]: darkBack,
    });
    return (
        <div className={flip_box} onClick={toggleFlip}>
            <div className={classes}>
                <div className={front}>{frontContent()}</div>
                <div className={backFlipClasses}>{backContent()}</div>
            </div>
        </div>
    );
};

export default FlipCard;
