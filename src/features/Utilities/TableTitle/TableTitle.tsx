import { FC } from "react";

import classNames from "classnames";
import styles from "./TableTitle.module.scss";

type TitleProps = {
    name?: string | null;
};

const TableTitle: FC<TitleProps> = ({ name = null }) => {
    const multiName =
        name && name.includes(",") ? (
            name.split(",").map(item => <span key={item}>{item}</span>)
        ) : (
            <span>{name}</span>
        );

    const classes = classNames(styles.titleContainer, styles.titleContent);
    return <div className={classes}>{multiName}</div>;
};

export default TableTitle;
