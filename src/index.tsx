import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store";
import App from "./app/App";

import Home from "./components/Home";
import { Lift } from "./components/building-story";
import { Bubbles } from "./components/bubble-story";
import { utilityRoutes } from "../src/components/Utilities";
import { routes as memoryGameRoutes } from "../src/components/memoryGame-story";

const utilities = utilityRoutes();
const games = memoryGameRoutes();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						{utilities}
						<Route path='building' element={<Lift />} />
						<Route path='bubbles' element={<Bubbles />} />
						{games}
					</Route>
				</Routes>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
