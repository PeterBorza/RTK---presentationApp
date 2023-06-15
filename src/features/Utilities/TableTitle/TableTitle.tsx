import React from "react";

import classNames from "classnames";
import styles from "./TableTitle.module.scss";

type TitleProps = {
    name: string;
    isDarkMode: boolean;
    onSort?: () => void;
};

const TableTitle = ({ name, isDarkMode, onSort }: TitleProps) => {
    const contentClasses = classNames(styles.titleContent, {
        [styles.titleContent__dark]: isDarkMode,
    });
    return (
        <div className={styles.titleContainer}>
            <span onClick={onSort} className={contentClasses}>
                {name}
            </span>
        </div>
    );
};

export default TableTitle;
