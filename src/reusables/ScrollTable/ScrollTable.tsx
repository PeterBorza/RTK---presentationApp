import { FC, PropsWithChildren, ReactNode } from "react";

import styles from "./TableContainer.module.scss";
import classNames from "classnames";

export interface TableProps {
	className?: string;
	children: ReactNode;
}

const ScrollTable: FC<PropsWithChildren<TableProps>> = ({
	className,
	children,
}) => {
	const classes = classNames(styles.wrapper, className);
	return <div className={classes}>{children}</div>;
};

export default ScrollTable;
