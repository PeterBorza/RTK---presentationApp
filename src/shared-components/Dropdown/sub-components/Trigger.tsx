import React from "react";
import { DropdownContext } from "../context";
import { DropLabelType } from "../DropdownContainer";

type TriggerProps = {
    onToggleMenu?: () => void;
    isDisabled: boolean;
    label?: DropLabelType;
    reset?: boolean;
};

const Trigger: React.FC<TriggerProps> = ({ onToggleMenu, isDisabled, label, reset }) => {
    const { isOpen, setIsOpen, triggerName, setTriggerName } = React.useContext(DropdownContext);

    React.useEffect(() => {
        reset && setTriggerName("");
    }, [reset]);

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
            {label || triggerName}
        </button>
    );
};

export default Trigger;
