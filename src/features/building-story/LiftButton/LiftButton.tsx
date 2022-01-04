import { ComponentProps, FC } from "react";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { ImStop } from "react-icons/im";

import classNames from "classnames";
import styles from "./LiftButton.module.scss";
import { Direction } from "..";

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
    direction,
}) => {
    const classes = classNames(styles.buttonStyle, className, {
        [styles.buttonStyle__active]: selected,
    });

    const directionIcons = {
        down: <FaArrowDown />,
        up: <FaArrowUp />,
        static: <ImStop />,
    };

    return (
        <button onClick={onClick} className={classes} disabled={disabled}>
            {!direction ? value : directionIcons[direction]}
        </button>
    );
};

export default LiftButton;
