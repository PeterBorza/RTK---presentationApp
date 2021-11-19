import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Home } from "./components";
import { Building } from "./components/building-story";
import { GasExpenses } from "./components/gas-story";
import { Colors, Photos, Photo } from "./components/memoryGame-story";
import { Bubbles } from "./components/bubble-story";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route path='building' element={<Building />} />
						<Route path='bubbles' element={<Bubbles dark />} />
						<Route path='gas' element={<GasExpenses />} />
						<Route path='colors' element={<Colors />} />
						<Route path='photos' element={<Photos />}>
							<Route path=':id' element={<Photo />} />
						</Route>
					</Route>
				</Routes>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
