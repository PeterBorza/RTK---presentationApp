import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store";
import App from "./app/App";

import Home from "./components/Home";
import { Lift } from "./components/building-story";
import UtilityContainer from "./components/UtilityContainer";
import { Photos, Photo, Game } from "./components/memoryGame-story";
import { Bubbles } from "./components/bubble-story";
import { Gas } from "./components/Gas";
import { Light } from "./components/Light";
import UtilityPlatform from "./components/UtilityPlatform";
import PhotosLandingPage from "./components/memoryGame-story/PhotosLandingPage";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route path='utilities' element={<UtilityContainer />}>
							<Route index element={<UtilityPlatform />} />
							<Route path='gas' element={<Gas />} />
							<Route path='light' element={<Light />} />
						</Route>
						<Route path='building' element={<Lift />} />
						<Route path='bubbles' element={<Bubbles />} />
						<Route path='photos' element={<Photos />}>
							<Route index element={<PhotosLandingPage />} />
							<Route path=':id' element={<Photo />} />
						</Route>
						<Route path='game' element={<Game />} />
					</Route>
				</Routes>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
