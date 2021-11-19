import { FC, ComponentProps } from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";

type Props = {
	value?: string;
	className?: string;
	isDisabled?: boolean;
	dark?: boolean;
} & Pick<ComponentProps<"button">, "type" | "onClick">;

const Button: FC<Props> = ({
	value = "Click",
	type = "button",
	className,
	onClick,
	isDisabled,
	dark,
}) => {
	const classes = classNames(styles.defaultStyle, className, {
		[styles.defaultStyle__disabled]: isDisabled,
		[styles.defaultStyle__width]: value.split("").length > 15,
		[styles.defaultStyle__dark]: dark,
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
