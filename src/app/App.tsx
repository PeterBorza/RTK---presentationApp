import React from "react";

import styles from "./App.module.scss";
import Navigation from "../components/Navigation";
import { LinkContextProvider } from "../context";

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<LinkContextProvider>
				<Navigation />
			</LinkContextProvider>
		</div>
	);
};

export default App;
