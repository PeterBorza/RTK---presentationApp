import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table } from "../../../reusables/ScrollTable";
import { Loader, Error } from "../../../reusables";
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
	const isEditMode = selected && selected.edit;

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
						onEdit={() => onEditGasHandler(item.id)}
					/>
				</li>
			))
		);
	};

	const labelHeader = () => {
		return labels.map(item => <span key={item}>{item}</span>);
	};

	return !isEditMode ? (
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
	) : (
		<EditForm />
	);
};

export default GasTable;
