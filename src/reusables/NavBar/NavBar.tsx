import { FC, ReactNode, useContext } from "react";

import { icons } from "../../utils";
import { MenuContext } from "../../context";

import styles from "./NavBar.module.scss";

interface Props {
	renderBody: () => ReactNode;
}

const NavBar: FC<Props> = ({ renderBody }) => {
	const [isOpen, setIsOpen] = useContext(MenuContext.SideBarContext);
	return (
		<nav className={styles.nav}>
			<icons.Bars
				className={styles.toggleMenu}
				onClick={() => setIsOpen(!isOpen)}
			/>
			<ul>{renderBody()}</ul>
		</nav>
	);
};

export default NavBar;
