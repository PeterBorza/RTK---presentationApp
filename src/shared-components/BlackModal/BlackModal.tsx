import { ReactNode } from "react";

import styles from "./BlackModal.module.scss";
export interface BlackModalProps {
    renderFields: () => ReactNode;
}

const BlackModal = ({ renderFields }: BlackModalProps) => {
    return <div className={styles.generalWrapper}>{renderFields()}</div>;
};

export default BlackModal;
