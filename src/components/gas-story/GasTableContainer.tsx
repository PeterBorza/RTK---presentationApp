import { Gaz } from "./GasCard";
import { Table } from "../../reusables/ScrollTable";
import { gasState } from "./selectors";
import { errorGasState } from "../gas-story/selectors";
import { GasStateItem, selectGas } from "./gasSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncGas, togglePayedBill, deleteGas, editDate } from "./thunks";
import { useCallback, useEffect } from "react";
import GasForm from "./GasForm";
import styles from "./GasTableContainer.module.scss";
import ErrorMessage from "../../reusables/ErrorMessage";
import { Loader } from "../../reusables";

const GasTableContainer = () => {
	const dispatch = useDispatch();
	const { units, labels, loading } = useSelector(gasState);
	const error = useSelector(errorGasState);

	const isUnits = units && units.length !== 0;

	const fetchGasUnits = useCallback(() => {
		if (isUnits) return;
		dispatch(getAsyncGas());
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

	const onDeleteGasHandler = (id: string) => {
		dispatch(deleteGas(id));
	};

	const onEditGasHandler = (item: GasStateItem) => {
		dispatch(editDate({ item, payload: "15/10/21" }));
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
						onDelete={() => onDeleteGasHandler(item.id)}
						onEdit={() => onEditGasHandler(item)}
					/>
				</li>
			))
		);
	};

	const labelHeader = () => {
		return labels.map(item => <span key={item}>{item}</span>);
	};

	return (
		<div className={styles.gasContainer}>
			{loading.isLoading ? (
				<div>
					<Loader dots={5} />
					<p>{loading.message}</p>
				</div>
			) : (
				<>
					<GasForm />
					<Table renderBody={gasCards} renderHeader={labelHeader} />
				</>
			)}
			{error && <ErrorMessage message={error} />}
		</div>
	);
};

export default GasTableContainer;
