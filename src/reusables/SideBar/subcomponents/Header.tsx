import { FC, ReactNode } from "react";

import { icons } from "../../../utils";

import classNames from "classnames";
import styles from "../SideBar.module.scss";

interface HeaderProps {
	className?: string;
	children: ReactNode;
	onClose: () => void;
}

const Header: FC<HeaderProps> = ({
	className,
	children = "HEADER",
	onClose,
}) => {
	const wrapper = classNames(styles.header, className);
	return (
		<header className={wrapper}>
			{children}
			<icons.WindowClose
				className={styles.toggle__close}
				onClick={onClose}
			/>
		</header>
	);
};

export default Header;
