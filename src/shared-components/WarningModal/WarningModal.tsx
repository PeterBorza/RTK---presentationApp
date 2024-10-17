import React from "react";

import { AlertModal, Button } from "shared-components";

import styles from "./WarningModal.module.scss";

interface WarningModalProps {
  title?: string;
  onApply: () => void;
  cancelLabel: string;
  applyLabel: string;
  onClose: () => void;
  isModalopen: boolean;
  position?: "center" | "top-right";
}

// eslint-disable-next-line react/display-name
const WarningModal = React.forwardRef<HTMLDivElement, WarningModalProps>(
  ({ title, onApply, cancelLabel, applyLabel, onClose, isModalopen, position = "center" }, ref) => {
    const onApplyHandler = () => {
      onApply();
      onClose();
    };
    return (
      <AlertModal ref={ref} openModal={isModalopen} variant="builder" position={position}>
        <div className={styles.container}>
          <h2>{title}</h2>
          <div className={styles.modalButtons}>
            <Button value={cancelLabel} onClick={onClose} />
            <Button value={applyLabel} onClick={onApplyHandler} />
          </div>
        </div>
      </AlertModal>
    );
  },
);

export default WarningModal;
