import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";

import { App } from "app";

const rootContainer = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootContainer,
);
