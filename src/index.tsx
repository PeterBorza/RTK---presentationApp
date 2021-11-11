import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MenuContext } from "./context";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<MenuContext.SideBarContextProvider>
					<App />
				</MenuContext.SideBarContextProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
