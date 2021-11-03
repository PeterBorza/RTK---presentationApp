import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Bubbles } from "./components/bubble-story";
import { Colors } from "./components/memoryGame-story";
import { Building } from "./components/building-story";
import { GasExpences, LightExpences } from "./components/house-keeping";
import { FormModal } from "./components/FormWrapper";

import styles from "./App.module.scss";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className={styles.container}>
				<NavLink to='/building'>building</NavLink> |
				<NavLink to='/bubbles'>bubbles</NavLink> |{" "}
				<NavLink to='/gas'>gas</NavLink> |
				<NavLink to='/light'>light</NavLink> |
				<NavLink to='/colors'>colors</NavLink> |
				<NavLink to='/form'>form</NavLink>
				<Outlet />
				<Routes>
					<Route path='building' element={<Building />} />
					<Route path='bubbles' element={<Bubbles />} />
					<Route path='gas' element={<GasExpences />} />
					<Route path='light' element={<LightExpences />} />
					<Route path='colors' element={<Colors />} />
					<Route path='form' element={<FormModal formWidth='50' />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
