import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import Home from "./components/Home";
import { Lift } from "./components/building-story";
import { Gas } from "./components/Gas";
import UtilityContainer from "./components/UtiltyContainer";
import { Photos, Photo, Game } from "./components/memoryGame-story";
import { Bubbles } from "./components/bubble-story";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Light } from "./components/Light";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route
							path='utilities'
							element={<UtilityContainer />}
						/>
						<Route path='building' element={<Lift />} />
						<Route path='bubbles' element={<Bubbles />} />
						<Route path='gas' element={<Gas />} />
						{/* <Route path='light' element={<Light />} /> */}
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
