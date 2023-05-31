import React from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";

interface ContainerProps {
    moveToItem: number;
    itemCount: number;
    darkMode?: boolean;
}

const Container: React.FC<ContainerProps> = ({
    children,
    moveToItem,
    itemCount,
    darkMode = false,
}) => {
    const classes = classNames(
        styles.container,
        darkMode && styles[`container__darkMode`],
        styles[`moveTo-${moveToItem}`],
        styles[`itemCount-${itemCount}`],
    );
    return <div className={classes}>{children}</div>;
};

export default Container;
