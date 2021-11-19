import { useState, useRef, FC } from "react";
import { useOnClickOutside } from "../../hooks";

import classNames from "classnames";
import styles from "./SimpleDrop.module.scss";

export interface DropDownProps {
	children: React.ReactNode;
	title?: string;
	contentStyle?: string | null;
}

const SimpleDrop: FC<DropDownProps> = ({
	children,
	title = "Click",
	contentStyle,
}) => {
	const [drop, setDrop] = useState<boolean>(false);
	const headerRef = useRef(null);
	const dropDownRef = useRef(null);
	const handleClick = () => {
		setDrop(!drop);
	};
	useOnClickOutside(headerRef, () => setDrop(false));
	const classes = classNames(
		styles.content,
		{
			[styles["content__drop"]]: drop,
			[styles["white-bg"]]: contentStyle === null,
		},
		contentStyle
	);

	return (
		<div className={styles["dropdown-container"]} ref={dropDownRef}>
			<div
				className={styles.header}
				onClick={handleClick}
				ref={headerRef}
			>
				<h3>{title}</h3>
			</div>
			<div className={classes}>{children}</div>
		</div>
	);
};

export default SimpleDrop;
