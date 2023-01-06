import React from "react";
import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
    id?: string;
    name?: string;
    label?: string;
    value?: string;
    onChange: (value: boolean) => void;
}

const CheckBox = ({ id, name, label, onChange, value }: CheckBoxProps) => {
    return (
        <div className={styles.checkBox}>
            <label className={styles.checkBox__label} title={label} htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChange(e.target.checked)
                    }
                />
                <span>{label}</span>
            </label>
        </div>
    );
};

export default CheckBox;
