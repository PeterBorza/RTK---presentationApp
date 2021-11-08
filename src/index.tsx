import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Building } from "./components/building-story";
import { Bubbles } from "./components/bubble-story";
import { GasExpences, LightExpences } from "./components/house-keeping";
import { Colors } from "./components/memoryGame-story";
import Home from "./components/Home";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route path='building' element={<Building />} />
						<Route path='bubbles' element={<Bubbles />} />
						<Route path='gas' element={<GasExpences />} />
						<Route path='light' element={<LightExpences />} />
						<Route path='colors' element={<Colors />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
