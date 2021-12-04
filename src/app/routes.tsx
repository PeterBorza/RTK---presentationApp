import { FC } from "react";
import { Route } from "react-router-dom";

import App from "./App";
import Home from "../components/Home";
import { Lift } from "../components/building-story";
import UtilityContainer from "../components/UtilityContainer";
import { Photos, Photo, Game } from "../components/memoryGame-story";
import { Bubbles } from "../components/bubble-story";
import { Gas } from "../components/Gas";
import { Light } from "../components/Light";
import UtilityPlatform from "../components/UtilityPlatform";

export const AppRoutes = () => {
	return (
		<>
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
					<Route path=':id' element={<Photo />} />
				</Route>
				<Route path='game' element={<Game />} />
			</Route>
		</>
	);
};
