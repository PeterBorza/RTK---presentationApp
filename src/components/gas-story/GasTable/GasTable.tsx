import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table } from "../../../reusables/ScrollTable";
import { Error } from "../../../reusables";
import { gasState, errorGasState } from "../selectors";
import { editGas, selectGas } from "../gasSlice";
import { GasStateUnit } from "../types";
import { getAsyncGas, togglePayedBill, deleteGas, editUnit } from "../thunks";

import { Gaz } from "../GasCard";
import GasForm from "../GasForm";
import EditForm from "../EditForm";

import styles from "./GasTable.module.scss";
import { selectedGas } from "..";

const GasTable = () => {
	const dispatch = useDispatch();
	const { units, labels, loading } = useSelector(gasState);
	const error = useSelector(errorGasState);
	const selected = useSelector(selectedGas);

	const isUnits = units && units.length !== 0;
	const isEditMode = selected && selected.edit === true;
	console.log(isEditMode);

	const fetchGasUnits = useCallback(() => {
		if (isUnits) return;
		dispatch(getAsyncGas());
	}, [isUnits, dispatch]);

	useEffect(() => {
		fetchGasUnits();
	}, [fetchGasUnits]);

	const onTogglePayedBill = (item: GasStateUnit) => {
		dispatch(togglePayedBill(item));
	};

	const onGasClickHandler = (id: string) => {
		dispatch(selectGas(id));
	};

	const onDeleteGasHandler = (id: string) => {
		dispatch(deleteGas(id));
	};

	const onEditGasHandler = (id: string) => {
		dispatch(editGas({ id, edit: true }));
	};

	const renderListItems = (item: Array<GasStateUnit>) =>
		item.map(unit => (
			<li key={unit.id}>
				<Gaz
					{...unit}
					onClick={() => onGasClickHandler(unit.id)}
					onPayedClick={() => onTogglePayedBill(unit)}
					onDelete={() => onDeleteGasHandler(unit.id)}
					onEdit={() => onEditGasHandler(unit.id)}
				/>
			</li>
		));

	const table = {
		header: () => labels.map(item => <span key={item}>{item}</span>),
		body: () => isUnits && renderListItems(units),
	};

	return (
		<div className={styles.container}>
			{!isEditMode ? (
				<>
					<GasForm />
					<Table
						renderHeader={table.header}
						renderBody={table.body}
						loading={loading.isLoading}
						message={loading.message}
					/>
				</>
			) : (
				<div className={styles.container}>
					<EditForm />
				</div>
			)}
			{error && <Error message={error} />}
		</div>
	);
};

export default GasTable;
