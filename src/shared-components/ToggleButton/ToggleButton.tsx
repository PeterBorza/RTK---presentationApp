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
    const buttonClasses = classNames(styles.toggle_button, styles[`toggle_button__${size}`], [
        styles[
            `toggle_button__${size}__${darkMode ? "dark" : "light"}__${
                enabled ? "enabled" : "disabled"
            }`
        ],
    ]);

    const containerClasses = classNames(
        styles.toggle_container,
        styles[`toggle_container__${size}`],
    );

    const showDarkModeIcons = () =>
        variant === "darkMode" ? (
            <span className={styles.icons}>{icons[enabled ? "sun" : "moon"]}</span>
        ) : null;

    return (
        <button className={containerClasses} onClick={toggleEnabled}>
            <div className={buttonClasses}>{showDarkModeIcons()}</div>
        </button>
    );
};

export default ToggleButton;
