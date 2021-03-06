import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store";

import { PagesContextProvider } from "./context/pages-context";
import AppRoutes from "./app/app-routes";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PagesContextProvider>
                    <AppRoutes />
                </PagesContextProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root"),
);
