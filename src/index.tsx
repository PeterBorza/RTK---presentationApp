import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import Home from "./components/Home";
import { Building } from "./components/building-story";
import { Utilities } from "./components/utility-package";
import { Photos, Photo, Game } from "./components/memoryGame-story";
import { Bubbles } from "./components/bubble-story";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Url } from "./app/constants";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route path='building' element={<Building />} />
						<Route path='bubbles' element={<Bubbles />} />
						<Route
							path='gas'
							element={<Utilities utility={Url.GAS} />}
						/>
						<Route
							path='light'
							element={<Utilities utility={Url.LIGHT} />}
						/>
						<Route path='photos' element={<Photos />}>
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
