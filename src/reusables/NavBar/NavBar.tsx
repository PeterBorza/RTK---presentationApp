import { FC, ReactNode } from "react";

import styles from "./NavBar.module.scss";

interface Props {
	children: ReactNode;
}

const NavBar: FC<Props> = ({ children }) => {
	return (
		<nav className={styles.nav}>
			<ul>{children}</ul>
		</nav>
	);
};

export default NavBar;
