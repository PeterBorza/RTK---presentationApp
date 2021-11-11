import { FC, ReactNode } from "react";
interface BodyProps {
	className?: string;
	children: ReactNode;
}

const Body: FC<BodyProps> = ({ className = "BODY", children }) => {
	return <main className={className}>{children}</main>;
};

export default Body;
