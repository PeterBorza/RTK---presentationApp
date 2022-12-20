import classNames from "classnames";
import styles from "./ToggleButton.module.scss";

import { icons } from "utils";

type Props = {
    enabled: boolean;
    toggleEnabled: () => void;
    size?: "small" | "medium" | "large" | "xxl";
    darkMode?: boolean;
    variant?: "darkMode" | "regular";
};

const ToggleButton = ({
    enabled,
    toggleEnabled,
    size = "small",
    darkMode = true,
    variant = "regular",
}: Props) => {
    const buttonClasses = classNames(styles.toggle_button, styles[`toggle_button__${size}`], {
        [styles[`toggle_button__${size}__dark__enabled`]]: enabled && darkMode,
        [styles[`toggle_button__${size}__dark__disabled`]]: !enabled && darkMode,
        [styles[`toggle_button__${size}__light__enabled`]]: enabled && !darkMode,
        [styles[`toggle_button__${size}__light__disabled`]]: !enabled && !darkMode,
    });

    const dotClasses = classNames(styles.toggle_container, styles[`toggle_container__${size}`], {
        [styles.toggle_container__dark]: darkMode,
    });

    return (
        <button className={dotClasses} onClick={toggleEnabled}>
            {variant === "darkMode" && <span className={styles.sun}>{icons.sun}</span>}
            <div className={buttonClasses} />
            {variant === "darkMode" && <span className={styles.moon}>{icons.moon}</span>}
        </button>
    );
};

export default ToggleButton;
