import { Direction } from "..";

import classNames from "classnames";
import styles from "./LiftButton.module.scss";
import React from "react";
import { icons } from "utils";
interface Props {
    selected: boolean;
    direction?: Direction;
}

type directionType = {
    down: JSX.Element;
    up: JSX.Element;
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
        down: icons.faDown,
        up: icons.faUp,
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
