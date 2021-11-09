import { useContext } from "react";
import NavBar from "../../reusables/NavBar";
import { NavLink, Outlet } from "react-router-dom";
import { LinkContext } from "../../utils/link-context";
import classNames from "classnames";

import styles from "./Navigation.module.scss";

const Navigation = () => {
	const links = useContext(LinkContext);

	const linkClasses = (isActive: boolean) =>
		classNames(styles.links, {
			[styles["active"]]: isActive,
			[styles["inActive"]]: !isActive,
		});

	const renderBody = () => {
		return links?.map(item => (
			<li key={item.id}>
				<NavLink
					className={({ isActive }) => linkClasses(isActive)}
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
