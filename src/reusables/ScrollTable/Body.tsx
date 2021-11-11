import React, { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./ScrollTable.module.scss";
import classNames from "classnames";

export interface Props {
	className?: string;
	children: ReactNode;
}

const Body: FC<PropsWithChildren<Props>> = ({ className, children }) => {
	const classes = classNames(styles.body, className);
	return (
		<div className={classes}>
			<ul>{children}</ul>
		</div>
	);
};

export default Body;
