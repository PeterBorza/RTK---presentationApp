import React from "react";
interface BarProps {
    className?: string;
}

const Bar: React.FC<BarProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default Bar;
