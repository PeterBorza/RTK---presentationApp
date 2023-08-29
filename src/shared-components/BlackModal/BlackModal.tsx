import React from "react";

import styles from "./BlackModal.module.scss";
export interface BlackModalProps {
    renderFields: () => React.ReactNode;
}

const BlackModal = ({ renderFields }: BlackModalProps) => {
    return <div className={styles.generalWrapper}>{renderFields()}</div>;
};

export default BlackModal;
