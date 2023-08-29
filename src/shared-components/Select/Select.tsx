import React from "react";

import styles from "./Select.module.scss";

interface Props {
    options: string[];
    name: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, name, label, onChange }: Props) => {
    return (
        <div className={styles.wrapper}>
            <label className={styles.select__label}>{label}</label>
            <select className={styles.select} name={name} id={label} onChange={onChange}>
                {options.map((item, i) => (
                    <option className={styles.select__option} key={i} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
