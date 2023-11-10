import { ChangeEvent } from "react";

import classNames from "classnames";
import styles from "./CustomInput.module.scss";

interface CustomInputType {
    isValid?: boolean;
    onChange: (val: string) => void;
    darkMode?: boolean;
    value: string;
    name: string;
}

const CustomInput = ({ name, onChange, value, isValid, darkMode = true }: CustomInputType) => {
    const classes = classNames(styles.custom__input, {
        [styles.custom__input__valid]: isValid && darkMode,
        [styles.custom__input__invalid]: !isValid,
        [styles.custom__input__active]: value !== "",
    });

    const labelClasses = classNames(styles.custom__label, {
        [styles.custom__label__dark]: darkMode,
    });

    const nameClasses = classNames(styles.custom__name);

    const addColon = (name?: string) => name && name + ":";

    return (
        <div className={styles.custom}>
            <input
                className={classes}
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                value={value}
                name={name}
                autoFocus={value.trim() !== ""}
                autoComplete="off"
            />
            <label className={labelClasses}>
                <span className={nameClasses}>{addColon(name)}</span>
            </label>
        </div>
    );
};

export default CustomInput;
