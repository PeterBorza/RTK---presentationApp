import React from "react";
import styles from "./Dropdown.module.scss";
import { useOnClickOutside } from "hooks";
import { DropdownContext } from "./context";
import { DropLabelType } from "./DropdownContainer";

type DropdownType = {
    onCloseMenu?: () => void;
    label?: DropLabelType;
};

const Dropdown: React.FC<DropdownType> = ({ onCloseMenu, label, children }) => {
    const { setIsOpen, setTriggerName } = React.useContext(DropdownContext);
    const targetRef = React.useRef<HTMLDivElement | null>(null);

    const closeMenu = () => {
        onCloseMenu && onCloseMenu();
        setIsOpen(false);
        // setTriggerName(label);
    };

    useOnClickOutside(targetRef, closeMenu);

    return (
        <div ref={targetRef} className={styles.drop_wrap}>
            {children}
        </div>
    );
};

export default Dropdown;
