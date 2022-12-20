import React from "react";
import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
    id?: string;
    name?: string;
    label?: string;
    value?: string;
    isChecked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ id, name, label, onChange, value, isChecked }: CheckBoxProps) => {
    return (
        <div className={styles.checkBox}>
            <label className={styles.checkBox__label} title={label} htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    value={value}
                    checked={isChecked === true}
                    onChange={onChange}
                />
                <span>{label}</span>
            </label>
        </div>
    );
};

export default CheckBox;
