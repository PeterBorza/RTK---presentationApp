import classNames from "classnames";
import { ErrorMessageType } from "features/guess-the-colors/state";
import React from "react";
import styles from "./AlertModal.module.scss";

type AlertModalProps = {
    openModal: boolean;
    position?: "center" | "top-right";
    variant?: "builder" | "text";
    message?: string | ErrorMessageType;
    children?: JSX.Element;
};

const AlertModal = React.forwardRef<HTMLDivElement, AlertModalProps>(
    ({ openModal, position = "center", variant = "builder", children, message }, ref) => {
        const modalClasses = classNames(styles.alert_modal, styles[`alert_modal__${position}`], [
            styles[`alert_modal__${variant}`],
        ]);
        const wrapperClasses = classNames(
            styles.alert_modal__box,
            styles[`alert_modal__${variant}`],
        );
        return openModal ? (
            <div className={modalClasses}>
                <div ref={ref} className={wrapperClasses}>
                    {variant === "builder" ? (
                        children
                    ) : (
                        <h1 className={styles.alert_modal__error_message}>{message}</h1>
                    )}
                </div>
            </div>
        ) : null;
    },
);

export default AlertModal;
