import React from "react";
import styles from "./Home.module.scss";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import { postGas } from "../gas-story/thunks";
import { useDispatch } from "react-redux";
import { GasStateItem } from "../gas-story/gasSlice";

const Home = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(postGas(newUnit));
	};

	const newUnit: GasStateItem = {
		id: uuid(),
		dataCitire: format(new Date(), "MM/dd/yyyy"),
		selected: false,
		citire: 245,
		consum: 246,
		factura: 247,
		platit: false,
	};
	return (
		<>
			<div className={styles.container}>
				<p>{format(new Date(), "MM/dd/yyyy/iii/H:m")}</p>
				<button onClick={handleClick}>Click</button>
			</div>
		</>
	);
};

export default Home;
