import { FC } from "react";

import classNames from "classnames";
import styles from "./TableTitle.module.scss";

type TitleProps = {
    name?: string | null;
    className?: string | null;
};

const TableTitle: FC<TitleProps> = ({ name = null, className = null }) => {
    const multiName =
        name && name.includes(",") ? (
            name.split(",").map(item => <span>{item}</span>)
        ) : (
            <span>{name}</span>
        );

    const classes = classNames(
        styles.titleContainer,
        name ? styles.titleContent : className
    );
    return <div className={classes}>{multiName}</div>;
};

export default TableTitle;
