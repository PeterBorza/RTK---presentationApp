import React from "react";
import styles from "./FlipCard.module.scss";

const Front: React.FC = ({ children }) => {
    return <div className={styles.front}>{children}</div>;
};

export default Front;
