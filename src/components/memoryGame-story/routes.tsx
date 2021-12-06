import { Routes, Route } from "react-router-dom";
import { Photos, Photo, Game } from ".";
import PhotosLandingPage from "./PhotosLandingPage";

export const routes = () => {
	return (
		<Routes>
			<Route path='photos' element={<Photos />}>
				<Route index element={<PhotosLandingPage />} />
				<Route path=':id' element={<Photo />} />
			</Route>
			<Route path='game' element={<Game />} />
		</Routes>
	);
};
