import React from "react";
import styles from "./GradientText.module.scss";

const GradientText = ({ animatedText = "colorful" }: { animatedText?: string }) => {
    return (
        <div className={styles.box}>
            <h1 className={styles.box__h1}>{animatedText}</h1>
        </div>
    );
};

export default GradientText;
