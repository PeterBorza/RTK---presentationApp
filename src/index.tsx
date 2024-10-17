import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";

import AppRoutes from "app";
import Providers from "providers/providers";

const rootContainer = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <AppRoutes />
    </Providers>
  </React.StrictMode>,
  rootContainer,
);
