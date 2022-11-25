import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./app/store";

import { PagesContextProvider } from "context";
import AppRoutes from "./app/app-routes";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PagesContextProvider>
                <AppRoutes />
            </PagesContextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
