import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Direction } from "..";

import classNames from "classnames";
import styles from "./LiftButton.module.scss";
import { IconType } from "react-icons";
import React from "react";
interface Props {
    selected: boolean;
    direction?: Direction;
}

type directionType = {
    down: IconType;
    up: IconType;
    static: Pick<React.ComponentProps<"button">, "value">;
};

const LiftButton = ({
    onClick,
    className,
    disabled,
    value,
    selected,
    direction = "static",
}: Props & React.ComponentProps<"button">) => {
    const classes = classNames(styles.buttonStyle, className, {
        [styles.buttonStyle__active]: selected,
    });

    const directionIcons: directionType = {
        down: () => <FaArrowDown />,
        up: () => <FaArrowUp />,
        static: value as Pick<React.ComponentProps<"button">, "value">,
    };

    return (
        <button
            onClick={onClick}
            className={classes}
            disabled={disabled}
            title="click on desired floor"
        >
            {directionIcons[direction]}
        </button>
    );
};

export default LiftButton;
