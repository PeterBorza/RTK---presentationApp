import React from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";

export interface Props {
	value?: string;
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
	customClass?: string;
}

const Button: React.FC<Props> = ({
	value = "Click",
	type = "button",
	customClass,
	onClick,
}) => {
	const classes = classNames(styles.defaultStyle, customClass);
	return (
		<button className={classes} type={type} onClick={onClick}>
			{value}
		</button>
	);
};

export default Button;
