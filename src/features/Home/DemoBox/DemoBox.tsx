import React, { FC } from "react";
import styles from "./DemoBox.module.scss";

const DemoBox: FC = ({ children }) => {
    return <div className={styles.homeBox}>{children}</div>;
};

export default DemoBox;
