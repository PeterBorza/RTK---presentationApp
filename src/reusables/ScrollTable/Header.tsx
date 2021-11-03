import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./TableContainer.module.scss";
import classNames from "classnames";

export interface Props {
	className?: string;
	children: ReactNode;
}

const Header: FC<PropsWithChildren<Props>> = ({ className, children }) => {
	const classes = classNames(styles.header, className);
	return <div className={classes}>{children}</div>;
};

export default Header;
