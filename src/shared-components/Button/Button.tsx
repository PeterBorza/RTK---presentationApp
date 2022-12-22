import React, { ReactNode } from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";

export type ButtonProps = {
    value?: string | ReactNode;
    isDisabled?: boolean;
    dark?: boolean;
    displayed?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    variant?: "regular" | "menu" | "cancel" | "submit";
};

const Button = ({
    value = "Click",
    type = "button",
    onClick,
    isDisabled,
    dark,
    displayed = true,
    variant = "regular",
}: ButtonProps) => {
    const classes = classNames(styles.button, {
        [styles.button__dark]: dark,
        [styles.button__disabled]: isDisabled,
        [styles.button__hidden]: !displayed,
        [styles.button__submit]: type === "submit",
        [styles.button__cancel]: variant === "cancel",
        [styles.button__menu]: variant === "menu",
    });

    const contentStyles = classNames(styles.content, {
        [styles.content__cancel]: variant === "cancel",
        [styles.content__submit]: variant === "submit",
    });
    return (
        <button className={classes} type={type} onClick={onClick} disabled={isDisabled}>
            <span className={contentStyles}>{value}</span>
        </button>
    );
};

export default Button;
