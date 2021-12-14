import React, { ComponentProps, FC } from "react";

import classNames from "classnames";
import styles from "./LiftButton.module.scss";

interface Props {
	isActive: boolean;
}

const LiftButton: FC<Props & ComponentProps<"button">> = ({
	onClick,
	className,
	disabled,
	value,
	isActive,
}) => {
	const classes = classNames(styles.buttonStyle, className, {
		[styles.buttonStyle__active]: isActive,
	});
	return (
		<button onClick={onClick} className={classes} disabled={disabled}>
			{value}
		</button>
	);
};

export default LiftButton;
