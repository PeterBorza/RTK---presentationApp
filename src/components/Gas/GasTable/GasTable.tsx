import { FC } from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Error } from "../../../reusables";
import { UtilityLabels, UtilityTableLabels } from "../constants";
import { utilityState, errorState } from "../selectors";
import { selectCard, resetSelected } from "../gasSlice";
import { UtilityStateUnit } from "../types";
import { deleteUtilityUnit, getAsyncUtility, togglePayedBill } from "../thunks";

import GasCard from "../GasCard";
import UtilityForm from "../GasForm";

import classNames from "classnames";
import styles from "./GasTable.module.scss";
import TotalPayedInfo from "../TotalPayedInfo";

type Props = {
	dark?: boolean;
};

const GasTable: FC<Props> = ({ dark = false }) => {
	const { units, loading } = useSelector(utilityState);
	const error = useSelector(errorState);
	const dispatch = useDispatch();

	const wrapper = classNames(styles.container, {
		[styles.container__dark]: dark,
	});

	const isUnits = units && units.length !== 0;

	useEffect(() => {
		dispatch(resetSelected());
	}, [dispatch]);

	const fetchGasUnits = useCallback(() => {
		dispatch(getAsyncUtility());
	}, [dispatch]);

	useEffect(() => {
		fetchGasUnits();
	}, [fetchGasUnits]);

	const onTogglePayedBill = (item: UtilityStateUnit) => {
		dispatch(togglePayedBill(item));
		dispatch(resetSelected());
	};

	const onGasClickHandler = (id: string) => {
		dispatch(selectCard(id));
	};

	const onDeleteGasHandler = (id: string) => {
		dispatch(deleteUtilityUnit(id));
	};

	const onEditGasHandler = (id: string) => {
		console.log("editing work", id);
	};

	const renderListItems = (item: Array<UtilityStateUnit>) =>
		item.map(unit => (
			<li key={unit.id}>
				<GasCard
					{...unit}
					onClick={() => onGasClickHandler(unit.id)}
					onPayedClick={() => onTogglePayedBill(unit)}
					onDelete={() => onDeleteGasHandler(unit.id)}
					onEdit={() => onEditGasHandler(unit.id)}
				/>
			</li>
		));

	const table = {
		header: () =>
			Object.keys(UtilityLabels).map(item => (
				<span key={item}>{item}</span>
			)),
		body: () => isUnits && renderListItems(units),
	};

	return (
		<div className={wrapper}>
			<h1>{UtilityTableLabels.TITLE}</h1>
			<UtilityForm />
			<Table
				renderHeader={table.header}
				renderBody={table.body}
				loading={loading.isLoading}
				message={loading.message}
			/>
			<TotalPayedInfo />
			{error && <Error message={error} />}
		</div>
	);
};

export default GasTable;
