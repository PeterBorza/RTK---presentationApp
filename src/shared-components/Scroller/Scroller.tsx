import React from "react";
import { ImageType } from "utils/my-images";

import styles from "./Scroller.module.scss";
import classNames from "classnames";

export type ScrollerSizeType = "small" | "medium" | "large" | "fit";

export interface ScrollerType {
    images: ImageType[];
    size?: ScrollerSizeType;
}

const Scroller = ({ size = "small", images }: ScrollerType) => {
    const containerStyles = classNames(
        styles.scrollerContainer,
        styles[`scrollerContainer--${size}`],
    );

    const puzzleImage = (img: ImageType, index: number) => {
        return (
            <img
                className={styles.photo}
                key={`image-${index}`}
                src={img}
                alt={`some pic ${index}`}
            />
        );
    };

    return (
        <div className={containerStyles}>
            <div className={styles.scrollerContent}>{images.map(puzzleImage)}</div>
        </div>
    );
};

export default Scroller;
