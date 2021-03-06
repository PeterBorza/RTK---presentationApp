import { FC, ReactNode } from "react";
interface BarProps {
	className?: string;
	children: ReactNode;
}

const Bar: FC<BarProps> = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export default Bar;
