import { FC } from "react";

import { HiOutlineArrowCircleRight } from "react-icons/hi";

import classNames from "classnames";
import styles from "./InputCard.module.scss";

export enum InputSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    XXL = "xxl",
}

export interface InputCardType {
    onClick?: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isDark?: boolean;
    placeHolder?: string | undefined;
    isButton?: boolean;
    inputName: string;
    value: string;
    size?: InputSize;
}

const InputCard: FC<InputCardType> = ({
    onClick,
    onChange,
    isDark = false,
    placeHolder,
    isButton = false,
    inputName,
    value,
    size = "medium",
}) => {
    const inputWrapper = classNames(styles["input-wrapper"], [styles[`input-wrapper__${size}`]], {
        [styles["dark-mode"]]: isDark,
    });

    return (
        <div className={inputWrapper}>
            <input
                className={styles["input-style"]}
                type="text"
                value={value}
                name={inputName}
                placeholder={placeHolder}
                onChange={onChange}
            />
            {isButton && (
                <button type="button" className={styles["button-style"]} onClick={onClick}>
                    <HiOutlineArrowCircleRight className={styles["input-icon"]} />
                </button>
            )}
        </div>
    );
};

export default InputCard;
