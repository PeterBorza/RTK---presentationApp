import React from "react";

import styles from "./App.module.scss";
import Navigation from "../components/Navigation";
import { LinkContextProvider } from "../context";
import { Outlet } from "react-router";

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<LinkContextProvider>
				<Navigation />
			</LinkContextProvider>
			<Outlet />
		</div>
	);
};

export default App;
