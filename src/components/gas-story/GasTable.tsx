import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table } from "../../reusables/ScrollTable";
import { Loader, Error } from "../../reusables";
import { gasState, errorGasState } from "./selectors";
import { GasStateItem, selectGas } from "./gasSlice";
import { getAsyncGas, togglePayedBill, deleteGas, editDate } from "./thunks";

import { Gaz } from "./GasCard";
import GasForm from "./GasForm";

import styles from "./GasTable.module.scss";

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
		<div className={styles.container}>
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
			{error && <Error message={error} />}
		</div>
	);
};

export default GasTableContainer;
