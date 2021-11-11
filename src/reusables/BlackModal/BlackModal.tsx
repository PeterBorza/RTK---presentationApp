import { ReactNode, FC } from "react";

import styles from "./BlackModal.module.scss";
export interface BlackModalProps {
	render: () => ReactNode;
	isOpen: boolean;
}

const BlackModal: FC<BlackModalProps> = ({ render, isOpen }) => {
	return isOpen ? (
		<div className={styles.generalWrapper}>{render()}</div>
	) : null;
};

export default BlackModal;
