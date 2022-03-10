import { ReactNode, useState } from "react";

import classNames from "classnames";
import styles from "./FlipBox.module.scss";
const { flip_box, inner, front, back, turn, black_bg } = styles;

type Props = {
    frontContent: () => ReactNode;
    backContent: () => ReactNode;
    darkBack: boolean;
};

const FlipBox = ({ frontContent, backContent, darkBack }: Props) => {
    const [flip, setFlip] = useState(false);
    const classes = classNames(inner, { [turn]: flip });
    const backFlipClasses = classNames(back, {
        [black_bg]: darkBack,
    });
    return (
        <div className={flip_box} onClick={() => setFlip(!flip)}>
            <div className={classes}>
                <div className={front}>{frontContent()}</div>
                <div className={backFlipClasses}>{backContent()}</div>
            </div>
        </div>
    );
};

export default FlipBox;
