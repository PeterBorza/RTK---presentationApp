import React from "react";

import classNames from "classnames";
import styles from "./CustomImage.module.scss";

type AnimationDirection = "up" | "down" | "fromLeft" | "fromRight";

export type ImageType = {
    src: string | undefined;
    delay: number;
    duration: number;
    spacing: number;
    direction?: AnimationDirection;
};

const CustomImage: React.FC<ImageType> = ({ src, delay, duration, spacing, direction }) => {
    const imageClasses = classNames(
        styles.imageStyles,
        [styles[`imageStyles__direction-${direction}__${spacing}`]],
        [styles[`imageStyles__delay__${delay}`]],
        [styles[`imageStyles__duration__${duration}`]],
    );
    return (
        <div className={styles.imageContainer}>
            <img className={imageClasses} src={src} alt="" />
        </div>
    );
};

export default CustomImage;
