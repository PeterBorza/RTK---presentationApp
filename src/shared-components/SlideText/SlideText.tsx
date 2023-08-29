import React from "react";

import styles from "./SlideText.module.scss";

const SlideText = ({ text = "This component is for animated text" }: { text?: string }) => {
    return (
        <h1 className={styles.title}>
            <span className={styles["title__span"]}>{text}</span>
        </h1>
    );
};

export default SlideText;
