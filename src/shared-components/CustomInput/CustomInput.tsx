import React from "react";

import classNames from "classnames";
import styles from "./CustomInput.module.scss";

type InputProps = Pick<React.ComponentProps<"input">, "name" | "onChange" | "value">;

interface CustomInputType extends InputProps {
    isValid?: boolean;
}

const CustomInput = ({ name, onChange, value, isValid }: CustomInputType) => {
    const classes = classNames(styles.input, {
        [styles["input__valid"]]: isValid,
        [styles["input__invalid"]]: !isValid,
    });
    return (
        <div className={styles.custom}>
            <input className={classes} type="text" onChange={onChange} value={value} name={name} />
            <label className={styles.label_name}>
                <span className={styles.name_style}>{value !== "" ? "" : `${name}:`}</span>
            </label>
        </div>
    );
};

export default CustomInput;
