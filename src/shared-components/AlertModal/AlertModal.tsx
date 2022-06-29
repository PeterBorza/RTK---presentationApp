import classNames from "classnames";
import React from "react";
import styles from "./AlertModal.module.scss";

type AlertModalProps = {
    openModal: boolean;
    position?: "center" | "top-right";
    children: React.ReactNode;
};

const AlertModal = React.forwardRef<HTMLDivElement, AlertModalProps>(
    ({ openModal, position = "center", children }, ref) => {
        const modalClasses = classNames(styles.alert_modal, styles[`alert_modal__${position}`]);
        return openModal ? (
            <div className={modalClasses}>
                <div ref={ref} className={styles.alert_modal__box}>
                    {children}
                </div>
            </div>
        ) : null;
    },
);

export default AlertModal;
