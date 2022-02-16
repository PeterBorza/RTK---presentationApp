import { CSSProperties, forwardRef, RefObject } from "react";

import { Bubble as Props } from "../types";
import { randomColor } from "../../../utils";

import styles from "./Bubble.module.scss";
import classNames from "classnames";

interface BubbleProps extends Props {
    onClick: () => void;
    title: string;
    ref: RefObject<HTMLDivElement | null>;
}

const Bubble = forwardRef<HTMLDivElement, BubbleProps>(
    ({ onClick, title, id, selected, cssProps }, ref) => {
        const { left, top, size, opacity } = cssProps;
        const bubbleClassNames = classNames(styles.bubbleStyle, {
            [styles.bubbleStyle__active]: selected,
            [styles.withImage]: false,
        });

        const inlineStyles: CSSProperties = {
            left,
            top,
            width: size,
            opacity,
            background: `#${randomColor()}`,
        };

        return (
            <div
                className={bubbleClassNames}
                onClick={onClick}
                style={inlineStyles}
                title={title}
                ref={ref}
            >
                <span className={styles.bubbleStyle__span}>{id}</span>
            </div>
        );
    },
);

export default Bubble;
