import { FC, ComponentProps } from "react";

import { icons } from "../../utils";
import styles from "./MenuButton.module.scss";
import classNames from "classnames";

type Props = {
	value?: string;
	isDisabled?: boolean;
} & Pick<ComponentProps<"button">, "type" | "onClick" | "className">;

const MenuButton: FC<Props> = ({
	value = "Click",
	type = "button",
	className,
	onClick,
	isDisabled,
}) => {
	const classes = classNames(styles.defaultStyle, className, {
		[styles.defaultStyle__disabled]: isDisabled,
	});
	return (
		<button
			className={classes}
			type={type}
			onClick={onClick}
			disabled={isDisabled}
		>
			<icons.Bars className={styles.toggleMenu} />
			<span>{value}</span>
		</button>
	);
};

export default MenuButton;
