import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { Url } from "../../app/constants";

import styles from "./UtilityContainer.module.scss";

const UtilityContainer: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.links}>
				<Link to='gas'>{Url.GAS}</Link>
				<Link to='light'>{Url.LIGHT}</Link>
			</div>
			<div className={styles.container}>
				<Outlet />
			</div>
		</div>
	);
};

export default UtilityContainer;
