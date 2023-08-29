import React from "react";

import styles from "./MenuButton.module.scss";
import classNames from "classnames";
import { FaBars } from "react-icons/fa";

type Props = {
    value?: string;
    isDisabled?: boolean;
} & Pick<React.ComponentProps<"button">, "type" | "onClick" | "className">;

const MenuButton = ({
    value = "Click",
    type = "button",
    className,
    onClick,
    isDisabled,
}: Props) => {
    const classes = classNames(styles.defaultStyle, className, {
        [styles.defaultStyle__disabled]: isDisabled,
    });
    return (
        <button className={classes} type={type} onClick={onClick} disabled={isDisabled}>
            <FaBars className={styles.toggleMenu} />
            <span>{value}</span>
        </button>
    );
};

export default MenuButton;
