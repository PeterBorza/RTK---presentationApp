import { ComponentProps, FC } from "react";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Direction } from "..";

import classNames from "classnames";
import styles from "./LiftButton.module.scss";

interface Props {
    selected: boolean;
    direction?: Direction;
}

const LiftButton: FC<Props & ComponentProps<"button">> = ({
    onClick,
    className,
    disabled,
    value,
    selected,
    direction = "static",
}) => {
    const classes = classNames(styles.buttonStyle, className, {
        [styles.buttonStyle__active]: selected,
    });

    const directionIcons = {
        down: <FaArrowDown />,
        up: <FaArrowUp />,
        static: value,
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
