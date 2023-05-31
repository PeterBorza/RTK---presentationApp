import React from "react";

import classNames from "classnames";
import styles from "./Range.module.scss";

export interface RangeProps {
    name: string;
    min?: number;
    max?: number;
    value: number;
    step?: number;
    onChange: (value: number) => void;
    darkMode: boolean;
}

// TODO style up and upgrade here

const Range = ({ name, min = 0, max = 100, value, step = 1, onChange, darkMode }: RangeProps) => {
    const classes = classNames(styles[`range__${value}`], {
        [styles.range__dark]: darkMode,
    });

    const labelClasses = classNames(styles.range_label, {
        [styles.range_label__dark]: darkMode,
    });
    return (
        <label className={labelClasses}>
            <span> {name}</span>
            <input
                className={classes}
                type="range"
                name={name}
                min={min}
                max={max}
                value={value}
                onChange={e => onChange(+e.target.value)}
                step={step}
            />
            <span className={styles.range_label__value}>{`${value}%`}</span>
        </label>
    );
};

export default Range;
