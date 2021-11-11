import { FC, ReactNode } from "react";
interface FooterProps {
	className?: string;
	children: ReactNode;
}

const Footer: FC<FooterProps> = ({ className = "FOOTER", children }) => {
	return <footer className={className}>{children}</footer>;
};

export default Footer;
