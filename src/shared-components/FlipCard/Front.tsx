import React from "react";
import styles from "./FlipCard.module.scss";

const Front = ({ children }: { children?: React.ReactNode }) => (
    <div className={styles.front}>{children}</div>
);

export default Front;
