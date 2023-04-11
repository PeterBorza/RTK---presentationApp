import React, { useState } from "react";
import { icons } from "utils";

import classNames from "classnames";
import styles from "./UserField.module.scss";

export interface UserFieldType {
    onSubmit: (value: string) => void | undefined;
    isDark?: boolean;
    placeHolder?: string | undefined;
    name: string;
    value: string;
    size?: "small" | "medium" | "large" | "xxl" | "fullSize";
}

const UserField = ({
    onSubmit,
    isDark = false,
    placeHolder,
    name,
    value,
    size = "medium",
}: UserFieldType) => {
    const [inputValue, setInputValue] = useState(value);
    const emptyInputValue = inputValue.trim() === "";

    const inputWrapper = classNames(styles.input_wrapper, [styles[`input_wrapper__${size}`]], {
        [styles.input_wrapper__darkMode]: isDark,
    });

    const buttonClasses = classNames(styles.buttonStyle, {
        [styles.buttonStyle__darkMode]: isDark,
    });

    const inputClasses = classNames(styles.inputStyle, {
        [styles.inputStyle__darkMode]: isDark,
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emptyInputValue) return;
        onSubmit(inputValue.trim());
        setInputValue("");
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <label className={inputWrapper} htmlFor={name}>
                <span>{name}:</span>
                <input
                    className={inputClasses}
                    type="text"
                    value={inputValue}
                    name={name}
                    placeholder={placeHolder}
                    onChange={onChangeHandler}
                    autoComplete="off"
                />
            </label>
            <button type="submit" className={buttonClasses} disabled={emptyInputValue}>
                <span className={styles.buttonStyle__icon}>{icons.outlineArrowRight}</span>
            </button>
        </form>
    );
};

export default UserField;
