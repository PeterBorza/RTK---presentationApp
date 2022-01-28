import { Routes, Route } from "react-router-dom";
import { Photos, Photo, Game } from ".";
import { LinkUrls } from "../../context/link-context";
import PhotosLandingPage from "./PhotosLandingPage";

export const routes = () => {
    return (
        <Routes>
            <Route path={LinkUrls.PHOTOS} element={<Photos />}>
                <Route index element={<PhotosLandingPage />} />
                <Route path=":id" element={<Photo />} />
            </Route>
            <Route path={LinkUrls.GAME} element={<Game />} />
        </Routes>
    );
};
