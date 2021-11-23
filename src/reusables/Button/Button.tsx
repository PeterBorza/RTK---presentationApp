import { FC, ComponentProps, ReactNode } from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";

type Props = {
	value?: string | ReactNode;
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
	const longValue = typeof value === "string" && value.split("").length > 15;
	const classes = classNames(styles.defaultStyle, className, {
		[styles.defaultStyle__disabled]: isDisabled,
		[styles.defaultStyle__width]: longValue,
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
