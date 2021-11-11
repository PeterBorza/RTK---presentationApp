import { FC, PropsWithChildren, ReactNode } from "react";

import classNames from "classnames";
import styles from "./ScrollTable.module.scss";

export interface Props {
	className?: string;
	children: ReactNode;
}

const Header: FC<PropsWithChildren<Props>> = ({ className, children }) => {
	const classes = classNames(styles.header, className);
	return <div className={classes}>{children}</div>;
};

export default Header;
