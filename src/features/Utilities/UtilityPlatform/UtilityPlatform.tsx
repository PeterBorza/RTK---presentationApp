import React from "react";

import styles from "./UtilityPlatform.module.scss";
import classNames from "classnames";
import { useAppRedux } from "app";

const UtilityPlatform = () => {
    const { isDarkMode } = useAppRedux();
    const classes = classNames(styles.container, {
        [styles.container__darkMode]: isDarkMode,
    });
    return <div className={classes}></div>;
};

export default UtilityPlatform;
