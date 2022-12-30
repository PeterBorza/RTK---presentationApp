import React from "react";

import { directionIcons, Direction } from "../state";

import classNames from "classnames";
import styles from "./LiftButton.module.scss";
interface Props {
    selected: boolean;
    direction?: Direction;
    variant: "shaft" | "panel";
}

const LiftButton = ({
    onClick,
    disabled,
    value,
    selected,
    direction = Direction.STATIC,
    variant,
}: Props & React.ComponentProps<"button">) => {
    const classes = classNames(styles.buttonStyle, {
        [styles.buttonStyle__active]: selected,
        [styles.panelButtons]: variant === "panel",
    });

    const getCorrectValue = value === 0 ? "P" : value;

    return (
        <button
            onClick={onClick}
            className={classes}
            disabled={disabled}
            title="click on desired floor"
        >
            {direction === Direction.STATIC ? getCorrectValue : directionIcons[direction]}
        </button>
    );
};

export default LiftButton;
