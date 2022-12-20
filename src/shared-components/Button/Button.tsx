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
    variant?: "regular" | "menu";
};

const Button = ({
    value = "Click",
    type,
    className,
    onClick,
    isDisabled,
    dark,
    displayed = true,
    variant = "regular",
}: ButtonProps) => {
    const classes = classNames(styles.button, className, {
        [styles.button__dark]: dark,
        [styles.button__disabled]: isDisabled,
        [styles.button__hidden]: !displayed,
        [styles.button__submit]: type === "submit",
        [styles.button__cancel]: value === "Cancel",
        [styles.button__menu]: variant === "menu",
    });
    return (
        <button className={classes} type={type ?? "button"} onClick={onClick} disabled={isDisabled}>
            <span className={styles.defaultStyle__content}>{value}</span>
        </button>
    );
};

export default Button;
