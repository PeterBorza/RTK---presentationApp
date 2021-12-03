import { ReactNode, FC } from "react";

import styles from "./FadedModal.module.scss";
interface Props {
	children: ReactNode;
	isOpen: boolean;
}

const FadedModal: FC<Props> = ({ children, isOpen }) => {
	return isOpen ? (
		<div className={styles.generalWrapper}>{children}</div>
	) : null;
};

export default FadedModal;
