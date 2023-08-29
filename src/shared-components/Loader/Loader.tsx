import React from "react";

import styles from "./Loader.module.scss";
import classNames from "classnames";

interface LoaderProps {
    dots?: number;
    speed?: number;
    message?: string;
    darkMode?: boolean;
}

const Loader = ({ dots = 5, speed = 130, message, darkMode = true }: LoaderProps) => {
    const loaderClasses = classNames(styles.loader__dot, {
        [styles.loader__dot__dark]: darkMode,
    });
    if (dots <= 1) return <h3>Count must be higher than 0</h3>;
    const dotCountArray = new Array(dots).fill(null).map((_, i) => i);

    return (
        <div className={styles.loader}>
            <div className={styles.loader__dotWrapper}>
                {dotCountArray.map(item => (
                    <div
                        key={item}
                        className={loaderClasses}
                        style={{ animationDelay: `${item * speed}ms` }}
                    />
                ))}
            </div>
            <h2 className={darkMode ? styles.loader__dark : undefined}>{message}</h2>
        </div>
    );
};

export default Loader;
