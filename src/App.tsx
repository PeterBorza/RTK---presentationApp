import React from "react";

import styles from "./App.module.scss";
import Navigation from "./components/Navigation";
import { LinkContextProvider } from "./utils/link-context";
import { Routes, Route } from "react-router-dom";
import { Building } from "./components/building-story";
import { Bubbles } from "./components/bubble-story";
import { GasExpences } from "./components/gas-story";
import { Colors, Photos, Photo } from "./components/memoryGame-story";
import Home from "./components/Home";
// import Aside from "./components/Aside";

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<LinkContextProvider>
				{/* <Aside visible /> */}
				<Navigation />
				<Routes>
					<Route index element={<Home />} />
					<Route path='building' element={<Building />} />
					<Route path='bubbles' element={<Bubbles />} />
					<Route path='gas' element={<GasExpences />} />
					<Route path='colors' element={<Colors />} />
					<Route path='/photos' element={<Photos />}>
						<Route path=':id' element={<Photo />} />
					</Route>
				</Routes>
			</LinkContextProvider>
		</div>
	);
};

export default App;
