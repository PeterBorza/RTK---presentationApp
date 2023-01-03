import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRoutes, { store } from "app";
import { PagesContextProvider } from "context";

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
