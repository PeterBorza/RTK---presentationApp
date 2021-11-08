import React from "react";
import styles from "./NavBar.module.scss";

const NavBar: React.FC = ({ children }) => {
	return <nav className={styles.nav}>{children}</nav>;
};

export default NavBar;
