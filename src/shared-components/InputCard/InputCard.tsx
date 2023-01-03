import React from "react";
import { icons } from "utils";

import classNames from "classnames";
import styles from "./InputCard.module.scss";

export interface InputCardType {
    onClick?: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isDark?: boolean;
    placeHolder?: string | undefined;
    isButton?: boolean;
    name: string;
    value: string;
    size?: "small" | "medium" | "large" | "xxl";
}

const InputCard = ({
    onClick,
    onChange,
    isDark = false,
    placeHolder,
    isButton = false,
    name,
    value,
    size = "medium",
}: InputCardType) => {
    const inputWrapper = classNames(styles["input-wrapper"], [styles[`input-wrapper__${size}`]], {
        [styles["dark-mode"]]: isDark,
    });

    return (
        <div className={inputWrapper}>
            <input
                className={styles["input-style"]}
                type="text"
                value={value}
                name={name}
                placeholder={placeHolder}
                onChange={onChange}
            />
            {isButton && (
                <button type="button" className={styles.button_style} onClick={onClick}>
                    <span style={{ fontSize: "1.5rem", display: "flex" }}>
                        {icons.outlineArrowRight}
                    </span>
                </button>
            )}
        </div>
    );
};

export default InputCard;
