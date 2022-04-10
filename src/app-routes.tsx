import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./app/App";
import { LinkUrls } from "./context/link-context";
import Home from "./features/Home";
import { Photo, Photos } from "./features/memoryGame-story";
import PhotosLandingPage from "./features/memoryGame-story/PhotosLandingPage";
import { utilityRoutes } from "./features/Utilities";
import ScrollPageContainer from "./features/scroll-pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={LinkUrls.HOME} element={<App />}>
                <Route index element={<Home />} />
                {utilityRoutes()}
                <Route path={LinkUrls.PHOTOS} element={<Photos />}>
                    <Route index element={<PhotosLandingPage />} />
                    <Route path=":id" element={<Photo />} />
                </Route>
                <Route path={LinkUrls.SCROLL} element={<ScrollPageContainer />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
