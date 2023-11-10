import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";

import AppRoutes from "app";
import Providers from "providers/providers";

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <AppRoutes />
        </Providers>,
    </React.StrictMode>,
    document.getElementById("root"),
);
