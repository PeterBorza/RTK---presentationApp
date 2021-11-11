import { FC, PropsWithChildren, ReactNode } from "react";

import classNames from "classnames";
import styles from "./ScrollTable.module.scss";

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
