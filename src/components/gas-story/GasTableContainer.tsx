import { Gaz } from "./GasCard";
import { Table } from "../../reusables/ScrollTable";
import { gasState, selectedGas } from "./selectors";
import { errorState } from "../bubble-story/selectors";
import { GasStateItem, selectGas } from "./gasSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncGas, togglePayedBill } from "./thunks";
import { useCallback, useEffect } from "react";
import GasForm from "./GasForm";
import styles from "./GasTableContainer.module.scss";

const GasTableContainer = () => {
	const dispatch = useDispatch();
	const { units, labels } = useSelector(gasState);
	const selected = useSelector(selectedGas);
	const error = useSelector(errorState);

	const isSelected = selected !== undefined;

	const isUnits = units && units.length !== 0;

	const fetchGasUnits = useCallback(() => {
		return !isUnits && dispatch(getAsyncGas());
	}, [isUnits, dispatch]);

	useEffect(() => {
		fetchGasUnits();
	}, [fetchGasUnits]);

	const onTogglePayedBill = (item: GasStateItem) => {
		dispatch(togglePayedBill(item));
	};

	const onGasClickHandler = (id: string): void => {
		dispatch(selectGas(id));
	};

	const gasCards = () => {
		return (
			isUnits &&
			units.map(item => (
				<li key={item.id}>
					<Gaz
						{...item}
						onClick={() => onGasClickHandler(item.id)}
						onPayedClick={() => onTogglePayedBill(item)}
					/>
				</li>
			))
		);
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
