import { useContext } from "react";
import NavBar from "../../reusables/NavBar";
import { NavLink, Outlet } from "react-router-dom";
import { LinkContext } from "../../utils/link-context";

import styles from "./Navigation.module.scss";

const Navigation = () => {
	const links = useContext(LinkContext);

	const renderBody = () => {
		return links?.map(item => (
			<li key={item.id}>
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.active : styles.inActive
					}
					to={item.to}
				>
					{item.label}
				</NavLink>
			</li>
		));
	};

	return (
		<div className={styles.navigation}>
			<NavBar renderBody={() => renderBody()} />
			<Outlet />
		</div>
	);
};

export default Navigation;
