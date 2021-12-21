import { ReactNode, FC } from "react";

import styles from "./BlackModal.module.scss";
export interface BlackModalProps {
	renderFields: () => ReactNode;
}

const BlackModal: FC<BlackModalProps> = ({ renderFields }) => {
	return <div className={styles.generalWrapper}>{renderFields()}</div>;
};

export default BlackModal;
