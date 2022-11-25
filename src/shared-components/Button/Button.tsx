import React, { ReactNode } from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";

export type ButtonProps = {
    value?: string | ReactNode;
    className?: string;
    isDisabled?: boolean;
    dark?: boolean;
    displayed?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
};

const Button = ({
    value = "Click",
    type,
    className,
    onClick,
    isDisabled,
    dark,
    displayed = true,
}: ButtonProps) => {
    const classes = classNames(styles.defaultStyle, className, {
        [styles.defaultStyle__disabled]: isDisabled,
        [styles.defaultStyle__dark]: dark,
        [styles.defaultStyle__hidden]: !displayed,
        [styles.submitButton]: type === "submit",
        [styles.cancelButton]: value === "Cancel",
    });
    return (
        <button className={classes} type={type ?? "button"} onClick={onClick} disabled={isDisabled}>
            <span className={styles.defaultStyle__content}>{value}</span>
        </button>
    );
};

export default Button;
