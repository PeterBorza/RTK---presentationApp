import React from "react";

type TriggerProps = {
    label?: React.ReactNode | string;
    title?: string;
    toggleMenu: () => void;
};

const Trigger = ({ label = "", title, toggleMenu }: TriggerProps) => {
    return (
        <button title={title} onClick={toggleMenu} className="drop_trigger">
            <span>{label}</span>
        </button>
    );
};

export default Trigger;
