import React from "react";
import styles from "./Range.module.scss";

export interface RangeProps {
    name: string;
    min?: number;
    max?: number;
    value: number;
    step?: number;
    onChange: (value: number) => void;
}

// TODO style up and upgrade here

const Range = ({ name, min = 0, max = 100, value, step = 1, onChange }: RangeProps) => {
    return (
        <label className={styles.range_label} htmlFor={name}>
            <span> {name}</span>
            <input
                className={styles.range}
                type="range"
                name={name}
                min={min}
                max={max}
                value={value}
                onChange={e => onChange(+e.target.value)}
                step={step}
            />
            <span>{value}</span>
        </label>
    );
};

export default Range;
