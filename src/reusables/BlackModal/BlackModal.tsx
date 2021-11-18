import { ReactNode, FC } from "react";

import styles from "./BlackModal.module.scss";
export interface BlackModalProps {
	render: () => ReactNode;
}

const BlackModal: FC<BlackModalProps> = ({ render }) => {
	return <div className={styles.generalWrapper}>{render()}</div>;
};

export default BlackModal;
