import React from "react";

import styles from "./App.module.scss";
import Navigation from "./components/Navigation";
import { LinkContextProvider } from "./utils/link-context";
import { Routes, Route } from "react-router-dom";
import { Building } from "./components/building-story";
import { Bubbles } from "./components/bubble-story";
import { GasExpences, LightExpences } from "./components/house-keeping";
import { Colors } from "./components/memoryGame-story";
import Home from "./components/Home";

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<LinkContextProvider>
				<Navigation />
				<Routes>
					<Route index element={<Home />} />
					<Route path='building' element={<Building />} />
					<Route path='bubbles' element={<Bubbles />} />
					<Route path='gas' element={<GasExpences />} />
					<Route path='light' element={<LightExpences />} />
					<Route path='colors' element={<Colors />} />
				</Routes>
			</LinkContextProvider>
		</div>
	);
};

export default App;
