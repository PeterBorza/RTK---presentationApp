import { FC, ReactNode } from "react";

import classNames from "classnames";
import styles from "../SideBar.module.scss";
interface BodyProps {
	className?: string;
	renderBody: () => ReactNode;
}

const Body: FC<BodyProps> = ({ className, renderBody }) => {
	const wrapper = classNames(styles.body, className);
	return <main className={wrapper}>{renderBody()}</main>;
};

export default Body;
