import React from "react";
import { DropdownContext } from "../context";
import { DropLabelType } from "../DropdownContainer";

type TriggerProps = {
    onToggleMenu?: () => void;
    isDisabled: boolean;
    label?: DropLabelType;
};

const Trigger: React.FC<TriggerProps> = ({ onToggleMenu, isDisabled, label }) => {
    const { isOpen, setIsOpen, triggerName } = React.useContext(DropdownContext);

    const toggleMenu = () => {
        onToggleMenu && onToggleMenu();
        setIsOpen(!isOpen);
    };
    return (
        <button
            title={isOpen ? "close" : "open"}
            onClick={toggleMenu}
            disabled={isDisabled}
            className="drop_trigger"
        >
            {triggerName}
        </button>
    );
};

export default Trigger;
