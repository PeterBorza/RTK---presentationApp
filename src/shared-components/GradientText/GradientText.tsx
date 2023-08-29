import React from "react";

import classNames from "classnames";
import styles from "./GradientText.module.scss";

interface GradientTextProps {
    animatedText?: string;
    size?: number;
}

const GradientText = ({ animatedText = "gradient text", size = 40 }: GradientTextProps) => {
    const textClasses = classNames(styles.box__h1, styles[`box__h1__${size}`]);
    return (
        <div className={styles.box}>
            <h1 className={textClasses}>{animatedText}</h1>
        </div>
    );
};

export default GradientText;
