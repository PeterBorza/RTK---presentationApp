import React from "react";

import classNames from "classnames";
import styles from "./CustomImage.module.scss";

export type ImageType = {
    src: string | undefined;
    delay: number;
    duration: number;
};

const CustomImage: React.FC<ImageType> = ({ src, delay, duration }) => {
    const imageClasses = classNames(
        styles.imageStyles,
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
