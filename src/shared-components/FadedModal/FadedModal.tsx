import styles from "./FadedModal.module.scss";

const FadedModal: React.FC<{
    isOpen: boolean;
}> = ({ children, isOpen }) => {
    return isOpen ? <div className={styles.generalWrapper}>{children}</div> : null;
};

export default FadedModal;
