import React, { ReactNode } from "react";

import styles from "./BlackModal.module.scss";
export interface BlackModalProps {
	render: () => ReactNode;
	isOpen: boolean;
}

const BlackModal: React.FC<BlackModalProps> = ({ render, isOpen }) => {
	return isOpen ? (
		<div className={styles.generalWrapper}>{render()}</div>
	) : null;
};

export default BlackModal;
