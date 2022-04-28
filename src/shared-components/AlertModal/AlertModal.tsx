import React from "react";
import styles from "./AlertModal.module.scss";

type AlertModalProps = {
    openModal: boolean;
    children: React.ReactNode;
};

const AlertModal = React.forwardRef<HTMLDivElement, AlertModalProps>(
    ({ openModal, children }, ref) => {
        return openModal ? (
            <div className={styles.alert_modal}>
                <div ref={ref} className={styles.alert_modal__box}>
                    {children}
                </div>
            </div>
        ) : null;
    },
);

export default AlertModal;
