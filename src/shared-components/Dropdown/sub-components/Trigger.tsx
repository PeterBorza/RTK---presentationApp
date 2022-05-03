import React from "react";

type TriggerProps = {
    title?: string;
    toggleMenu: () => void;
    isDisabled: boolean;
};

const Trigger: React.FC<TriggerProps> = ({ children, title, toggleMenu, isDisabled }) => {
    return (
        <button title={title} onClick={toggleMenu} disabled={isDisabled} className="drop_trigger">
            {children}
        </button>
    );
};

export default Trigger;
