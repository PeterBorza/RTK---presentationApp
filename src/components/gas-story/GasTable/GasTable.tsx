import { FC } from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table } from "../../../reusables/ScrollTable";
import { Error } from "../../../reusables";
import { gasState, errorGasState } from "../selectors";
import { editGas, selectGas } from "../gasSlice";
import { GasStateUnit } from "../types";
import { deleteGas, getAsyncGas, togglePayedBill } from "../thunks";

import { selectedGas } from "..";

import { Gaz } from "../GasCard";
import GasForm from "../GasForm";
import EditForm from "../EditForm";

import classNames from "classnames";
import styles from "./GasTable.module.scss";

type Props = {
	dark?: boolean;
};

const GasTable: FC<Props> = ({ dark = false }) => {
	const dispatch = useDispatch();
	const { units, labels, loading } = useSelector(gasState);
	const error = useSelector(errorGasState);
	const selected = useSelector(selectedGas);

	const wrapper = classNames(styles.container, {
		[styles.container__dark]: dark,
	});

	const isUnits = units && units.length !== 0;
	const isEditMode = selected && selected.edit === true;

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
		<div className={wrapper}>
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
				// <div className={wrapper}>
				<EditForm />
				// </div>
			)}
			{error && <Error message={error} />}
		</div>
	);
};

export default GasTable;
