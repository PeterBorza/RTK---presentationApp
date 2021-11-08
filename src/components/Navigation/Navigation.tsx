import React from "react";
import NavBar from "../../reusables/NavBar";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<NavBar>
				<NavLink className={styles.links} to='/building'>
					building
				</NavLink>
				<NavLink className={styles.links} to='/bubbles'>
					bubbles
				</NavLink>
				<NavLink className={styles.links} to='/gas'>
					gas
				</NavLink>
				<NavLink className={styles.links} to='/light'>
					light
				</NavLink>
				<NavLink className={styles.links} to='/colors'>
					colors
				</NavLink>
				<NavLink className={styles.links} to='/form'>
					form
				</NavLink>
			</NavBar>
		</div>
	);
};

export default Navigation;
