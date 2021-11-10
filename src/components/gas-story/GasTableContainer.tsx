import { Gaz } from "./GasCard";
import { Table } from "../../reusables/ScrollTable";
import { gasState } from "./selectors";
import { errorState } from "../bubble-story/selectors";
import { selectGas, togglePayed } from "./gasSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncGas } from "./thunks";
import { useCallback, useEffect } from "react";
import GasForm from "./GasForm";
import styles from "./GasTableContainer.module.scss";

const GasTableContainer = () => {
	const dispatch = useDispatch();
	const { units, labels } = useSelector(gasState);
	const error = useSelector(errorState);

	const fetchGasUnits = useCallback(() => {
		units.length <= 0 && dispatch(getAsyncGas());
	}, [units.length, dispatch]);

	useEffect(() => {
		fetchGasUnits();
	}, [fetchGasUnits]);

	const onGasClickHandler = (id: string) => {
		dispatch(selectGas(id));
	};

	const gasCards = () => {
		return units.map(item => (
			<li key={item.id}>
				<Gaz
					{...item}
					onClick={() => onGasClickHandler(item.id)}
					onPayedClick={() => dispatch(togglePayed(item.id))}
				/>
			</li>
		));
	};

	const labelHeader = () => {
		return labels.map(item => <span key={item}>{item}</span>);
	};

	return error ? (
		<h1>{error}</h1>
	) : (
		<div className={styles.gasContainer}>
			<GasForm />
			<Table renderBody={gasCards} renderHeader={labelHeader} />
		</div>
	);
};

export default GasTableContainer;
