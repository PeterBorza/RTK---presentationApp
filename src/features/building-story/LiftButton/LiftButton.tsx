import React, { ComponentProps, FC } from "react";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import classNames from "classnames";
import styles from "./LiftButton.module.scss";
import { Direction } from "..";

interface Props {
	isActive: boolean;
	direction?: Direction | null;
}

const LiftButton: FC<Props & ComponentProps<"button">> = ({
	onClick,
	className,
	disabled,
	value,
	isActive,
	direction,
}) => {
	const classes = classNames(styles.buttonStyle, className, {
		[styles.buttonStyle__active]: isActive,
	});

	const directionIcons = {
		down: <FaArrowDown />,
		up: <FaArrowUp />,
	};

	return (
		<button onClick={onClick} className={classes} disabled={disabled}>
			{!direction ? value : directionIcons[direction]}
		</button>
	);
};

export default LiftButton;
