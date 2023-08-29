import React from "react";

import styles from "./FadedModal.module.scss";

interface Props {
    isOpen: boolean;
    children?: React.ReactNode;
}

const FadedModal = ({ children, isOpen }: Props) =>
    isOpen ? <div className={styles.generalWrapper}>{children}</div> : null;

export default FadedModal;
