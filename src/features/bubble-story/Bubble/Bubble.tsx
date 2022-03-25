import { CSSProperties, useRef, useState } from "react";

import { Bubble as Props } from "../types";
import { randomColor } from "../../../utils";

import styles from "./Bubble.module.scss";
import classNames from "classnames";

interface BubbleProps extends Props {
    onClick: () => void;
    title: string;
}

const INITIAL_COLOR = "transparent";

const Bubble = ({ onClick, title, id, selected, cssProps }: BubbleProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [background, setBackground] = useState<string>(INITIAL_COLOR);
    const { left, top, size, opacity } = cssProps;

    const bubbleClassNames = classNames(styles.bubbleStyle, {
        [styles.bubbleStyle__active]: selected,
        [styles.withImage]: false,
    });

    const handleClick = () => {
        onClick();
        setBackground(randomColor());
    };

    const inlineStyles: CSSProperties = {
        left,
        top,
        width: size,
        opacity,
        background: `#${background}`,
    };

    return (
        <div
            className={bubbleClassNames}
            onClick={handleClick}
            style={inlineStyles}
            title={title}
            ref={ref}
        >
            <span className={styles.bubbleStyle__span}>{id}</span>
        </div>
    );
};

export default Bubble;
