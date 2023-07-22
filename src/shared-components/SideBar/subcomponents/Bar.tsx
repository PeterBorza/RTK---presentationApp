import React from "react";
interface BarProps {
    className?: string;
    children?: React.ReactNode;
}

const Bar = ({ className, children }: BarProps) => <div className={className}>{children}</div>;

export default Bar;
