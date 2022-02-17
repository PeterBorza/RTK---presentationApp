import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store";
import App from "./app/App";

import Home from "./features/Home";
import { LiftPlatform } from "./features/building-story";
import { Bubbles } from "./features/bubble-story";
import { utilityRoutes } from "../src/features/Utilities";
import { routes as memoryGameRoutes } from "../src/features/memoryGame-story";
import { LinkUrls } from "./context/link-context";
import { ScrollPage } from "./shared-components";

const utilities = utilityRoutes();
const games = memoryGameRoutes();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path={LinkUrls.HOME} element={<App />}>
                        <Route index element={<Home />} />
                        {utilities}
                        <Route path={LinkUrls.BUILDING} element={<LiftPlatform />} />
                        <Route path={LinkUrls.BUBBLES} element={<Bubbles />} />
                        {games}
                        <Route path={LinkUrls.SCROLL} element={<ScrollPage />} />
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root"),
);
