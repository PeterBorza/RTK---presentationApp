import React from "react";
import styles from "../Dropdown.module.scss";

type TriggerType = {
    label: React.ReactNode | string;
    toggleMenu: () => void;
};

const Trigger = ({ label, toggleMenu }: TriggerType) => {
    return (
        <button onClick={toggleMenu} className={styles.drop_trigger}>
            <span>{label}</span>
        </button>
    );
};

export default Trigger;
