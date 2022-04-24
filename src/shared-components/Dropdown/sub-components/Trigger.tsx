import React from "react";
import { icons } from "utils";

import styles from "../Dropdown.module.scss";

type TriggerType = {
    label?: React.ReactNode | string;
    title?: string;
    toggleMenu: () => void;
};

const Trigger = ({ label = icons.down, title, toggleMenu }: TriggerType) => {
    return (
        <button title={title} onClick={toggleMenu} className={styles.drop_trigger}>
            <span>{label}</span>
        </button>
    );
};

export default Trigger;
