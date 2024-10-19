import React from "react";

import styles from "./BlackModal.module.scss";
export interface BlackModalProps {
  renderFields: () => React.ReactNode;
  onClose?: () => void;
}

const BlackModal = ({ renderFields, onClose }: BlackModalProps) => {
  return (
    <div onClick={onClose} className={styles.generalWrapper}>
      {renderFields()}
    </div>
  );
};

export default BlackModal;
