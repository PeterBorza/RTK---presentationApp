import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store";
import App from "./app/App";

import Home from "./features/Home";
import { utilityRoutes } from "../src/features/Utilities";
import { LinkUrls } from "./context/link-context";
import ScrollPageContainer from "./features/scroll-pages";
import { Photo, Photos } from "./features/memoryGame-story";
import PhotosLandingPage from "./features/memoryGame-story/PhotosLandingPage";

const utilities = utilityRoutes();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path={LinkUrls.HOME} element={<App />}>
                        <Route index element={<Home />} />
                        {utilities}
                        <Route path={LinkUrls.PHOTOS} element={<Photos />}>
                            <Route index element={<PhotosLandingPage />} />
                            <Route path=":id" element={<Photo />} />
                        </Route>
                        <Route path={LinkUrls.SCROLL} element={<ScrollPageContainer />} />
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root"),
);
