import React from "react";

import styles from "./App.module.scss";
import {
	Navigation,
	buildingStory,
	bubbleStory,
	gasStory,
	memoryStory,
	Home,
	Aside,
} from "./components";
import { LinkContextProvider } from "./context";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<LinkContextProvider>
				<Navigation />
				{/* <Aside /> */}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='building'
						element={<buildingStory.Building />}
					/>
					<Route path='bubbles' element={<bubbleStory.Bubbles />} />
					<Route path='gas' element={<gasStory.GasExpences />} />
					<Route path='colors' element={<memoryStory.Colors />} />
					<Route path='photos' element={<memoryStory.Photos />}>
						<Route path=':id' element={<memoryStory.Photo />} />
					</Route>
				</Routes>
			</LinkContextProvider>
		</div>
	);
};

export default App;
