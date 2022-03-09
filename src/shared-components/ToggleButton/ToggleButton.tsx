import { FC } from "react";

import classNames from "classnames";
import styles from "./ToggleButton.module.scss";

type Props = {
    selected: boolean;
    toggleSelected: () => void;
    size?: "small" | "medium" | "large" | "xxl";
};

const ToggleButton: FC<Props> = ({ selected, toggleSelected, size = "large", children }) => {
    const buttonClasses = classNames(styles.dialog_button, {
        [styles.disabled]: selected,
    });

    const componentControlClasses = classNames(
        styles.toggle_container,
        styles[`toggle_container${size}`],
    );

    return (
        <div className={componentControlClasses} onClick={toggleSelected}>
            <div className={buttonClasses}>{children}</div>
        </div>
    );
};

export default ToggleButton;
