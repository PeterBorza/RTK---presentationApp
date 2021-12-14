import React, { FC, ReactNode } from "react";
import styles from "./Shaft.module.scss";

interface Props {
	children: ReactNode;
}

const Shaft: FC<Props> = ({ children }) => {
	return <div className={styles.shaftContainer}>{children}</div>;
};

export default Shaft;
