import React from "react";
import styles from "./Dropdown.module.scss";
import { useOnClickOutside } from "hooks";

type DropdownType = {
    closeMenu: () => void;
};

const Dropdown: React.FC<DropdownType> = ({ closeMenu, children }) => {
    const targetRef = React.useRef<HTMLDivElement | null>(null);

    useOnClickOutside(targetRef, closeMenu);

    return (
        <div ref={targetRef} className={styles.drop_wrap}>
            {children}
        </div>
    );
};

export default Dropdown;
