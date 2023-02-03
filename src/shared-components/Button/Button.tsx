import React, { ReactNode } from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";
import { icons } from "utils";

type ButtonVariantType = "regular" | "submit" | "cancel" | "menu" | "close";

export type ButtonProps = {
    value?: string | ReactNode;
    isDisabled?: boolean;
    dark?: boolean;
    displayed?: boolean;
    onClick?: () => void;
    variant?: ButtonVariantType;
    title?: string;
};

const Button = ({
    value = "Click",
    onClick,
    isDisabled,
    dark,
    displayed = true,
    variant = "regular",
    title,
}: ButtonProps) => {
    const classes = classNames(styles.button, [styles[`button__${variant}`]], {
        [styles.button__dark]: dark,
        [styles.button__hidden]: !displayed,
    });
    const contentStyles = classNames(styles.content, [styles[`content__${variant}`]]);

    const getValuesForVariants: Record<ButtonVariantType, string | ReactNode> = {
        regular: value,
        menu: icons.bars,
        submit: "Submit",
        cancel: "Cancel",
        close: icons.windowClose,
    };

    return (
        <button
            className={classes}
            type={variant === "submit" ? "submit" : "button"}
            onClick={onClick}
            disabled={isDisabled}
            title={variant === "menu" ? "Menu" : title}
        >
            <span className={contentStyles}>{getValuesForVariants[variant]}</span>
        </button>
    );
};

export default Button;
