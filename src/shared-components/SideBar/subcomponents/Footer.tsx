import { FC } from "react";

import classNames from "classnames";
import styles from "../SideBar.module.scss";

interface FooterProps {
	className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
	const wrapper = classNames(styles.footer, className);
	return (
		<footer className={wrapper}>
			<p>&copy; by Borza Peter</p>
		</footer>
	);
};

export default Footer;
