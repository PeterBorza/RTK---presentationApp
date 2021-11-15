import { FC } from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";

export interface Props {
	value?: string;
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
	customClass?: string;
	isDisabled?: boolean;
}

const Button: FC<Props> = ({
	value = "Click",
	type = "button",
	customClass,
	onClick,
	isDisabled,
}) => {
	const classes = classNames(styles.defaultStyle, customClass, {
		[styles.defaultStyle__disabled]: isDisabled,
	});
	return (
		<button
			className={classes}
			type={type}
			onClick={onClick}
			disabled={isDisabled}
		>
			<span className={styles.defaultStyle__content}>{value}</span>
		</button>
	);
};

export default Button;
