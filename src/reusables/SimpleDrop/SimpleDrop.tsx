import { useState, useEffect, useRef } from "react";
import styles from "./SimpleDrop.module.scss";
import classNames from "classnames";

export interface DdProps {
	title?: string;
	contentStyle?: string | null;
	children: React.ReactNode;
}

const SimpleDrop: React.FC<DdProps> = ({
	children,
	title = "Click",
	contentStyle,
}) => {
	const [drop, setDrop] = useState<boolean>(false);
	const headerRef = useRef(null);
	const classes = classNames(
		styles.content,
		{
			[styles["content--drop"]]: drop,
			[styles["white-bg"]]: contentStyle === null,
		},
		contentStyle
	);

	return (
		<div className={styles["dropdown-container"]}>
			<div
				className={styles.header}
				onClick={() => setDrop(!drop)}
				ref={headerRef}
			>
				<h3>{title}</h3>
			</div>
			<div className={classes}>{children}</div>
		</div>
	);
};

export default SimpleDrop;
