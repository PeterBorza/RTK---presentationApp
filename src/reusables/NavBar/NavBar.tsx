import { FC, ReactNode } from "react";
import styles from "./NavBar.module.scss";

interface Props {
	renderBody: () => ReactNode;
}

const NavBar: FC<Props> = ({ renderBody }) => {
	return (
		<nav className={styles.nav}>
			<ul>{renderBody()}</ul>
		</nav>
	);
};

export default NavBar;
