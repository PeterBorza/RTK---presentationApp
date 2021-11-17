import { FC, ComponentProps } from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";

type Props = {
	value?: string;
	className?: string;
	isDisabled?: boolean;
} & Pick<ComponentProps<"button">, "type" | "onClick">;

const Button: FC<Props> = ({
	value = "Click",
	type = "button",
	className,
	onClick,
	isDisabled,
}) => {
	const classes = classNames(styles.defaultStyle, className, {
		[styles.defaultStyle__disabled]: isDisabled,
		[styles.defaultStyle__width]: value.split("").length > 15,
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
