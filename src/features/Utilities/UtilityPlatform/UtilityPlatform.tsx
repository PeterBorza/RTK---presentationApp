import { useAppRedux } from "app";

import styles from "./UtilityPlatform.module.scss";
import classNames from "classnames";

const UtilityPlatform = () => {
    const { isDarkMode } = useAppRedux();
    const classes = classNames(styles.container, {
        [styles.container__darkMode]: isDarkMode,
    });
    return <div className={classes} />;
};

export default UtilityPlatform;
